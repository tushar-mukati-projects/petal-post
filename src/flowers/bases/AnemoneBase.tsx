import type { FlowerSVGProps } from "../types";

export function AnemoneBase({ palette, className, size = 120 }: FlowerSVGProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="anemone-petal-grad" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity={0.65} />
          <stop offset="100%" stopColor={palette.primary} stopOpacity={0.92} />
        </radialGradient>
        <radialGradient id="anemone-center-grad" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor={palette.center} stopOpacity={0.9} />
          <stop offset="100%" stopColor={palette.dark} stopOpacity={0.95} />
        </radialGradient>
      </defs>

      <g transform="translate(60,60)">
        {/* === 6 broad rounded petals === */}

        {/* Petal 1 - top */}
        <path
          d="M-3,-6 C-6,-14 -16,-34 -14,-42 C-12,-48 -4,-50 0,-46 C4,-50 12,-48 14,-42 C16,-34 6,-14 3,-6Z"
          fill="url(#anemone-petal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.88}
        />

        {/* Petal 2 - top right */}
        <path
          d="M5,-3 C12,-8 30,-22 38,-20 C44,-18 46,-10 42,-6 C38,0 16,6 5,3Z"
          fill={palette.primary}
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.82}
        />
        <path
          d="M5,-3 C12,-8 30,-22 38,-20 C44,-18 46,-10 42,-6 C38,0 16,6 5,3Z"
          fill={palette.accent}
          opacity={0.2}
        />

        {/* Petal 3 - bottom right */}
        <path
          d="M4,4 C10,10 24,28 22,36 C20,42 12,44 8,40 C2,36 -2,14 0,4Z"
          fill="url(#anemone-petal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.85}
        />

        {/* Petal 4 - bottom */}
        <path
          d="M3,6 C4,14 6,32 2,40 C0,44 -4,46 -6,42 C-10,34 -8,14 -3,6Z"
          fill={palette.primary}
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.8}
        />
        <path
          d="M3,6 C4,14 6,32 2,40 C0,44 -4,46 -6,42 C-10,34 -8,14 -3,6Z"
          fill={palette.accent}
          opacity={0.15}
        />

        {/* Petal 5 - bottom left */}
        <path
          d="M-4,4 C-10,10 -24,28 -28,34 C-30,40 -26,44 -20,42 C-14,38 -6,16 -2,6Z"
          fill="url(#anemone-petal-grad)"
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.84}
        />

        {/* Petal 6 - top left */}
        <path
          d="M-5,-3 C-12,-8 -30,-22 -38,-20 C-44,-18 -46,-10 -42,-6 C-38,0 -16,6 -5,3Z"
          fill={palette.primary}
          stroke={palette.dark}
          strokeWidth={0.4}
          strokeOpacity={0.2}
          opacity={0.82}
        />
        <path
          d="M-5,-3 C-12,-8 -30,-22 -38,-20 C-44,-18 -46,-10 -42,-6 C-38,0 -16,6 -5,3Z"
          fill={palette.accent}
          opacity={0.18}
        />

        {/* Soft petal veins */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <g key={`vein-${i}`} transform={`rotate(${angle})`}>
            <path
              d="M0,-6 C0.5,-16 0,-28 0,-38"
              fill="none"
              stroke={palette.dark}
              strokeWidth={0.35}
              strokeOpacity={0.15}
            />
          </g>
        ))}

        {/* === Prominent dark center === */}
        <circle cx={0} cy={0} r={11} fill={palette.dark} opacity={0.85} />
        <circle cx={0} cy={0} r={9} fill="url(#anemone-center-grad)" opacity={0.9} />

        {/* Tiny stamens radiating from center */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = i * 18 * (Math.PI / 180);
          const r = 6 + (i % 3) * 1.5;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const tipR = 0.6 + (i % 2) * 0.3;
          return (
            <g key={`stamen-${i}`}>
              <line
                x1={Math.cos(angle) * 3}
                y1={Math.sin(angle) * 3}
                x2={x}
                y2={y}
                stroke={palette.center}
                strokeWidth={0.4}
                strokeOpacity={0.6}
              />
              <circle cx={x} cy={y} r={tipR} fill={palette.accent} opacity={0.75} />
            </g>
          );
        })}

        {/* Central dome highlight */}
        <circle cx={-1.5} cy={-1.5} r={3} fill={palette.center} opacity={0.3} />
      </g>
    </svg>
  );
}
