"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 199, 110, 8, {
      fill: "rgba(62,39,35,0.10)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 199, 80, 5, {
      fill: "rgba(62,39,35,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Main cone body (inverted triangle) ──
  svg.appendChild(
    rc.path("M110,40 L200,195 L290,40 Z", {
      fill: "#d4a574",
      fillStyle: "cross-hatch",
      fillWeight: 0.4,
      hachureGap: 10,
      hachureAngle: 45,
      roughness: 2,
      stroke: "#a1887f",
      strokeWidth: 1.5,
    }),
  );

  // ── Second cross-hatch layer for waffle pattern ──
  svg.appendChild(
    rc.path("M110,40 L200,195 L290,40 Z", {
      fill: "#c49a6c",
      fillStyle: "cross-hatch",
      fillWeight: 0.3,
      hachureGap: 10,
      hachureAngle: -45,
      roughness: 1.8,
      stroke: "none",
    }),
  );

  // ── Deeper color at tip (darker gradient) ──
  svg.appendChild(
    rc.path("M170,120 L200,195 L230,120 Z", {
      fill: "#b8895a",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 6,
      hachureAngle: 45,
      roughness: 1.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.path("M185,155 L200,195 L215,155 Z", {
      fill: "#a67c52",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 5,
      hachureAngle: -45,
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Diamond pattern lines going one direction ──
  for (let i = 0; i < 14; i++) {
    const startX = 118 + i * 13;
    const startY = 42;
    const endY = Math.min(42 + i * 14, 188);
    const clipEndX = Math.max(200 - (195 - endY) * (90 / 155), 115 + (endY - 40) * 0.58);
    svg.appendChild(
      rc.line(Math.min(startX, 287), startY, clipEndX, endY, {
        roughness: 2,
        stroke: "#a1887f",
        strokeWidth: 0.6,
      }),
    );
  }

  // ── Diamond pattern lines going other direction ──
  for (let i = 0; i < 14; i++) {
    const startX = 282 - i * 13;
    const startY = 42;
    const endY = Math.min(42 + i * 14, 188);
    const clipEndX = Math.min(200 + (195 - endY) * (90 / 155), 285 - (endY - 40) * 0.58);
    svg.appendChild(
      rc.line(Math.max(startX, 113), startY, clipEndX, endY, {
        roughness: 2,
        stroke: "#a1887f",
        strokeWidth: 0.6,
      }),
    );
  }

  // ── Sugar crystal dots scattered on cone ──
  const sugarDots = [
    [145, 60],
    [170, 75],
    [230, 65],
    [260, 55],
    [155, 95],
    [210, 85],
    [245, 80],
    [180, 110],
    [220, 105],
    [195, 130],
    [205, 145],
    [190, 160],
    [210, 160],
    [200, 175],
    [175, 90],
    [240, 95],
    [160, 70],
    [250, 70],
    [185, 55],
    [215, 55],
    [225, 120],
    [175, 125],
    [198, 100],
  ];
  sugarDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "rgba(255,255,240,0.6)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "rgba(210,180,140,0.4)",
        strokeWidth: 0.3,
      }),
    );
  });

  // ── Cone rim at top (thicker, rounded edge) ──
  svg.appendChild(
    rc.path("M106,36 L294,36 L293,48 L107,48 Z", {
      fill: "#c49a6c",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#a1887f",
      strokeWidth: 1.3,
    }),
  );
  // Rim highlight
  svg.appendChild(
    rc.line(112, 38, 288, 38, {
      roughness: 1.5,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 1.2,
    }),
  );

  // ── Drip/melt effect at rim ──
  const dripPaths = [
    "M135,48 C134,54 136,62 135,66 C134,70 136,68 137,62 C138,56 137,50 136,48",
    "M175,48 C174,56 176,68 175,74 C174,78 176,76 177,68 C178,60 177,52 176,48",
    "M220,48 C219,55 221,64 220,70 C219,74 221,72 222,64 C223,56 222,50 221,48",
    "M260,48 C259,52 261,58 260,62 C259,66 261,64 262,58 C263,52 262,49 261,48",
    "M155,48 C154,52 156,56 155,59 C154,62 156,60 157,56 C158,52 157,49 156,48",
    "M240,48 C239,54 241,60 240,64 C239,68 241,66 242,60 C243,54 242,50 241,48",
  ];
  dripPaths.forEach((d) => {
    svg.appendChild(
      rc.path(d, {
        fill: "#f5deb3",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#dcc498",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── Cone tip detail (rounded bottom) ──
  svg.appendChild(
    rc.circle(200, 193, 7, {
      fill: "#a67c52",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#8d6e63",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.circle(200, 193, 3, {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Highlight line on left edge (shine) ──
  svg.appendChild(
    rc.line(120, 46, 200, 188, {
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.14)",
      strokeWidth: 2.5,
    }),
  );

  // ── Secondary highlight on right (softer) ──
  svg.appendChild(
    rc.line(272, 48, 206, 180, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.06)",
      strokeWidth: 1.5,
    }),
  );

  // ── Tiny decorative dots along rim ──
  for (let x = 115; x <= 285; x += 12) {
    svg.appendChild(
      rc.circle(x, 42, 1.5, {
        fill: "#b8956e",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  }
};

export function WaffleCone({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
