import type { FlowerSVGProps } from "../types";

export function DahliaBase({ palette, className, size = 120 }: FlowerSVGProps) {
  const cx = 60;
  const cy = 60;

  // Three concentric rings of pointed petals
  const rings = [
    {
      count: 8,
      innerR: 6,
      outerR: 20,
      width: 4.5,
      color: palette.dark,
      opacity: 0.75,
      strokeOpacity: 0.6,
    },
    {
      count: 12,
      innerR: 14,
      outerR: 36,
      width: 5.5,
      color: palette.secondary,
      opacity: 0.65,
      strokeOpacity: 0.5,
    },
    {
      count: 18,
      innerR: 22,
      outerR: 54,
      width: 6,
      color: palette.primary,
      opacity: 0.6,
      strokeOpacity: 0.4,
    },
  ];

  const ringPetals = rings.map((ring, ringIdx) => {
    const petals = Array.from({ length: ring.count }, (_, i) => {
      const baseAngle = (i * 360) / ring.count - 90;
      const offsetAngle = ringIdx * 8;
      const angle = baseAngle + offsetAngle;
      const rad = (angle * Math.PI) / 180;

      const wobble = i % 3 === 0 ? 1.5 : i % 2 === 0 ? -1 : 0.5;

      const tipX = cx + Math.cos(rad) * (ring.outerR + wobble);
      const tipY = cy + Math.sin(rad) * (ring.outerR + wobble);
      const baseX = cx + Math.cos(rad) * ring.innerR;
      const baseY = cy + Math.sin(rad) * ring.innerR;

      const perpRad = rad + Math.PI / 2;
      const hw = ring.width * 0.5;

      const lbX = baseX + Math.cos(perpRad) * (hw * 0.6);
      const lbY = baseY + Math.sin(perpRad) * (hw * 0.6);
      const rbX = baseX - Math.cos(perpRad) * (hw * 0.6);
      const rbY = baseY - Math.sin(perpRad) * (hw * 0.6);

      // Control points for the curved petal edges
      const midDist = (ring.innerR + ring.outerR) * 0.55;
      const lcX = cx + Math.cos(rad) * midDist + Math.cos(perpRad) * (hw + wobble * 0.5);
      const lcY = cy + Math.sin(rad) * midDist + Math.sin(perpRad) * (hw + wobble * 0.5);
      const rcX = cx + Math.cos(rad) * midDist - Math.cos(perpRad) * (hw + wobble * 0.5);
      const rcY = cy + Math.sin(rad) * midDist - Math.sin(perpRad) * (hw + wobble * 0.5);

      return `M ${lbX.toFixed(1)} ${lbY.toFixed(1)} Q ${lcX.toFixed(1)} ${lcY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)} Q ${rcX.toFixed(1)} ${rcY.toFixed(1)} ${rbX.toFixed(1)} ${rbY.toFixed(1)} Z`;
    });

    return {
      petals,
      color: ring.color,
      opacity: ring.opacity,
      strokeOpacity: ring.strokeOpacity,
      ringIdx,
    };
  });

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Render rings from outermost to innermost */}
      {[...ringPetals]
        .reverse()
        .map((ring) =>
          ring.petals.map((d, i) => (
            <path
              key={`ring-${ring.ringIdx}-${i}`}
              d={d}
              fill={ring.color}
              opacity={ring.opacity}
              stroke={palette.dark}
              strokeWidth={0.4}
              strokeOpacity={ring.strokeOpacity}
            />
          )),
        )}

      {/* Accent overlay on outer ring petals for variation */}
      {ringPetals[2].petals
        .filter((_, i) => i % 3 === 0)
        .map((d, i) => (
          <path key={`accent-${i}`} d={d} fill={palette.accent} opacity={0.2} />
        ))}

      {/* Center disc */}
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill={palette.center}
        opacity={0.9}
        stroke={palette.dark}
        strokeWidth={0.5}
        strokeOpacity={0.3}
      />
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill={palette.center}
        opacity={0.7}
        stroke={palette.secondary}
        strokeWidth={0.3}
        strokeOpacity={0.2}
      />
      {/* Center detail dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = 3;
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={`cdot-${i}`}
            cx={cx + Math.cos(rad) * r}
            cy={cy + Math.sin(rad) * r}
            r={0.7}
            fill={palette.dark}
            opacity={0.3}
          />
        );
      })}
      {/* Highlight */}
      <circle cx={58} cy={58} r={2} fill="#fff" opacity={0.15} />

      {/* Watercolor texture washes */}
      <circle cx={42} cy={38} r={10} fill={palette.accent} opacity={0.06} />
      <circle cx={80} cy={76} r={9} fill={palette.accent} opacity={0.05} />
      <circle cx={38} cy={78} r={8} fill={palette.primary} opacity={0.04} />
      <circle cx={78} cy={40} r={7} fill={palette.secondary} opacity={0.05} />
    </svg>
  );
}
