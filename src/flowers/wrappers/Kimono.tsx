"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 220, 14, {
      fill: "rgba(30,20,60,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 180, 10, {
      fill: "rgba(30,20,60,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Main wrap body (furoshiki fabric) ──
  svg.appendChild(
    rc.path(
      "M100,80 C95,100 90,130 95,160 C100,180 130,195 200,198 C270,195 300,180 305,160 C310,130 305,100 300,80 Z",
      {
        fill: "#3f51b5",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#283593",
        strokeWidth: 2,
      },
    ),
  );

  // ── Darker bottom depth layer ──
  svg.appendChild(
    rc.path(
      "M100,140 C105,165 130,182 200,188 C270,182 295,165 300,140 L305,160 C300,180 270,195 200,198 C130,195 100,180 95,160 Z",
      {
        fill: "#303f9f",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Inner lighter fabric layer (visible folds) ──
  svg.appendChild(
    rc.path(
      "M115,90 C112,110 108,135 112,155 C116,172 140,184 200,186 C260,184 284,172 288,155 C292,135 288,110 285,90 Z",
      {
        fill: "#5c6bc0",
        fillStyle: "solid",
        roughness: 1.8,
        stroke: "none",
      },
    ),
  );

  // ── Fabric fold lines (diagonal draping) ──
  svg.appendChild(
    rc.path("M130,85 C135,110 140,140 155,170", {
      fill: "none",
      roughness: 2,
      stroke: "#283593",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.path("M270,85 C265,110 260,140 245,170", {
      fill: "none",
      roughness: 2,
      stroke: "#283593",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.path("M150,88 C152,115 160,145 175,175", {
      fill: "none",
      roughness: 1.8,
      stroke: "#3949ab",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path("M250,88 C248,115 240,145 225,175", {
      fill: "none",
      roughness: 1.8,
      stroke: "#3949ab",
      strokeWidth: 0.8,
    }),
  );
  // Central fold
  svg.appendChild(
    rc.path("M200,75 L200,185", {
      fill: "none",
      roughness: 2,
      stroke: "#3949ab",
      strokeWidth: 0.6,
    }),
  );

  // ── Seigaiha wave pattern (traditional Japanese) ──
  const waveRows = [
    { y: 110, xs: [120, 145, 170, 195, 220, 245, 270] },
    { y: 130, xs: [130, 155, 180, 205, 230, 255] },
    { y: 150, xs: [140, 165, 190, 215, 240, 260] },
    { y: 170, xs: [155, 180, 205, 230, 250] },
  ];
  waveRows.forEach(({ y, xs }) => {
    xs.forEach((x) => {
      svg.appendChild(
        rc.arc(x, y, 20, 14, 0, Math.PI, false, {
          fill: "none",
          roughness: 1.5,
          stroke: "#7986cb",
          strokeWidth: 0.5,
        }),
      );
      svg.appendChild(
        rc.arc(x, y, 14, 10, 0, Math.PI, false, {
          fill: "none",
          roughness: 1.5,
          stroke: "#9fa8da",
          strokeWidth: 0.4,
        }),
      );
    });
  });

  // ── Decorative knot/bow on top ──
  // Left fabric ear
  svg.appendChild(
    rc.path("M200,68 C185,55 165,48 155,52 C145,58 148,68 158,72 C168,76 185,72 200,68 Z", {
      fill: "#5c6bc0",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#3f51b5",
      strokeWidth: 1.5,
    }),
  );
  // Right fabric ear
  svg.appendChild(
    rc.path("M200,68 C215,55 235,48 245,52 C255,58 252,68 242,72 C232,76 215,72 200,68 Z", {
      fill: "#5c6bc0",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#3f51b5",
      strokeWidth: 1.5,
    }),
  );
  // Left ear fold detail
  svg.appendChild(
    rc.path("M170,54 C175,60 180,64 190,66", {
      fill: "none",
      roughness: 1.5,
      stroke: "#3949ab",
      strokeWidth: 0.7,
    }),
  );
  // Right ear fold detail
  svg.appendChild(
    rc.path("M230,54 C225,60 220,64 210,66", {
      fill: "none",
      roughness: 1.5,
      stroke: "#3949ab",
      strokeWidth: 0.7,
    }),
  );

  // ── Center knot ──
  svg.appendChild(
    rc.ellipse(200, 68, 22, 16, {
      fill: "#3f51b5",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#283593",
      strokeWidth: 1.5,
    }),
  );
  // Knot highlight
  svg.appendChild(
    rc.ellipse(197, 65, 8, 5, {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Knot cross lines
  svg.appendChild(
    rc.line(193, 63, 207, 73, {
      roughness: 1.5,
      stroke: "#283593",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(193, 73, 207, 63, {
      roughness: 1.5,
      stroke: "#283593",
      strokeWidth: 0.8,
    }),
  );

  // ── Gold accent cord (mizuhiki) ──
  svg.appendChild(
    rc.path("M155,72 C170,78 185,80 200,78 C215,80 230,78 245,72", {
      fill: "none",
      roughness: 1.5,
      stroke: "#ffd700",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M158,75 C172,80 188,82 200,81 C212,82 228,80 242,75", {
      fill: "none",
      roughness: 1.5,
      stroke: "#ffb300",
      strokeWidth: 1.2,
    }),
  );
  // Gold cord hanging tails
  svg.appendChild(
    rc.path("M155,72 C150,78 148,85 152,90", {
      fill: "none",
      roughness: 2,
      stroke: "#ffd700",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M245,72 C250,78 252,85 248,90", {
      fill: "none",
      roughness: 2,
      stroke: "#ffd700",
      strokeWidth: 1.5,
    }),
  );
  // Gold bead tips on cord ends
  svg.appendChild(
    rc.circle(152, 91, 4, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#ffb300",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.circle(248, 91, 4, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#ffb300",
      strokeWidth: 0.5,
    }),
  );

  // ── Highlight streaks on fabric ──
  svg.appendChild(
    rc.path("M140,95 L138,150", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 2.5,
    }),
  );
  svg.appendChild(
    rc.path("M148,92 L146,140", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M255,100 L252,148", {
      fill: "none",
      roughness: 0.7,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1.8,
    }),
  );

  // ── Tiny scattered dots (traditional pattern accent) ──
  const dotPositions = [
    [135, 100],
    [160, 120],
    [185, 105],
    [220, 115],
    [245, 100],
    [265, 120],
    [150, 145],
    [175, 155],
    [225, 150],
    [250, 140],
    [200, 135],
    [140, 160],
    [260, 155],
    [180, 175],
    [220, 172],
  ];
  dotPositions.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2.5, {
        fill: "#9fa8da",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      }),
    );
  });

  // ── Small cherry blossom motif on front ──
  // Center flower
  const petalAngles = [0, 1.257, 2.513, 3.77, 5.027];
  petalAngles.forEach((angle) => {
    const px = 200 + Math.cos(angle) * 8;
    const py = 140 + Math.sin(angle) * 8;
    svg.appendChild(
      rc.ellipse(px, py, 7, 5, {
        fill: "#f8bbd0",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#f48fb1",
        strokeWidth: 0.4,
      }),
    );
  });
  svg.appendChild(
    rc.circle(200, 140, 4, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Cute heart decoration ──
  svg.appendChild(
    rc.path(
      "M200,160 C198,156 194,156 194,160 C194,163 200,166 200,166 C200,166 206,163 206,160 C206,156 202,156 200,160 Z",
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
    [160, 50],
    [240, 50],
    [200, 42],
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
    rc.path("M110,185 C130,192 165,196 200,198 C235,196 270,192 290,185", {
      fill: "none",
      roughness: 2,
      stroke: "#283593",
      strokeWidth: 1,
    }),
  );
};

export function KimonoWrap({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
