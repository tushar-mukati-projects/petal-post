import type { FlowerSVGProps } from "../types";

export function LilyBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lily-petal-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity={0.7} />
          <stop offset="100%" stopColor={palette.primary} stopOpacity={0.9} />
        </radialGradient>
        <radialGradient id="lily-center-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.center} stopOpacity={0.9} />
          <stop offset="100%" stopColor={palette.dark} stopOpacity={0.8} />
        </radialGradient>
      </defs>

      <g transform="translate(60,60)">
        {/* 6 recurved petals radiating from center */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            {/* Main petal body - recurved/curved back shape */}
            <path
              d="M0,-4 C8,-14 14,-30 10,-48 C8,-54 4,-56 0,-54 C-4,-56 -8,-54 -10,-48 C-14,-30 -8,-14 0,-4Z"
              fill="url(#lily-petal-grad)"
              stroke={palette.dark}
              strokeWidth={0.4}
              strokeOpacity={0.3}
              opacity={0.85}
            />
            {/* Petal highlight/vein */}
            <path
              d="M0,-6 C1,-20 1,-36 0,-50"
              fill="none"
              stroke={palette.accent}
              strokeWidth={0.6}
              strokeOpacity={0.4}
            />
            {/* Recurved tip curling back */}
            <path
              d="M-6,-46 C-4,-54 4,-54 6,-46"
              fill="none"
              stroke={palette.accent}
              strokeWidth={0.5}
              strokeOpacity={0.35}
            />
            {/* Speckles/dots on petal */}
            <circle cx={-3} cy={-22} r={0.7} fill={palette.dark} opacity={0.35} />
            <circle cx={2} cy={-28} r={0.6} fill={palette.dark} opacity={0.3} />
            <circle cx={-1} cy={-34} r={0.5} fill={palette.dark} opacity={0.25} />
            <circle cx={3} cy={-18} r={0.6} fill={palette.dark} opacity={0.3} />
            <circle cx={-4} cy={-38} r={0.5} fill={palette.dark} opacity={0.2} />
            <circle cx={1} cy={-15} r={0.5} fill={palette.dark} opacity={0.25} />
            {/* Second layer of lighter speckles */}
            <circle cx={4} cy={-24} r={0.4} fill={palette.accent} opacity={0.3} />
            <circle cx={-2} cy={-40} r={0.4} fill={palette.accent} opacity={0.25} />
          </g>
        ))}

        {/* Soft inner glow behind stamens */}
        <circle cx={0} cy={0} r={8} fill={palette.center} opacity={0.25} />

        {/* 4 stamens with anthers */}
        {[30, 110, 200, 310].map((angle, i) => (
          <g key={`stamen-${i}`} transform={`rotate(${angle})`}>
            {/* Filament */}
            <path
              d={`M0,0 C${1 + i * 0.3},-6 ${-0.5 + i * 0.2},-12 ${0.5},-16`}
              fill="none"
              stroke={palette.center}
              strokeWidth={0.7}
              strokeOpacity={0.7}
              strokeLinecap="round"
            />
            {/* Anther (pollen-bearing tip) */}
            <ellipse
              cx={0.5}
              cy={-17}
              rx={1.4}
              ry={2.2}
              fill={palette.dark}
              opacity={0.8}
              transform={`rotate(${10 - i * 5}, 0.5, -17)`}
            />
          </g>
        ))}

        {/* Central pistil */}
        <circle cx={0} cy={0} r={2.2} fill={palette.center} opacity={0.7} />
        <circle cx={0} cy={0} r={1.2} fill={palette.dark} opacity={0.5} />
      </g>
    </svg>
  );
}
