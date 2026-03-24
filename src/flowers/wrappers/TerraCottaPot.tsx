"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 210, 14, {
      fill: "rgba(80,40,15,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 170, 10, {
      fill: "rgba(80,40,15,0.08)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Drainage saucer ──
  svg.appendChild(
    rc.path(
      "M108,178 L113,194 C113,198 140,202 200,202 C260,202 287,198 287,194 L292,178 C292,174 265,170 200,170 C135,170 108,174 108,178 Z",
      {
        fill: "#c9784a",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#8b4513",
        strokeWidth: 1.5,
      },
    ),
  );

  // Saucer rim highlight
  svg.appendChild(
    rc.ellipse(200, 175, 184, 12, {
      fill: "#d4845e",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#a0522d",
      strokeWidth: 1.2,
    }),
  );

  // Saucer light reflection
  svg.appendChild(
    rc.path("M150,176 C165,178 185,179 210,178", {
      fill: "none",
      roughness: 1.2,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 1.5,
    }),
  );

  // Saucer decorative rim dots
  [130, 150, 170, 190, 210, 230, 250, 270].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 175, 2.5, {
        fill: "#a0522d",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Drainage holes visible on saucer ──
  [175, 200, 225].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 186, 5, {
        fill: "#8b4513",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#6d3410",
        strokeWidth: 0.6,
      }),
    );
  });

  // ── Pot body - tapered shape with deeper color ──
  svg.appendChild(
    rc.path("M135,62 L125,170 C125,175 155,180 200,180 C245,180 275,175 275,170 L265,62 Z", {
      fill: "#b8532a",
      fillStyle: "cross-hatch",
      fillWeight: 0.5,
      hachureGap: 6,
      hachureAngle: 45,
      roughness: 2.2,
      stroke: "#8b4513",
      strokeWidth: 1.8,
    }),
  );

  // Pot lighter inner body
  svg.appendChild(
    rc.path("M155,68 L148,165 C148,168 170,172 200,172 C230,172 250,168 250,165 L245,68 Z", {
      fill: "#c75b39",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Pot front highlight strip
  svg.appendChild(
    rc.path("M165,70 L158,162 L185,162 L190,70 Z", {
      fill: "#d4845e",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Highlight shine streak
  svg.appendChild(
    rc.path("M170,75 L165,140", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 3,
    }),
  );

  // Second highlight
  svg.appendChild(
    rc.path("M178,72 L174,130", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 2,
    }),
  );

  // ── Crack lines on pot body ──
  svg.appendChild(
    rc.path("M220,90 L224,108 L221,118", {
      fill: "none",
      roughness: 1.2,
      stroke: "#8b4513",
      strokeWidth: 0.7,
    }),
  );
  svg.appendChild(
    rc.path("M246,105 L243,115 L245,120", {
      fill: "none",
      roughness: 1.3,
      stroke: "#8b4513",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M224,108 L228,112", {
      fill: "none",
      roughness: 1.1,
      stroke: "#8b4513",
      strokeWidth: 0.5,
    }),
  );

  // ── Wide rim - top band (darker outer) ──
  svg.appendChild(
    rc.path("M128,42 L132,62 L268,62 L272,42 Z", {
      fill: "#b8532a",
      fillStyle: "cross-hatch",
      fillWeight: 0.4,
      hachureGap: 4,
      hachureAngle: 0,
      roughness: 2,
      stroke: "#8b4513",
      strokeWidth: 1.5,
    }),
  );

  // Rim lighter inner
  svg.appendChild(
    rc.path("M140,44 L143,60 L257,60 L260,44 Z", {
      fill: "#c75b39",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Rim lip - top edge ──
  svg.appendChild(
    rc.path("M125,36 L128,48 L272,48 L275,36 Z", {
      fill: "#d4845e",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#a0522d",
      strokeWidth: 1.2,
    }),
  );

  // Rim top ellipse
  svg.appendChild(
    rc.ellipse(200, 36, 150, 12, {
      fill: "#d4845e",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#a0522d",
      strokeWidth: 1,
    }),
  );

  // Rim top highlight
  svg.appendChild(
    rc.path("M155,36 C175,34 195,33 220,34", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1.2,
    }),
  );

  // ── Decorative lines on pot body ──
  svg.appendChild(
    rc.path("M140,95 C160,98 180,99 200,99 C220,99 240,98 260,95", {
      fill: "none",
      roughness: 2.2,
      stroke: "#8b4513",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.path("M141,102 C161,105 181,106 200,106 C219,106 239,105 259,102", {
      fill: "none",
      roughness: 2.2,
      stroke: "#8b4513",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path("M143,130 C163,133 183,134 200,134 C217,134 237,133 257,130", {
      fill: "none",
      roughness: 2.2,
      stroke: "#a0522d",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path("M144,137 C164,140 184,141 200,141 C216,141 236,140 256,137", {
      fill: "none",
      roughness: 2,
      stroke: "#a0522d",
      strokeWidth: 0.6,
    }),
  );

  // ── Texture dots on pot body ──
  [
    [155, 85],
    [230, 88],
    [250, 120],
    [160, 148],
    [235, 150],
    [200, 155],
    [145, 110],
    [260, 140],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "#a0522d",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Soil visible at top ──
  svg.appendChild(
    rc.ellipse(200, 54, 134, 10, {
      fill: "#4e342e",
      fillStyle: "hachure",
      fillWeight: 0.4,
      hachureGap: 3,
      roughness: 2,
      stroke: "#3e2723",
      strokeWidth: 0.5,
    }),
  );

  // Soil texture details - little bumps and pebbles
  svg.appendChild(
    rc.ellipse(200, 52, 120, 6, {
      fill: "#5d4037",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 2,
      hachureAngle: 90,
      roughness: 2.5,
      stroke: "none",
    }),
  );

  // Soil granules
  [175, 188, 202, 215, 227].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 52 + Math.random() * 3 - 1, 2.5, {
        fill: "#6d4c41",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      }),
    );
  });

  // Tiny pebble on soil
  svg.appendChild(
    rc.ellipse(210, 51, 5, 3, {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#5d4037",
      strokeWidth: 0.4,
    }),
  );

  // ── Small plant tag sticking out of soil ──
  svg.appendChild(
    rc.path("M230,52 L234,18 L250,18 L248,52 Z", {
      fill: "#fff9c4",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#c9a06c",
      strokeWidth: 0.8,
    }),
  );
  // Tag text lines
  svg.appendChild(
    rc.line(236, 28, 246, 28, {
      roughness: 1.5,
      stroke: "#a0522d",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(237, 34, 245, 34, {
      roughness: 1.5,
      stroke: "#a0522d",
      strokeWidth: 0.5,
    }),
  );
  // Tag stick
  svg.appendChild(
    rc.line(241, 40, 240, 54, {
      roughness: 1,
      stroke: "#8d6e63",
      strokeWidth: 1.2,
    }),
  );

  // ── Small decorative heart on pot ──
  svg.appendChild(
    rc.path(
      "M200,148 C200,148 196,143 193,143 C190,143 188,145 188,148 C188,152 200,158 200,158 C200,158 212,152 212,148 C212,145 210,143 207,143 C204,143 200,148 200,148 Z",
      {
        fill: "#e57373",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#c62828",
        strokeWidth: 0.6,
      },
    ),
  );
};

export function TerraCottaPot({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
