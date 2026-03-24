"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Coaster underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 210, 12, {
      fill: "#d7ccc8",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 3,
      hachureAngle: 45,
      roughness: 1.5,
      stroke: "#bcaaa4",
      strokeWidth: 1,
    }),
  );
  // Coaster ring detail
  svg.appendChild(
    rc.ellipse(200, 198, 180, 10, {
      fill: "none",
      roughness: 1.2,
      stroke: "#bcaaa4",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 150, 8, {
      fill: "none",
      roughness: 1,
      stroke: "#bcaaa4",
      strokeWidth: 0.4,
    }),
  );

  // ── Shadow on coaster ──
  svg.appendChild(
    rc.ellipse(200, 196, 175, 9, {
      fill: "rgba(62,39,35,0.08)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Steam swirls rising from mug ──
  svg.appendChild(
    rc.path("M170,42 C168,32 172,22 168,12 C164,2 170,-4 174,6 C178,14 174,26 172,36", {
      fill: "none",
      roughness: 2.5,
      stroke: "rgba(180,180,180,0.25)",
      strokeWidth: 1.8,
    }),
  );
  svg.appendChild(
    rc.path("M195,40 C197,28 193,18 197,8 C201,-2 195,-6 191,4 C187,14 193,26 195,34", {
      fill: "none",
      roughness: 2.5,
      stroke: "rgba(180,180,180,0.20)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M225,42 C223,34 227,24 223,14 C219,4 225,0 229,10 C233,18 227,30 225,38", {
      fill: "none",
      roughness: 2.5,
      stroke: "rgba(180,180,180,0.22)",
      strokeWidth: 1.6,
    }),
  );

  // ── Mug body ──
  svg.appendChild(
    rc.path(
      "M115,48 L115,175 C115,190 135,198 175,198 L225,198 C265,198 285,190 285,175 L285,48 Z",
      {
        fill: "#90caf9",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#42a5f5",
        strokeWidth: 2,
      },
    ),
  );

  // ── Mug body darker right side for 3D depth ──
  svg.appendChild(
    rc.path("M250,48 L285,48 L285,175 C285,190 275,195 250,198 L250,48", {
      fill: "#78b8e8",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 4,
      hachureAngle: 90,
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Handle on right side (thicker C-shape) ──
  svg.appendChild(
    rc.path("M285,72 C314,72 336,84 340,108 C344,132 336,152 324,162 C312,170 298,168 285,162", {
      fill: "none",
      roughness: 2.2,
      stroke: "#42a5f5",
      strokeWidth: 5,
    }),
  );

  // ── Handle inner edge ──
  svg.appendChild(
    rc.path("M285,82 C306,82 320,92 323,108 C326,124 320,142 312,150 C304,158 296,158 285,154", {
      fill: "none",
      roughness: 2,
      stroke: "#64b5f6",
      strokeWidth: 2,
    }),
  );

  // ── Handle highlight ──
  svg.appendChild(
    rc.path("M290,78 C308,80 322,90 326,108", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 1.5,
    }),
  );

  // ── Mug rim / lip ──
  svg.appendChild(
    rc.path("M112,44 L288,44 L288,56 L112,56 Z", {
      fill: "#64b5f6",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#42a5f5",
      strokeWidth: 1.5,
    }),
  );

  // ── Rim top ellipse (liquid surface visible) ──
  svg.appendChild(
    rc.ellipse(200, 46, 178, 12, {
      fill: "#6d4c41",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#42a5f5",
      strokeWidth: 1,
    }),
  );

  // ── Latte art heart on surface ──
  svg.appendChild(
    rc.path(
      "M196,43 C196,40 192,38 190,39 C188,40 188,42 191,46 L196,50 L201,46 C204,42 204,40 202,39 C200,38 196,40 196,43 Z",
      {
        fill: "#f5f0e8",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#d7ccc8",
        strokeWidth: 0.5,
      },
    ),
  );
  // Latte art swirl detail
  svg.appendChild(
    rc.path("M193,44 C194,42 198,42 199,44", {
      fill: "none",
      roughness: 1,
      stroke: "#e8ddd0",
      strokeWidth: 0.4,
    }),
  );

  // ── Coffee surface highlight ──
  svg.appendChild(
    rc.ellipse(185, 44, 20, 4, {
      fill: "rgba(255,255,255,0.08)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Small heart decoration on the mug side ──
  svg.appendChild(
    rc.path(
      "M190,118 C190,110 180,102 175,107 C170,112 170,120 180,130 L190,140 L200,130 C210,120 210,112 205,107 C200,102 190,110 190,118 Z",
      {
        fill: "#ef5350",
        fillStyle: "solid",
        roughness: 2.5,
        stroke: "#c62828",
        strokeWidth: 1,
      },
    ),
  );
  // Heart highlight
  svg.appendChild(
    rc.path("M182,110 C184,106 188,108 188,112", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 1,
    }),
  );

  // ── Mug left highlight (main shine) ──
  svg.appendChild(
    rc.line(125, 56, 125, 178, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.22)",
      strokeWidth: 3.5,
    }),
  );

  // ── Secondary highlight ──
  svg.appendChild(
    rc.line(132, 58, 132, 175, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.10)",
      strokeWidth: 2,
    }),
  );

  // ── Horizontal band near bottom ──
  svg.appendChild(
    rc.line(118, 168, 282, 168, {
      roughness: 2,
      stroke: "#42a5f5",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.line(118, 172, 282, 172, {
      roughness: 2,
      stroke: "#42a5f5",
      strokeWidth: 0.8,
    }),
  );

  // ── Bottom curve ──
  svg.appendChild(
    rc.path("M120,192 C140,198 175,200 200,200 C225,200 260,198 280,192", {
      fill: "none",
      roughness: 1.8,
      stroke: "#42a5f5",
      strokeWidth: 1,
    }),
  );

  // ── Subtle texture dots on mug body ──
  const textureDots = [
    [220, 80],
    [240, 100],
    [155, 85],
    [260, 130],
    [145, 150],
    [230, 155],
    [165, 110],
  ];
  textureDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 1.5, {
        fill: "rgba(66,165,245,0.15)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Cute tiny sparkle near rim ──
  // Sparkle cross
  svg.appendChild(
    rc.line(250, 60, 250, 68, {
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(246, 64, 254, 64, {
      roughness: 1,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 0.8,
    }),
  );
};

export function CoffeeMug({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
