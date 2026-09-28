import { wedding } from "../../data/wedding.ts";
import { cx } from "../../lib/cx.ts";

export function CoupleNames({
  as = "p",
  id,
  align = "center",
  tone = "light",
  className,
  fitted = false,
}: {
  as?: "h1" | "p";
  id?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
  fitted?: boolean;
}) {
  const Tag = as;
  const nameSize = fitted
    ? "text-[clamp(2.6rem,8vw,4.6rem)] tracking-[0.02em]"
    : "text-[clamp(2.8rem,8vw,5.4rem)] tracking-[0.01em]";

  return (
    <Tag
      id={id}
      tabIndex={as === "h1" ? -1 : undefined}
      className={cx(
        "flex max-w-full flex-col outline-none",
        align === "center" ? "items-center text-center" : "items-start text-left",
        tone === "light" ? "text-ivory" : "text-deep",
        className,
      )}
    >
      <span className={cx("font-display font-light leading-none", nameSize)}>{wedding.groom}</span>
      <span className="my-[0.08em] font-display text-[clamp(1.5rem,3vw,2.4rem)] italic leading-none text-gold" aria-hidden="true">
        &
      </span>
      <span className="sr-only"> and </span>
      <span className={cx("font-display font-light leading-none", nameSize)}>{wedding.bride}</span>
    </Tag>
  );
}
