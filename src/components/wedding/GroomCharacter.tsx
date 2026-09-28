import { cx } from "../../lib/cx.ts";
import { useUid } from "../../lib/ids.ts";

export type CharacterPose = "stand" | "walk" | "glance" | "sit";

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
      <linearGradient id={`${uid}-hair`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4A372C" />
        <stop offset="100%" stopColor="#16100D" />
      </linearGradient>
      <linearGradient id={`${uid}-cloth`} x1="0%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#FFFbf4" />
        <stop offset="48%" stopColor="#F3E6D2" />
        <stop offset="100%" stopColor="#D9C4A4" />
      </linearGradient>
    </defs>
  );
}

function GroomHead({ uid, tilt = "" }: { uid: string; tilt?: string }) {
  const skin = `url(#${uid}-skin)`;
  const hair = `url(#${uid}-hair)`;

  return (
    <g transform={tilt}>
      <ellipse cx="78" cy="124" rx="6" ry="9" fill="#C48B62" />
      <ellipse cx="142" cy="124" rx="6" ry="9" fill="#E0B48A" />
      <path d="M96 148h28l3 22H93z" fill="#C9956C" />
      <path
        d="M80 126c-2-36 10-62 30-68 20-6 42 8 48 40 2 14-2 28-8 36-8-20-18-28-28-28-12 0-24 10-42 20z"
        fill={hair}
      />
      <ellipse cx="110" cy="124" rx="27" ry="32" fill={skin} />
      <path
        d="M86 112c2-30 12-46 24-48 12 2 22 16 26 46-8-14-16-18-26-18s-18 4-24 20z"
        fill={hair}
      />
      <path d="M90 108c8-7 12-7 18-1" stroke="#2A1C16" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M112 107c7-7 12-6 18 0" stroke="#2A1C16" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M90 116c7-7 14-6 16 1-7 4-12 4-16-1z" fill="#FBF7F2" />
      <path d="M114 116c7-7 14-6 16 1-7 4-12 4-16-1z" fill="#FBF7F2" />
      <ellipse cx="98" cy="116.5" rx="1.8" ry="2.2" fill="#241810" />
      <ellipse cx="122" cy="116.5" rx="1.8" ry="2.2" fill="#241810" />
      <circle cx="98.7" cy="115.8" r="0.55" fill="#fff" />
      <circle cx="122.7" cy="115.8" r="0.55" fill="#fff" />
      <path d="M109 122c3 8 3 12 0 15" stroke="#A56C4C" strokeWidth="1.15" fill="none" strokeLinecap="round" />
      <path d="M100 142c5 5 15 5 20 0" stroke="#B56B60" strokeWidth="1.35" fill="none" strokeLinecap="round" />
      <path
        d="M88 146c4 16 16 22 22 22s18-6 22-22c-10 8-16 10-22 10s-12-2-22-10z"
        fill="#3A2A22"
      />
      <path d="M100 140c4 4 16 4 20 0" stroke="#3A2A22" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="94" cy="132" rx="6" ry="3" fill="#C47A62" opacity="0.18" />
      <ellipse cx="126" cy="132" rx="6" ry="3" fill="#C47A62" opacity="0.18" />
    </g>
  );
}

