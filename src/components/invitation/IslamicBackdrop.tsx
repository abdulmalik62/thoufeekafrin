function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path
        d="M40 4l8 20 21 4-16 14 5 21-18-11-18 11 5-21L11 28l21-4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M40 18l4 10 11 2-8 7 3 11-10-6-10 6 3-11-8-7 11-2z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function Crescent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M28 6a16 16 0 1 0 12 26 13 13 0 1 1-12-26z" fill="currentColor" />
    </svg>
  );
}

export function IslamicBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="islam-lattice absolute inset-0" />
      <div className="absolute top-[-8%] left-1/2 w-[150%] -translate-x-1/2">
        <svg viewBox="0 0 200 200" className="islam-rosette w-full text-[#d7ae5f] opacity-[0.16]">
          <g fill="none" stroke="currentColor" strokeWidth="0.6">
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="48" />
            <path d="M100 30l18 42 46 6-34 30 10 46-40-22-40 22 10-46-34-30 46-6z" />
            <path d="M100 170l-18-42-46-6 34-30-10-46 40 22 40-22-10 46 34 30-46 6z" />
          </g>
        </svg>
      </div>
      <Crescent className="islam-float absolute top-[22%] left-3 w-10 text-[#d7ae5f] opacity-40" />
      <Star className="islam-float-late absolute top-[48%] right-2 w-14 text-[#d7ae5f] opacity-30" />
      <Crescent className="islam-float absolute bottom-[18%] left-6 w-8 text-[#e7d7a8] opacity-35" />
      <Star className="islam-float-late absolute bottom-[8%] right-5 w-10 text-[#d7ae5f] opacity-25" />
    </div>
  );
}
