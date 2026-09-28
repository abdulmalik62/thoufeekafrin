import { ChevronDown } from "lucide-react";
import coupleArt from "../../assets/couple.png";
import { wedding } from "../../data/wedding.ts";
import { useReducedMotion } from "../../hooks/useReducedMotion.ts";
import { CoupleNames } from "../wedding/CoupleNames.tsx";
import { IslamicPattern } from "../wedding/IslamicPattern.tsx";

export function Hero() {
  const reduced = useReducedMotion();

  const begin = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section id="home" aria-labelledby="invitation-title" className="relative flex min-h-dvh flex-col overflow-hidden bg-paper text-ink">
      <IslamicPattern className="text-gold opacity-[0.07]" />

      <div className="section-x relative z-10 mx-auto grid w-full max-w-[1100px] flex-1 items-center gap-4 pt-[max(4.5rem,env(safe-area-inset-top))] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-8 lg:pt-20">
        <CoupleNames
          id="invitation-title"
          as="h1"
          align="center"
          tone="dark"
          fitted
          className="lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left"
        />
        <div className="relative mx-auto w-full max-w-[460px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
          <img
            src={coupleArt}
            alt={`Illustrated portrait of ${wedding.groom} and ${wedding.bride}`}
            className="mx-auto h-auto w-full max-h-[min(58dvh,640px)] object-contain"
          />
        </div>
        <div className="pb-2 text-center lg:col-start-1 lg:row-start-2 lg:max-w-md lg:border-l lg:border-sage/40 lg:pb-0 lg:pl-8 lg:text-left">
          <p className="font-sans text-[11px] tracking-[0.28em] text-royal uppercase">{wedding.copy.families}</p>
          <p className="mt-3 font-display text-[clamp(1.25rem,3vw,1.85rem)] text-deep italic">{wedding.copy.invite}</p>
          <p className="mt-4 font-ornament text-[11px] tracking-[0.28em] text-gold uppercase sm:text-xs">{wedding.displayDate}</p>
        </div>
      </div>

      <div className="relative z-10 mb-16 flex justify-center sm:mb-20">
        <button type="button" onClick={begin} className="flex min-h-11 flex-col items-center gap-1 px-4">
          <span className="font-ornament text-[10px] tracking-[0.28em] text-royal uppercase">Begin the Journey</span>
          <ChevronDown className="scroll-bob text-sage" size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
