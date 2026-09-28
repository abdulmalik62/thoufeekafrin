import { cx } from "../../lib/cx.ts";
import { useUid } from "../../lib/ids.ts";

export function CrescentMoon({ className }: { className?: string }) {
  const uid = useUid("moon");

  return (
    <svg viewBox="0 0 100 100" className={cx("moon-drift", className)} aria-hidden="true">
      <defs>
        <mask id={uid}>
          <rect width="100" height="100" fill="black" />
          <circle cx="46" cy="50" r="30" fill="white" />
          <circle cx="62" cy="42" r="24" fill="black" />
        </mask>
      </defs>
      <circle cx="46" cy="50" r="30" fill="#C4A36A" mask={`url(#${uid})`} />
    </svg>
  );
}
