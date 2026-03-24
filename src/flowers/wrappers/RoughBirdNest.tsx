"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Ground shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 240, 14, {
      fill: "rgba(50,30,20,0.10)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Small moss/grass tufts around base ──
  const grassTufts = [
    { x: 80, y: 196, h: -12 },
    { x: 92, y: 198, h: -10 },
    { x: 72, y: 197, h: -9 },
    { x: 310, y: 196, h: -11 },
    { x: 322, y: 198, h: -10 },
    { x: 330, y: 197, h: -8 },
    { x: 155, y: 200, h: -7 },
    { x: 245, y: 200, h: -8 },
  ];
  grassTufts.forEach(({ x, y, h }) => {
    svg.appendChild(
      rc.path(`M${x},${y} C${x - 2},${y + h} ${x + 1},${y + h - 3} ${x + 3},${y}`, {
        fill: "none",
        roughness: 1.2,
        stroke: "#66bb6a",
        strokeWidth: 1.2,
      }),
    );
    svg.appendChild(
      rc.path(`M${x + 2},${y} C${x + 4},${y + h + 2} ${x + 6},${y + h - 1} ${x + 7},${y}`, {
        fill: "none",
        roughness: 1.3,
        stroke: "#81c784",
        strokeWidth: 1,
      }),
    );
  });

  // ── Nest bowl shape (outer) ──
  svg.appendChild(
    rc.path(
      "M78,100 C73,120 70,148 76,170 C83,188 108,200 155,202 L245,202 C292,200 317,188 324,170 C330,148 327,120 322,100",
      {
        fill: "#7b5b4d",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#4e342e",
        strokeWidth: 2.2,
      },
    ),
  );

  // ── Inner nest bowl (lighter, warmer) ──
  svg.appendChild(
    rc.path(
      "M98,106 C94,124 92,145 96,164 C102,178 123,188 163,190 L237,190 C277,188 298,178 304,164 C308,145 306,124 302,106",
      {
        fill: "#a1887f",
        fillStyle: "solid",
        roughness: 1.8,
        stroke: "#795548",
        strokeWidth: 1,
      },
    ),
  );

  // ── Deepest inner (darkest for depth) ──
  svg.appendChild(
    rc.path(
      "M115,115 C112,130 110,150 114,165 C118,175 135,182 170,184 L230,184 C265,182 282,175 286,165 C290,150 288,130 285,115",
      {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Intertwined twig layers — woven horizontal curves ──
  const twigYPositions = [98, 108, 118, 128, 138, 148, 158, 168, 178, 188];
  twigYPositions.forEach((y, i) => {
    const wobble = i % 2 === 0 ? 10 : -10;
    const leftX = 80 + i * 2;
    const rightX = 320 - i * 2;
    svg.appendChild(
      rc.path(
        `M${leftX},${y} C${130 + wobble},${y - 6} ${195},${y + wobble} ${265 - wobble},${y - 4} L${rightX},${y}`,
        {
          fill: "none",
          roughness: 2.4,
          stroke:
            i % 4 === 0 ? "#5d4037" : i % 4 === 1 ? "#8d6e63" : i % 4 === 2 ? "#6d4c41" : "#a1887f",
          strokeWidth: 1.1 + (i % 3) * 0.2,
        },
      ),
    );
  });

  // ── Vertical/diagonal twigs weaving through ──
  for (let x = 92; x <= 308; x += 15) {
    const yTop = 93 + Math.sin(x * 0.06) * 10;
    const yBot = 192 - Math.sin(x * 0.04) * 8;
    svg.appendChild(
      rc.line(x, yTop, x + (x < 200 ? -5 : 5), yBot, {
        roughness: 2.5,
        stroke: x % 30 === 0 ? "#a1887f" : x % 30 === 15 ? "#795548" : "#6d4c41",
        strokeWidth: 0.7,
      }),
    );
  }

  // ── Extra scattered twig arcs for depth ──
  svg.appendChild(
    rc.arc(150, 138, 90, 55, 0.2, 2.9, false, {
      fill: "none",
      roughness: 2.5,
      stroke: "#8d6e63",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.arc(248, 142, 75, 48, 0.4, 2.6, false, {
      fill: "none",
      roughness: 2.5,
      stroke: "#6d4c41",
      strokeWidth: 0.9,
    }),
  );
  svg.appendChild(
    rc.arc(200, 158, 110, 42, 0.1, 3.0, false, {
      fill: "none",
      roughness: 2.2,
      stroke: "#a1887f",
      strokeWidth: 1.1,
    }),
  );
  svg.appendChild(
    rc.arc(180, 125, 60, 35, 0.5, 2.5, false, {
      fill: "none",
      roughness: 2.3,
      stroke: "#795548",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.arc(225, 132, 55, 30, 0.3, 2.7, false, {
      fill: "none",
      roughness: 2.0,
      stroke: "#5d4037",
      strokeWidth: 0.7,
    }),
  );

  // ── Nest rim (thick top edge of twigs) ──
  svg.appendChild(
    rc.path("M76,96 C88,86 128,78 163,76 C183,75 217,75 237,76 C272,78 312,86 324,96", {
      fill: "none",
      roughness: 2.5,
      stroke: "#4e342e",
      strokeWidth: 3.5,
    }),
  );
  svg.appendChild(
    rc.path("M80,99 C93,90 130,83 165,81 C188,80 212,80 235,81 C270,83 307,90 320,99", {
      fill: "none",
      roughness: 2.2,
      stroke: "#795548",
      strokeWidth: 2.2,
    }),
  );
  // Extra rim layer for thickness
  svg.appendChild(
    rc.path("M84,102 C96,94 132,87 167,85 C190,84 210,84 233,85 C268,87 304,94 316,102", {
      fill: "none",
      roughness: 2.0,
      stroke: "#a1887f",
      strokeWidth: 1.5,
    }),
  );

  // ── Small stray twigs poking out ──
  svg.appendChild(
    rc.line(83, 93, 58, 72, {
      roughness: 2.5,
      stroke: "#6d4c41",
      strokeWidth: 1.6,
    }),
  );
  svg.appendChild(
    rc.line(317, 95, 340, 78, {
      roughness: 2.5,
      stroke: "#8d6e63",
      strokeWidth: 1.4,
    }),
  );
  svg.appendChild(
    rc.line(108, 90, 95, 68, {
      roughness: 2.2,
      stroke: "#795548",
      strokeWidth: 1.3,
    }),
  );
  svg.appendChild(
    rc.line(290, 92, 305, 70, {
      roughness: 2.3,
      stroke: "#6d4c41",
      strokeWidth: 1.2,
    }),
  );
  // Tiny leaf on one stray twig
  svg.appendChild(
    rc.path("M58,72 C53,68 50,72 55,75 C58,73 58,72 58,72 Z", {
      fill: "#81c784",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.path("M340,78 C344,74 347,78 343,81 C340,79 340,78 340,78 Z", {
      fill: "#a5d6a7",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );

  // ── Feather detail (little fluffy feather tucked into rim) ──
  svg.appendChild(
    rc.path("M260,88 C263,80 268,72 274,68 C270,72 269,80 270,88", {
      fill: "none",
      roughness: 1.5,
      stroke: "#b0bec5",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.path("M266,78 C268,75 272,73 274,68", {
      fill: "none",
      roughness: 1.2,
      stroke: "#cfd8dc",
      strokeWidth: 0.6,
    }),
  );
  // Feather barbs
  svg.appendChild(rc.line(267, 82, 263, 80, { roughness: 1, stroke: "#cfd8dc", strokeWidth: 0.4 }));
  svg.appendChild(rc.line(269, 78, 265, 76, { roughness: 1, stroke: "#cfd8dc", strokeWidth: 0.4 }));
  svg.appendChild(rc.line(271, 74, 267, 72, { roughness: 1, stroke: "#cfd8dc", strokeWidth: 0.4 }));

  // ── Eggs inside the nest ──
  // Egg 1 (left) — shadow
  svg.appendChild(
    rc.ellipse(172, 154, 24, 28, {
      fill: "rgba(0,0,0,0.06)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  // Egg 1
  svg.appendChild(
    rc.ellipse(170, 150, 24, 30, {
      fill: "#b3e5fc",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#81d4fa",
      strokeWidth: 1.2,
    }),
  );
  // Egg 1 highlight
  svg.appendChild(
    rc.arc(165, 142, 10, 8, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.5)",
      strokeWidth: 1.5,
    }),
  );

  // Egg 2 (center) — shadow
  svg.appendChild(
    rc.ellipse(202, 152, 22, 26, {
      fill: "rgba(0,0,0,0.06)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  // Egg 2
  svg.appendChild(
    rc.ellipse(200, 148, 22, 28, {
      fill: "#b3e5fc",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#81d4fa",
      strokeWidth: 1.2,
    }),
  );
  // Egg 2 highlight
  svg.appendChild(
    rc.arc(196, 140, 9, 7, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.5)",
      strokeWidth: 1.5,
    }),
  );

  // Egg 3 (right) — shadow
  svg.appendChild(
    rc.ellipse(230, 155, 23, 27, {
      fill: "rgba(0,0,0,0.06)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  // Egg 3
  svg.appendChild(
    rc.ellipse(228, 151, 23, 29, {
      fill: "#b3e5fc",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#81d4fa",
      strokeWidth: 1.2,
    }),
  );
  // Egg 3 highlight
  svg.appendChild(
    rc.arc(224, 143, 10, 8, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.5)",
      strokeWidth: 1.5,
    }),
  );

  // ── Realistic speckles on eggs — more numerous and varied ──
  const speckles = [
    { x: 163, y: 143, r: 2.5, c: "#90caf9" },
    { x: 174, y: 155, r: 2, c: "#64b5f6" },
    { x: 167, y: 150, r: 3, c: "#90caf9" },
    { x: 171, y: 159, r: 1.8, c: "#42a5f5" },
    { x: 178, y: 146, r: 2.2, c: "#90caf9" },
    { x: 195, y: 141, r: 2.5, c: "#90caf9" },
    { x: 203, y: 152, r: 2, c: "#64b5f6" },
    { x: 198, y: 147, r: 2.8, c: "#90caf9" },
    { x: 207, y: 140, r: 1.5, c: "#42a5f5" },
    { x: 193, y: 155, r: 2, c: "#90caf9" },
    { x: 223, y: 144, r: 2.5, c: "#90caf9" },
    { x: 232, y: 157, r: 2, c: "#64b5f6" },
    { x: 226, y: 149, r: 3, c: "#90caf9" },
    { x: 235, y: 146, r: 1.8, c: "#42a5f5" },
    { x: 220, y: 156, r: 2.2, c: "#90caf9" },
    { x: 228, y: 160, r: 1.5, c: "#64b5f6" },
  ];
  speckles.forEach(({ x, y, r, c }) => {
    svg.appendChild(
      rc.circle(x, y, r, {
        fill: c,
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Small worm peeking out from side of nest ──
  // Worm body
  svg.appendChild(
    rc.path("M310,155 C318,150 322,145 320,140 C318,135 314,138 316,143 C318,148 322,150 318,155", {
      fill: "none",
      roughness: 1.5,
      stroke: "#ef9a9a",
      strokeWidth: 2,
    }),
  );
  // Worm head
  svg.appendChild(
    rc.circle(320, 138, 4, {
      fill: "#ef9a9a",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#e57373",
      strokeWidth: 0.6,
    }),
  );
  // Worm eyes (two tiny dots)
  svg.appendChild(
    rc.circle(319, 137, 1, {
      fill: "#212121",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.circle(322, 137, 1, {
      fill: "#212121",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Tiny heart above eggs for cuteness ──
  svg.appendChild(
    rc.path(
      "M200,120 C198,117 194,116 192,118 C190,121 190,124 194,127 L200,132 L206,127 C210,124 210,121 208,118 C206,116 202,117 200,120 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#e91e63",
        strokeWidth: 0.5,
      },
    ),
  );
};

export function BirdNest({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
