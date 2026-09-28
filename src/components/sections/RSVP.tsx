import { useState } from "react";
import { wedding, type RsvpChoice } from "../../data/wedding.ts";
import { submitRsvp } from "../../lib/rsvp.ts";
import { cx } from "../../lib/cx.ts";
import { Reveal } from "../ui/Reveal.tsx";
import { OrnamentRule } from "../wedding/Ornaments.tsx";

const options: Array<{ id: RsvpChoice; label: string }> = [
  { id: "accept", label: "Joyfully Accept" },
  { id: "maybe", label: "Maybe" },
  { id: "decline", label: "Unable to Attend" },
];

const thanks: Record<RsvpChoice, string> = {
  accept: "We will look for you with joy.",
  maybe: "We hope the evening can include you.",
  decline: "You will be kept in our duas.",
};

export function RSVP() {
  const [choice, setChoice] = useState<RsvpChoice | null>(null);
  const [error, setError] = useState("");

  const choose = async (next: RsvpChoice) => {
    setError("");
    setChoice(next);
    try {
      await submitRsvp(next);
    } catch {
      setChoice(null);
      setError("We could not save that just now. Please try again.");
    }
  };

  return (
    <section id="rsvp" aria-labelledby="rsvp-title" className="scroll-mt-4 bg-mist px-5 py-20 text-ink sm:py-28">
      <Reveal className="mx-auto max-w-[520px] bg-ivory px-6 py-12 text-center shadow-[0_18px_50px_rgba(62,86,64,0.06)] sm:px-10 sm:py-14">
        <h2 id="rsvp-title" className="text-balance font-display text-[clamp(2rem,5vw,3rem)] font-light leading-tight text-deep">
          {wedding.copy.rsvpTitle}
        </h2>
        <div className="mt-5 flex justify-center">
          <OrnamentRule />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-royal sm:text-base">
          Let {wedding.groom} and {wedding.bride} know if you can share the evening.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {options.map((option) => {
            const selected = choice === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => void choose(option.id)}
                className={cx(
                  "btn-gold min-h-12 px-3 font-ornament text-[10px] tracking-[0.16em] uppercase sm:text-[11px]",
                  selected ? "bg-sage text-paper" : "border border-sage/70 text-deep hover:bg-sage/10",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <p className="mt-6 min-h-6 font-display text-xl text-royal italic" role="status" aria-live="polite">
          {choice ? thanks[choice] : ""}
        </p>
        {error ? <p className="text-sm text-deep">{error}</p> : null}
      </Reveal>
    </section>
  );
}
