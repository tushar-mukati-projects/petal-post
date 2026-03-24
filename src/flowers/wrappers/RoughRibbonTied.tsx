"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Shadow
  svg.appendChild(
    rc.ellipse(200, 197, 80, 6, {
      fill: "rgba(0,0,0,0.04)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // Stems (soft, light green, fanning out gently)
  const stems = [
    { x2: 168, color: "#81c784", w: 2 },
    { x2: 178, color: "#66bb6a", w: 2.2 },
    { x2: 190, color: "#81c784", w: 2.5 },
    { x2: 200, color: "#4caf50", w: 2.8 },
    { x2: 210, color: "#81c784", w: 2.5 },
    { x2: 222, color: "#66bb6a", w: 2.2 },
    { x2: 232, color: "#81c784", w: 2 },
  ];
  stems.forEach(({ x2, color, w }) => {
    svg.appendChild(
      rc.line(200, 60, x2, 195, {
        roughness: 1.2,
        stroke: color,
        strokeWidth: w,
      }),
    );
  });

  // Small leaves on stems
  const leaves = [
    { x: 182, y: 95, a: -25 },
    { x: 215, y: 90, a: 20 },
    { x: 175, y: 120, a: -30 },
    { x: 225, y: 115, a: 30 },
  ];
  leaves.forEach(({ x, y, a }) => {
    const rad = (a * Math.PI) / 180;
    const tx = x + Math.cos(rad) * 12;
    const ty = y + Math.sin(rad) * 8;
    svg.appendChild(
      rc.path(
        `M${x},${y} C${x + Math.cos(rad - 0.5) * 8},${y + Math.sin(rad - 0.5) * 8} ${tx - 2},${ty - 2} ${tx},${ty} C${tx + 2},${ty + 2} ${x + Math.cos(rad + 0.5) * 8},${y + Math.sin(rad + 0.5) * 8} ${x},${y} Z`,
        {
          fill: "#a5d6a7",
          fillStyle: "solid",
          roughness: 2,
          stroke: "#81c784",
          strokeWidth: 0.5,
        },
      ),
    );
  });

  // Big satin ribbon wrap
  svg.appendChild(
    rc.path("M155,118 L245,118 L245,140 L155,140 Z", {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#f48fb1",
      strokeWidth: 1,
    }),
  );

  // Ribbon highlight
  svg.appendChild(
    rc.path("M158,120 L242,120 L242,126 L158,126 Z", {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Left bow loop (big, fluffy)
  svg.appendChild(
    rc.path("M175,128 C148,100 132,108 155,130 C132,152 148,162 175,134 Z", {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#f48fb1",
      strokeWidth: 1,
    }),
  );
  // Left bow highlight
  svg.appendChild(
    rc.path("M158,112 C152,118 155,124 162,120 Z", {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Right bow loop (big, fluffy)
  svg.appendChild(
    rc.path("M225,128 C252,100 268,108 245,130 C268,152 252,162 225,134 Z", {
      fill: "#f8bbd0",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#f48fb1",
      strokeWidth: 1,
    }),
  );
  // Right bow highlight
  svg.appendChild(
    rc.path("M242,112 C248,118 245,124 238,120 Z", {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Center knot
  svg.appendChild(
    rc.circle(200, 130, 16, {
      fill: "#f06292",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#ec407a",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.circle(198, 128, 5, {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Tails (curling)
  svg.appendChild(
    rc.path("M188,140 C180,158 172,170 168,178 C164,185 166,188 170,184", {
      fill: "none",
      roughness: 2,
      stroke: "#f48fb1",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M212,140 C220,158 228,170 232,178 C236,185 234,188 230,184", {
      fill: "none",
      roughness: 2,
      stroke: "#f48fb1",
      strokeWidth: 2,
    }),
  );
};

export function RibbonTied({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
