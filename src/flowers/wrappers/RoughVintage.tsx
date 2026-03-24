"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 200, 14, {
      fill: "rgba(80,40,30,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 160, 10, {
      fill: "rgba(80,40,30,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Tin body (cylindrical shape) ──
  svg.appendChild(
    rc.path(
      "M120,55 L120,185 C120,192 155,198 200,198 C245,198 280,192 280,185 L280,55 C280,48 245,42 200,42 C155,42 120,48 120,55 Z",
      {
        fill: "#d4a08a",
        fillStyle: "solid",
        roughness: 1.8,
        stroke: "#b5806a",
        strokeWidth: 1.8,
      },
    ),
  );

  // ── Darker bottom half for depth ──
  svg.appendChild(
    rc.path("M120,140 L120,185 C120,192 155,198 200,198 C245,198 280,192 280,185 L280,140 Z", {
      fill: "#c09078",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // ── Cream label area (ornate frame in center) ──
  svg.appendChild(
    rc.path("M140,80 L260,80 L265,85 L265,155 L260,160 L140,160 L135,155 L135,85 Z", {
      fill: "#fff8e1",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 1.5,
    }),
  );

  // ── Ornate label border (scrollwork) ──
  // Outer decorative frame
  svg.appendChild(
    rc.path("M145,85 L255,85 L258,88 L258,152 L255,155 L145,155 L142,152 L142,88 Z", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 1,
    }),
  );
  // Inner decorative frame
  svg.appendChild(
    rc.path("M150,90 L250,90 L252,92 L252,148 L250,150 L150,150 L148,148 L148,92 Z", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.6,
    }),
  );

  // ── Scrollwork corner details ──
  // Top-left scroll
  svg.appendChild(
    rc.path("M145,85 C142,82 140,85 143,88 C146,91 148,88 145,85", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );
  // Top-right scroll
  svg.appendChild(
    rc.path("M255,85 C258,82 260,85 257,88 C254,91 252,88 255,85", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );
  // Bottom-left scroll
  svg.appendChild(
    rc.path("M145,155 C142,158 140,155 143,152 C146,149 148,152 145,155", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );
  // Bottom-right scroll
  svg.appendChild(
    rc.path("M255,155 C258,158 260,155 257,152 C254,149 252,152 255,155", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );

  // ── Top center scroll flourish ──
  svg.appendChild(
    rc.path("M185,85 C190,80 195,82 200,80 C205,82 210,80 215,85", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );
  // Bottom center scroll flourish
  svg.appendChild(
    rc.path("M185,155 C190,160 195,158 200,160 C205,158 210,160 215,155", {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );

  // ── Floral motif on label (central rose) ──
  // Rose center
  svg.appendChild(
    rc.path("M195,118 C195,112 202,108 206,112 C210,116 206,122 200,120 C194,118 198,114 200,114", {
      fill: "none",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 0.8,
    }),
  );
  // Rose outer petals
  svg.appendChild(
    rc.path(
      "M190,122 C186,116 188,108 196,106 C204,104 212,108 214,114 C216,120 212,126 206,126 C200,126 194,124 190,122",
      {
        fill: "none",
        roughness: 1.3,
        stroke: "#ec407a",
        strokeWidth: 0.6,
      },
    ),
  );
  // Rose leaves
  svg.appendChild(
    rc.path("M186,124 C182,126 178,124 180,120", {
      fill: "none",
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.7,
    }),
  );
  svg.appendChild(
    rc.path("M214,118 C218,116 222,118 220,122", {
      fill: "none",
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.7,
    }),
  );

  // ── Small side flowers on label ──
  // Left flower
  svg.appendChild(
    rc.circle(165, 115, 4, {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.circle(165, 115, 2, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Right flower
  svg.appendChild(
    rc.circle(235, 115, 4, {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.circle(235, 115, 2, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Connecting vine
  svg.appendChild(
    rc.path("M170,117 C180,120 190,118 200,120 C210,118 220,120 230,117", {
      fill: "none",
      roughness: 1.5,
      stroke: "#81c784",
      strokeWidth: 0.5,
    }),
  );
  // Tiny leaves on vine
  [178, 192, 208, 222].forEach((x) => {
    svg.appendChild(
      rc.path(`M${x},${119} C${x + 2},${116} ${x + 5},${117} ${x + 3},${120}`, {
        fill: "none",
        roughness: 1,
        stroke: "#66bb6a",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Label text lines (decorative) ──
  svg.appendChild(
    rc.line(170, 100, 230, 100, {
      roughness: 1.5,
      stroke: "rgba(180,128,106,0.3)",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(175, 135, 225, 135, {
      roughness: 1.5,
      stroke: "rgba(180,128,106,0.3)",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(180, 142, 220, 142, {
      roughness: 1.5,
      stroke: "rgba(180,128,106,0.25)",
      strokeWidth: 0.5,
    }),
  );

  // ── Beaded rim detail at top ──
  svg.appendChild(
    rc.ellipse(200, 55, 162, 15, {
      fill: "#d4a574",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#b5806a",
      strokeWidth: 1.5,
    }),
  );
  // Top rim beads
  const topBeadXs = [130, 142, 154, 166, 178, 190, 202, 214, 226, 238, 250, 262, 274];
  topBeadXs.forEach((x) => {
    const yOff = 3 * Math.sin(((x - 130) / 144) * Math.PI);
    svg.appendChild(
      rc.circle(x, 55 - yOff, 4, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#b5806a",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── Beaded rim detail at bottom ──
  svg.appendChild(
    rc.ellipse(200, 188, 155, 12, {
      fill: "#d4a574",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#b5806a",
      strokeWidth: 1.2,
    }),
  );
  const botBeadXs = [135, 147, 159, 171, 183, 195, 207, 219, 231, 243, 255, 267];
  botBeadXs.forEach((x) => {
    const yOff = 2 * Math.sin(((x - 135) / 132) * Math.PI);
    svg.appendChild(
      rc.circle(x, 188 + yOff, 3.5, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#b5806a",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Embossed dot pattern on tin body (above and below label) ──
  const upperDots = [
    [140, 70],
    [155, 68],
    [170, 70],
    [185, 68],
    [200, 70],
    [215, 68],
    [230, 70],
    [245, 68],
    [260, 70],
  ];
  upperDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2.5, {
        fill: "rgba(212,165,116,0.4)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "rgba(181,128,106,0.3)",
        strokeWidth: 0.3,
      }),
    );
  });
  const lowerDots = [
    [140, 170],
    [155, 172],
    [170, 170],
    [185, 172],
    [200, 170],
    [215, 172],
    [230, 170],
    [245, 172],
    [260, 170],
  ];
  lowerDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2.5, {
        fill: "rgba(212,165,116,0.4)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "rgba(181,128,106,0.3)",
        strokeWidth: 0.3,
      }),
    );
  });

  // ── Lid handle/knob ──
  // Handle base
  svg.appendChild(
    rc.ellipse(200, 45, 28, 8, {
      fill: "#d4a574",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#b5806a",
      strokeWidth: 1,
    }),
  );
  // Handle knob
  svg.appendChild(
    rc.circle(200, 38, 8, {
      fill: "#d4a574",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#b5806a",
      strokeWidth: 1,
    }),
  );
  // Handle highlight
  svg.appendChild(
    rc.circle(198, 36, 3, {
      fill: "rgba(255,255,255,0.3)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Highlight streaks on tin body ──
  svg.appendChild(
    rc.path("M138,60 L136,175", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 2.5,
    }),
  );
  svg.appendChild(
    rc.path("M145,58 L143,168", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M260,62 L258,172", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 1.8,
    }),
  );

  // ── Cute heart on tin ──
  svg.appendChild(
    rc.path(
      "M200,172 C198,168 194,168 194,172 C194,175 200,178 200,178 C200,178 206,175 206,172 C206,168 202,168 200,172 Z",
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
    [130, 45],
    [270, 45],
    [200, 30],
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

  // ── Gold vertical accent lines on tin sides ──
  svg.appendChild(
    rc.line(125, 58, 125, 182, {
      roughness: 1.5,
      stroke: "rgba(212,165,116,0.3)",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(275, 58, 275, 182, {
      roughness: 1.5,
      stroke: "rgba(212,165,116,0.3)",
      strokeWidth: 0.8,
    }),
  );
};

export function VintageTin({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
