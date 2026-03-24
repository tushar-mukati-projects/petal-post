import type { FlowerSVGProps } from "../types";

export function CarnationBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="carn-outer-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity={0.5} />
          <stop offset="100%" stopColor={palette.primary} stopOpacity={0.85} />
        </radialGradient>
        <radialGradient id="carn-inner-grad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={palette.secondary} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.dark} stopOpacity={0.8} />
        </radialGradient>
      </defs>

      <g transform="translate(60,60)">
        {/* === Outermost layer - large ruffled petals === */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={`outer-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M-4,-2 C-8,-10 -14,-28 -12,-36
                 C-11,-38 -9,-39 -7,-38 C-5,-36 -4,-34 -3,-36
                 C-2,-38 0,-39 2,-38 C3,-36 3,-34 4,-36
                 C5,-38 7,-39 9,-38 C11,-37 12,-34 11,-30
                 C10,-24 6,-12 3,-2Z"
              fill="url(#carn-outer-grad)"
              stroke={palette.dark}
              strokeWidth={0.3}
              strokeOpacity={0.15}
              opacity={0.78}
            />
          </g>
        ))}

        {/* === Second layer - medium ruffled petals, rotated offset === */}
        {[22, 67, 112, 157, 202, 247, 292, 337].map((angle, i) => (
          <g key={`mid-outer-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M-3,-2 C-7,-8 -11,-22 -10,-28
                 C-9,-30 -7,-31 -5,-30 C-4,-28 -3,-27 -2,-29
                 C-1,-31 1,-31 2,-29 C3,-27 4,-28 5,-30
                 C7,-31 9,-30 10,-28
                 C11,-22 7,-8 3,-2Z"
              fill={palette.primary}
              stroke={palette.dark}
              strokeWidth={0.3}
              strokeOpacity={0.12}
              opacity={0.82}
            />
            {/* Frilly edge highlight */}
            <path
              d="M-9,-28 C-8,-30 -6,-29 -4,-30 C-2,-31 0,-30 2,-31 C4,-30 6,-29 8,-30 C9,-29 10,-28 10,-27"
              fill="none"
              stroke={palette.accent}
              strokeWidth={0.4}
              strokeOpacity={0.3}
            />
          </g>
        ))}

        {/* === Middle layer === */}
        {[10, 50, 90, 130, 170, 210, 250, 290, 330].map((angle, i) => (
          <g key={`mid-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M-3,-1 C-5,-6 -8,-16 -7,-20
                 C-6,-22 -4,-23 -3,-22 C-2,-20 -1,-21 0,-22
                 C1,-23 3,-22 4,-20 C5,-19 7,-18 7,-20
                 C8,-16 5,-6 2,-1Z"
              fill={palette.secondary}
              stroke={palette.dark}
              strokeWidth={0.25}
              strokeOpacity={0.12}
              opacity={0.8}
            />
          </g>
        ))}

        {/* === Inner layer - tight ruffled petals === */}
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
          <g key={`inner-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M-2,-1 C-4,-4 -6,-10 -5,-14
                 C-4,-16 -3,-16 -2,-15 C-1,-14 0,-15 1,-16
                 C2,-16 3,-15 4,-13 C5,-10 3,-4 1,-1Z"
              fill="url(#carn-inner-grad)"
              stroke={palette.dark}
              strokeWidth={0.2}
              strokeOpacity={0.1}
              opacity={0.82}
            />
          </g>
        ))}

        {/* === Innermost center cluster === */}
        {[15, 75, 135, 195, 255, 315].map((angle, i) => (
          <g key={`center-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M-1,0 C-2,-2 -3,-6 -2,-8
                 C-1,-9 1,-9 2,-8
                 C3,-6 2,-2 1,0Z"
              fill={palette.dark}
              stroke={palette.secondary}
              strokeWidth={0.2}
              strokeOpacity={0.2}
              opacity={0.75}
            />
          </g>
        ))}

        {/* Soft watercolor wash overlays for depth */}
        <circle cx={0} cy={0} r={18} fill={palette.accent} opacity={0.06} />
        <circle cx={-4} cy={-3} r={10} fill={palette.secondary} opacity={0.08} />
        <circle cx={3} cy={2} r={8} fill={palette.primary} opacity={0.06} />
      </g>
    </svg>
  );
}
