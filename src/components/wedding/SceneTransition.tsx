export function SceneTransition({ fill }: { fill: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 -translate-y-[calc(100%-1px)] sm:h-24"
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="block h-full w-full">
        <path d="M0 96V60C300 6 1140 6 1440 60V96H0Z" fill={fill} />
        <path
          d="M90 96V68C420 18 1020 18 1350 68"
          fill="none"
          stroke="#C6A15B"
          strokeWidth="3"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
