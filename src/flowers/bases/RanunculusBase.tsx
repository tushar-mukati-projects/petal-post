import type { FlowerSVGProps } from "../types";

export function RanunculusBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="ranunc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity={0.3} />
          <stop offset="100%" stopColor={palette.primary} stopOpacity={0} />
        </radialGradient>
      </defs>

      <g transform="translate(60,60)">
        {/* Soft background glow */}
        <circle cx={0} cy={0} r={44} fill="url(#ranunc-glow)" />

        {/* === Outermost ring - largest petals === */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = i * 36 + 5;
          return (
            <g key={`r5-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-5,-2 C-7,-10 -10,-28 -8,-36
                   C-6,-40 -2,-42 0,-40
                   C2,-42 6,-40 8,-36
                   C10,-28 7,-10 5,-2Z"
                fill={palette.primary}
                stroke={palette.dark}
                strokeWidth={0.3}
                strokeOpacity={0.12}
                opacity={0.72}
              />
            </g>
          );
        })}

        {/* === Ring 4 === */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = i * 36 + 22;
          return (
            <g key={`r4-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-4,-2 C-6,-8 -8,-22 -7,-28
                   C-5,-32 -2,-33 0,-31
                   C2,-33 5,-32 7,-28
                   C8,-22 6,-8 4,-2Z"
                fill={palette.accent}
                stroke={palette.dark}
                strokeWidth={0.25}
                strokeOpacity={0.1}
                opacity={0.74}
              />
            </g>
          );
        })}

        {/* === Ring 3 - medium petals === */}
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = i * 40 + 10;
          return (
            <g key={`r3-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-3,-1 C-5,-6 -7,-16 -5,-22
                   C-4,-25 -1,-26 0,-24
                   C1,-26 4,-25 5,-22
                   C7,-16 5,-6 3,-1Z"
                fill={palette.primary}
                stroke={palette.dark}
                strokeWidth={0.25}
                strokeOpacity={0.1}
                opacity={0.78}
              />
            </g>
          );
        })}

        {/* === Ring 2 === */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 + 12;
          return (
            <g key={`r2-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-2.5,-1 C-4,-4 -5,-11 -4,-16
                   C-3,-18 -1,-19 0,-17
                   C1,-19 3,-18 4,-16
                   C5,-11 4,-4 2.5,-1Z"
                fill={palette.secondary}
                stroke={palette.dark}
                strokeWidth={0.2}
                strokeOpacity={0.1}
                opacity={0.8}
              />
            </g>
          );
        })}

        {/* === Ring 1 - tight inner petals === */}
        {Array.from({ length: 7 }).map((_, i) => {
          const angle = i * 51.4 + 4;
          return (
            <g key={`r1-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-2,0 C-3,-3 -4,-7 -3,-10
                   C-2,-12 -0.5,-12.5 0,-11
                   C0.5,-12.5 2,-12 3,-10
                   C4,-7 3,-3 2,0Z"
                fill={palette.secondary}
                stroke={palette.dark}
                strokeWidth={0.2}
                strokeOpacity={0.1}
                opacity={0.82}
              />
            </g>
          );
        })}

        {/* === Innermost tiny petals === */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = i * 60 + 15;
          return (
            <g key={`r0-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-1.2,0 C-2,-2 -2.5,-4.5 -1.8,-6.5
                   C-1,-7.5 0,-7.5 0.5,-6.5
                   C1,-7.5 2,-7 2.2,-6
                   C2.8,-4 2,-2 1.2,0Z"
                fill={palette.dark}
                stroke={palette.secondary}
                strokeWidth={0.15}
                strokeOpacity={0.15}
                opacity={0.8}
              />
            </g>
          );
        })}

        {/* Central bud/nub */}
        <circle cx={0} cy={0} r={3.5} fill={palette.dark} opacity={0.65} />
        <circle cx={0} cy={0} r={2} fill={palette.center} opacity={0.55} />
        <circle cx={-0.5} cy={-0.5} r={1} fill={palette.accent} opacity={0.3} />

        {/* Watercolor soft washes between layers */}
        <circle cx={0} cy={0} r={30} fill={palette.accent} opacity={0.04} />
        <circle cx={2} cy={-2} r={16} fill={palette.secondary} opacity={0.06} />
        <circle cx={-1} cy={1} r={8} fill={palette.dark} opacity={0.05} />
      </g>
    </svg>
  );
}
