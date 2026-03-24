export function PaperWrap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Paper texture pattern */}
        <pattern id="paper-texture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4" x2="8" y2="4" stroke="#c49562" strokeWidth="0.15" opacity="0.35" />
          <line x1="4" y1="0" x2="4" y2="8" stroke="#c49562" strokeWidth="0.1" opacity="0.2" />
        </pattern>
        {/* Subtle grain overlay */}
        <pattern id="paper-grain" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.3" fill="#b8845a" opacity="0.12" />
          <circle cx="3" cy="3" r="0.2" fill="#c49562" opacity="0.1" />
        </pattern>
      </defs>

      {/* Main paper wrap - triangular/cone shape */}
      <path d="M120,20 L200,185 L280,20" fill="#d4a574" stroke="#c49562" strokeWidth="1.2" />
      {/* Left fold flap */}
      <path
        d="M120,20 L90,35 L155,110 L200,185 L120,20Z"
        fill="#c49562"
        opacity="0.7"
        stroke="#b8845a"
        strokeWidth="0.6"
      />
      {/* Right fold flap */}
      <path
        d="M280,20 L310,35 L245,110 L200,185 L280,20Z"
        fill="#c49562"
        opacity="0.65"
        stroke="#b8845a"
        strokeWidth="0.6"
      />

      {/* Paper texture overlay on main cone */}
      <path d="M120,20 L200,185 L280,20Z" fill="url(#paper-texture)" />
      <path d="M120,20 L200,185 L280,20Z" fill="url(#paper-grain)" />

      {/* Fold crease lines */}
      <line
        x1="152"
        y1="28"
        x2="190"
        y2="155"
        stroke="#b8845a"
        strokeWidth="0.6"
        opacity="0.5"
        strokeDasharray="4 6"
      />
      <line
        x1="248"
        y1="28"
        x2="210"
        y2="155"
        stroke="#b8845a"
        strokeWidth="0.6"
        opacity="0.5"
        strokeDasharray="4 6"
      />
      {/* Center crease */}
      <line
        x1="200"
        y1="35"
        x2="200"
        y2="178"
        stroke="#b8845a"
        strokeWidth="0.4"
        opacity="0.3"
        strokeDasharray="6 8"
      />

      {/* Diagonal fold texture lines */}
      <line x1="140" y1="50" x2="180" y2="130" stroke="#b8845a" strokeWidth="0.3" opacity="0.25" />
      <line x1="260" y1="50" x2="220" y2="130" stroke="#b8845a" strokeWidth="0.3" opacity="0.25" />

      {/* Top edge - slightly crumpled paper */}
      <path
        d="M88,36 C100,28 110,22 120,20 C145,16 170,14 200,12 C230,14 255,16 280,20 C290,22 300,28 312,36"
        fill="#d4a574"
        stroke="#c49562"
        strokeWidth="0.8"
      />
      {/* Top edge curl shadow */}
      <path
        d="M92,35 C110,28 120,23 140,19 C165,15 185,14 200,13 C215,14 235,15 260,19 C280,23 290,28 308,35"
        fill="none"
        stroke="#b8845a"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Twine string */}
      <path
        d="M160,28 C170,32 180,34 200,35 C220,34 230,32 240,28"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Twine wrap around */}
      <path
        d="M162,30 C172,26 182,25 200,25 C218,25 228,26 238,30"
        fill="none"
        stroke="#795548"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Bow - left loop */}
      <path
        d="M200,30 C190,22 175,18 172,24 C169,30 180,36 195,32"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bow - right loop */}
      <path
        d="M200,30 C210,22 225,18 228,24 C231,30 220,36 205,32"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Bow center knot */}
      <ellipse cx="200" cy="30" rx="4" ry="3" fill="#795548" opacity="0.8" />
      {/* Hanging twine tails */}
      <path
        d="M197,33 C192,42 188,52 190,58"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M203,33 C208,44 214,52 212,60"
        fill="none"
        stroke="#8d6e63"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Subtle paper highlight */}
      <path
        d="M170,40 L196,160"
        stroke="#e8c9a0"
        strokeWidth="8"
        opacity="0.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
