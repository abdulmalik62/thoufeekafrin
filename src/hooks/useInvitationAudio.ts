import { useCallback, useEffect, useRef, useState } from "react";
import { createAmbient } from "../lib/ambient.ts";

export function useInvitationAudio() {
  const engine = useRef<ReturnType<typeof createAmbient> | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    engine.current = createAmbient();
    return () => engine.current?.stop();
  }, []);

  const start = useCallback(async () => {
    if (!engine.current) return;
    try {
      await engine.current.start();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const toggle = useCallback(async () => {
    if (!engine.current) return;
    if (playing) {
      engine.current.stop();
      setPlaying(false);
      return;
    }
    await start();
  }, [playing, start]);

  return { playing, start, toggle };
}
