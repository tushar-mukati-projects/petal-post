import type { FlowerSVGProps } from "../types";

export function TulipBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M60 78 C59 86, 58 96, 57 108"
        fill="none"
        stroke={palette.center}
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.85}
      />
      {/* Left leaf */}
      <path
        d="M58 92 C48 86, 36 88, 34 94 C32 100, 42 100, 56 96"
        fill={palette.center}
        opacity={0.7}
        stroke={palette.dark}
        strokeWidth={0.6}
      />
      {/* Right leaf */}
      <path
        d="M59 98 C68 92, 78 92, 82 98 C84 102, 74 104, 60 100"
        fill={palette.center}
        opacity={0.6}
        stroke={palette.dark}
        strokeWidth={0.6}
      />

      {/* Back petal - center, slightly behind */}
      <path
        d="M60 18 C52 16, 40 22, 36 38 C33 50, 38 64, 44 72 C48 78, 56 80, 60 78 C64 80, 72 78, 76 72 C82 64, 87 50, 84 38 C80 22, 68 16, 60 18 Z"
        fill={palette.secondary}
        opacity={0.35}
        stroke={palette.secondary}
        strokeWidth={0.3}
      />

      {/* Left petal */}
      <path
        d="M60 78 C54 76, 44 74, 38 66 C30 56, 28 42, 32 30 C36 20, 46 14, 54 16 C58 17, 60 20, 60 26 C58 36, 50 50, 46 60 C44 66, 48 74, 60 78 Z"
        fill={palette.primary}
        opacity={0.7}
        stroke={palette.secondary}
        strokeWidth={0.6}
      />
      {/* Left petal inner shadow */}
      <path
        d="M54 22 C50 26, 42 38, 40 50 C38 58, 42 68, 50 74"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.5}
        opacity={0.15}
      />

      {/* Right petal */}
      <path
        d="M60 78 C66 76, 76 74, 82 66 C90 56, 92 42, 88 30 C84 20, 74 14, 66 16 C62 17, 60 20, 60 26 C62 36, 70 50, 74 60 C76 66, 72 74, 60 78 Z"
        fill={palette.primary}
        opacity={0.75}
        stroke={palette.secondary}
        strokeWidth={0.6}
      />
      {/* Right petal inner shadow */}
      <path
        d="M66 22 C70 26, 78 38, 80 50 C82 58, 78 68, 70 74"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.5}
        opacity={0.15}
      />

      {/* Center petal - overlapping on top */}
      <path
        d="M60 78 C56 74, 52 66, 50 56 C48 44, 50 30, 54 22 C56 18, 58 16, 60 15 C62 16, 64 18, 66 22 C70 30, 72 44, 70 56 C68 66, 64 74, 60 78 Z"
        fill={palette.secondary}
        opacity={0.55}
        stroke={palette.dark}
        strokeWidth={0.5}
      />

      {/* Petal edge highlights - soft watercolor feel */}
      <path
        d="M46 24 C40 34, 34 48, 36 60"
        fill="none"
        stroke={palette.accent}
        strokeWidth={1.2}
        opacity={0.2}
        strokeLinecap="round"
      />
      <path
        d="M74 24 C80 34, 86 48, 84 60"
        fill="none"
        stroke={palette.accent}
        strokeWidth={1.2}
        opacity={0.2}
        strokeLinecap="round"
      />

      {/* Subtle inner vein lines */}
      <path
        d="M56 30 C54 40, 52 52, 52 64"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.4}
        opacity={0.12}
      />
      <path
        d="M64 30 C66 40, 68 52, 68 64"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.4}
        opacity={0.12}
      />
      <path
        d="M60 20 C60 34, 60 50, 60 68"
        fill="none"
        stroke={palette.dark}
        strokeWidth={0.3}
        opacity={0.1}
      />

      {/* Watercolor washes */}
      <ellipse cx={48} cy={44} rx={8} ry={14} fill={palette.accent} opacity={0.1} />
      <ellipse cx={72} cy={44} rx={8} ry={14} fill={palette.accent} opacity={0.08} />
      <ellipse cx={60} cy={36} rx={6} ry={10} fill={palette.primary} opacity={0.1} />

      {/* Top edge highlight */}
      <path
        d="M48 18 C52 14, 56 14, 60 15 C64 14, 68 14, 72 18"
        fill="none"
        stroke={palette.accent}
        strokeWidth={0.8}
        opacity={0.3}
        strokeLinecap="round"
      />
    </svg>
  );
}
