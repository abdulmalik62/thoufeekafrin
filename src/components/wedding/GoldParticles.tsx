import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

const SPECS = [
  { l: "8%", t: "22%", s: 2, d: "0s", dur: "14s" },
  { l: "18%", t: "68%", s: 3, d: "1.4s", dur: "17s" },
  { l: "30%", t: "36%", s: 2, d: "2.2s", dur: "15s" },
  { l: "46%", t: "78%", s: 2, d: "0.6s", dur: "18s" },
  { l: "58%", t: "18%", s: 3, d: "2.8s", dur: "16s" },
  { l: "70%", t: "58%", s: 2, d: "1.1s", dur: "13s" },
  { l: "82%", t: "30%", s: 2, d: "3.1s", dur: "19s" },
  { l: "90%", t: "74%", s: 3, d: "0.4s", dur: "15s" },
  { l: "38%", t: "12%", s: 2, d: "2s", dur: "17s" },
  { l: "64%", t: "84%", s: 2, d: "1.7s", dur: "14s" },
] as const;

export function GoldParticles({ density = "low" }: { density?: "low" | "soft" }) {
  const reduced = useReducedMotion();
  const count = density === "soft" ? 6 : 10;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {SPECS.slice(0, count).map((spec) => (
        <span
          key={`${spec.l}-${spec.t}`}
          className={reduced ? "absolute rounded-full bg-gold/40" : "particle absolute rounded-full bg-gold"}
          style={{
            left: spec.l,
            top: spec.t,
            width: spec.s,
            height: spec.s,
            animationDelay: spec.d,
            animationDuration: spec.dur,
          }}
        />
      ))}
    </div>
  );
}
