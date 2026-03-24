"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Shadow
  svg.appendChild(
    rc.ellipse(200, 196, 160, 8, {
      fill: "rgba(0,0,0,0.05)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // Basket body (lighter wicker, warm beige)
  svg.appendChild(
    rc.path("M120,58 L115,185 C115,192 145,198 200,198 C255,198 285,192 285,185 L280,58 Z", {
      fill: "#f0dcc4",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#c49a6c",
      strokeWidth: 1.5,
    }),
  );

  // Horizontal weave lines (light, not heavy)
  [72, 88, 104, 120, 136, 152, 168, 180].forEach((y) => {
    svg.appendChild(
      rc.line(118, y, 282, y, {
        roughness: 2,
        stroke: "rgba(196,154,108,0.35)",
        strokeWidth: 0.6,
      }),
    );
  });

  // Vertical weave lines (subtle)
  for (let x = 132; x <= 268; x += 18) {
    svg.appendChild(
      rc.line(x, 60, x - 1, 192, {
        roughness: 1.8,
        stroke: "rgba(196,154,108,0.25)",
        strokeWidth: 0.5,
      }),
    );
  }

  // Rim (lighter)
  svg.appendChild(
    rc.path("M118,54 L282,54 L283,64 L117,64 Z", {
      fill: "#e8d4b8",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#c49a6c",
      strokeWidth: 1,
    }),
  );

  // Rim braid pattern
  for (let x = 125; x <= 275; x += 10) {
    svg.appendChild(
      rc.line(x, 55, x + 5, 63, {
        roughness: 2,
        stroke: "rgba(161,136,127,0.3)",
        strokeWidth: 0.5,
      }),
    );
  }

  // Handlebar hints (simple, clean)
  svg.appendChild(
    rc.line(110, 48, 145, 48, {
      roughness: 1.5,
      stroke: "#90a4ae",
      strokeWidth: 3,
    }),
  );
  svg.appendChild(
    rc.line(255, 48, 290, 48, {
      roughness: 1.5,
      stroke: "#90a4ae",
      strokeWidth: 3,
    }),
  );

  // Handlebar grips
  svg.appendChild(
    rc.rectangle(105, 44, 18, 8, {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#6d4c41",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.rectangle(277, 44, 18, 8, {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#6d4c41",
      strokeWidth: 0.8,
    }),
  );

  // Bell
  svg.appendChild(
    rc.circle(135, 42, 10, {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#f9a825",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.circle(134, 41, 3, {
      fill: "rgba(255,255,255,0.3)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Bracket supports
  svg.appendChild(
    rc.line(140, 54, 135, 48, {
      roughness: 1.5,
      stroke: "#90a4ae",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.line(260, 54, 265, 48, {
      roughness: 1.5,
      stroke: "#90a4ae",
      strokeWidth: 2,
    }),
  );

  // Highlight on basket
  svg.appendChild(
    rc.line(130, 65, 128, 180, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 2.5,
    }),
  );

  // Cute heart on basket
  svg.appendChild(
    rc.path(
      "M200,130 C198,126 193,126 193,130 C193,133 200,138 200,138 C200,138 207,133 207,130 C207,126 202,126 200,130 Z",
      {
        fill: "rgba(244,143,177,0.3)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "rgba(233,30,99,0.3)",
        strokeWidth: 0.5,
      },
    ),
  );
};

export function BicycleBasket({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
