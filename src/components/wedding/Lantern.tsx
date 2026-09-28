import { cx } from "../../lib/cx.ts";
import { useUid } from "../../lib/ids.ts";

export function Lantern({ className, delay = "0s" }: { className?: string; delay?: string }) {
  const uid = useUid("glow");

  return (
    <div className={cx("lantern", className)} aria-hidden="true">
      <div className="mx-auto h-8 w-px bg-gradient-to-b from-transparent to-gold/80 sm:h-12" />
      <div className="lantern-swing" style={{ animationDelay: delay }}>
        <svg viewBox="0 0 70 108" className="w-full overflow-visible">
          <defs>
            <radialGradient id={uid} cx="50%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#F6E7C4" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse className="lantern-glow" cx="35" cy="58" rx="30" ry="34" fill={`url(#${uid})`} />
          <circle cx="35" cy="10" r="2.2" fill="#C6A15B" />
          <path d="M27 14h16l-2 8H29z" fill="#C6A15B" />
          <path d="M22 24h26l4 48H18z" fill="#7fa36a" stroke="#C6A15B" strokeWidth="1.2" />
          <path d="M26 30h18l3 36H23z" fill="#F6E7C4" opacity="0.55" />
          <path d="M35 24v48M24 40h22M23 54h24" stroke="#C6A15B" strokeWidth="0.6" />
          <path d="M18 72h34L35 96z" fill="#6f8f5c" stroke="#C6A15B" strokeWidth="1.1" />
        </svg>
      </div>
    </div>
  );
}
