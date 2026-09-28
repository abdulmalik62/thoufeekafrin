import { cx } from "../../lib/cx.ts";

export function IslamicArch({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <svg viewBox="0 0 340 220" className={cx("h-auto w-full", className)} fill="none" aria-hidden="true">
        <path
          d="M28 208V96C28 42 86 22 170 16c84 6 142 26 142 80v112"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M46 208V102c0-44 50-66 124-72 74 6 124 28 124 72v106"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.75"
        />
        <path d="M170 16l6-14 6 14-6 4z" fill="currentColor" />
        <path d="M16 208h48M276 208h48" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 520" className={cx("h-full w-auto", className)} fill="none" aria-hidden="true">
      <path
        d="M48 500V168C48 92 108 48 200 36c92 12 152 56 152 132V500"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M70 500V178c0-64 52-108 130-122 78 14 130 58 130 122V500"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <path d="M36 500h52M312 500h52" stroke="currentColor" strokeWidth="1.3" />
      <path d="M200 42l7-16 7 16-7 5z" fill="currentColor" />
      <path
        d="M92 150l3 8 8 3-8 3-3 8-3-8-8-3 8-3zM308 150l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
