import { wedding } from "../../data/wedding.ts";
import { Reveal } from "../ui/Reveal.tsx";
import { CoupleNames } from "../wedding/CoupleNames.tsx";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

export function Closing() {
  return (
    <section aria-label="Closing blessing" className="bg-paper px-5 py-24 text-ink sm:py-32">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <CoupleNames tone="dark" />
        <div className="mt-6">
          <OrnamentRule />
        </div>
        <p className="mt-6 font-ornament text-[11px] tracking-[0.32em] text-gold uppercase">{wedding.numericDate}</p>
        <p className="mt-8 max-w-md font-display text-[clamp(1.35rem,3vw,1.85rem)] font-light text-royal italic">
          {wedding.copy.closing}
        </p>
        <p lang="ar" dir="rtl" className="mt-8 font-arabic text-[clamp(1.35rem,4vw,1.9rem)] leading-relaxed text-deep">
          {wedding.copy.closingDua}
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-royal/80 italic">{wedding.copy.closingDuaEn}</p>
        <p className="mt-2 text-xs tracking-[0.2em] text-gold uppercase">{wedding.copy.closingduaCitation}</p>
      </Reveal>
    </section>
  );
}
