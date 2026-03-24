"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Drop shadow
  svg.appendChild(
    rc.path(
      "M85,55 C80,47 75,53 70,65 L120,196 C135,202 175,204 205,204 C235,204 275,202 290,196 L340,65 C335,53 330,47 325,55 Z",
      {
        fill: "rgba(0,0,0,0.05)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      },
    ),
  );

  // Main tissue cone (outer)
  svg.appendChild(
    rc.path(
      "M80,50 C75,42 70,48 65,60 L115,192 C130,198 170,200 200,200 C230,200 270,198 285,192 L335,60 C330,48 325,42 320,50 C300,38 250,32 200,32 C150,32 100,38 80,50 Z",
      {
        fill: "#fce4ec",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#f48fb1",
        strokeWidth: 1.2,
      },
    ),
  );

  // Inner tissue layer
  svg.appendChild(
    rc.path(
      "M98,54 C94,48 92,52 88,62 L125,188 C138,194 172,196 200,196 C228,196 262,194 275,188 L312,62 C308,52 306,48 302,54 C285,44 245,38 200,38 C155,38 115,44 98,54 Z",
      {
        fill: "rgba(248,187,208,0.3)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // Crinkle texture lines (wavy, across the tissue)
  [
    [120, 70, 280, 69],
    [115, 95, 285, 96],
    [118, 120, 278, 121],
    [122, 148, 278, 149],
    [128, 172, 275, 173],
  ].forEach(([x1, y1, x2, y2]) => {
    svg.appendChild(
      rc.line(x1, y1, x2, y2, {
        roughness: 2.5,
        stroke: "rgba(244,143,177,0.15)",
        strokeWidth: 0.4,
      }),
    );
  });

  // Ruffled top edge petals (more ruffles)
  const ruffles = [
    "M68,60 C60,35 50,42 48,55 C45,68 58,78 72,65 Z",
    "M88,45 C75,20 62,30 60,45 C55,60 72,70 88,55 Z",
    "M112,38 C100,12 88,25 85,40 C80,58 98,65 112,48 Z",
    "M140,34 C130,10 118,22 116,36 C112,52 128,58 140,42 Z",
    "M170,32 C162,8 150,18 148,33 C145,50 160,55 170,40 Z",
    "M200,30 C195,6 185,16 184,32 C182,48 195,52 200,38 Z",
    "M230,32 C238,8 250,18 252,33 C255,50 240,55 230,40 Z",
    "M260,34 C270,10 282,22 284,36 C288,52 272,58 260,42 Z",
    "M288,38 C300,12 312,25 315,40 C320,58 302,65 288,48 Z",
    "M312,45 C325,20 338,30 340,45 C345,60 328,70 312,55 Z",
    "M332,60 C340,35 350,42 352,55 C355,68 342,78 328,65 Z",
  ];
  ruffles.forEach((d) => {
    svg.appendChild(
      rc.path(d, {
        fill: "#f8bbd0",
        fillStyle: "solid",
        roughness: 2.5,
        stroke: "#f48fb1",
        strokeWidth: 0.8,
      }),
    );
  });

  // Ruffle inner highlights (lighter tops)
  [
    "M70,58 C64,42 56,46 55,55 C55,62 62,68 70,62 Z",
    "M90,44 C80,28 70,34 70,44 C68,52 78,58 88,50 Z",
    "M115,37 C106,22 96,28 96,38 C94,50 104,54 114,44 Z",
    "M290,37 C300,22 308,28 308,38 C310,50 300,54 290,44 Z",
    "M314,44 C322,28 332,34 332,44 C334,52 324,58 314,50 Z",
    "M330,58 C336,42 344,46 345,55 C345,62 338,68 330,62 Z",
  ].forEach((d) => {
    svg.appendChild(
      rc.path(d, {
        fill: "rgba(255,255,255,0.2)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      }),
    );
  });

  // Fold crease lines
  [140, 170, 200, 230, 260].forEach((x) => {
    const bx = x + (x < 200 ? 10 : x > 200 ? -10 : 0);
    svg.appendChild(
      rc.line(x, 50, bx, 195, {
        roughness: 1.8,
        stroke: "rgba(244,143,177,0.25)",
        strokeWidth: 0.6,
      }),
    );
  });

  // Tissue highlight streaks
  svg.appendChild(
    rc.line(115, 60, 130, 180, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 3,
    }),
  );
  svg.appendChild(
    rc.line(280, 55, 270, 175, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 2.5,
    }),
  );

  // Satin ribbon (shinier with gradation)
  svg.appendChild(
    rc.path("M162,116 L238,116 L238,130 L162,130 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#c2185b",
      strokeWidth: 0.8,
    }),
  );

  // Ribbon gloss highlight
  svg.appendChild(
    rc.path("M165,117 L235,117 L235,121 L165,121 Z", {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Ribbon shadow bottom
  svg.appendChild(
    rc.path("M165,127 L235,127 L235,129 L165,129 Z", {
      fill: "rgba(136,14,79,0.2)",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Ribbon edge stitch detail
  for (let x = 168; x <= 232; x += 7) {
    svg.appendChild(
      rc.line(x, 116, x + 2, 117, {
        roughness: 2,
        stroke: "rgba(173,20,87,0.25)",
        strokeWidth: 0.3,
      }),
    );
  }

  // Left bow
  svg.appendChild(
    rc.path("M186,122 C170,105 162,110 175,124 C162,138 170,145 186,128 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 2.5,
      stroke: "#c2185b",
      strokeWidth: 0.8,
    }),
  );

  // Left bow highlight
  svg.appendChild(
    rc.path("M177,112 C173,116 175,120 179,118 Z", {
      fill: "rgba(255,255,255,0.18)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Right bow
  svg.appendChild(
    rc.path("M214,122 C230,105 238,110 225,124 C238,138 230,145 214,128 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 2.5,
      stroke: "#c2185b",
      strokeWidth: 0.8,
    }),
  );

  // Right bow highlight
  svg.appendChild(
    rc.path("M223,112 C227,116 225,120 221,118 Z", {
      fill: "rgba(255,255,255,0.18)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Bow knot
  svg.appendChild(rc.circle(200, 123, 9, { fill: "#ad1457", fillStyle: "solid", roughness: 1.8 }));
  // Knot highlight
  svg.appendChild(
    rc.circle(199, 121, 3, {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Bow tails
  svg.appendChild(
    rc.path("M190,130 L178,152 L184,147", {
      fill: "none",
      roughness: 2,
      stroke: "#e91e63",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M210,130 L222,152 L216,147", {
      fill: "none",
      roughness: 2,
      stroke: "#e91e63",
      strokeWidth: 1.5,
    }),
  );

  // Sparkle dots (cute embellishment)
  [
    { x: 100, y: 55, r: 2 },
    { x: 300, y: 55, r: 2 },
    { x: 85, y: 70, r: 1.5 },
    { x: 315, y: 70, r: 1.5 },
    { x: 150, y: 35, r: 1.5 },
    { x: 250, y: 35, r: 1.5 },
    { x: 200, y: 28, r: 2 },
    { x: 175, y: 32, r: 1.2 },
    { x: 225, y: 32, r: 1.2 },
  ].forEach(({ x, y, r }) => {
    // Star sparkle: cross of two lines + dot
    svg.appendChild(
      rc.line(x - r, y, x + r, y, {
        roughness: 1,
        stroke: "rgba(255,255,255,0.5)",
        strokeWidth: 0.5,
      }),
    );
    svg.appendChild(
      rc.line(x, y - r, x, y + r, {
        roughness: 1,
        stroke: "rgba(255,255,255,0.5)",
        strokeWidth: 0.5,
      }),
    );
    svg.appendChild(
      rc.circle(x, y, 1.5, {
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // Additional decorative dots on tissue body
  [
    { x: 145, y: 85 },
    { x: 180, y: 70 },
    { x: 220, y: 70 },
    { x: 255, y: 85 },
    { x: 165, y: 150 },
    { x: 235, y: 150 },
  ].forEach(({ x, y }) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "rgba(244,143,177,0.2)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      }),
    );
  });
};

export function TissueWrap({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
