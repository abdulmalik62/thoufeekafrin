import { cx } from "../../lib/cx.ts";
import { useUid } from "../../lib/ids.ts";
import type { CharacterPose } from "./GroomCharacter.tsx";

type Props = {
  pose?: CharacterPose;
  className?: string;
  floatDelay?: string;
};

function Defs({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-skin`} x1="20%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#F3D4B8" />
        <stop offset="42%" stopColor="#D7A57C" />
        <stop offset="100%" stopColor="#B07A56" />
      </linearGradient>
      <linearGradient id={`${uid}-hijab`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF9F1" />
        <stop offset="46%" stopColor="#F3E4CC" />
        <stop offset="100%" stopColor="#DCC6A2" />
      </linearGradient>
      <linearGradient id={`${uid}-gown`} x1="0%" y1="0%" x2="30%" y2="100%">
        <stop offset="0%" stopColor="#1E705A" />
        <stop offset="40%" stopColor="#0F4A3C" />
        <stop offset="100%" stopColor="#07261F" />
      </linearGradient>
    </defs>
  );
}

function BrideHead({ uid, tilt = "" }: { uid: string; tilt?: string }) {
  const skin = `url(#${uid}-skin)`;
  const hijab = `url(#${uid}-hijab)`;

  return (
    <g transform={tilt}>
      <path d="M46 214C32 128 46 62 110 48c64 14 78 80 64 166-26-18-46-8-64 4-18-12-38-22-64-36z" fill={hijab} />
      <path d="M148 130c32 28 36 90 14 150-18-28-22-78-16-120 0-12 0-22 2-30z" fill="#E6D3B4" />
      <path d="M96 150h28l4 28H92z" fill="#E8D5BA" />
      <ellipse cx="110" cy="124" rx="26" ry="32" fill={skin} />
      <path d="M82 112c8-36 48-40 56-4-12-16-20-18-28-18s-18 2-28 22z" fill="#F8F1E6" />
      <path d="M84 110c12-32 40-34 52 0" stroke="#C6A15B" strokeWidth="1.6" fill="none" />
      <path d="M84 146c12 24 40 24 52 0-14 16-38 16-52 0z" fill="#F4E7D2" />
      <path d="M92 108c7-6 12-6 16 0" stroke="#2A1C16" strokeWidth="1.35" fill="none" strokeLinecap="round" />
      <path d="M112 108c6-6 12-5 16 1" stroke="#2A1C16" strokeWidth="1.35" fill="none" strokeLinecap="round" />
      <path d="M92 116c6-6 12-5 14 1-6 4-11 4-14-1z" fill="#FBF7F2" />
      <path d="M114 116c6-6 12-5 14 1-6 4-11 4-14-1z" fill="#FBF7F2" />
      <ellipse cx="99" cy="116.5" rx="1.9" ry="2.3" fill="#241810" />
      <ellipse cx="121" cy="116.5" rx="1.9" ry="2.3" fill="#241810" />
      <circle cx="99.7" cy="115.8" r="0.55" fill="#fff" />
      <circle cx="121.7" cy="115.8" r="0.55" fill="#fff" />
      <path d="M94 118c5-3 10-3 13 0" stroke="#2A1C16" strokeWidth="0.7" fill="none" />
      <path d="M113 118c5-3 10-3 13 0" stroke="#2A1C16" strokeWidth="0.7" fill="none" />
      <path d="M110 124c2.4 8 2.4 11 0 14" stroke="#A56C4C" strokeWidth="1.05" fill="none" strokeLinecap="round" />
      <path d="M101 144c4 4 14 4 18 0" stroke="#C48478" strokeWidth="1.25" fill="none" strokeLinecap="round" />
      <ellipse cx="96" cy="134" rx="5.5" ry="2.6" fill="#C47A62" opacity="0.16" />
      <ellipse cx="124" cy="134" rx="5.5" ry="2.6" fill="#C47A62" opacity="0.16" />
      <circle cx="132" cy="96" r="2.5" fill="#C6A15B" />
      <circle cx="132" cy="96" r="1" fill="#FBF6EE" />
    </g>
  );
}

export function BrideCharacter({ pose = "stand", className, floatDelay = "0.8s" }: Props) {
  const uid = useUid("bride");
  const tilt = pose === "glance" ? "rotate(-6 110 124)" : pose === "walk" ? "rotate(2 110 124)" : undefined;
  const lean = pose === "walk" ? "rotate(2.5 110 320)" : undefined;
  const skin = `url(#${uid}-skin)`;
  const gown = `url(#${uid}-gown)`;

  if (pose === "sit") {
    return (
      <svg viewBox="0 0 220 340" className={cx("character-float h-auto w-full", className)} style={{ animationDelay: floatDelay }} aria-hidden="true">
        <Defs uid={uid} />
        <ellipse cx="110" cy="326" rx="66" ry="8" fill="#082F2A" opacity="0.18" />
        <path d="M36 176c-18 42-16 90 6 142h136c22-52 24-100 6-142-32 18-116 18-148 0z" fill={gown} />
        <path d="M78 190c-8 40-4 90 6 124h30V198z" fill="#1A6B56" opacity="0.35" />
        <path d="M40 310h140" stroke="#C6A15B" strokeWidth="1.5" />
        <ellipse cx="98" cy="230" rx="8" ry="7" fill={skin} />
        <ellipse cx="120" cy="232" rx="8" ry="7" fill={skin} />
        <g transform="translate(0 -18)">
          <BrideHead uid={uid} />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 500" overflow="hidden" className={cx("character-float h-auto w-full", className)} style={{ animationDelay: floatDelay }} aria-hidden="true">
      <Defs uid={uid} />
      <ellipse cx="110" cy="486" rx="58" ry="8" fill="#082F2A" opacity="0.2" />
      <g transform={lean}>
        <path d="M64 200C42 270 28 370 24 472h172c-4-102-18-202-40-272-24 18-68 18-92 0z" fill={gown} />
        <path d="M78 214c-16 70-14 160-4 250h40V222z" fill="#218066" opacity="0.28" />
        <path d="M66 206c-30 28-36 90-26 160l18-2c-8-62 2-112 24-142z" fill="#0F4A3C" />
        <path d="M154 206c30 28 36 90 26 160l-18-2c8-62-2-112-24-142z" fill="#0F4A3C" />
        <path d="M38 360h22l-1 8H39z" fill="#C6A15B" />
        <path d="M160 360h22l-1 8h-21z" fill="#C6A15B" />
        <path d="M86 198c16 18 32 18 48 0" stroke="#C6A15B" strokeWidth="1.35" fill="none" />
        <path d="M92 208c12 14 24 14 36 0" stroke="#E4D0A3" strokeWidth="0.75" fill="none" />
        <path d="M24 458h172" stroke="#C6A15B" strokeWidth="1.6" />
        <path d="M30 464h160" stroke="#E4D0A3" strokeWidth="0.7" />
        <path d="M110 268l3 7 7 2-7 3-3 7-3-7-7-3 7-3z" fill="none" stroke="#C6A15B" strokeWidth="0.9" />
        <path d="M110 330l3 7 7 2-7 3-3 7-3-7-7-3 7-3z" fill="none" stroke="#C6A15B" strokeWidth="0.9" />
        <ellipse cx="100" cy="318" rx="8" ry="10" fill={skin} />
        <ellipse cx="118" cy="320" rx="8" ry="10" fill={skin} />
        <path d="M118 312c8 2 12 8 10 14" stroke="#C6A15B" strokeWidth="1.15" fill="none" />
        <BrideHead uid={uid} tilt={tilt} />
      </g>
    </svg>
  );
}
