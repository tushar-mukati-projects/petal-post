import type { FlowerSVGProps } from "../types";

export function PeonyBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Outer ruffled petals (loose, light) ── */}
      <path
        d="M60 10 C42 8, 18 22, 20 46 C21 56, 28 62, 38 60 Q50 56, 60 48"
        fill={palette.accent}
        opacity={0.45}
        stroke={palette.primary}
        strokeWidth={0.5}
      />
      <path
        d="M60 10 C78 6, 104 20, 102 46 C101 58, 94 64, 84 60 Q72 54, 60 48"
        fill={palette.accent}
        opacity={0.4}
        stroke={palette.primary}
        strokeWidth={0.5}
      />
      <path
        d="M106 56 C112 72, 104 92, 84 98 C72 102, 64 94, 62 82 Q62 70, 68 60"
        fill={palette.primary}
        opacity={0.45}
        stroke={palette.secondary}
        strokeWidth={0.4}
      />
      <path
        d="M14 56 C8 72, 16 94, 36 100 C48 104, 56 94, 58 82 Q58 70, 52 60"
        fill={palette.primary}
        opacity={0.42}
        stroke={palette.secondary}
        strokeWidth={0.4}
      />
      <path
        d="M60 110 C40 114, 16 100, 18 76 C19 64, 28 56, 40 58 Q52 62, 60 70"
        fill={palette.accent}
        opacity={0.4}
        stroke={palette.primary}
        strokeWidth={0.4}
      />
      <path
        d="M60 110 C80 114, 106 100, 104 76 C103 64, 94 56, 82 58 Q70 62, 60 70"
        fill={palette.primary}
        opacity={0.45}
        stroke={palette.secondary}
        strokeWidth={0.4}
      />
      {/* Extra outer ruffles */}
      <path
        d="M26 30 C16 38, 12 56, 22 68 C28 76, 38 72, 44 64 Q48 56, 46 46"
        fill={palette.accent}
        opacity={0.3}
        stroke={palette.primary}
        strokeWidth={0.3}
      />
      <path
        d="M94 30 C104 38, 108 56, 98 68 C92 76, 82 72, 76 64 Q72 56, 74 46"
        fill={palette.accent}
        opacity={0.28}
        stroke={palette.primary}
        strokeWidth={0.3}
      />

      {/* ── Middle layer petals ── */}
      <path
        d="M60 20 C46 18, 28 32, 30 50 C31 60, 40 66, 50 62 Q56 58, 60 52"
        fill={palette.secondary}
        opacity={0.6}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 20 C74 16, 94 30, 92 50 C91 62, 82 68, 72 62 Q64 56, 60 52"
        fill={palette.secondary}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 100 C44 104, 26 90, 28 70 C29 60, 38 52, 50 56 Q56 60, 60 66"
        fill={palette.primary}
        opacity={0.55}
        stroke={palette.secondary}
        strokeWidth={0.5}
      />
      <path
        d="M60 100 C76 104, 96 90, 94 70 C93 58, 84 52, 72 56 Q64 60, 60 66"
        fill={palette.primary}
        opacity={0.5}
        stroke={palette.secondary}
        strokeWidth={0.5}
      />
      <path
        d="M100 60 C104 74, 94 90, 78 92 C68 94, 62 84, 62 74 Q64 66, 68 60"
        fill={palette.secondary}
        opacity={0.5}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M20 60 C16 74, 26 90, 42 92 C52 94, 58 84, 58 74 Q56 66, 52 60"
        fill={palette.secondary}
        opacity={0.48}
        stroke={palette.dark}
        strokeWidth={0.4}
      />

      {/* ── Inner tight petals (dark, dense) ── */}
      <path
        d="M60 32 C50 30, 38 40, 40 52 C41 58, 48 64, 56 60 Q58 56, 60 52"
        fill={palette.dark}
        opacity={0.5}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 32 C70 28, 84 38, 82 52 C81 60, 74 66, 66 60 Q62 54, 60 52"
        fill={palette.dark}
        opacity={0.45}
        stroke={palette.dark}
        strokeWidth={0.5}
      />
      <path
        d="M60 84 C48 88, 36 80, 38 66 C39 60, 46 54, 56 58 Q58 60, 60 64"
        fill={palette.dark}
        opacity={0.45}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M60 84 C72 88, 86 80, 84 66 C83 58, 76 54, 66 58 Q62 60, 60 64"
        fill={palette.dark}
        opacity={0.4}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M44 44 C38 50, 38 62, 46 68 C50 72, 56 68, 58 62 Q58 56, 54 50"
        fill={palette.secondary}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M76 44 C82 50, 82 62, 74 68 C70 72, 64 68, 62 62 Q62 56, 66 50"
        fill={palette.secondary}
        opacity={0.5}
        stroke={palette.dark}
        strokeWidth={0.4}
      />

      {/* ── Innermost fold ── */}
      <path
        d="M56 46 C52 50, 50 56, 54 60 C56 62, 60 60, 60 56"
        fill={palette.dark}
        opacity={0.6}
        stroke={palette.dark}
        strokeWidth={0.4}
      />
      <path
        d="M64 46 C68 50, 70 56, 66 60 C64 62, 60 60, 60 56"
        fill={palette.dark}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.4}
      />

      {/* ── Yellow center ── */}
      <ellipse cx={60} cy={58} rx={5} ry={4} fill={palette.center} opacity={0.85} />
      <ellipse cx={59} cy={57} rx={2.5} ry={2} fill={palette.center} opacity={0.95} />
      {/* Tiny stamens */}
      <circle cx={57} cy={55} r={0.8} fill={palette.center} opacity={0.9} />
      <circle cx={63} cy={56} r={0.8} fill={palette.center} opacity={0.85} />
      <circle cx={60} cy={54} r={0.7} fill={palette.center} opacity={0.8} />
      <circle cx={58} cy={59} r={0.6} fill={palette.center} opacity={0.7} />
      <circle cx={62} cy={59} r={0.6} fill={palette.center} opacity={0.75} />

      {/* Watercolor texture overlays */}
      <circle cx={38} cy={36} r={12} fill={palette.accent} opacity={0.06} />
      <circle cx={82} cy={40} r={10} fill={palette.accent} opacity={0.05} />
      <circle cx={44} cy={82} r={9} fill={palette.primary} opacity={0.05} />
      <circle cx={76} cy={80} r={11} fill={palette.primary} opacity={0.04} />
      <circle cx={60} cy={60} r={20} fill={palette.accent} opacity={0.03} />
    </svg>
  );
}
