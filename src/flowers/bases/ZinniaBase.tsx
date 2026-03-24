import type { FlowerSVGProps } from "../types";

export function ZinniaBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="zinnia-center-grad" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor={palette.center} stopOpacity={0.9} />
          <stop offset="100%" stopColor={palette.dark} stopOpacity={0.95} />
        </radialGradient>
      </defs>

      <g transform="translate(60,60)">
        {/* === Outermost row - wide rectangular-ish petals === */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = i * 25.71 + 6;
          return (
            <g key={`outer-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-4,-6 C-4.5,-12 -5,-26 -4.5,-36
                   C-4,-39 -3,-40 -1.5,-40
                   L1.5,-40
                   C3,-40 4,-39 4.5,-36
                   C5,-26 4.5,-12 4,-6Z"
                fill={palette.primary}
                stroke={palette.dark}
                strokeWidth={0.35}
                strokeOpacity={0.15}
                opacity={0.78}
              />
              {/* Petal highlight stripe */}
              <path
                d="M0,-8 L0,-38"
                stroke={palette.accent}
                strokeWidth={0.6}
                strokeOpacity={0.2}
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* === Middle row - slightly shorter, offset petals === */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = i * 25.71 + 19;
          return (
            <g key={`mid-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-3.5,-6 C-4,-10 -4.5,-20 -4,-28
                   C-3.5,-31 -2.5,-32 -1.2,-32
                   L1.2,-32
                   C2.5,-32 3.5,-31 4,-28
                   C4.5,-20 4,-10 3.5,-6Z"
                fill={palette.secondary}
                stroke={palette.dark}
                strokeWidth={0.3}
                strokeOpacity={0.12}
                opacity={0.82}
              />
              {/* Petal center vein */}
              <path
                d="M0,-8 L0,-30"
                stroke={palette.primary}
                strokeWidth={0.5}
                strokeOpacity={0.15}
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* === Inner row - short petals close to center === */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30 + 8;
          return (
            <g key={`inner-${i}`} transform={`rotate(${angle})`}>
              <path
                d="M-3,-6 C-3.5,-9 -3.8,-14 -3.2,-18
                   C-2.8,-20 -2,-21 -1,-21
                   L1,-21
                   C2,-21 2.8,-20 3.2,-18
                   C3.8,-14 3.5,-9 3,-6Z"
                fill={palette.dark}
                stroke={palette.secondary}
                strokeWidth={0.25}
                strokeOpacity={0.15}
                opacity={0.78}
              />
            </g>
          );
        })}

        {/* === Prominent center disc === */}
        <circle cx={0} cy={0} r={10} fill="url(#zinnia-center-grad)" opacity={0.92} />
        <circle cx={0} cy={0} r={8.5} fill={palette.center} opacity={0.4} />

        {/* Center texture - tiny disc florets arranged in spiral-like rings */}
        {/* Outer ring of center florets */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30 * (Math.PI / 180);
          const x = Math.cos(angle) * 7;
          const y = Math.sin(angle) * 7;
          return (
            <circle
              key={`cf-outer-${i}`}
              cx={x}
              cy={y}
              r={0.9}
              fill={palette.accent}
              opacity={0.55}
            />
          );
        })}

        {/* Middle ring */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 + 22) * (Math.PI / 180);
          const x = Math.cos(angle) * 4.5;
          const y = Math.sin(angle) * 4.5;
          return (
            <circle key={`cf-mid-${i}`} cx={x} cy={y} r={0.8} fill={palette.accent} opacity={0.5} />
          );
        })}

        {/* Inner ring */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i * 72 + 10) * (Math.PI / 180);
          const x = Math.cos(angle) * 2.2;
          const y = Math.sin(angle) * 2.2;
          return (
            <circle
              key={`cf-inner-${i}`}
              cx={x}
              cy={y}
              r={0.6}
              fill={palette.secondary}
              opacity={0.5}
            />
          );
        })}

        {/* Center highlight */}
        <circle cx={-1} cy={-1} r={2.5} fill={palette.accent} opacity={0.15} />

        {/* Subtle watercolor washes */}
        <circle cx={0} cy={0} r={28} fill={palette.accent} opacity={0.04} />
        <circle cx={3} cy={-2} r={16} fill={palette.primary} opacity={0.04} />
      </g>
    </svg>
  );
}
