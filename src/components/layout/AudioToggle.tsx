import { Music } from "lucide-react";
import { wedding } from "../../data/wedding.ts";

export function AudioToggle({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  if (!wedding.audioEnabled) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={playing}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed z-[90] flex size-12 items-center justify-center rounded-full border border-[#d7ae5f]/40 bg-[#1a0610]/90 text-[#d7ae5f] shadow-md"
      style={{
        bottom: "max(1.1rem, env(safe-area-inset-bottom))",
        left: "max(1.1rem, env(safe-area-inset-left))",
      }}
    >
      {playing ? (
        <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
          <span className="eq-bar" />
          <span className="eq-bar" />
          <span className="eq-bar" />
        </span>
      ) : (
        <Music size={18} aria-hidden="true" />
      )}
    </button>
  );
}
