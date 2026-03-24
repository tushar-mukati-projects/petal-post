"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow beneath saucer ──
  svg.appendChild(
    rc.ellipse(200, 198, 230, 14, {
      fill: "rgba(100,70,50,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 190, 10, {
      fill: "rgba(100,70,50,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Saucer (darker outer) ──
  svg.appendChild(
    rc.ellipse(200, 186, 224, 30, {
      fill: "#f5e6d0",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#c9a06c",
      strokeWidth: 1.5,
    }),
  );

  // Saucer lighter inner
  svg.appendChild(
    rc.ellipse(200, 185, 200, 24, {
      fill: "#fff8e1",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Saucer gold trim outer
  svg.appendChild(
    rc.ellipse(200, 186, 222, 28, {
      fill: "none",
      roughness: 1.2,
      stroke: "#d4a574",
      strokeWidth: 2,
    }),
  );

  // Saucer inner ring
  svg.appendChild(
    rc.ellipse(200, 184, 150, 18, {
      fill: "none",
      roughness: 1.5,
      stroke: "#d4a574",
      strokeWidth: 0.8,
    }),
  );

  // Saucer highlight
  svg.appendChild(
    rc.path("M140,182 C165,179 195,178 230,180", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1.5,
    }),
  );

  // Saucer decorative dots
  [120, 140, 160, 180, 200, 220, 240, 260, 280].forEach((x) => {
    const yOff = 2 * Math.sin(((x - 120) / 160) * Math.PI);
    svg.appendChild(
      rc.circle(x, 195 - yOff, 2, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Spoon on saucer ──
  // Spoon handle
  svg.appendChild(
    rc.path("M95,175 L150,155", {
      fill: "none",
      roughness: 1.5,
      stroke: "#bdbdbd",
      strokeWidth: 2,
    }),
  );
  // Spoon handle highlight
  svg.appendChild(
    rc.path("M100,173 L145,154", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 0.8,
    }),
  );
  // Spoon bowl
  svg.appendChild(
    rc.ellipse(88, 178, 16, 10, {
      fill: "#e0e0e0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#9e9e9e",
      strokeWidth: 0.8,
    }),
  );
  // Spoon bowl highlight
  svg.appendChild(
    rc.ellipse(86, 176, 6, 4, {
      fill: "rgba(255,255,255,0.35)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Cup body (darker outer) ──
  svg.appendChild(
    rc.path(
      "M128,58 C123,75 118,100 120,130 C122,156 140,172 200,177 C260,172 278,156 280,130 C282,100 277,75 272,58 Z",
      {
        fill: "#f5e6d0",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#c9a06c",
        strokeWidth: 1.5,
      },
    ),
  );

  // Cup lighter inner body
  svg.appendChild(
    rc.path(
      "M138,64 C134,78 130,100 132,128 C134,150 148,164 200,168 C252,164 266,150 268,128 C270,100 266,78 262,64 Z",
      {
        fill: "#fff8e1",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // Cup highlight streak
  svg.appendChild(
    rc.path("M145,70 L140,145", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 3,
    }),
  );
  svg.appendChild(
    rc.path("M152,68 L148,135", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 2,
    }),
  );

  // ── Liquid inside (tea) ──
  svg.appendChild(
    rc.ellipse(200, 66, 128, 12, {
      fill: "#a1887f",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#8d6e63",
      strokeWidth: 0.6,
    }),
  );
  // Tea surface highlight
  svg.appendChild(
    rc.ellipse(190, 64, 50, 5, {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Cup interior shadow ring ──
  svg.appendChild(
    rc.ellipse(200, 64, 134, 14, {
      fill: "none",
      roughness: 1.5,
      stroke: "#c9a06c",
      strokeWidth: 0.8,
    }),
  );

  // ── Gold rim at top ──
  svg.appendChild(
    rc.ellipse(200, 58, 146, 18, {
      fill: "none",
      roughness: 1.8,
      stroke: "#d4a574",
      strokeWidth: 2.5,
    }),
  );

  // Rim highlight
  svg.appendChild(
    rc.path("M155,56 C175,54 200,53 230,55", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1,
    }),
  );

  // ── Handle on the right ──
  svg.appendChild(
    rc.path("M270,84 C298,88 314,106 312,128 C310,148 292,160 274,152", {
      fill: "none",
      roughness: 2.2,
      stroke: "#8d6e63",
      strokeWidth: 3.5,
    }),
  );

  // Handle inner curve
  svg.appendChild(
    rc.path("M274,94 C292,98 302,110 300,124 C298,138 288,148 276,144", {
      fill: "none",
      roughness: 1.8,
      stroke: "#8d6e63",
      strokeWidth: 1.5,
    }),
  );

  // Handle highlight
  svg.appendChild(
    rc.path("M290,95 C300,105 302,118 298,130", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.2,
    }),
  );

  // ── Decorative rim dots along the cup top ──
  const rimDots = [142, 154, 166, 178, 190, 202, 214, 226, 238, 250];
  rimDots.forEach((x) => {
    const yOffset = -2.5 * Math.sin(((x - 142) / 108) * Math.PI);
    svg.appendChild(
      rc.circle(x, 74 + yOffset, 3, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#c9a06c",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Decorative dashes below dots ──
  [148, 164, 180, 196, 212, 228, 244].forEach((x) => {
    const yOffset = -1.5 * Math.sin(((x - 142) / 112) * Math.PI);
    svg.appendChild(
      rc.line(x - 4, 82 + yOffset, x + 4, 82 + yOffset, {
        roughness: 1.5,
        stroke: "#d4a574",
        strokeWidth: 0.8,
      }),
    );
  });

  // ── Floral pattern on cup body - rose ──
  // Center rose
  svg.appendChild(
    rc.path("M195,118 C195,112 202,108 206,112 C210,116 206,122 200,120 C194,118 198,114 200,114", {
      fill: "none",
      roughness: 1.2,
      stroke: "#e91e63",
      strokeWidth: 0.8,
    }),
  );
  // Rose outer petal
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

  // Second small flower
  svg.appendChild(
    rc.path("M165,135 C168,130 174,130 175,134 C176,138 172,140 168,138 C164,136 167,133 168,133", {
      fill: "none",
      roughness: 1.2,
      stroke: "#d4a574",
      strokeWidth: 0.7,
    }),
  );

  // Third small flower
  svg.appendChild(
    rc.path("M228,130 C231,125 237,125 238,129 C239,133 235,135 231,133 C227,131 230,128 231,128", {
      fill: "none",
      roughness: 1.2,
      stroke: "#d4a574",
      strokeWidth: 0.7,
    }),
  );

  // Vine connecting flowers
  svg.appendChild(
    rc.path("M175,135 C182,138 190,136 195,130 C200,124 208,122 215,125 C222,128 228,130 235,128", {
      fill: "none",
      roughness: 1.5,
      stroke: "#81c784",
      strokeWidth: 0.5,
    }),
  );

  // Tiny leaf accents
  [182, 208, 225].forEach((x) => {
    const y = 132 + Math.sin((x - 175) * 0.05) * 4;
    svg.appendChild(
      rc.path(`M${x},${y} C${x + 3},${y - 3} ${x + 6},${y - 2} ${x + 4},${y + 1}`, {
        fill: "none",
        roughness: 1,
        stroke: "#66bb6a",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── Gold line around mid-cup ──
  svg.appendChild(
    rc.path("M135,100 C160,103 180,104 200,104 C220,104 240,103 265,100", {
      fill: "none",
      roughness: 1.8,
      stroke: "#d4a574",
      strokeWidth: 0.6,
    }),
  );

  // ── Cup base ──
  svg.appendChild(
    rc.ellipse(200, 175, 92, 10, {
      fill: "#fff8e1",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#d4a574",
      strokeWidth: 1.2,
    }),
  );

  // Base highlight
  svg.appendChild(
    rc.path("M175,174 C185,172 200,171 220,173", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 0.8,
    }),
  );

  // ── Steam swirls ──
  svg.appendChild(
    rc.path("M185,50 C182,38 188,28 185,18", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(180,180,180,0.3)",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.path("M198,48 C202,36 196,26 200,14", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(180,180,180,0.25)",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.path("M212,50 C216,40 210,30 214,20", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(180,180,180,0.2)",
      strokeWidth: 0.8,
    }),
  );

  // ── Cute tiny heart on saucer ──
  svg.appendChild(
    rc.path(
      "M250,188 C250,188 248,185 246,185 C244,185 243,186.5 243,188 C243,190 250,193 250,193 C250,193 257,190 257,188 C257,186.5 256,185 254,185 C252,185 250,188 250,188 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.4,
      },
    ),
  );
};

export function Teacup({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
