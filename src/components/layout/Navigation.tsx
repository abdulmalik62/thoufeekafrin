import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { wedding } from "../../data/wedding.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";
import { cx } from "../../lib/cx.ts";
import { IslamicPattern } from "../wedding/IslamicPattern.tsx";

export function Navigation({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string>(wedding.nav[0].id);

  useEffect(() => {
    const nodes = wedding.nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }, reduced ? 0 : 40);
  };

  return (
    <>
      <nav aria-label="Sections" className="fixed top-1/2 right-[max(0.75rem,env(safe-area-inset-right))] z-50 hidden -translate-y-1/2 flex-col gap-1 lg:flex">
        {wedding.nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            aria-label={item.label}
            onClick={(event) => {
              event.preventDefault();
              go(item.id);
            }}
            className="group flex min-h-11 min-w-11 items-center justify-end gap-3"
          >
            <span className="font-ornament text-[10px] tracking-[0.22em] text-deep uppercase opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.label}
            </span>
            <span className={cx("size-2 rounded-full border border-sage", active === item.id && "bg-sage")} />
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="fixed z-[70] flex size-12 items-center justify-center rounded-full border border-sage/70 bg-paper/95 text-deep shadow-sm backdrop-blur-md lg:hidden"
        style={{
          bottom: "max(1.15rem, env(safe-area-inset-bottom))",
          right: "max(1.15rem, env(safe-area-inset-right))",
        }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label="Invitation sections" className="fixed inset-0 z-[65] bg-paper text-deep lg:hidden">
          <IslamicPattern className="text-sage opacity-[0.12]" />
          <nav className="relative flex h-full flex-col items-center justify-center gap-2 px-8 pb-24">
            {wedding.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  go(item.id);
                }}
                className="link-gold flex min-h-12 items-center font-display text-4xl tracking-[0.08em] uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
