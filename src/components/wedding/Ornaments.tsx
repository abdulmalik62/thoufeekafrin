import { cx } from "../../lib/cx.ts";

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: "0s" },
  { top: "16%", left: "28%", size: 1.5, delay: "0.8s" },
  { top: "10%", left: "72%", size: 2, delay: "1.4s" },
  { top: "22%", left: "86%", size: 1.5, delay: "0.3s" },
  { top: "34%", left: "8%", size: 1.5, delay: "1.8s" },
  { top: "42%", left: "92%", size: 2, delay: "1s" },
  { top: "58%", left: "16%", size: 1.5, delay: "2.2s" },
  { top: "70%", left: "78%", size: 2, delay: "0.5s" },
  { top: "18%", left: "50%", size: 1.5, delay: "1.6s" },
  { top: "48%", left: "40%", size: 1.5, delay: "2.6s" },
  { top: "76%", left: "34%", size: 1.5, delay: "0.2s" },
  { top: "28%", left: "64%", size: 2, delay: "1.2s" },
  { top: "62%", left: "58%", size: 1.5, delay: "2s" },
  { top: "84%", left: "88%", size: 1.5, delay: "0.7s" },
] as const;

export function StarField({ className, count = 12 }: { className?: string; count?: number }) {
  return (
    <div className={cx("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      {STARS.slice(0, count).map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="star absolute rounded-full bg-gold"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

export function OrnamentRule() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gold/70 sm:w-16" />
      <svg viewBox="0 0 16 16" className="size-2 text-gold">
        <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-gold/70 sm:w-16" />
    </div>
  );
}

export function FrameCorners() {
  const rotations = ["", "rotate-90", "rotate-180", "-rotate-90"];
  const positions = ["left-2 top-2", "right-2 top-2", "right-2 bottom-2", "left-2 bottom-2"];

  return (
    <div aria-hidden="true">
      {positions.map((position, index) => (
        <svg
          key={position}
          viewBox="0 0 28 28"
          className={cx("absolute size-6 text-gold sm:size-7", position, rotations[index])}
          fill="none"
        >
          <path d="M2 26V8C2 4 5 2 9 2h17" stroke="currentColor" strokeWidth="1.2" />
          <path d="M9 2l2 4-4 2 2-6z" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

export function MiniStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cx("size-2.5 text-gold", className)} aria-hidden="true">
      <path d="M8 0l1.6 5.2L15 6.4 10.2 9.2 12 15 8 11.6 4 15l1.8-5.8L1 6.4l5.4-1.2z" fill="currentColor" />
    </svg>
  );
}
