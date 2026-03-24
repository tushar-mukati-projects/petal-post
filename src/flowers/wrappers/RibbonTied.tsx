export function RibbonTied({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Ribbon satin gradient */}
        <linearGradient id="ribbon-satin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ec407a" />
          <stop offset="30%" stopColor="#f48fb1" />
          <stop offset="50%" stopColor="#e91e63" />
          <stop offset="70%" stopColor="#f06292" />
          <stop offset="100%" stopColor="#c2185b" />
        </linearGradient>
        {/* Bow loop gradient */}
        <linearGradient id="bow-loop-l" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#f48fb1" />
          <stop offset="40%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#c2185b" />
        </linearGradient>
        <linearGradient id="bow-loop-r" x1="1" y1="0" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#f48fb1" />
          <stop offset="40%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#c2185b" />
        </linearGradient>
      </defs>

      {/* Stems - thin green lines splaying outward above the tie point */}
      <line
        x1="200"
        y1="85"
        x2="165"
        y2="8"
        stroke="#66bb6a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="85"
        x2="182"
        y2="6"
        stroke="#4caf50"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="85"
        x2="200"
        y2="4"
        stroke="#66bb6a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="85"
        x2="218"
        y2="6"
        stroke="#4caf50"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="85"
        x2="235"
        y2="8"
        stroke="#66bb6a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Additional thinner stems */}
      <line
        x1="200"
        y1="85"
        x2="150"
        y2="12"
        stroke="#81c784"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <line
        x1="200"
        y1="85"
        x2="250"
        y2="12"
        stroke="#81c784"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Stems below the tie - gathered together going down */}
      <line
        x1="200"
        y1="95"
        x2="196"
        y2="198"
        stroke="#66bb6a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="95"
        x2="200"
        y2="198"
        stroke="#4caf50"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="95"
        x2="204"
        y2="198"
        stroke="#66bb6a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="200"
        y1="95"
        x2="192"
        y2="196"
        stroke="#81c784"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <line
        x1="200"
        y1="95"
        x2="208"
        y2="196"
        stroke="#81c784"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Wide ribbon wrap around stems */}
      <path
        d="M168,78 C170,72 182,68 200,68 C218,68 230,72 232,78 L232,102 C230,108 218,112 200,112 C182,112 170,108 168,102 Z"
        fill="url(#ribbon-satin)"
        stroke="#c2185b"
        strokeWidth="0.6"
      />
      {/* Ribbon sheen highlight strip */}
      <path
        d="M178,72 C186,70 196,69 200,69 C204,69 214,70 222,72 L222,80 C214,78 204,77 200,77 C196,77 186,78 178,80 Z"
        fill="#f8bbd0"
        opacity="0.35"
      />
      {/* Ribbon lower highlight */}
      <path
        d="M178,98 C186,100 196,101 200,101 C204,101 214,100 222,98 L222,105 C214,107 204,108 200,108 C196,108 186,107 178,105 Z"
        fill="#ad1457"
        opacity="0.2"
      />

      {/* Bow - left loop */}
      <path
        d="M172,88 C162,72 130,60 118,68 C106,76 110,92 126,98 C138,102 158,98 172,92"
        fill="url(#bow-loop-l)"
        stroke="#c2185b"
        strokeWidth="0.8"
      />
      {/* Left loop highlight */}
      <path
        d="M165,82 C156,74 140,66 130,70 C124,74 126,82 134,88"
        fill="none"
        stroke="#f8bbd0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Bow - right loop */}
      <path
        d="M228,88 C238,72 270,60 282,68 C294,76 290,92 274,98 C262,102 242,98 228,92"
        fill="url(#bow-loop-r)"
        stroke="#c2185b"
        strokeWidth="0.8"
      />
      {/* Right loop highlight */}
      <path
        d="M235,82 C244,74 260,66 270,70 C276,74 274,82 266,88"
        fill="none"
        stroke="#f8bbd0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Bow center knot */}
      <ellipse cx="200" cy="90" rx="12" ry="8" fill="#e91e63" stroke="#c2185b" strokeWidth="0.6" />
      {/* Knot highlight */}
      <ellipse cx="198" cy="87" rx="5" ry="3" fill="#f48fb1" opacity="0.4" />

      {/* Ribbon tails - left */}
      <path
        d="M186,96 C176,112 158,132 142,148 C140,150 138,148 140,144 L160,120 C164,114 168,108 172,100"
        fill="url(#bow-loop-l)"
        stroke="#c2185b"
        strokeWidth="0.5"
      />
      {/* Left tail sheen */}
      <path
        d="M182,100 C174,114 162,128 152,140"
        fill="none"
        stroke="#f8bbd0"
        strokeWidth="1.2"
        opacity="0.3"
        strokeLinecap="round"
      />
      {/* Ribbon tails - right */}
      <path
        d="M214,96 C224,112 242,132 258,148 C260,150 262,148 260,144 L240,120 C236,114 232,108 228,100"
        fill="url(#bow-loop-r)"
        stroke="#c2185b"
        strokeWidth="0.5"
      />
      {/* Right tail sheen */}
      <path
        d="M218,100 C226,114 238,128 248,140"
        fill="none"
        stroke="#f8bbd0"
        strokeWidth="1.2"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* V-cut notch in left tail end */}
      <path d="M138,148 L142,142 L146,148" fill="#c2185b" opacity="0.7" />
      {/* V-cut notch in right tail end */}
      <path d="M254,148 L258,142 L262,148" fill="#c2185b" opacity="0.7" />
    </svg>
  );
}
