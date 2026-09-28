import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";

export function CursorGlow() {
  const reduced = useReducedMotion();
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fine || reduced) return;
    const node = glow.current;
    if (!node) return;

    const move = (event: PointerEvent) => {
      node.style.transform = `translate3d(${event.clientX - 18}px, ${event.clientY - 18}px, 0)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <div
      ref={glow}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[55] size-9 rounded-full border border-gold/40"
    />
  );
}
