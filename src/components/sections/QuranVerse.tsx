import { wedding } from "../../data/wedding.ts";
import { Reveal } from "../ui/Reveal.tsx";

export function QuranVerse() {
  return (
    <section aria-labelledby="verse-heading" className="scroll-mt-4 bg-ivory px-5 py-20 text-deep sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p lang="ar" dir="rtl" className="font-arabic text-[clamp(1.8rem,5vw,2.8rem)] leading-relaxed">
          {wedding.copy.verseArabic}
        </p>
        <h2 id="verse-heading" className="mx-auto mt-6 max-w-xl font-display text-[clamp(1.6rem,4vw,2.4rem)] font-light italic">
          {wedding.copy.verseEnglish}
        </h2>
        <p className="mt-6 font-ornament text-[11px] tracking-[0.28em] text-gold uppercase">— {wedding.copy.verseCitation}</p>
      </Reveal>
    </section>
  );
}
