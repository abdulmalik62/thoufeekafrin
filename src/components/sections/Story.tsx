import { wedding } from "../../data/wedding.ts";
import { Reveal } from "../ui/Reveal.tsx";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="scroll-mt-4 bg-cream px-5 py-20 text-ink sm:py-28">
      <Reveal className="mx-auto max-w-[680px] text-center">
        <p className="font-ornament text-[11px] tracking-[0.34em] text-gold uppercase">Our story</p>
        <h2 id="story-title" className="mt-3 font-display text-[clamp(2.1rem,5vw,3.2rem)] font-light text-deep">
          {wedding.copy.storyTitle}
        </h2>
        <div className="mt-5 flex justify-center">
          <OrnamentRule />
        </div>
        <article className="relative mt-10 bg-ivory px-6 py-12 shadow-[0_18px_50px_rgba(62,86,64,0.06)] sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gold" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gold" />
          <p className="font-display text-[clamp(1.45rem,3vw,2rem)] leading-snug text-deep italic">{wedding.copy.story}</p>
        </article>
      </Reveal>
    </section>
  );
}
