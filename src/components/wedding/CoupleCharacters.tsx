import { wedding } from "../../data/wedding.ts";
import { cx } from "../../lib/cx.ts";
import { BrideCharacter } from "./BrideCharacter.tsx";
import { GroomCharacter, type CharacterPose } from "./GroomCharacter.tsx";

export type Arrangement = "together" | "walk" | "stand" | "sit";

const poseFor: Record<Arrangement, CharacterPose> = {
  together: "glance",
  walk: "walk",
  stand: "stand",
  sit: "sit",
};

export function CoupleCharacters({
  arrangement = "together",
  className,
  labelled = false,
}: {
  arrangement?: Arrangement;
  className?: string;
  labelled?: boolean;
}) {
  const pose = poseFor[arrangement];

  return (
    <div
      className={cx("flex items-end justify-center", className)}
      role={labelled ? "img" : undefined}
      aria-label={labelled ? `Illustrated portrait of ${wedding.groom} and ${wedding.bride}` : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      <GroomCharacter pose={pose} className="w-[50%]" floatDelay="0s" />
      <BrideCharacter
        pose={pose}
        className={arrangement === "sit" ? "ml-1 w-[50%]" : "-ml-[8%] w-[50%]"}
        floatDelay="0.9s"
      />
    </div>
  );
}
