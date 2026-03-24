import type { FlowerSVGProps } from "../types";

export function OrchidBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="orchid-sepal-grad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={palette.primary} stopOpacity={0.6} />
          <stop offset="100%" stopColor={palette.primary} stopOpacity={0.92} />
        </radialGradient>
        <radialGradient id="orchid-inner-grad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity={0.5} />
          <stop offset="100%" stopColor={palette.secondary} stopOpacity={0.88} />
        </radialGradient>
        <radialGradient id="orchid-lip-grad" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor={palette.center} stopOpacity={0.7} />
          <stop offset="60%" stopColor={palette.dark} stopOpacity={0.85} />
          <stop offset="100%" stopColor={palette.dark} stopOpacity={0.95} />
        </radialGradient>
      </defs>

      <g transform="translate(60,58)">
        {/* === 3 Outer Sepals === */}

        {/* Dorsal (top) sepal */}
        <path
          d="M0,-10 C-8,-18 -12,-36 -6,-48 C-3,-52 3,-52 6,-48 C12,-36 8,-18 0,-10Z"
          fill="url(#orchid-sepal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.25}
          opacity={0.88}
        />
        {/* Dorsal sepal vein */}
        <path
          d="M0,-12 C0,-24 0,-38 0,-47"
          fill="none"
          stroke={palette.accent}
          strokeWidth={0.5}
          strokeOpacity={0.3}
        />

        {/* Left lateral sepal */}
        <path
          d="M-4,4 C-16,4 -34,12 -44,22 C-48,26 -46,30 -42,30 C-32,28 -16,16 -4,4Z"
          fill="url(#orchid-sepal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.25}
          opacity={0.85}
        />
        {/* Left sepal vein */}
        <path
          d="M-6,6 C-18,12 -30,18 -42,26"
          fill="none"
          stroke={palette.accent}
          strokeWidth={0.45}
          strokeOpacity={0.25}
        />

        {/* Right lateral sepal */}
        <path
          d="M4,4 C16,4 34,12 44,22 C48,26 46,30 42,30 C32,28 16,16 4,4Z"
          fill="url(#orchid-sepal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.25}
          opacity={0.85}
        />
        {/* Right sepal vein */}
        <path
          d="M6,6 C18,12 30,18 42,26"
          fill="none"
          stroke={palette.accent}
          strokeWidth={0.45}
          strokeOpacity={0.25}
        />

        {/* === 2 Inner (lateral) Petals === */}

        {/* Left inner petal - rounded, broader */}
        <path
          d="M-2,-6 C-10,-14 -24,-22 -32,-18 C-38,-16 -36,-8 -30,-4 C-22,0 -10,0 -2,-6Z"
          fill="url(#orchid-inner-grad)"
          stroke={palette.dark}
          strokeWidth={0.35}
          strokeOpacity={0.2}
          opacity={0.82}
        />
        {/* Left petal delicate markings */}
        <path
          d="M-6,-6 C-14,-12 -22,-14 -28,-10"
          fill="none"
          stroke={palette.primary}
          strokeWidth={0.4}
          strokeOpacity={0.25}
        />

        {/* Right inner petal */}
        <path
          d="M2,-6 C10,-14 24,-22 32,-18 C38,-16 36,-8 30,-4 C22,0 10,0 2,-6Z"
          fill="url(#orchid-inner-grad)"
          stroke={palette.dark}
          strokeWidth={0.35}
          strokeOpacity={0.2}
          opacity={0.82}
        />
        {/* Right petal delicate markings */}
        <path
          d="M6,-6 C14,-12 22,-14 28,-10"
          fill="none"
          stroke={palette.primary}
          strokeWidth={0.4}
          strokeOpacity={0.25}
        />

        {/* === Lip / Labellum (distinctive bottom petal) === */}
        <path
          d="M0,2 C-6,6 -16,14 -18,24 C-18,30 -14,36 -8,38
             C-4,39 -1,36 0,32
             C1,36 4,39 8,38
             C14,36 18,30 18,24
             C16,14 6,6 0,2Z"
          fill="url(#orchid-lip-grad)"
          stroke={palette.dark}
          strokeWidth={0.5}
          strokeOpacity={0.3}
          opacity={0.9}
        />
        {/* Lip inner pattern - throat markings */}
        <path
          d="M0,6 C-3,10 -6,16 -6,22"
          fill="none"
          stroke={palette.center}
          strokeWidth={0.6}
          strokeOpacity={0.4}
        />
        <path
          d="M0,6 C3,10 6,16 6,22"
          fill="none"
          stroke={palette.center}
          strokeWidth={0.6}
          strokeOpacity={0.4}
        />
        {/* Lip speckles/spots */}
        <circle cx={-4} cy={18} r={0.8} fill={palette.accent} opacity={0.4} />
        <circle cx={4} cy={18} r={0.8} fill={palette.accent} opacity={0.4} />
        <circle cx={0} cy={14} r={0.7} fill={palette.accent} opacity={0.35} />
        <circle cx={-7} cy={24} r={0.6} fill={palette.accent} opacity={0.3} />
        <circle cx={7} cy={24} r={0.6} fill={palette.accent} opacity={0.3} />
        <circle cx={-2} cy={22} r={0.5} fill={palette.center} opacity={0.35} />
        <circle cx={2} cy={22} r={0.5} fill={palette.center} opacity={0.35} />
        {/* Ruffled lip edge */}
        <path
          d="M-8,36 C-6,38 -4,37 -2,38 C0,39 2,37 4,38 C6,37 8,38 8,36"
          fill="none"
          stroke={palette.dark}
          strokeWidth={0.5}
          strokeOpacity={0.25}
        />

        {/* === Column (central reproductive structure) === */}
        <ellipse cx={0} cy={-1} rx={3.5} ry={5} fill={palette.center} opacity={0.6} />
        <ellipse cx={0} cy={-2} rx={2} ry={3} fill={palette.accent} opacity={0.5} />
        <circle cx={0} cy={-3.5} r={1.2} fill={palette.dark} opacity={0.55} />
      </g>
    </svg>
  );
}
