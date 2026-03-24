"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 190, 10, {
      fill: "rgba(62,39,35,0.10)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 160, 7, {
      fill: "rgba(62,39,35,0.06)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Tissue paper peeking out top (behind bag) ──
  // Left tissue
  svg.appendChild(
    rc.path("M140,42 C138,28 130,18 128,12 C126,6 132,4 136,10 C142,20 144,32 145,42", {
      fill: "#f8f0f0",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#e0d6d6",
      strokeWidth: 0.8,
    }),
  );
  // Center tissue
  svg.appendChild(
    rc.path("M190,42 C188,24 185,14 190,6 C195,0 200,4 198,14 C196,26 194,36 193,42", {
      fill: "#fff3e0",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#e0d6d6",
      strokeWidth: 0.8,
    }),
  );
  // Right tissue
  svg.appendChild(
    rc.path("M250,42 C252,26 258,16 262,10 C266,4 270,8 268,14 C264,24 256,34 254,42", {
      fill: "#fce4ec",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#e0d6d6",
      strokeWidth: 0.8,
    }),
  );
  // Extra small tissue
  svg.appendChild(
    rc.path("M220,42 C218,30 222,20 226,14 C228,10 232,14 228,22 C224,30 222,38 221,42", {
      fill: "#f3e5f5",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#e0d6d6",
      strokeWidth: 0.6,
    }),
  );

  // ── Bag body ──
  svg.appendChild(
    rc.path(
      "M115,55 L108,185 C107,192 118,198 145,198 L255,198 C282,198 293,192 292,185 L285,55 Z",
      {
        fill: "#d4a574",
        fillStyle: "cross-hatch",
        fillWeight: 0.4,
        hachureGap: 6,
        hachureAngle: 45,
        roughness: 2,
        stroke: "#a1887f",
        strokeWidth: 1.5,
      },
    ),
  );

  // ── Darker sides for 3D depth ──
  svg.appendChild(
    rc.path("M115,55 L108,185 C108,190 112,194 120,196 L120,58 Z", {
      fill: "#c49a6c",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 4,
      hachureAngle: 80,
      roughness: 1.2,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.path("M285,55 L292,185 C292,190 288,194 280,196 L280,58 Z", {
      fill: "#c49a6c",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 4,
      hachureAngle: 80,
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Side crease left ──
  svg.appendChild(
    rc.line(135, 55, 128, 195, {
      roughness: 1.8,
      stroke: "#a1887f",
      strokeWidth: 0.9,
    }),
  );

  // ── Side crease right ──
  svg.appendChild(
    rc.line(265, 55, 272, 195, {
      roughness: 1.8,
      stroke: "#a1887f",
      strokeWidth: 0.9,
    }),
  );

  // ── Paper texture crinkle lines ──
  [72, 95, 118, 140, 162].forEach((y) => {
    svg.appendChild(
      rc.line(116, y, 284, y, {
        roughness: 2.8,
        stroke: "rgba(141,110,99,0.2)",
        strokeWidth: 0.45,
      }),
    );
  });

  // ── Extra crinkle detail lines (diagonal) ──
  svg.appendChild(
    rc.line(140, 70, 160, 110, {
      roughness: 2.5,
      stroke: "rgba(141,110,99,0.12)",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(250, 80, 235, 120, {
      roughness: 2.5,
      stroke: "rgba(141,110,99,0.12)",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(180, 130, 200, 170, {
      roughness: 2.5,
      stroke: "rgba(141,110,99,0.12)",
      strokeWidth: 0.4,
    }),
  );

  // ── Reinforced bottom area ──
  svg.appendChild(
    rc.path("M112,180 L288,180 L290,190 C290,196 278,200 200,200 C122,200 110,196 110,190 Z", {
      fill: "#c49a6c",
      fillStyle: "cross-hatch",
      fillWeight: 0.3,
      hachureGap: 4,
      hachureAngle: 0,
      roughness: 1.5,
      stroke: "#a1887f",
      strokeWidth: 0.8,
    }),
  );

  // ── Bottom fold line ──
  svg.appendChild(
    rc.line(115, 185, 285, 185, {
      roughness: 2.2,
      stroke: "#a1887f",
      strokeWidth: 0.7,
    }),
  );

  // ── Folded top (slightly open) ──
  svg.appendChild(
    rc.path("M112,55 L118,42 L282,42 L288,55 Z", {
      fill: "#d4a574",
      fillStyle: "cross-hatch",
      fillWeight: 0.3,
      hachureGap: 5,
      hachureAngle: -30,
      roughness: 2.2,
      stroke: "#a1887f",
      strokeWidth: 1.2,
    }),
  );

  // ── Inner fold visible at top ──
  svg.appendChild(
    rc.path("M120,42 C155,49 245,49 280,42", {
      fill: "none",
      roughness: 2.5,
      stroke: "#a1887f",
      strokeWidth: 0.8,
    }),
  );

  // ── Brand stamp / logo (cute circle stamp on bag) ──
  svg.appendChild(
    rc.circle(200, 130, 36, {
      fill: "none",
      roughness: 2.5,
      stroke: "#8d6e63",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.circle(200, 130, 30, {
      fill: "none",
      roughness: 2,
      stroke: "#8d6e63",
      strokeWidth: 0.5,
    }),
  );
  // Star in the stamp center
  svg.appendChild(
    rc.path(
      "M200,118 L203,124 L210,125 L205,130 L206,137 L200,134 L194,137 L195,130 L190,125 L197,124 Z",
      {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#7b5b4e",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── Left rope handle ──
  svg.appendChild(
    rc.path("M155,42 C152,22 148,14 145,12 C140,10 136,14 138,22 C140,30 145,38 150,42", {
      fill: "none",
      roughness: 2.2,
      stroke: "#8d6e63",
      strokeWidth: 2.8,
    }),
  );
  // Handle rope twist detail
  svg.appendChild(
    rc.path("M153,32 C150,26 148,20 146,16", {
      fill: "none",
      roughness: 1.5,
      stroke: "#a1887f",
      strokeWidth: 1,
    }),
  );

  // ── Right rope handle ──
  svg.appendChild(
    rc.path("M245,42 C248,22 252,14 255,12 C260,10 264,14 262,22 C260,30 255,38 250,42", {
      fill: "none",
      roughness: 2.2,
      stroke: "#8d6e63",
      strokeWidth: 2.8,
    }),
  );
  // Handle rope twist detail
  svg.appendChild(
    rc.path("M247,32 C250,26 252,20 254,16", {
      fill: "none",
      roughness: 1.5,
      stroke: "#a1887f",
      strokeWidth: 1,
    }),
  );

  // ── Handle attachment dots ──
  [155, 150, 245, 250].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 44, 4.5, {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#5d4037",
        strokeWidth: 0.6,
      }),
    );
  });

  // ── Highlight strokes for shine ──
  svg.appendChild(
    rc.line(128, 60, 124, 175, {
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.14)",
      strokeWidth: 2.5,
    }),
  );
  svg.appendChild(
    rc.line(134, 60, 130, 170, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: 1.5,
    }),
  );

  // ── Small cute paper texture dots ──
  const dotPositions = [
    [150, 80],
    [230, 90],
    [175, 155],
    [240, 165],
    [160, 170],
  ];
  dotPositions.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "#b8956e",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });
};

export function PaperBag({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
