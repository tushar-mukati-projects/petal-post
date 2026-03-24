"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Puddle underneath ──
  svg.appendChild(
    rc.ellipse(210, 200, 250, 14, {
      fill: "rgba(100,181,246,0.12)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(215, 200, 220, 10, {
      fill: "rgba(100,181,246,0.08)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Puddle highlight ripples
  svg.appendChild(
    rc.ellipse(195, 199, 60, 5, {
      fill: "none",
      roughness: 1.2,
      stroke: "rgba(144,202,249,0.25)",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.ellipse(230, 200, 40, 3, {
      fill: "none",
      roughness: 1,
      stroke: "rgba(144,202,249,0.2)",
      strokeWidth: 0.5,
    }),
  );

  // ── Boot sole (darker) ──
  svg.appendChild(
    rc.path("M106,188 L106,198 L312,198 L312,188 L106,188 Z", {
      fill: "#ad1457",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#880e4f",
      strokeWidth: 1.5,
    }),
  );

  // Sole lighter face
  svg.appendChild(
    rc.path("M112,189 L112,196 L306,196 L306,189 Z", {
      fill: "#c2185b",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Sole tread lines (more detailed) ──
  [118, 135, 152, 170, 188, 206, 224, 242, 260, 278, 296].forEach((x) => {
    svg.appendChild(
      rc.line(x, 190, x, 197, {
        roughness: 1.2,
        stroke: "#880e4f",
        strokeWidth: 1,
      }),
    );
  });

  // Sole tread cross lines
  svg.appendChild(
    rc.line(112, 193, 306, 193, {
      roughness: 1.5,
      stroke: "#880e4f",
      strokeWidth: 0.5,
    }),
  );

  // ── Boot foot - the wide bottom part ──
  svg.appendChild(
    rc.path(
      "M108,188 L113,148 L116,130 C118,118 130,112 155,110 L298,110 C308,110 312,118 312,130 L312,188 Z",
      {
        fill: "#e91e63",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#c2185b",
        strokeWidth: 1.8,
      },
    ),
  );

  // Boot foot lighter inner
  svg.appendChild(
    rc.path(
      "M118,184 L122,148 L125,132 C127,122 136,116 158,114 L294,114 C302,114 306,120 306,130 L306,184 Z",
      {
        fill: "#f06292",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Boot shaft - the tall part ──
  svg.appendChild(
    rc.path("M155,110 L148,26 L250,22 L260,110 Z", {
      fill: "#e91e63",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#c2185b",
      strokeWidth: 1.8,
    }),
  );

  // Shaft lighter inner
  svg.appendChild(
    rc.path("M160,108 L154,32 L244,28 L253,108 Z", {
      fill: "#f06292",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Boot shaft inner shadow/darker side
  svg.appendChild(
    rc.path("M155,110 L148,26 L165,24 L170,110 Z", {
      fill: "#ec407a",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Highlight shine streaks ──
  svg.appendChild(
    rc.line(237, 28, 244, 106, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 4,
    }),
  );
  svg.appendChild(
    rc.line(242, 30, 248, 100, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 2.5,
    }),
  );
  // Foot area highlight
  svg.appendChild(
    rc.path("M290,118 L298,175", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 3,
    }),
  );

  // ── Lace trim at top ──
  // Scalloped lace edge
  const lacePoints: [number, number][] = [];
  for (let x = 148; x <= 252; x += 8) {
    const baseY = 22 + (x - 148) * (-4 / 104);
    lacePoints.push([x, baseY]);
  }
  lacePoints.forEach(([x, baseY]) => {
    svg.appendChild(
      rc.path(
        `M${x - 4},${baseY + 2} C${x - 3},${baseY - 3} ${x + 3},${baseY - 3} ${x + 4},${baseY + 2}`,
        {
          fill: "none",
          roughness: 1.2,
          stroke: "rgba(255,255,255,0.6)",
          strokeWidth: 0.8,
        },
      ),
    );
  });

  // Lace trim inner line
  svg.appendChild(
    rc.path("M150,28 L248,24", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(255,255,255,0.35)",
      strokeWidth: 0.6,
    }),
  );

  // ── Boot opening rim ──
  svg.appendChild(
    rc.ellipse(199, 24, 104, 14, {
      fill: "#f48fb1",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#e91e63",
      strokeWidth: 1.5,
    }),
  );

  // Rim highlight
  svg.appendChild(
    rc.path("M170,22 C185,20 200,19 220,21", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1,
    }),
  );

  // ── Toe cap area ──
  svg.appendChild(
    rc.path(
      "M108,188 L113,148 C116,134 124,126 140,122 L150,122 C134,128 124,140 119,155 L114,188 Z",
      {
        fill: "#ec407a",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Heel area highlight ──
  svg.appendChild(
    rc.path("M292,118 L308,118 L310,185 L292,185 Z", {
      fill: "#c2185b",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Polka dots on boot shaft ──
  const shaftDots: [number, number][] = [
    [172, 48],
    [196, 40],
    [222, 46],
    [242, 54],
    [170, 72],
    [194, 65],
    [220, 70],
    [240, 78],
    [177, 96],
    [202, 90],
    [227, 94],
    [247, 100],
  ];
  shaftDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 8, {
        fill: "rgba(255,255,255,0.65)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "rgba(255,255,255,0.35)",
        strokeWidth: 0.5,
      }),
    );
    // Tiny highlight on each dot
    svg.appendChild(
      rc.circle(x - 1, y - 1, 2, {
        fill: "rgba(255,255,255,0.3)",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      }),
    );
  });

  // ── Polka dots on boot foot ──
  const footDots: [number, number][] = [
    [172, 124],
    [202, 128],
    [232, 124],
    [262, 128],
    [177, 148],
    [207, 153],
    [242, 148],
    [272, 153],
    [142, 143],
    [162, 168],
    [197, 173],
    [232, 168],
    [267, 173],
    [292, 163],
  ];
  footDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 8, {
        fill: "rgba(255,255,255,0.65)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "rgba(255,255,255,0.35)",
        strokeWidth: 0.5,
      }),
    );
    // Tiny highlight on each dot
    svg.appendChild(
      rc.circle(x - 1, y - 1, 2, {
        fill: "rgba(255,255,255,0.3)",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      }),
    );
  });

  // ── Buckle detail near top of shaft ──
  // Strap band
  svg.appendChild(
    rc.path("M151,36 L253,32", {
      fill: "none",
      roughness: 2,
      stroke: "#ad1457",
      strokeWidth: 2.2,
    }),
  );
  svg.appendChild(
    rc.path("M152,44 L252,40", {
      fill: "none",
      roughness: 2,
      stroke: "#ad1457",
      strokeWidth: 2.2,
    }),
  );
  // Strap fill
  svg.appendChild(
    rc.path("M151,36 L253,32 L252,40 L152,44 Z", {
      fill: "#c2185b",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Buckle rectangle
  svg.appendChild(
    rc.path("M194,33 L194,43 L210,42 L210,32 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#daa520",
      strokeWidth: 1,
    }),
  );
  // Buckle inner opening
  svg.appendChild(
    rc.path("M197,35 L197,41 L207,40 L207,34 Z", {
      fill: "#c2185b",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#daa520",
      strokeWidth: 0.6,
    }),
  );
  // Buckle prong
  svg.appendChild(
    rc.line(202, 34, 202, 41, {
      roughness: 1,
      stroke: "#daa520",
      strokeWidth: 0.8,
    }),
  );
  // Buckle highlight
  svg.appendChild(
    rc.path("M196,34 L196,38", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 0.6,
    }),
  );

  // ── Rain drops falling ──
  const rainDrops: [number, number, number][] = [
    [130, 8, 4],
    [165, 3, 3.5],
    [240, 6, 3],
    [280, 10, 4],
    [310, 4, 3.5],
    [100, 12, 3],
    [330, 15, 3],
    [145, 16, 2.5],
    [260, 2, 2.5],
  ];
  rainDrops.forEach(([x, y, size]) => {
    svg.appendChild(
      rc.path(
        `M${x},${y} C${x + size * 0.5},${y + size} ${x + size * 0.5},${y + size * 2} ${x},${y + size * 2.5} C${x - size * 0.5},${y + size * 2} ${x - size * 0.5},${y + size} ${x},${y} Z`,
        {
          fill: "rgba(144,202,249,0.35)",
          fillStyle: "solid",
          roughness: 1,
          stroke: "rgba(100,181,246,0.4)",
          strokeWidth: 0.4,
        },
      ),
    );
    // Drop highlight
    svg.appendChild(
      rc.circle(x - 0.5, y + size * 0.5, 0.8, {
        fill: "rgba(255,255,255,0.4)",
        fillStyle: "solid",
        roughness: 0.4,
        stroke: "none",
      }),
    );
  });

  // ── Seam line on boot foot ──
  svg.appendChild(
    rc.path("M155,112 C170,115 200,118 240,115 C270,112 295,114 305,116", {
      fill: "none",
      roughness: 1.8,
      stroke: "#c2185b",
      strokeWidth: 0.8,
    }),
  );

  // ── Cute tiny heart on boot ──
  svg.appendChild(
    rc.path(
      "M185,140 C185,140 183,137 181,137 C179,137 178,138.5 178,140 C178,142 185,145 185,145 C185,145 192,142 192,140 C192,138.5 191,137 189,137 C187,137 185,140 185,140 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── Small star near boot top ──
  svg.appendChild(
    rc.path("M270,35 L272,28 L274,35 L280,36 L274,38 L276,44 L272,39 L268,44 L270,38 L264,36 Z", {
      fill: "#ffd700",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#daa520",
      strokeWidth: 0.4,
    }),
  );
};

export function RainBoot({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
