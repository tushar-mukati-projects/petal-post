import type { FlowerSVGProps } from "../types";

export function DaisyBase({ palette, className, size = 120 }: FlowerSVGProps) {
  const cx = 60;
  const cy = 60;
  const petalCount = 14;
  const innerR = 12;
  const outerR = 50;

  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount - 90;
    const rad = (angle * Math.PI) / 180;
    const wobble = i % 3 === 0 ? 1.5 : i % 3 === 1 ? -1 : 0.5;
    const lenVar = i % 2 === 0 ? 2 : -1.5;

    const tipX = cx + Math.cos(rad) * (outerR + lenVar);
    const tipY = cy + Math.sin(rad) * (outerR + lenVar);
    const baseX = cx + Math.cos(rad) * innerR;
    const baseY = cy + Math.sin(rad) * innerR;

    const perpRad = rad + Math.PI / 2;
    const petalWidth = 8;

    const lbX = baseX + Math.cos(perpRad) * (petalWidth * 0.35);
    const lbY = baseY + Math.sin(perpRad) * (petalWidth * 0.35);
    const rbX = baseX - Math.cos(perpRad) * (petalWidth * 0.35);
    const rbY = baseY - Math.sin(perpRad) * (petalWidth * 0.35);

    // Wide rounded mid-control points
    const midDist = (innerR + outerR) * 0.5;
    const lcpX = cx + Math.cos(rad) * midDist + Math.cos(perpRad) * (petalWidth + wobble);
    const lcpY = cy + Math.sin(rad) * midDist + Math.sin(perpRad) * (petalWidth + wobble);
    const rcpX = cx + Math.cos(rad) * midDist - Math.cos(perpRad) * (petalWidth + wobble);
    const rcpY = cy + Math.sin(rad) * midDist - Math.sin(perpRad) * (petalWidth + wobble);

    // Rounded tip using cubic curve
    const tipCtrlDist = outerR * 0.88;
    const tipLX = cx + Math.cos(rad) * tipCtrlDist + Math.cos(perpRad) * 3.5;
    const tipLY = cy + Math.sin(rad) * tipCtrlDist + Math.sin(perpRad) * 3.5;
    const tipRX = cx + Math.cos(rad) * tipCtrlDist - Math.cos(perpRad) * 3.5;
    const tipRY = cy + Math.sin(rad) * tipCtrlDist - Math.sin(perpRad) * 3.5;

    const path = [
      `M ${lbX.toFixed(1)} ${lbY.toFixed(1)}`,
      `C ${lcpX.toFixed(1)} ${lcpY.toFixed(1)} ${tipLX.toFixed(1)} ${tipLY.toFixed(1)} ${tipX.toFixed(1)} ${tipY.toFixed(1)}`,
      `C ${tipRX.toFixed(1)} ${tipRY.toFixed(1)} ${rcpX.toFixed(1)} ${rcpY.toFixed(1)} ${rbX.toFixed(1)} ${rbY.toFixed(1)}`,
      "Z",
    ].join(" ");

    return { path, wobble, i };
  });

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow/back petals layer for depth */}
      {petals
        .filter((_, idx) => idx % 2 === 1)
        .map((p) => (
          <path
            key={`shadow-${p.i}`}
            d={p.path}
            fill={palette.accent}
            opacity={0.35}
            stroke={palette.dark}
            strokeWidth={0.25}
          />
        ))}

      {/* Main petals */}
      {petals.map((p) => (
        <path
          key={`petal-${p.i}`}
          d={p.path}
          fill={palette.primary}
          opacity={0.8}
          stroke={palette.secondary}
          strokeWidth={0.5}
          strokeOpacity={0.5}
        />
      ))}

      {/* Petal vein lines - subtle */}
      {petals
        .filter((_, idx) => idx % 2 === 0)
        .map((p) => {
          const angle = (p.i * 360) / petalCount - 90;
          const rad = (angle * Math.PI) / 180;
          const startX = cx + Math.cos(rad) * (innerR + 2);
          const startY = cy + Math.sin(rad) * (innerR + 2);
          const endX = cx + Math.cos(rad) * (outerR - 6);
          const endY = cy + Math.sin(rad) * (outerR - 6);
          return (
            <line
              key={`vein-${p.i}`}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={palette.dark}
              strokeWidth={0.3}
              opacity={0.1}
              strokeLinecap="round"
            />
          );
        })}

      {/* Center disc - layered for depth */}
      <circle
        cx={cx}
        cy={cy}
        r={13}
        fill={palette.center}
        opacity={0.95}
        stroke={palette.dark}
        strokeWidth={0.6}
        strokeOpacity={0.25}
      />
      <circle cx={cx} cy={cy} r={10} fill={palette.center} opacity={0.7} />
      {/* Stippled texture on center */}
      {Array.from({ length: 20 }, (_, i) => {
        const a = (i * 137.5 * Math.PI) / 180; // golden angle for natural distribution
        const r = 2.5 + i * 0.45;
        if (r > 11) return null;
        return (
          <circle
            key={`stip-${i}`}
            cx={cx + Math.cos(a) * r}
            cy={cy + Math.sin(a) * r}
            r={0.6 + (i % 3) * 0.2}
            fill={palette.dark}
            opacity={0.2 + (i % 4) * 0.05}
          />
        );
      })}

      {/* Center highlight */}
      <circle cx={57} cy={57} r={3.5} fill="#fff" opacity={0.15} />
      <circle cx={58} cy={58} r={1.5} fill="#fff" opacity={0.1} />

      {/* Watercolor washes */}
      <circle cx={40} cy={34} r={10} fill={palette.primary} opacity={0.05} />
      <circle cx={82} cy={74} r={9} fill={palette.primary} opacity={0.04} />
      <circle cx={36} cy={80} r={8} fill={palette.accent} opacity={0.04} />
    </svg>
  );
}
