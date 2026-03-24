export function WovenBasket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Weave strip colors */}
        <linearGradient id="basket-strip-h" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a1887f" />
          <stop offset="50%" stopColor="#8d6e63" />
          <stop offset="100%" stopColor="#a1887f" />
        </linearGradient>
        <linearGradient id="basket-strip-v" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8d6e63" />
          <stop offset="50%" stopColor="#a1887f" />
          <stop offset="100%" stopColor="#8d6e63" />
        </linearGradient>
        {/* Clip for basket body shape */}
        <clipPath id="basket-clip">
          <path d="M100,55 C95,55 90,60 88,70 L82,155 C80,170 90,185 115,190 L285,190 C310,185 320,170 318,155 L312,70 C310,60 305,55 300,55 Z" />
        </clipPath>
      </defs>

      {/* Handle - behind flowers */}
      <path
        d="M130,58 C128,30 150,6 200,4 C250,6 272,30 270,58"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* Handle highlight */}
      <path
        d="M134,56 C132,32 152,10 200,8 C248,10 268,32 266,56"
        fill="none"
        stroke="#a1887f"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Handle weave texture */}
      {[140, 155, 170, 185, 200, 215, 230, 245, 260].map((x, i) => {
        const t = (x - 130) / 140;
        const adjustedY = Math.max(8, 58 - (58 - 4) * Math.sin(t * Math.PI));
        return (
          <line
            key={`handle-weave-${i}`}
            x1={x - 2}
            y1={adjustedY - 3}
            x2={x + 2}
            y2={adjustedY + 3}
            stroke="#795548"
            strokeWidth="1"
            opacity="0.4"
          />
        );
      })}

      {/* Basket body - base shape */}
      <path
        d="M100,55 C95,55 90,60 88,70 L82,155 C80,170 90,185 115,190 L285,190 C310,185 320,170 318,155 L312,70 C310,60 305,55 300,55 Z"
        fill="#a1887f"
        stroke="#795548"
        strokeWidth="1.2"
      />

      {/* Woven pattern - horizontal strips */}
      <g clipPath="url(#basket-clip)">
        {[62, 74, 86, 98, 110, 122, 134, 146, 158, 170, 182].map((y, i) => (
          <rect
            key={`h-strip-${i}`}
            x="78"
            y={y}
            width="244"
            height="6"
            fill="url(#basket-strip-h)"
            opacity={i % 2 === 0 ? 0.7 : 0.5}
          />
        ))}

        {/* Vertical weave strips - alternating over/under */}
        {Array.from({ length: 18 }, (_, i) => {
          const x = 88 + i * 13;
          return (
            <g key={`v-group-${i}`}>
              {[62, 86, 110, 134, 158].map((y, j) => {
                const show = (i + j) % 2 === 0;
                return show ? (
                  <rect
                    key={`v-strip-${i}-${j}`}
                    x={x}
                    y={y}
                    width="7"
                    height="12"
                    fill="url(#basket-strip-v)"
                    opacity="0.65"
                    rx="0.5"
                  />
                ) : null;
              })}
            </g>
          );
        })}

        {/* Weave shadow lines for depth */}
        {[68, 80, 92, 104, 116, 128, 140, 152, 164, 176].map((y, i) => (
          <line
            key={`shadow-${i}`}
            x1="82"
            y1={y}
            x2="318"
            y2={y}
            stroke="#795548"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
      </g>

      {/* Basket rim - thick top edge */}
      <path d="M98,55 C95,55 92,56 100,55 L300,55 C308,55 305,55 302,55" fill="none" />
      <rect
        x="96"
        y="50"
        width="208"
        height="10"
        rx="5"
        fill="#8d6e63"
        stroke="#795548"
        strokeWidth="0.8"
      />
      {/* Rim highlight */}
      <rect x="100" y="51" width="200" height="4" rx="2" fill="#a1887f" opacity="0.5" />
      {/* Rim weave pattern */}
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={`rim-weave-${i}`}
          x1={106 + i * 13}
          y1="50"
          x2={106 + i * 13}
          y2="60"
          stroke="#795548"
          strokeWidth="0.8"
          opacity="0.35"
        />
      ))}

      {/* Bottom shadow */}
      <ellipse cx="200" cy="192" rx="95" ry="4" fill="#795548" opacity="0.15" />

      {/* Subtle basket body shadow for roundness */}
      <path
        d="M88,70 L82,155 C80,170 90,185 115,190 L120,190 C95,185 86,170 88,155 L94,70 Z"
        fill="#795548"
        opacity="0.15"
      />
      <path
        d="M312,70 L318,155 C320,170 310,185 285,190 L280,190 C305,185 314,170 312,155 L306,70 Z"
        fill="#795548"
        opacity="0.1"
      />
    </svg>
  );
}
