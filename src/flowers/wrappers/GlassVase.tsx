"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Base shadow underneath vase
  svg.appendChild(
    rc.ellipse(204, 200, 100, 10, {
      fill: "rgba(96,125,139,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // Vase body (outer - slightly larger for glass thickness)
  svg.appendChild(
    rc.path(
      "M153,42 L146,55 C138,75 133,100 133,130 L133,165 C133,182 148,195 175,198 L225,198 C252,195 267,182 267,165 L267,130 C267,100 262,75 254,55 L247,42",
      {
        fill: "rgba(176,190,197,0.1)",
        fillStyle: "solid",
        roughness: 1.4,
        stroke: "rgba(120,144,156,0.3)",
        strokeWidth: 0.8,
      },
    ),
  );

  // Vase body (main)
  svg.appendChild(
    rc.path(
      "M155,42 L148,55 C140,75 135,100 135,130 L135,165 C135,182 150,195 175,198 L225,198 C250,195 265,182 265,165 L265,130 C265,100 260,75 252,55 L245,42",
      {
        fill: "rgba(200,230,230,0.25)",
        fillStyle: "solid",
        roughness: 1.4,
        stroke: "#90a4ae",
        strokeWidth: 1.8,
      },
    ),
  );

  // Thick glass rim (double ellipse for thickness)
  svg.appendChild(
    rc.ellipse(200, 40, 96, 14, {
      fill: "rgba(176,190,197,0.2)",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#78909c",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 42, 92, 12, {
      fill: "rgba(200,230,230,0.35)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#78909c",
      strokeWidth: 1.5,
    }),
  );

  // Water body
  svg.appendChild(
    rc.path(
      "M139,120 C155,115 180,118 200,115 C220,118 245,115 261,120 L261,165 C261,180 248,192 225,195 L175,195 C152,192 139,180 139,165 Z",
      {
        fill: "rgba(128,203,196,0.2)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "rgba(77,182,172,0.3)",
        strokeWidth: 0.8,
      },
    ),
  );

  // Water surface line
  svg.appendChild(
    rc.path("M142,120 C160,116 180,119 200,116 C220,119 240,116 258,120", {
      fill: "none",
      roughness: 2.2,
      stroke: "rgba(77,182,172,0.4)",
      strokeWidth: 1,
    }),
  );

  // Second water surface ripple
  svg.appendChild(
    rc.path("M148,123 C165,120 185,122 200,119 C215,122 235,120 252,123", {
      fill: "none",
      roughness: 2,
      stroke: "rgba(77,182,172,0.2)",
      strokeWidth: 0.6,
    }),
  );

  // Water ripple lines inside
  svg.appendChild(
    rc.path("M150,140 C165,138 185,139 200,137 C215,139 235,138 250,140", {
      fill: "none",
      roughness: 1.8,
      stroke: "rgba(77,182,172,0.12)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M145,155 C165,153 185,154 200,152 C215,154 235,153 255,155", {
      fill: "none",
      roughness: 1.8,
      stroke: "rgba(77,182,172,0.1)",
      strokeWidth: 0.4,
    }),
  );

  // Stems through glass
  [185, 200, 215].forEach((x) => {
    svg.appendChild(
      rc.line(x, 42, x + (x < 200 ? -3 : x > 200 ? 3 : 0), 195, {
        roughness: 1.2,
        stroke: "rgba(102,187,106,0.3)",
        strokeWidth: 1.8,
      }),
    );
  });

  // Caustic light patterns (bright spots refracted through water)
  svg.appendChild(
    rc.path("M165,135 C168,132 172,134 170,138 C167,136 164,137 165,135 Z", {
      fill: "rgba(255,255,255,0.18)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.path("M225,150 C228,147 232,149 230,153 C227,151 224,152 225,150 Z", {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.path("M195,165 C198,162 202,164 200,168 C197,166 194,167 195,165 Z", {
      fill: "rgba(255,255,255,0.12)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Glass highlight (main left reflection)
  svg.appendChild(
    rc.line(148, 55, 140, 170, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 3.5,
    }),
  );

  // Glass highlight (secondary thinner left)
  svg.appendChild(
    rc.line(152, 58, 144, 165, {
      roughness: 0.4,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 1.5,
    }),
  );

  // Glass highlight (right side subtle)
  svg.appendChild(
    rc.line(258, 65, 260, 155, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 2,
    }),
  );

  // Bubbles in water
  [
    { x: 175, y: 140, r: 5 },
    { x: 220, y: 155, r: 4 },
    { x: 195, y: 170, r: 3 },
    { x: 210, y: 135, r: 3.5 },
    { x: 160, y: 160, r: 2.5 },
    { x: 235, y: 145, r: 3 },
    { x: 185, y: 180, r: 2 },
    { x: 245, y: 170, r: 2.5 },
  ].forEach(({ x, y, r }) => {
    svg.appendChild(
      rc.circle(x, y, r * 2, {
        fill: "rgba(255,255,255,0.12)",
        fillStyle: "solid",
        roughness: 1.8,
        stroke: "rgba(128,203,196,0.3)",
        strokeWidth: 0.4,
      }),
    );
  });

  // Tiny sparkle dots on glass surface
  [
    { x: 145, y: 80 },
    { x: 150, y: 110 },
    { x: 255, y: 90 },
    { x: 260, y: 130 },
  ].forEach(({ x, y }) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "rgba(255,255,255,0.35)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // Vase base (thicker for stability look)
  svg.appendChild(
    rc.ellipse(200, 198, 85, 10, {
      fill: "rgba(176,190,197,0.18)",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "rgba(120,144,156,0.35)",
      strokeWidth: 1,
    }),
  );

  // Inner base ring
  svg.appendChild(
    rc.ellipse(200, 197, 70, 6, {
      fill: "rgba(200,230,230,0.1)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "rgba(120,144,156,0.15)",
      strokeWidth: 0.5,
    }),
  );
};

export function GlassVase({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
