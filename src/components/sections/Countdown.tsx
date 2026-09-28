import { wedding } from "../../data/wedding.ts";
import { useCountdown } from "../../hooks/useCountdown.ts";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

export function Countdown() {
  const time = useCountdown(wedding.date);
  const values = [time.days, time.hours, time.minutes, time.seconds];

  return (
    <section className="bg-paper px-5 py-20 text-ink sm:py-24" aria-label="Countdown to the Nikkah">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-ornament text-[10px] tracking-[0.32em] text-gold uppercase">Until the Nikkah</p>
        <div className="mt-4 flex justify-center">
          <OrnamentRule />
        </div>
        {time.isReached ? (
          <p className="mt-10 font-display text-[clamp(2rem,6vw,3.6rem)] text-deep italic">
            {wedding.copy.countdownReached}
          </p>
        ) : (
          <div
            className="mt-10 grid grid-cols-4 gap-2 sm:gap-8"
            role="timer"
            aria-live="off"
            aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds until the Nikkah`}
          >
            {labels.map((label, index) => (
              <div key={label} className="min-w-0 border border-gold/40 bg-ivory px-1 py-5 sm:px-4">
                <p className="font-display text-[clamp(1.7rem,6vw,3.2rem)] font-light leading-none text-deep tabular-nums">
                  {label === "Days" ? values[index] : String(values[index]).padStart(2, "0")}
                </p>
                <p className="mt-3 font-ornament text-[9px] tracking-[0.18em] text-gold uppercase sm:text-[11px] sm:tracking-[0.24em]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
