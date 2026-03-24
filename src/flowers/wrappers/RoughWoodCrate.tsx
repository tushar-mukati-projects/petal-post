"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Shadow
  svg.appendChild(
    rc.ellipse(202, 196, 170, 8, {
      fill: "rgba(0,0,0,0.06)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // Crate body (light pine wood)
  svg.appendChild(
    rc.path("M115,55 L112,190 L288,190 L285,55 Z", {
      fill: "#f5e6d0",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#d4a574",
      strokeWidth: 1.5,
    }),
  );

  // Slats (horizontal boards - light with gaps)
  [62, 88, 114, 140, 166].forEach((y, i) => {
    svg.appendChild(
      rc.path(`M116,${y} L284,${y} L284,${y + 22} L116,${y + 22} Z`, {
        fill: i % 2 === 0 ? "#f0dcc4" : "#f5e6d0",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#d4a574",
        strokeWidth: 0.8,
      }),
    );
    // Wood grain line
    svg.appendChild(
      rc.line(125, y + 11, 275, y + 11, {
        roughness: 2.5,
        stroke: "rgba(212,165,116,0.2)",
        strokeWidth: 0.5,
      }),
    );
  });

  // Side edge boards
  svg.appendChild(
    rc.path("M115,55 L115,190 L125,190 L125,55 Z", {
      fill: "#e8d4b8",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#c49a6c",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path("M275,55 L275,190 L285,190 L285,55 Z", {
      fill: "#e8d4b8",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#c49a6c",
      strokeWidth: 0.8,
    }),
  );

  // Top rim
  svg.appendChild(
    rc.path("M110,52 L290,52 L290,60 L110,60 Z", {
      fill: "#e8d4b8",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#c49a6c",
      strokeWidth: 1,
    }),
  );

  // Wood knots
  svg.appendChild(
    rc.ellipse(170, 78, 8, 6, {
      fill: "#c49a6c",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#a1887f",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.ellipse(230, 130, 7, 5, {
      fill: "#c49a6c",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#a1887f",
      strokeWidth: 0.5,
    }),
  );

  // Hay/straw poking out
  [155, 175, 200, 220, 245].forEach((x) => {
    const h = 15 + Math.sin(x) * 8;
    svg.appendChild(
      rc.line(x, 55, x + 3, 55 - h, {
        roughness: 2.5,
        stroke: "#daa520",
        strokeWidth: 1,
      }),
    );
  });

  // Highlight
  svg.appendChild(
    rc.line(130, 60, 130, 185, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 2.5,
    }),
  );

  // Cute label
  svg.appendChild(
    rc.rectangle(185, 100, 30, 22, {
      fill: "#fff8e1",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path(
      "M195,107 C193,104 190,104 190,107 C190,110 195,113 195,113 C195,113 200,110 200,107 C200,104 197,104 195,107 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );
};

export function WoodCrate({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
