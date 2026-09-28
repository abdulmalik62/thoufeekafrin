import { Mail } from "lucide-react";
import { wedding } from "../../data/wedding.ts";
import { IslamicBackdrop } from "../invitation/IslamicBackdrop.tsx";

export function Opening({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[radial-gradient(circle,#2a0815_0%,#3f0d1f_100%)] text-[#f6ecd4]">
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[440px] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
        <IslamicBackdrop />
        <div className="relative z-10 flex flex-col items-center">
        <p className="font-sans text-[12px] tracking-[0.42em] text-[#d7ae5f] uppercase">|| Bismillah ||</p>
        <p lang="ar" dir="rtl" className="mt-6 font-arabic text-2xl leading-relaxed text-[#e7d7a8]">
          {wedding.copy.bismillah}
        </p>
        <h1 className="mt-8 font-display text-5xl font-medium text-[#d7ae5f]">{wedding.groom}</h1>
        <p className="font-script text-4xl text-[#d7ae5f]">&</p>
        <h1 className="font-display text-5xl font-medium text-[#d7ae5f]">{wedding.bride}</h1>
        <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#e7d7a8]/80">
          We warmly invite you to the Reception and the Nikah.
        </p>
        <button
          type="button"
          onClick={onEnter}
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d7ae5f] px-6 text-sm text-[#d7ae5f]"
        >
          <Mail size={16} aria-hidden="true" />
          Open Invitation
        </button>
        </div>
      </div>
    </div>
  );
}
