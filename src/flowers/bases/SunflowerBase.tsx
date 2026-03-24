import type { FlowerSVGProps } from "../types";

export function SunflowerBase({ palette, className, size = 120 }: FlowerSVGProps) {
  const cx = 60;
  const cy = 60;
  const petalCount = 16;
  const innerRadius = 18;
  const outerRadius = 52;

  // Generate petal paths radiating outward
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount - 90;
    const rad = (angle * Math.PI) / 180;
    const wobble = i % 3 === 0 ? 2 : i % 3 === 1 ? -1.5 : 0.8;
    const lenVar = i % 2 === 0 ? 3 : -2;

    const tipX = cx + Math.cos(rad) * (outerRadius + lenVar);
    const tipY = cy + Math.sin(rad) * (outerRadius + lenVar);
    const baseX = cx + Math.cos(rad) * innerRadius;
    const baseY = cy + Math.sin(rad) * innerRadius;

    const perpRad = rad + Math.PI / 2;
    const petalWidth = 6.5;

    const leftBaseX = baseX + Math.cos(perpRad) * (petalWidth * 0.5);
    const leftBaseY = baseY + Math.sin(perpRad) * (petalWidth * 0.5);
    const rightBaseX = baseX - Math.cos(perpRad) * (petalWidth * 0.5);
    const rightBaseY = baseY - Math.sin(perpRad) * (petalWidth * 0.5);

    const midDist = (innerRadius + outerRadius) / 2;
    const leftMidX = cx + Math.cos(rad) * midDist + Math.cos(perpRad) * (petalWidth + wobble);
    const leftMidY = cy + Math.sin(rad) * midDist + Math.sin(perpRad) * (petalWidth + wobble);
    const rightMidX = cx + Math.cos(rad) * midDist - Math.cos(perpRad) * (petalWidth + wobble);
    const rightMidY = cy + Math.sin(rad) * midDist - Math.sin(perpRad) * (petalWidth + wobble);

    const path = `M ${leftBaseX} ${leftBaseY} Q ${leftMidX} ${leftMidY} ${tipX} ${tipY} Q ${rightMidX} ${rightMidY} ${rightBaseX} ${rightBaseY} Z`;
    const fill = i % 2 === 0 ? palette.primary : palette.secondary;
    const opacity = 0.75 + (i % 3) * 0.05;

    return { path, fill, opacity, angle };
  });

  // Seed dots for center disc
  const seeds: Array<{ x: number; y: number; r: number; opacity: number }> = [];
  for (let ring = 1; ring <= 4; ring++) {
    const count = ring * 6;
    const radius = ring * 4;
    for (let j = 0; j < count; j++) {
      const a = ((j * 360) / count + ring * 15) * (Math.PI / 180);
      seeds.push({
        x: cx + Math.cos(a) * radius,
        y: cy + Math.sin(a) * radius,
        r: 1.2 - ring * 0.1,
        opacity: 0.5 + ring * 0.08,
      });
    }
  }

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back petals layer (offset for depth) */}
      {petals
        .filter((_, i) => i % 2 === 1)
        .map((p, i) => (
          <path
            key={`back-${i}`}
            d={p.path}
            fill={palette.secondary}
            opacity={p.opacity * 0.6}
            stroke={palette.dark}
            strokeWidth={0.3}
          />
        ))}

      {/* Front petals layer */}
      {petals
        .filter((_, i) => i % 2 === 0)
        .map((p, i) => (
          <path
            key={`front-${i}`}
            d={p.path}
            fill={p.fill}
            opacity={p.opacity}
            stroke={palette.dark}
            strokeWidth={0.4}
          />
        ))}

      {/* Remaining petals on top */}
      {petals
        .filter((_, i) => i % 2 === 1)
        .map((p, i) => (
          <path
            key={`top-${i}`}
            d={p.path}
            fill={p.fill}
            opacity={p.opacity * 0.85}
            stroke={palette.dark}
            strokeWidth={0.4}
          />
        ))}

      {/* Center disc - main */}
      <circle
        cx={cx}
        cy={cy}
        r={18}
        fill={palette.center}
        stroke={palette.dark}
        strokeWidth={0.8}
        opacity={0.95}
      />
      {/* Center disc - darker inner ring */}
      <circle
        cx={cx}
        cy={cy}
        r={14}
        fill={palette.center}
        opacity={0.6}
        stroke={palette.dark}
        strokeWidth={0.3}
      />

      {/* Seed pattern */}
      {seeds.map((s, i) => (
        <circle
          key={`seed-${i}`}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill={palette.dark}
          opacity={s.opacity}
        />
      ))}

      {/* Cross-hatch lines on center */}
      <line x1={48} y1={54} x2={72} y2={66} stroke={palette.dark} strokeWidth={0.3} opacity={0.2} />
      <line x1={48} y1={66} x2={72} y2={54} stroke={palette.dark} strokeWidth={0.3} opacity={0.2} />
      <line
        x1={54}
        y1={48}
        x2={66}
        y2={72}
        stroke={palette.dark}
        strokeWidth={0.3}
        opacity={0.15}
      />
      <line
        x1={66}
        y1={48}
        x2={54}
        y2={72}
        stroke={palette.dark}
        strokeWidth={0.3}
        opacity={0.15}
      />

      {/* Center highlight */}
      <circle cx={56} cy={56} r={3} fill="#fff" opacity={0.12} />

      {/* Watercolor edge washes */}
      <circle cx={40} cy={30} r={8} fill={palette.accent} opacity={0.1} />
      <circle cx={80} cy={78} r={7} fill={palette.accent} opacity={0.08} />
      <circle cx={36} cy={76} r={6} fill={palette.primary} opacity={0.06} />
    </svg>
  );
}