export function GroomCharacter({ pose = "stand", className, floatDelay = "0s" }: Props) {
  const uid = useUid("groom");
  const tilt = pose === "glance" ? "rotate(6 110 124)" : pose === "walk" ? "rotate(3 110 124)" : undefined;
  const lean = pose === "walk" ? "rotate(3.5 110 320)" : undefined;
  const skin = `url(#${uid}-skin)`;
  const cloth = `url(#${uid}-cloth)`;

  if (pose === "sit") {
    return (
      <svg viewBox="0 0 220 340" className={cx("character-float h-auto w-full", className)} style={{ animationDelay: floatDelay }} aria-hidden="true">
        <Defs uid={uid} />
        <ellipse cx="110" cy="326" rx="62" ry="8" fill="#082F2A" opacity="0.18" />
        <path d="M48 168c-14 40-16 86 0 150h124c16-64 14-110 0-150-26 16-98 16-124 0z" fill={cloth} />
        <path d="M128 172c18 30 20 80 12 142h28c6-62 0-110-10-146-10 8-20 6-30 4z" fill="#E6D3B4" opacity="0.45" />
        <path d="M62 196c28 16 68 16 96 0l-2 14c-28 14-64 14-92 0z" fill="#0F4A3C" />
        <path d="M110 176v70" stroke="#C6A15B" strokeWidth="1.1" />
        <circle cx="110" cy="190" r="2.2" fill="#C6A15B" />
        <circle cx="110" cy="212" r="2.2" fill="#C6A15B" />
        <path d="M110 228l3 6 6 .6-5 4 1.4 6-5.4-3.2-5.4 3.2 1.4-6-5-4 6-.6z" fill="#C6A15B" />
        <ellipse cx="86" cy="236" rx="11" ry="7" fill={skin} />
        <ellipse cx="134" cy="236" rx="11" ry="7" fill={skin} />
        <g transform="translate(0 -28)">
          <GroomHead uid={uid} />
        </g>
      </svg>
    );
  }

  return (
      <svg viewBox="0 0 220 500" overflow="hidden" className={cx("character-float h-auto w-full", className)} style={{ animationDelay: floatDelay }} aria-hidden="true">
      <Defs uid={uid} />
      <ellipse cx="110" cy="486" rx="52" ry="8" fill="#082F2A" opacity="0.2" />
      <g transform={lean}>
        <path
          d="M66 196c-10 28-12 70-4 130 6 52-4 100-10 150h104c-6-50-16-98-10-150 8-60 6-102-4-130-22 18-60 18-76 0z"
          fill={cloth}
        />
        <path d="M132 204c18 48 20 120 10 250h24c4-100-2-180-12-246-8 8-16 4-22-4z" fill="#E7D5B6" opacity="0.55" />
        <path d="M70 202c-30 24-38 84-28 148l18-2c-8-56 2-108 26-132z" fill={cloth} />
        <path d="M150 202c30 24 38 84 28 148l-18-2c8-56-2-108-26-132z" fill={cloth} />
        <path d="M40 342h22l-2 8H42z" fill="#C6A15B" />
        <path d="M158 342h22l-2 8h-20z" fill="#C6A15B" />
        <ellipse cx="48" cy="360" rx="9" ry="11" fill={skin} />
        <ellipse cx="172" cy="360" rx="9" ry="11" fill={skin} />
        <path d="M92 164h36l5 28H87z" fill="#EFE4D2" />
        <path d="M94 164h32l-4 8H98z" fill="#C6A15B" />
        <path d="M62 312c28 18 68 18 96 0l-2 16c-28 16-64 16-92 0z" fill="#0F4A3C" />
        <path d="M68 326c24 12 60 12 84 0" stroke="#C6A15B" strokeWidth="0.9" fill="none" />
        <path d="M110 190v168" stroke="#C6A15B" strokeWidth="1.15" />
        {[214, 240, 266, 292, 318].map((y) => (
          <circle key={y} cx="110" cy={y} r="2.3" fill="#C6A15B" />
        ))}
        <path d="M110 236l3.2 6.4 6.6.8-5 4.4 1.5 6.6-6.3-3.6-6.3 3.6 1.5-6.6-5-4.4 6.6-.8z" fill="#C6A15B" />
        <path d="M82 390v52" stroke="#C6A15B" strokeWidth="0.7" opacity="0.75" />
        <path d="M76 452c-2 16 10 24 30 20l8-22z" fill="#1A1410" />
        <path d="M114 450c12 18 34 20 40 4l-26-8z" fill="#2A211C" />
        <path d="M124 462h20" stroke="#C6A15B" strokeWidth="1.1" />
        <GroomHead uid={uid} tilt={tilt} />
      </g>
    </svg>
  );
}
