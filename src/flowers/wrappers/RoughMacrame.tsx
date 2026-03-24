"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 180, 12, {
      fill: "rgba(80,50,30,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 140, 8, {
      fill: "rgba(80,50,30,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Wooden dowel at top ──
  svg.appendChild(
    rc.rectangle(110, 8, 180, 10, {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#6d4c41",
      strokeWidth: 1.5,
    }),
  );
  // Dowel wood grain lines
  svg.appendChild(
    rc.line(115, 11, 285, 11, {
      roughness: 2.5,
      stroke: "#795548",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(118, 15, 288, 15, {
      roughness: 2.2,
      stroke: "#795548",
      strokeWidth: 0.4,
    }),
  );
  // Dowel highlight
  svg.appendChild(
    rc.line(120, 10, 280, 10, {
      roughness: 1,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.2,
    }),
  );
  // Dowel end caps
  svg.appendChild(
    rc.circle(113, 13, 12, {
      fill: "#6d4c41",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#5d4037",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.circle(287, 13, 12, {
      fill: "#6d4c41",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#5d4037",
      strokeWidth: 1,
    }),
  );

  // ── Hanging rope strands from dowel (6 strands) ──
  const ropeColor = "#d4a574";
  const ropeDark = "#c49a6c";
  const ropeLight = "#e0c9a8";

  // Strand 1 (far left)
  svg.appendChild(
    rc.path("M140,18 L130,40 L145,60 L125,82 L148,100", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 2.5,
    }),
  );
  // Strand 2 (inner left)
  svg.appendChild(
    rc.path("M160,18 L155,40 L168,60 L150,82 L170,100", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 2.5,
    }),
  );
  // Strand 3 (inner right)
  svg.appendChild(
    rc.path("M240,18 L245,40 L232,60 L250,82 L230,100", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 2.5,
    }),
  );
  // Strand 4 (far right)
  svg.appendChild(
    rc.path("M260,18 L270,40 L255,60 L275,82 L252,100", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 2.5,
    }),
  );
  // Strand 5 (center left)
  svg.appendChild(
    rc.path("M180,18 L178,38 L190,58 L175,80 L192,100", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeLight,
      strokeWidth: 2,
    }),
  );
  // Strand 6 (center right)
  svg.appendChild(
    rc.path("M220,18 L222,38 L210,58 L225,80 L208,100", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeLight,
      strokeWidth: 2,
    }),
  );

  // ── Diamond knot pattern (upper section) ──
  // Diamond 1 (left)
  svg.appendChild(
    rc.path("M130,40 L150,55 L130,70 L110,55 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );
  // Diamond 2 (center-left)
  svg.appendChild(
    rc.path("M155,40 L180,55 L155,70 L130,55 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 1.8,
    }),
  );
  // Diamond 3 (center)
  svg.appendChild(
    rc.path("M178,38 L210,55 L178,72 L146,55 Z", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );
  // Diamond 4 (center-right)
  svg.appendChild(
    rc.path("M222,38 L254,55 L222,72 L190,55 Z", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );
  // Diamond 5 (right)
  svg.appendChild(
    rc.path("M245,40 L270,55 L245,70 L220,55 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 1.8,
    }),
  );
  // Diamond 6 (far right)
  svg.appendChild(
    rc.path("M270,40 L290,55 L270,70 L250,55 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );

  // ── Lower diamond knot row ──
  svg.appendChild(
    rc.path("M125,72 L155,90 L125,108 L95,90 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 1.8,
    }),
  );
  svg.appendChild(
    rc.path("M165,72 L200,92 L165,112 L130,92 Z", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M235,72 L270,92 L235,112 L200,92 Z", {
      fill: "none",
      roughness: 2.2,
      stroke: ropeColor,
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M275,72 L305,90 L275,108 L245,90 Z", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeDark,
      strokeWidth: 1.8,
    }),
  );

  // ── Wooden beads at knot intersections ──
  const beadPositions = [
    [150, 55],
    [180, 55],
    [220, 55],
    [250, 55],
    [130, 72],
    [165, 72],
    [235, 72],
    [270, 72],
    [155, 90],
    [200, 92],
    [245, 90],
    [130, 108],
    [165, 112],
    [235, 112],
    [275, 108],
  ];
  beadPositions.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 8, {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#6d4c41",
        strokeWidth: 0.8,
      }),
    );
    // Bead highlight
    svg.appendChild(
      rc.circle(x - 1, y - 1, 3, {
        fill: "rgba(255,255,255,0.25)",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      }),
    );
  });

  // ── Cradle/net shape (converging strands forming the basket) ──
  svg.appendChild(
    rc.path(
      "M95,108 C100,130 120,155 145,170 C165,180 185,188 200,192 C215,188 235,180 255,170 C280,155 300,130 305,108",
      {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 2.5,
        stroke: ropeDark,
        strokeWidth: 2,
      },
    ),
  );
  // Inner cradle lighter shade
  svg.appendChild(
    rc.path(
      "M115,115 C118,135 132,155 155,168 C172,176 188,182 200,185 C212,182 228,176 245,168 C268,155 282,135 285,115",
      {
        fill: "#e0c9a8",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      },
    ),
  );

  // ── Cradle rope texture (cross-hatching inside) ──
  for (let i = 0; i < 6; i++) {
    const x1 = 120 + i * 28;
    const x2 = 140 + i * 28;
    const y1 = 120 + i * 5;
    const y2 = 165 + Math.abs(i - 2.5) * 4;
    svg.appendChild(
      rc.line(x1, y1, x2, y2, {
        roughness: 2.5,
        stroke: "rgba(196,154,108,0.5)",
        strokeWidth: 1.2,
      }),
    );
  }
  for (let i = 0; i < 5; i++) {
    const y = 130 + i * 12;
    const xSpread = 65 - i * 8;
    svg.appendChild(
      rc.line(200 - xSpread, y, 200 + xSpread, y, {
        roughness: 2.5,
        stroke: "rgba(196,154,108,0.4)",
        strokeWidth: 1,
      }),
    );
  }

  // ── Highlight streaks on cradle ──
  svg.appendChild(
    rc.path("M155,130 L160,160", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M230,125 L225,155", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M195,140 L198,170", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1.2,
    }),
  );

  // ── Fringe/tassels hanging at the bottom ──
  const fringeXs = [155, 165, 175, 185, 195, 205, 215, 225, 235, 245];
  fringeXs.forEach((x, i) => {
    const baseY = 180 + Math.abs(i - 4.5) * 1.5;
    const endY = baseY + 12 + Math.random() * 6;
    svg.appendChild(
      rc.line(x, baseY, x + (i % 2 === 0 ? -2 : 2), endY, {
        roughness: 2.5,
        stroke: i % 2 === 0 ? ropeColor : ropeDark,
        strokeWidth: 1.8,
      }),
    );
    // Tassel tip bead (small)
    svg.appendChild(
      rc.circle(x + (i % 2 === 0 ? -2 : 2), endY + 2, 3, {
        fill: "#a1887f",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Cute decorative hearts on rope ──
  svg.appendChild(
    rc.path(
      "M200,148 C198,144 194,144 194,148 C194,151 200,154 200,154 C200,154 206,151 206,148 C206,144 202,144 200,148 Z",
      {
        fill: "rgba(244,143,177,0.35)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "rgba(233,30,99,0.3)",
        strokeWidth: 0.6,
      },
    ),
  );

  // ── Small decorative dots along rope strands ──
  const decorDots = [
    [140, 30],
    [160, 30],
    [240, 30],
    [260, 30],
    [110, 55],
    [290, 55],
  ];
  decorDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 3, {
        fill: "rgba(212,165,116,0.4)",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      }),
    );
  });

  // ── Sparkle accents ──
  [
    [120, 25],
    [280, 25],
    [200, 105],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.line(x - 3, y, x + 3, y, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.35)",
        strokeWidth: 0.8,
      }),
    );
    svg.appendChild(
      rc.line(x, y - 3, x, y + 3, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.35)",
        strokeWidth: 0.8,
      }),
    );
  });

  // ── Edge detail: rope wrap around dowel ends ──
  svg.appendChild(
    rc.path("M118,8 C116,4 120,2 124,6 L122,18 C118,16 115,12 118,8", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M282,8 C284,4 280,2 276,6 L278,18 C282,16 285,12 282,8", {
      fill: "none",
      roughness: 2.5,
      stroke: ropeColor,
      strokeWidth: 1.5,
    }),
  );
};

export function Macrame({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
