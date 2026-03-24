export function GlassVase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Glass gradient for main body */}
        <linearGradient id="glass-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e3f2fd" stopOpacity="0.18" />
          <stop offset="25%" stopColor="#e3f2fd" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#bbdefb" stopOpacity="0.12" />
          <stop offset="75%" stopColor="#e3f2fd" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#e3f2fd" stopOpacity="0.16" />
        </linearGradient>
        {/* Water gradient */}
        <linearGradient id="water-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bbdefb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#90caf9" stopOpacity="0.25" />
        </linearGradient>
        {/* Glass rim highlight */}
        <linearGradient id="rim-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Vase outline / main body - rounded shape */}
      <path
        d="M150,18 C148,18 144,20 142,24 L142,28 C132,38 122,58 120,80 C118,102 122,130 130,155 C136,170 148,182 168,188 L232,188 C252,182 264,170 270,155 C278,130 282,102 280,80 C278,58 268,38 258,28 L258,24 C256,20 252,18 250,18 Z"
        fill="url(#glass-body)"
        stroke="#b0bec5"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />

      {/* Inner vase shadow for depth */}
      <path
        d="M152,22 C150,22 146,24 145,27 L145,30 C135,40 126,60 124,82 C122,104 126,130 133,154 C138,168 150,179 169,185 L231,185 C250,179 262,168 267,154 C274,130 278,104 276,82 C274,60 265,40 255,30 L255,27 C254,24 250,22 248,22 Z"
        fill="none"
        stroke="#90caf9"
        strokeWidth="0.4"
        strokeOpacity="0.2"
      />

      {/* Vase mouth / rim - top opening */}
      <ellipse
        cx="200"
        cy="20"
        rx="52"
        ry="5"
        fill="url(#rim-shine)"
        stroke="#b0bec5"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* Inner rim ellipse */}
      <ellipse
        cx="200"
        cy="20"
        rx="48"
        ry="3.5"
        fill="none"
        stroke="#90caf9"
        strokeWidth="0.4"
        strokeOpacity="0.25"
      />

      {/* Vase base / bottom */}
      <ellipse
        cx="200"
        cy="188"
        rx="34"
        ry="4"
        fill="#e3f2fd"
        opacity="0.15"
        stroke="#b0bec5"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />

      {/* Water inside the vase */}
      <path
        d="M130,110 C138,106 165,104 200,104 C235,104 262,106 270,110 C278,128 280,148 270,162 C264,172 250,180 232,186 L168,186 C150,180 136,172 130,162 C122,148 122,128 130,110 Z"
        fill="url(#water-fill)"
      />

      {/* Water level surface line */}
      <path
        d="M130,110 C145,106 170,104 200,104 C230,104 255,106 270,110"
        fill="none"
        stroke="#90caf9"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      {/* Water surface subtle wave */}
      <path
        d="M138,109 C155,112 175,108 200,110 C225,108 245,112 262,109"
        fill="none"
        stroke="#bbdefb"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />

      {/* Glass reflections - left highlight streak */}
      <path
        d="M140,40 C136,60 134,85 136,115 C137,135 140,155 146,170"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.22"
      />
      {/* Secondary left reflection */}
      <path
        d="M146,50 C143,65 142,80 143,100"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.15"
      />

      {/* Right edge reflection */}
      <path
        d="M264,45 C268,70 270,95 268,125 C266,145 262,160 256,172"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.18"
      />

      {/* Small highlight spots */}
      <ellipse
        cx="155"
        cy="55"
        rx="3"
        ry="6"
        fill="#ffffff"
        opacity="0.25"
        transform="rotate(-8, 155, 55)"
      />
      <ellipse
        cx="252"
        cy="65"
        rx="2"
        ry="4"
        fill="#ffffff"
        opacity="0.2"
        transform="rotate(8, 252, 65)"
      />

      {/* Subtle refraction effect inside water */}
      <path
        d="M165,130 C175,126 195,128 210,125 C225,128 240,126 250,130"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.6"
        opacity="0.12"
      />
      <path
        d="M155,150 C170,146 190,148 210,145 C230,148 245,146 258,150"
        fill="none"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.1"
      />
    </svg>
  );
}
