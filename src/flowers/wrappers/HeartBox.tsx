"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Bottom shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 200, 230, 14, {
      fill: "rgba(50,10,30,0.12)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Box body (heart shape, main container) ──
  svg.appendChild(
    rc.path(
      "M200,198 C158,198 102,188 80,156 C63,132 66,108 76,92 C88,74 108,66 130,64 C152,62 177,68 200,88 C223,68 248,62 270,64 C292,66 312,74 324,92 C334,108 337,132 320,156 C298,188 242,198 200,198 Z",
      {
        fill: "#e91e63",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#880e4f",
        strokeWidth: 2.2,
      },
    ),
  );

  // ── Darker bottom half for depth ──
  svg.appendChild(
    rc.path(
      "M200,198 C158,198 102,188 80,156 C72,144 70,132 72,120 L328,120 C330,132 328,144 320,156 C298,188 242,198 200,198 Z",
      {
        fill: "#c2185b",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Inner box area (visible inside — lighter pink cushion) ──
  svg.appendChild(
    rc.path(
      "M200,182 C166,182 118,174 102,150 C90,134 92,118 98,106 C106,94 120,88 136,86 C152,84 176,90 200,104 C224,90 248,84 264,86 C280,88 294,94 302,106 C308,118 310,134 298,150 C282,174 234,182 200,182 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#e91e63",
        strokeWidth: 1,
      },
    ),
  );

  // ── Cushion / padding inside (puffy lines) ──
  svg.appendChild(
    rc.path("M145,130 C160,120 180,115 200,118 C220,115 240,120 255,130", {
      fill: "none",
      roughness: 1.5,
      stroke: "#f8bbd0",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.path("M135,145 C155,135 178,130 200,132 C222,130 245,135 265,145", {
      fill: "none",
      roughness: 1.5,
      stroke: "#f8bbd0",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.path("M142,160 C162,150 182,147 200,148 C218,147 238,150 258,160", {
      fill: "none",
      roughness: 1.3,
      stroke: "#f8bbd0",
      strokeWidth: 0.8,
    }),
  );
  // Cushion diamond quilting
  svg.appendChild(
    rc.line(170, 120, 200, 155, { roughness: 1.2, stroke: "#f8bbd0", strokeWidth: 0.6 }),
  );
  svg.appendChild(
    rc.line(200, 120, 230, 155, { roughness: 1.2, stroke: "#f8bbd0", strokeWidth: 0.6 }),
  );
  svg.appendChild(
    rc.line(230, 120, 200, 155, { roughness: 1.2, stroke: "#f8bbd0", strokeWidth: 0.6 }),
  );
  svg.appendChild(
    rc.line(200, 118, 170, 155, { roughness: 1.2, stroke: "#f8bbd0", strokeWidth: 0.6 }),
  );

  // ── Box rim (top edge — slight perspective) ──
  svg.appendChild(
    rc.path(
      "M200,88 C177,68 152,62 130,64 C108,66 88,74 76,92 L84,84 C94,72 113,64 133,62 C153,60 176,66 200,82 C224,66 247,60 267,62 C287,64 306,72 316,84 L324,92 C312,74 292,66 270,64 C248,62 223,68 200,88 Z",
      {
        fill: "#ad1457",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#880e4f",
        strokeWidth: 1.5,
      },
    ),
  );

  // ── Lace trim along the rim ──
  for (let t = 0; t <= 1; t += 0.04) {
    const lx = 80 + t * 240;
    const ly = 62 + Math.abs(t - 0.5) * 50;
    // Tiny scallop arcs for lace
    svg.appendChild(
      rc.arc(lx, ly, 10, 7, 0, Math.PI, false, {
        fill: "none",
        roughness: 1,
        stroke: "rgba(255,255,255,0.35)",
        strokeWidth: 0.8,
      }),
    );
  }

  // ── Decorative dots around the rim ──
  const rimDots = [
    [128, 66],
    [148, 62],
    [168, 70],
    [184, 80],
    [200, 86],
    [216, 80],
    [232, 70],
    [252, 62],
    [272, 66],
    [292, 72],
    [308, 82],
    [108, 72],
    [92, 82],
  ];
  rimDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 5, {
        fill: "#f8bbd0",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#c2185b",
        strokeWidth: 0.6,
      }),
    );
  });

  // ── Extra decorative dots (smaller, scattered) ──
  const extraDots = [
    [138, 64],
    [158, 66],
    [178, 76],
    [222, 76],
    [242, 66],
    [262, 64],
    [118, 70],
    [282, 70],
    [300, 78],
  ];
  extraDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2.5, {
        fill: "#fce4ec",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Inner shadow/fold line ──
  svg.appendChild(
    rc.path("M118,140 C138,158 168,170 200,172 C232,170 262,158 282,140", {
      fill: "none",
      roughness: 2,
      stroke: "#ad1457",
      strokeWidth: 0.8,
    }),
  );

  // ── Small heart decoration on the front ──
  svg.appendChild(
    rc.path(
      "M200,156 C196,148 188,145 184,148 C178,153 178,160 184,166 L200,180 L216,166 C222,160 222,153 216,148 C212,145 204,148 200,156 Z",
      {
        fill: "#ad1457",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#880e4f",
        strokeWidth: 0.8,
      },
    ),
  );
  // Heart decoration highlight
  svg.appendChild(
    rc.arc(192, 152, 8, 6, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.35)",
      strokeWidth: 1,
    }),
  );

  // ── Shine spots on left bump ──
  svg.appendChild(
    rc.arc(138, 98, 32, 22, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.35)",
      strokeWidth: 2.5,
    }),
  );
  // Secondary highlight on right bump
  svg.appendChild(
    rc.arc(262, 100, 28, 18, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 2,
    }),
  );
  // Small bright spot
  svg.appendChild(
    rc.circle(132, 90, 4, {
      fill: "rgba(255,255,255,0.3)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Tiny bow/ribbon at the top center ──
  // Left bow loop
  svg.appendChild(
    rc.path("M200,78 C192,70 185,68 188,74 C190,78 196,80 200,78 Z", {
      fill: "#fce4ec",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#f48fb1",
      strokeWidth: 0.6,
    }),
  );
  // Right bow loop
  svg.appendChild(
    rc.path("M200,78 C208,70 215,68 212,74 C210,78 204,80 200,78 Z", {
      fill: "#fce4ec",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#f48fb1",
      strokeWidth: 0.6,
    }),
  );
  // Bow center knot
  svg.appendChild(
    rc.circle(200, 78, 3, {
      fill: "#f48fb1",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "#e91e63",
      strokeWidth: 0.5,
    }),
  );
  // Bow tails
  svg.appendChild(
    rc.line(198, 80, 192, 88, { roughness: 1.2, stroke: "#f48fb1", strokeWidth: 0.8 }),
  );
  svg.appendChild(
    rc.line(202, 80, 208, 88, { roughness: 1.2, stroke: "#f48fb1", strokeWidth: 0.8 }),
  );

  // ── Sparkle accents ──
  [
    [90, 90],
    [310, 88],
    [200, 55],
  ].forEach(([x, y]) => {
    // Star sparkle: small cross
    svg.appendChild(
      rc.line(x - 3, y, x + 3, y, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.4)",
        strokeWidth: 0.8,
      }),
    );
    svg.appendChild(
      rc.line(x, y - 3, x, y + 3, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.4)",
        strokeWidth: 0.8,
      }),
    );
  });
};

export function HeartBox({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
