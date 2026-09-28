import { wedding } from "../../data/wedding.ts";
import { Reveal } from "../ui/Reveal.tsx";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

export function Nikah() {
  return (
    <section id="nikah" aria-labelledby="nikah-title" className="scroll-mt-4 bg-paper px-5 py-20 text-ink sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-ornament text-[11px] tracking-[0.34em] text-gold uppercase">With blessings</p>
        <h2 id="nikah-title" className="mt-3 font-display text-[clamp(2.1rem,5vw,3.2rem)] font-light text-deep">
          {wedding.copy.nikahTitle}
        </h2>
        <div className="mt-5 flex justify-center">
          <OrnamentRule />
        </div>
        <p className="mx-auto mt-8 max-w-md font-display text-[clamp(1.25rem,3vw,1.7rem)] font-light leading-relaxed text-royal italic">
          {wedding.copy.nikah}
        </p>
      </Reveal>
    </section>
  );
}
