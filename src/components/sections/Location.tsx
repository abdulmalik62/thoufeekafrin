import { wedding } from "../../data/wedding.ts";
import { GoldButton } from "../ui/GoldButton.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

export function Location() {
  const hasMap = wedding.mapsUrl.length > 0;

  return (
    <section id="location" aria-labelledby="location-title" className="scroll-mt-4 bg-cream px-5 py-20 text-ink sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-ornament text-[11px] tracking-[0.34em] text-gold uppercase">The celebration</p>
        <h2 id="location-title" className="mt-3 font-display text-[clamp(2.1rem,5vw,3.2rem)] font-light text-deep">
          {wedding.venue}
        </h2>
        <div className="mt-5 flex justify-center">
          <OrnamentRule />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-royal sm:text-base">{wedding.copy.locationNote}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <GoldButton
            href={hasMap ? wedding.mapsUrl : undefined}
            disabled={!hasMap}
            ariaDescribedBy={hasMap ? undefined : "maps-note"}
          >
            Open in Maps
          </GoldButton>
          {hasMap ? null : (
            <p id="maps-note" className="max-w-xs text-sm text-royal/80">
              {wedding.copy.mapsPending}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
