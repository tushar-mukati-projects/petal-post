"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow beneath box ──
  svg.appendChild(
    rc.ellipse(200, 200, 210, 14, {
      fill: "rgba(200,20,80,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 200, 170, 10, {
      fill: "rgba(200,20,80,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Lid tilted behind the box ──
  svg.appendChild(
    rc.path("M118,68 L108,30 L292,20 L282,58 Z", {
      fill: "#d81b60",
      fillStyle: "hachure",
      fillWeight: 0.5,
      hachureGap: 5,
      hachureAngle: 30,
      roughness: 2.2,
      stroke: "#ad1457",
      strokeWidth: 1.5,
    }),
  );

  // Lid lighter face
  svg.appendChild(
    rc.path("M125,64 L116,36 L240,28 L245,56 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Lid ribbon horizontal
  svg.appendChild(
    rc.path("M188,20 L184,58 L216,58 L212,20 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#daa520",
      strokeWidth: 1,
    }),
  );

  // Lid ribbon highlight
  svg.appendChild(
    rc.path("M194,22 L192,56", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1.5,
    }),
  );

  // ── Box body (darker outer) ──
  svg.appendChild(
    rc.path("M120,68 L120,192 C120,196 145,200 200,200 C255,200 280,196 280,192 L280,68 Z", {
      fill: "#c2185b",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#ad1457",
      strokeWidth: 1.8,
    }),
  );

  // Box lighter inner face
  svg.appendChild(
    rc.path("M125,72 L125,190 C125,193 150,196 200,196 C250,196 275,193 275,190 L275,72 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Box front face highlight
  svg.appendChild(
    rc.path("M130,75 L130,188 L178,188 L178,75 Z", {
      fill: "#f06292",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Polka dots pattern on box ──
  const boxDots: [number, number][] = [
    [140, 88],
    [165, 82],
    [145, 108],
    [168, 100],
    [140, 158],
    [165, 152],
    [145, 178],
    [168, 170],
    [220, 82],
    [245, 88],
    [225, 100],
    [250, 108],
    [220, 152],
    [245, 158],
    [225, 170],
    [250, 178],
    [140, 130],
    [165, 138],
    [220, 130],
    [245, 138],
  ];
  boxDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 6, {
        fill: "rgba(255,255,255,0.18)",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "rgba(255,255,255,0.1)",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Tissue paper peeking out from top ──
  svg.appendChild(
    rc.path(
      "M140,68 L135,40 C138,32 145,30 155,35 L160,52 L170,35 C175,28 182,30 185,38 L180,55 Z",
      {
        fill: "#fff9c4",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#f0e68c",
        strokeWidth: 0.8,
      },
    ),
  );
  svg.appendChild(
    rc.path(
      "M220,68 L222,42 C225,34 232,30 238,36 L240,55 L248,38 C253,30 260,32 262,40 L258,68 Z",
      {
        fill: "#fff9c4",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#f0e68c",
        strokeWidth: 0.8,
      },
    ),
  );
  // Tissue crinkle lines
  svg.appendChild(
    rc.path("M142,50 L150,42 L158,48", {
      fill: "none",
      roughness: 1.5,
      stroke: "#e6d5a0",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M230,48 L238,40 L248,46", {
      fill: "none",
      roughness: 1.5,
      stroke: "#e6d5a0",
      strokeWidth: 0.5,
    }),
  );

  // ── Vertical ribbon on box front ──
  svg.appendChild(
    rc.path("M190,68 L190,198 L210,198 L210,68 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#daa520",
      strokeWidth: 1,
    }),
  );

  // Vertical ribbon highlight
  svg.appendChild(
    rc.path("M195,70 L195,196", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1.5,
    }),
  );

  // ── Horizontal ribbon on box front ──
  svg.appendChild(
    rc.path("M122,125 L278,125 L278,142 L122,142 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#daa520",
      strokeWidth: 1,
    }),
  );

  // Horizontal ribbon highlight
  svg.appendChild(
    rc.path("M124,130 L276,130", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 1.2,
    }),
  );

  // ── Ribbon cross center knot ──
  svg.appendChild(
    rc.circle(200, 133, 16, {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#daa520",
      strokeWidth: 1,
    }),
  );

  // Knot highlight
  svg.appendChild(
    rc.circle(197, 130, 4, {
      fill: "rgba(255,255,255,0.3)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Left bow loop ──
  svg.appendChild(
    rc.path("M192,130 C172,108 158,115 178,133 C158,152 172,160 192,138 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#daa520",
      strokeWidth: 0.8,
    }),
  );

  // ── Right bow loop ──
  svg.appendChild(
    rc.path("M208,130 C228,108 242,115 222,133 C242,152 228,160 208,138 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#daa520",
      strokeWidth: 0.8,
    }),
  );

  // Bow loop highlights
  svg.appendChild(
    rc.path("M176,125 C170,120 168,128 174,130", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.path("M226,125 C232,120 234,128 228,130", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 1,
    }),
  );

  // ── Ribbon tail left ──
  svg.appendChild(
    rc.path("M182,140 L170,158 L178,152 L172,168", {
      fill: "none",
      roughness: 2,
      stroke: "#daa520",
      strokeWidth: 1.2,
    }),
  );

  // ── Ribbon tail right ──
  svg.appendChild(
    rc.path("M218,140 L230,158 L222,152 L228,168", {
      fill: "none",
      roughness: 2,
      stroke: "#daa520",
      strokeWidth: 1.2,
    }),
  );

  // ── Box top opening edge ──
  svg.appendChild(
    rc.path("M120,68 C145,72 170,74 200,74 C230,74 255,72 280,68", {
      fill: "none",
      roughness: 2,
      stroke: "#ad1457",
      strokeWidth: 1.5,
    }),
  );

  // Interior shadow
  svg.appendChild(
    rc.path(
      "M125,68 C150,72 175,74 200,74 C225,74 250,72 275,68 L275,82 C250,78 225,76 200,76 C175,76 150,78 125,82 Z",
      {
        fill: "#880e4f",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );

  // ── Sparkle effects ──
  // Sparkle 1 - top left
  svg.appendChild(rc.line(100, 50, 100, 38, { roughness: 1, stroke: "#ffd700", strokeWidth: 1 }));
  svg.appendChild(rc.line(94, 44, 106, 44, { roughness: 1, stroke: "#ffd700", strokeWidth: 1 }));
  svg.appendChild(
    rc.line(96, 40, 104, 48, { roughness: 0.8, stroke: "#ffd700", strokeWidth: 0.6 }),
  );
  svg.appendChild(
    rc.line(96, 48, 104, 40, { roughness: 0.8, stroke: "#ffd700", strokeWidth: 0.6 }),
  );

  // Sparkle 2 - top right
  svg.appendChild(rc.line(300, 42, 300, 32, { roughness: 1, stroke: "#ffd700", strokeWidth: 0.8 }));
  svg.appendChild(rc.line(295, 37, 305, 37, { roughness: 1, stroke: "#ffd700", strokeWidth: 0.8 }));

  // Sparkle 3 - small
  svg.appendChild(
    rc.line(315, 70, 315, 64, { roughness: 0.8, stroke: "#ffd700", strokeWidth: 0.6 }),
  );
  svg.appendChild(
    rc.line(312, 67, 318, 67, { roughness: 0.8, stroke: "#ffd700", strokeWidth: 0.6 }),
  );

  // ── Cute tiny heart on box face ──
  svg.appendChild(
    rc.path(
      "M150,115 C150,115 148,112 146,112 C144,112 143,113.5 143,115 C143,117.5 150,121 150,121 C150,121 157,117.5 157,115 C157,113.5 156,112 154,112 C152,112 150,115 150,115 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── Another tiny heart ──
  svg.appendChild(
    rc.path(
      "M250,115 C250,115 248,112 246,112 C244,112 243,113.5 243,115 C243,117.5 250,121 250,121 C250,121 257,117.5 257,115 C257,113.5 256,112 254,112 C252,112 250,115 250,115 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── White shine streaks ──
  svg.appendChild(
    rc.path("M135,78 L135,115", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 3,
    }),
  );
  svg.appendChild(
    rc.path("M142,80 L142,108", {
      fill: "none",
      roughness: 0.4,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 2,
    }),
  );
};

export function GiftBox({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
