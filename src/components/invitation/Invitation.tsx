import { Calendar } from "lucide-react";
import type { ReactNode } from "react";
import coupleArt from "../../assets/thoufee-afrin.png";
import { wedding } from "../../data/wedding.ts";
import { IslamicBackdrop } from "./IslamicBackdrop.tsx";

function FloralPattern() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-35" aria-hidden="true">
      <defs>
        <pattern id="vine" width="84" height="84" patternUnits="userSpaceOnUse">
          <path d="M8 70c16-18 18-32 8-48" stroke="#d7ae5f" strokeWidth="0.8" fill="none" />
          <path d="M20 40c10-4 16-2 22 6" stroke="#d7ae5f" strokeWidth="0.7" fill="none" />
          <circle cx="42" cy="28" r="4" fill="none" stroke="#d7ae5f" strokeWidth="0.7" />
          <circle cx="54" cy="46" r="2.2" fill="#d7ae5f" opacity="0.45" />
          <path d="M62 18c8 10 6 22-4 30" stroke="#d7ae5f" strokeWidth="0.7" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#vine)" />
    </svg>
  );
}

function Crescent() {
  return (
    <div className="mx-auto flex size-24 items-center justify-center rounded-full border border-[#d7ae5f]/80">
      <svg viewBox="0 0 64 64" className="size-12 text-[#d7ae5f]" aria-hidden="true">
        <path
          d="M36 8a24 24 0 1 0 18 40 20 20 0 1 1-18-40z"
          fill="currentColor"
        />
        <circle cx="44" cy="18" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

function Flower() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 text-[#e7a0b4]" aria-hidden="true">
      <circle cx="12" cy="7" r="3" fill="currentColor" />
      <circle cx="7" cy="12" r="3" fill="currentColor" />
      <circle cx="17" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="17" r="3" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="#d7ae5f" />
    </svg>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <section className="px-5 py-8 text-center text-[#f6ecd4]">{children}</section>;
}

function PersonCard({ initial, title, note }: { initial: string; title: string; note: string }) {
  return (
    <article className="rounded-[22px] border border-[#d7ae5f]/80 bg-black/25 px-4 py-6">
      <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full border border-[#d7ae5f]">
        <span className="font-display text-2xl text-[#d7ae5f]">{initial}</span>
      </div>
      <h3 className="font-display text-2xl text-[#f3e2b0]">{title}</h3>
      <p className="mt-2 text-sm text-[#e7d7a8]">{note}</p>
    </article>
  );
}

export function Invitation() {
  return (
    <div className="min-h-dvh bg-[#1a0610] sm:py-6">
      <div className="relative mx-auto w-full max-w-[440px] overflow-hidden bg-[radial-gradient(circle_at_top,#3f0d1f_0%,#2a0815_55%)] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
        <IslamicBackdrop />
        <div className="relative z-10">
        <div className="h-3 bg-[repeating-linear-gradient(90deg,#d7ae5f_0_10px,transparent_10px_16px)] opacity-80" />

        <Panel>
          <Crescent />
          <p className="mt-6 font-sans text-[13px] tracking-[0.38em] text-[#d7ae5f] uppercase">|| Bismillah ||</p>
          <p
            lang="ar"
            dir="rtl"
            className="mx-auto mt-6 max-w-[320px] border border-[#d7ae5f]/40 bg-white/5 px-4 py-5 font-arabic text-[1.65rem] leading-relaxed text-[#e7d7a8]"
          >
            {wedding.copy.bismillah}
          </p>
          <p className="mt-3 text-sm text-[#e7d7a8]/75">{wedding.copy.bismillahEn}</p>
        </Panel>

        <section className="px-4 pb-8">
          <div className="relative overflow-hidden rounded-t-[180px] border border-[#d7ae5f]/70 bg-[#14040c] px-6 pt-10 pb-8 text-center">
            <FloralPattern />
            <div className="relative">
              <div className="flex items-center justify-center gap-3">
                <CrescentMark />
                <h1 id="invitation-title" tabIndex={-1} className="font-display text-4xl text-[#f0d48a] outline-none">
                  Hearty Invitation
                </h1>
                <CrescentMark />
              </div>
              <p className="mt-4 font-sans text-xs tracking-[0.35em] text-[#e7d7a8] uppercase">Welcome,</p>
              <h2 className="mt-3 font-display text-2xl text-[#f6ecd4]">Dear Family & Friends</h2>
              <p className="mx-auto mt-4 max-w-[18rem] text-sm leading-relaxed text-[#e7d7a8]/90">{wedding.copy.nikah}</p>
            </div>
          </div>
        </section>

        <Panel>
          <h2 className="font-display text-3xl text-[#d7ae5f]">The Couple</h2>
          <img
            src={coupleArt}
            alt={`Illustrated portrait of ${wedding.groom} and ${wedding.bride}`}
            className="mx-auto mt-4 h-auto w-[94%] max-w-[400px] object-contain"
          />
          <p className="mt-2 font-script text-3xl text-[#d7ae5f]">Nikkah</p>
          <div className="mt-6 grid gap-4">
            <PersonCard initial="T" title={wedding.groom} note={wedding.groomParents} />
            <PersonCard initial="A" title={wedding.bride} note={wedding.brideParents} />
          </div>
          <p className="mt-6 text-sm tracking-wide text-[#d7ae5f]">{wedding.displayGroom} Weds {wedding.displayBride}</p>
        </Panel>

        <section className="px-4 pb-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d7ae5f]/60 bg-[#14040c] px-4 py-8">
            <FloralPattern />
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2">
                <Flower />
                <h2 className="font-display text-[1.15rem] tracking-[0.12em] text-[#e7c56a] uppercase">
                  With Love, We Invite You
                </h2>
                <Flower />
              </div>
              <div className="mt-6 grid gap-3">
                {wedding.family.map((group) => (
                  <article
                    key={group.role}
                    className="rounded-xl border border-[#d7ae5f]/35 bg-black/30 px-3 py-3"
                  >
                    <p className="font-sans text-[10px] tracking-[0.22em] text-[#d7ae5f] uppercase">{group.role}</p>
                    {group.members.map((member) => (
                      <p key={member} className="mt-1 font-display text-xl text-[#f6ecd4]">{member}</p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Panel>
          <h2 className="font-display text-3xl tracking-wide text-[#d7ae5f] uppercase">Wedding Itinerary</h2>
          <div className="mx-auto mt-3 h-px w-24 bg-[#d7ae5f]" />
          <p className="mt-3 font-display text-lg text-[#e7d7a8] italic">With the blessings of Allah</p>
          <div className="mt-6 grid gap-4 text-left">
            <EventCard
              title="Nikkah"
              date={wedding.weddingDate}
              time={wedding.nikahTime}
              hijriDate={wedding.hijriDate}
              venue={wedding.venue}
            />
            <EventCard
              title="Valima Feast"
              date={wedding.weddingDate}
              time="After the Nikkah"
              hijriDate={wedding.hijriDate}
              venue={wedding.valimaVenue}
            />
          </div>
        </Panel>

        <Panel>
          <h2 className="font-display text-3xl text-[#d7ae5f]">A Blessing</h2>
          <p lang="ar" dir="rtl" className="mt-4 font-arabic text-3xl leading-relaxed text-[#f6ecd4]">
            {wedding.copy.verseArabic}
          </p>
          <p className="mt-3 font-display text-xl text-[#e7d7a8] italic">{wedding.copy.verseEnglish}</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-[#d7ae5f] uppercase">{wedding.copy.verseCitation}</p>
          <p className="mx-auto mt-6 max-w-[18rem] text-sm leading-relaxed text-[#e7d7a8]">{wedding.copy.closing}</p>
          <p lang="ar" dir="rtl" className="mt-4 font-arabic text-2xl text-[#f6ecd4]">
            {wedding.copy.closingDua}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#e7d7a8] italic">{wedding.copy.closingDuaEn}</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-[#d7ae5f] uppercase">{wedding.copy.closingduaCitation}</p>
        </Panel>

        <footer className="px-6 pt-2 pb-24 text-center">
          <p className="font-script text-4xl text-[#d7ae5f]">
            {wedding.displayGroom} & {wedding.displayBride}
          </p>
          <p className="mt-6 text-sm text-[#e7d7a8]">
            Made with <span aria-hidden="true">❤️</span>
            <span className="sr-only">love</span> by
          </p>
          <p className="mt-1 font-display text-lg text-[#f6ecd4]">{wedding.credit}</p>
        </footer>
        </div>
      </div>
    </div>
  );
}

function CrescentMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 text-[#f0d48a]" aria-hidden="true">
      <path d="M14 3a8 8 0 1 0 6 13 6.5 6.5 0 1 1-6-13z" fill="currentColor" />
    </svg>
  );
}

function EventCard({
  title,
  date,
  time,
  hijriDate,
  venue,
}: {
  title: string;
  date: string;
  time: string;
  hijriDate: string;
  venue: string;
}) {
  return (
    <article className="rounded-[24px] border border-[#d7ae5f]/45 bg-white/4 px-5 py-6 text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-black/30 text-[#d7ae5f]">
        <Calendar size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-2xl text-[#f3e2b0]">{title}</h3>
      <p className="mt-2 text-sm text-[#e7d7a8]">{date}</p>
      <p className="mt-1 text-sm text-[#d7ae5f]">{hijriDate}</p>
      <p className="mt-3 text-sm text-[#f6ecd4]">{time}</p>
      <p className="mt-3 text-sm text-[#f6ecd4]">{venue}</p>
    </article>
  );
}
