import { cx } from "../../lib/cx.ts";
import { useUid } from "../../lib/ids.ts";

export function IslamicPattern({ className }: { className?: string }) {
  const uid = useUid("geo");

  return (
    <svg className={cx("absolute inset-0 h-full w-full", className)} aria-hidden="true">
      <defs>
        <pattern id={uid} width="72" height="72" patternUnits="userSpaceOnUse">
          <path
            d="M36 8 L41 28 L62 32 L41 37 L36 58 L31 37 L10 32 L31 28 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path
            d="M36 22 L45 32 L36 42 L27 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.55"
          />
          <circle cx="36" cy="32" r="1.15" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid})`} />
    </svg>
  );
}

export function Mashrabiya({ className }: { className?: string }) {
  const uid = useUid("mash");

  return (
    <svg className={cx("absolute inset-0 h-full w-full", className)} aria-hidden="true">
      <defs>
        <pattern id={uid} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="9" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid})`} />
    </svg>
  );
}
