import type { ReactNode } from "react";
import { cx } from "../../lib/cx.ts";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  variant?: "solid" | "line";
  tone?: "light" | "dark";
  className?: string;
  ariaDescribedBy?: string;
};

const base =
  "btn-gold inline-flex min-h-11 items-center justify-center px-6 text-center font-ornament text-[11px] tracking-[0.2em] uppercase";

export function GoldButton({
  children,
  onClick,
  href,
  disabled = false,
  variant = "line",
  tone = "light",
  className,
  ariaDescribedBy,
}: Props) {
  const lineTone =
    tone === "dark"
      ? "border border-gold/80 bg-transparent text-champagne hover:bg-gold/15"
      : "border border-gold/75 bg-transparent text-deep hover:bg-gold/10";
  const styles = cx(
    base,
    variant === "solid" ? "bg-sage text-paper hover:bg-deep" : lineTone,
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  if (href && !disabled) {
    return (
      <a
        className={styles}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={ariaDescribedBy}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles}
      onClick={onClick}
      disabled={disabled}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </button>
  );
}
