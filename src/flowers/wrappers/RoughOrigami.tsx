"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 220, 14, {
      fill: "rgba(50,30,60,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 180, 10, {
      fill: "rgba(50,30,60,0.05)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Main origami boat/container base (back wall, tallest) ──
  svg.appendChild(
    rc.path("M100,60 L200,48 L300,60 L290,195 L110,195 Z", {
      fill: "#e8f5e9",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#a5d6a7",
      strokeWidth: 1.5,
    }),
  );

  // ── Left facet panel ──
  svg.appendChild(
    rc.path("M100,60 L110,195 L200,198 L200,48 Z", {
      fill: "#f3e5f5",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#ce93d8",
      strokeWidth: 1,
    }),
  );

  // ── Right facet panel ──
  svg.appendChild(
    rc.path("M300,60 L290,195 L200,198 L200,48 Z", {
      fill: "#fff3e0",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#ffcc80",
      strokeWidth: 1,
    }),
  );

  // ── Inner depth panels (darker shading) ──
  // Left inner
  svg.appendChild(
    rc.path("M120,75 L125,180 L200,183 L200,63 Z", {
      fill: "#c8e6c9",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );
  // Right inner
  svg.appendChild(
    rc.path("M280,75 L275,180 L200,183 L200,63 Z", {
      fill: "#ffe0b2",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Lower front facets (folded paper flaps) ──
  // Left front flap
  svg.appendChild(
    rc.path("M110,195 L140,140 L200,198 Z", {
      fill: "#e1bee7",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#ce93d8",
      strokeWidth: 0.8,
    }),
  );
  // Right front flap
  svg.appendChild(
    rc.path("M290,195 L260,140 L200,198 Z", {
      fill: "#ffe0b2",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#ffcc80",
      strokeWidth: 0.8,
    }),
  );
  // Center front flap
  svg.appendChild(
    rc.path("M140,140 L200,130 L260,140 L200,198 Z", {
      fill: "#f3e5f5",
      fillStyle: "solid",
      roughness: 1.3,
      stroke: "#ce93d8",
      strokeWidth: 0.6,
    }),
  );

  // ── Fold crease lines (defining the paper folds) ──
  // Center vertical crease
  svg.appendChild(
    rc.line(200, 48, 200, 198, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.08)",
      strokeWidth: 1.2,
    }),
  );
  // Left diagonal crease
  svg.appendChild(
    rc.line(100, 60, 200, 198, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.06)",
      strokeWidth: 0.8,
    }),
  );
  // Right diagonal crease
  svg.appendChild(
    rc.line(300, 60, 200, 198, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.06)",
      strokeWidth: 0.8,
    }),
  );
  // Horizontal fold lines
  svg.appendChild(
    rc.line(115, 120, 285, 120, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.05)",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(108, 90, 292, 90, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.04)",
      strokeWidth: 0.5,
    }),
  );
  // Lower fold creases
  svg.appendChild(
    rc.line(140, 140, 260, 140, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.06)",
      strokeWidth: 0.7,
    }),
  );
  svg.appendChild(
    rc.line(125, 160, 275, 160, {
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.04)",
      strokeWidth: 0.5,
    }),
  );

  // ── Top edge (angular paper rim) ──
  svg.appendChild(
    rc.path("M100,60 L148,52 L200,48 L252,52 L300,60", {
      fill: "none",
      roughness: 1.8,
      stroke: "#81c784",
      strokeWidth: 1.5,
    }),
  );
  // Inner rim line
  svg.appendChild(
    rc.path("M110,65 L152,58 L200,55 L248,58 L290,65", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(0,0,0,0.06)",
      strokeWidth: 0.6,
    }),
  );

  // ── Highlight streaks (paper shine) ──
  svg.appendChild(
    rc.path("M145,70 L140,150", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 2.5,
    }),
  );
  svg.appendChild(
    rc.path("M155,68 L152,135", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M250,72 L248,145", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 2,
    }),
  );

  // ── Small origami crane perched on right edge ──
  // Body
  svg.appendChild(
    rc.path("M280,55 L290,48 L300,55 L290,52 Z", {
      fill: "#f48fb1",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#e91e63",
      strokeWidth: 0.8,
    }),
  );
  // Left wing
  svg.appendChild(
    rc.path("M280,55 L270,45 L278,52", {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#e91e63",
      strokeWidth: 0.6,
    }),
  );
  // Right wing
  svg.appendChild(
    rc.path("M300,55 L310,45 L302,52", {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#e91e63",
      strokeWidth: 0.6,
    }),
  );
  // Neck/head
  svg.appendChild(
    rc.path("M290,48 L295,38 L297,40", {
      fill: "none",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 1,
    }),
  );
  // Tail
  svg.appendChild(
    rc.path("M290,52 L285,58 L288,56", {
      fill: "none",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 0.8,
    }),
  );
  // Crane eye
  svg.appendChild(
    rc.circle(296, 39, 1.5, {
      fill: "#333",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Decorative pattern dots (geometric accent) ──
  const patternDots = [
    [160, 85],
    [180, 78],
    [220, 78],
    [240, 85],
    [170, 105],
    [200, 100],
    [230, 105],
    [180, 145],
    [200, 140],
    [220, 145],
    [150, 125],
    [250, 125],
  ];
  patternDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 3, {
        fill: "rgba(206,147,216,0.3)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "rgba(171,71,188,0.3)",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Small geometric triangles (paper texture detail) ──
  [
    [165, 170],
    [200, 165],
    [235, 170],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.path(`M${x},${y} L${x + 6},${y + 8} L${x - 6},${y + 8} Z`, {
        fill: "rgba(129,199,132,0.2)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "rgba(76,175,80,0.2)",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Cute heart on front center ──
  svg.appendChild(
    rc.path(
      "M200,155 C198,151 194,151 194,155 C194,158 200,161 200,161 C200,161 206,158 206,155 C206,151 202,151 200,155 Z",
      {
        fill: "rgba(244,143,177,0.3)",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "rgba(233,30,99,0.25)",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── Sparkle accents ──
  [
    [120, 52],
    [310, 40],
    [290, 32],
  ].forEach(([x, y]) => {
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

  // ── Bottom edge detail ──
  svg.appendChild(
    rc.path("M110,195 C140,198 170,200 200,200 C230,200 260,198 290,195", {
      fill: "none",
      roughness: 1.8,
      stroke: "rgba(0,0,0,0.08)",
      strokeWidth: 0.8,
    }),
  );
};

export function OrigamiWrap({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
