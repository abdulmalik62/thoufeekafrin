export function starPath(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  points = 8,
) {
  let d = "";
  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const x = (cx + Math.cos(angle) * radius).toFixed(2);
    const y = (cy + Math.sin(angle) * radius).toFixed(2);
    d += `${i === 0 ? "M" : "L"}${x} ${y}`;
  }
  return `${d}Z`;
}
