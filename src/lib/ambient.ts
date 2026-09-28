import { wedding } from "../data/wedding.ts";

type Engine = {
  start: () => Promise<void>;
  stop: () => void;
};

/**
 * Soft optional atmosphere. Replace wedding.audioSrc with a file to use recorded music,
 * or set wedding.audioEnabled to false and remove AudioToggle to drop the feature.
 */
export function createAmbient(): Engine {
  let ctx: AudioContext | null = null;
  let master: GainNode | null = null;
  let audio: HTMLAudioElement | null = null;
  let nodes: AudioNode[] = [];
  let playing = false;

  const stopNodes = () => {
    nodes.forEach((node) => {
      if ("stop" in node && typeof node.stop === "function") {
        try {
          node.stop();
        } catch {
          /* already stopped */
        }
      }
    });
    nodes = [];
    master = null;
  };

  return {
    async start() {
      if (playing) return;

      if (wedding.audioSrc) {
        try {
          const track = audio ?? new Audio(wedding.audioSrc);
          audio = track;
          track.loop = true;
          track.volume = 0.35;
          await track.play();
          playing = true;
          return;
        } catch {
          audio?.pause();
          audio = null;
        }
      }

      const AudioCtx = window.AudioContext;
      ctx = ctx ?? new AudioCtx();
      await ctx.resume();

      master = ctx.createGain();
      master.gain.value = 0;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 720;
      filter.Q.value = 0.35;
      filter.connect(master);
      master.connect(ctx.destination);

      const voices = [
        { freq: 73.42, gain: 0.045 },
        { freq: 110, gain: 0.03 },
        { freq: 146.83, gain: 0.022 },
        { freq: 185, gain: 0.012 },
      ];

      voices.forEach((voice) => {
        const osc = ctx!.createOscillator();
        osc.type = "sine";
        osc.frequency.value = voice.freq;
        const gain = ctx!.createGain();
        gain.gain.value = voice.gain;
        osc.connect(gain);
        gain.connect(filter);
        osc.start();
        nodes.push(osc, gain);
      });

      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 140;
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      nodes.push(lfo, lfoGain, filter);

      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.linearRampToValueAtTime(0.85, now + 1.4);
      playing = true;
    },
    stop() {
      if (!playing) return;
      playing = false;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (ctx && master) {
        const now = ctx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.linearRampToValueAtTime(0, now + 0.5);
        window.setTimeout(stopNodes, 560);
        return;
      }
      stopNodes();
    },
  };
}
