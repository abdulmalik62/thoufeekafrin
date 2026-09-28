import { wedding } from "../../data/wedding.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";
import { GoldButton } from "../ui/GoldButton.tsx";
import { Reveal } from "../ui/Reveal.tsx";

export function EventDetails() {
  const reduced = useReducedMotion();

  const viewLocation = () => {
    document.getElementById("location")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section id="details" data-tone="light" aria-labelledby="details-title" className="relative scroll-mt-4 bg-paper py-16 text-ink">
      <h2 id="details-title" className="sr-only">
        Event details
      </h2>
      <Reveal className="section-x mx-auto max-w-md">
        <article className="relative bg-ivory px-6 py-12 text-center text-deep shadow-[0_18px_50px_rgba(62,86,64,0.06)] sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gold" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gold" />
          <p className="font-ornament text-[11px] tracking-[0.34em] text-gold uppercase">Nikah</p>
          <p className="mt-5 font-display text-[clamp(2rem,5vw,2.6rem)] font-light leading-tight">{wedding.displayDate}</p>
          <p className="mt-3 font-display text-2xl text-royal italic">{wedding.venue}</p>
          <div className="mt-8">
            <GoldButton onClick={viewLocation}>View Location</GoldButton>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
