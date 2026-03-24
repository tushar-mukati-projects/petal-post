import type { FlowerSVGProps } from "../types";

export function RoseBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outermost petals - lightest, largest */}
      <path
        d="M60 18 C38 16, 14 30, 16 54 C18 72, 30 82, 44 80 Q52 78, 60 68"
        fill={palette.accent}
        opacity={0.55}
        stroke={palette.primary}
        strokeWidth={0.5}
      />
      <path
        d="M60 18 C82 14, 108 28, 106 54 C104 74, 92 84, 78 80 Q68 76, 60 68"
        fill={palette.accent}
        opacity={0.5}
        stroke={palette.primary}
        strokeWidth={0.5}
      />
      <path
        d="M60 102 C36 106, 12 90, 16 66 C18 52, 28 42, 42 44 Q52 46, 60 56"
        fill={palette.primary}
        opacity={0.45}
        stroke={palette.secondary}
        strokeWidth={0.5}
      />
      <path
        d="M60 102 C86 108, 110 90, 106 66 C104 50, 94 42, 80 44 Q68 48, 60 56"
        fill={palette.primary}
        opacity={0.5}
        stroke={palette.secondary}
        strokeWidth={0.5}
      />
      <path
        d="M22 44 C14 58, 18 80, 36 90 C48 96, 56 90, 60 78 Q58 66, 48 56"
        fill={palette.accent}
        opacity={0.4}
        stroke={palette.primary}
        strokeWidth={0.4}
      />

      {/* Middle layer petals */}
      <path
        d="M60 26 C44 24, 28 36, 30 52 C31 62, 40 70, 50 68 Q56 66, 60 58"
        fill={palette.primary}
        opacity={0.65}
        stroke={palette.secondary}
        strokeWidth={0.6}
      />
      <path
        d="M60 26 C76 22, 94 34, 92 52 C91 64, 82 72, 72 68 Q64 64, 60 58"
        fill={palette.primary}
        opacity={0.6}
        stroke={palette.secondary}
        strokeWidth={0.6}
      />
      <path
        d="M60 92 C42 96, 26 84, 28 68 C29 58, 38 50, 50 52 Q56 54, 60 60"
        fill={palette.secondary}
        opacity={0.6}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 92 C78 96, 96 84, 94 68 C93 56, 84 50, 72 52 Q64 54, 60 60"
        fill={palette.secondary}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M96 52 C100 66, 92 82, 76 86 C66 88, 60 80, 58 70 Q58 62, 64 56"
        fill={palette.primary}
        opacity={0.5}
        stroke={palette.secondary}
        strokeWidth={0.4}
      />

      {/* Inner petals - darker, tighter curl */}
      <path
        d="M60 34 C50 32, 38 40, 40 52 C41 58, 46 64, 54 62 Q58 60, 60 56"
        fill={palette.secondary}
        opacity={0.75}
        stroke={palette.dark}
        strokeWidth={0.6}
      />
      <path
        d="M60 34 C70 30, 84 40, 82 52 C81 60, 76 66, 68 62 Q62 58, 60 56"
        fill={palette.secondary}
        opacity={0.7}
        stroke={palette.dark}
        strokeWidth={0.6}
      />
      <path
        d="M60 82 C48 86, 36 78, 38 66 C39 60, 44 54, 54 56 Q58 58, 60 60"
        fill={palette.dark}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 82 C72 86, 86 78, 84 66 C83 58, 78 54, 68 56 Q62 58, 60 60"
        fill={palette.dark}
        opacity={0.5}
        stroke={palette.dark}
        strokeWidth={0.5}
      />

      {/* Innermost spiral petals */}
      <path
        d="M60 42 C54 40, 46 46, 48 54 C49 58, 52 62, 58 60 Q60 58, 60 56"
        fill={palette.dark}
        opacity={0.7}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 42 C66 38, 76 46, 74 54 C73 60, 70 64, 64 60 Q60 56, 60 56"
        fill={palette.dark}
        opacity={0.65}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M56 48 C52 50, 50 56, 54 60 C56 62, 58 62, 60 58"
        fill={palette.secondary}
        opacity={0.8}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M64 48 C68 50, 72 56, 68 60 C66 62, 62 62, 60 58"
        fill={palette.secondary}
        opacity={0.75}
        stroke={palette.dark}
        strokeWidth={0.4}
      />

      {/* Center highlight - the spiral core */}
      <ellipse cx={60} cy={57} rx={5} ry={4.5} fill={palette.center} opacity={0.8} />
      <ellipse cx={59} cy={56} rx={2.5} ry={2} fill={palette.center} opacity={0.95} />
      {/* Tiny spiral suggestion in center */}
      <path
        d="M58 56 C58 54, 61 53, 62 55 C63 57, 61 59, 59 58"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.6}
        opacity={0.4}
      />

      {/* Watercolor texture overlays */}
      <circle cx={42} cy={42} r={14} fill={palette.accent} opacity={0.08} />
      <circle cx={78} cy={48} r={12} fill={palette.primary} opacity={0.07} />
      <circle cx={52} cy={76} r={10} fill={palette.secondary} opacity={0.06} />
      <circle cx={70} cy={72} r={11} fill={palette.accent} opacity={0.05} />
    </svg>
  );
}
