"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Drop shadow underneath
  svg.appendChild(
    rc.path("M105,50 L135,194 C145,200 205,204 205,204 C205,204 265,200 275,194 L305,50 Z", {
      fill: "rgba(80,50,30,0.08)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Main paper cone body
  svg.appendChild(
    rc.path("M100,45 L130,190 C140,196 200,200 200,200 C200,200 260,196 270,190 L300,45 Z", {
      fill: "#d4a574",
      fillStyle: "cross-hatch",
      fillWeight: 0.5,
      hachureGap: 6,
      roughness: 2.2,
      stroke: "#a1887f",
      strokeWidth: 1.5,
    }),
  );

  // Paper grain texture lines (subtle horizontal)
  [60, 80, 100, 120, 140, 160, 175].forEach((y) => {
    const indent = (y - 45) * 0.18;
    svg.appendChild(
      rc.line(105 + indent, y, 295 - indent, y, {
        roughness: 2.5,
        stroke: "rgba(161,136,127,0.15)",
        strokeWidth: 0.4,
      }),
    );
  });

  // Paper grain texture lines (subtle diagonal)
  [130, 170, 210, 250, 270].forEach((x) => {
    svg.appendChild(
      rc.line(x, 55, x - 8, 180, {
        roughness: 2,
        stroke: "rgba(141,110,99,0.08)",
        strokeWidth: 0.3,
      }),
    );
  });

  // Inner darker tone for depth
  svg.appendChild(
    rc.path("M115,52 L140,185 C150,190 200,193 200,193 C200,193 250,190 260,185 L285,52 Z", {
      fill: "rgba(188,170,164,0.12)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Left fold
  svg.appendChild(
    rc.path("M100,45 L85,55 L120,185 L130,190 Z", {
      fill: "#c49a6c",
      fillStyle: "hachure",
      fillWeight: 0.4,
      hachureGap: 5,
      roughness: 2.2,
      stroke: "#8d6e63",
      strokeWidth: 1,
    }),
  );

  // Right fold
  svg.appendChild(
    rc.path("M300,45 L315,55 L280,185 L270,190 Z", {
      fill: "#c49a6c",
      fillStyle: "hachure",
      fillWeight: 0.4,
      hachureGap: 5,
      roughness: 2.2,
      stroke: "#8d6e63",
      strokeWidth: 1,
    }),
  );

  // Extra crease lines on paper
  svg.appendChild(
    rc.line(165, 48, 155, 192, {
      roughness: 2,
      stroke: "rgba(141,110,99,0.18)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(235, 48, 245, 192, {
      roughness: 2,
      stroke: "rgba(141,110,99,0.18)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(200, 46, 200, 196, {
      roughness: 1.8,
      stroke: "rgba(141,110,99,0.1)",
      strokeWidth: 0.4,
    }),
  );

  // Light highlight streak (left side)
  svg.appendChild(
    rc.line(118, 55, 138, 178, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 3,
    }),
  );

  // Light highlight streak (upper middle)
  svg.appendChild(
    rc.line(190, 48, 185, 90, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 2.5,
    }),
  );

  // Twine line
  svg.appendChild(
    rc.path("M155,100 C170,108 200,112 200,112 C200,112 230,108 245,100", {
      fill: "none",
      roughness: 1.8,
      stroke: "#6d4c41",
      strokeWidth: 2.5,
    }),
  );

  // Double twine line (slightly offset)
  svg.appendChild(
    rc.path("M157,103 C172,111 200,115 200,115 C200,115 228,111 243,103", {
      fill: "none",
      roughness: 1.5,
      stroke: "#5d4037",
      strokeWidth: 1.2,
    }),
  );

  // Left bow loop
  svg.appendChild(
    rc.path("M190,105 C175,88 165,92 178,107 C165,118 175,125 190,110 Z", {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#5d4037",
      strokeWidth: 1,
    }),
  );

  // Right bow loop
  svg.appendChild(
    rc.path("M210,105 C225,88 235,92 222,107 C235,118 225,125 210,110 Z", {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#5d4037",
      strokeWidth: 1,
    }),
  );

  // Bow highlight (lighter centers)
  svg.appendChild(
    rc.path("M183,100 C178,94 176,97 182,104 Z", {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.path("M217,100 C222,94 224,97 218,104 Z", {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Knot center
  svg.appendChild(rc.circle(200, 107, 8, { fill: "#5d4037", fillStyle: "solid", roughness: 1.8 }));

  // Tape/sticker detail on upper left
  svg.appendChild(
    rc.path("M108,50 L95,48 L93,56 L106,58 Z", {
      fill: "rgba(255,248,225,0.6)",
      fillStyle: "solid",
      roughness: 2,
      stroke: "rgba(188,170,164,0.5)",
      strokeWidth: 0.6,
    }),
  );

  // Small decorative dots along the bottom edge
  [150, 170, 190, 210, 230, 250].forEach((x) => {
    const yOff = 188 + Math.sin(x * 0.1) * 2;
    svg.appendChild(
      rc.circle(x, yOff, 3, {
        fill: "rgba(141,110,99,0.25)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      }),
    );
  });

  // Tiny heart on the paper (cute detail)
  svg.appendChild(
    rc.path(
      "M200,145 C198,140 192,140 192,145 C192,149 200,155 200,155 C200,155 208,149 208,145 C208,140 202,140 200,145 Z",
      {
        fill: "rgba(141,110,99,0.15)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "rgba(141,110,99,0.25)",
        strokeWidth: 0.5,
      },
    ),
  );
};

export function PaperWrap({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
