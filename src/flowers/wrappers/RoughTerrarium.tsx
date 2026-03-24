"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 200, 14, {
      fill: "rgba(50,40,30,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 160, 10, {
      fill: "rgba(50,40,30,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Wooden/cork base ──
  svg.appendChild(
    rc.path(
      "M118,170 L118,195 C118,198 155,200 200,200 C245,200 282,198 282,195 L282,170 C282,168 245,166 200,166 C155,166 118,168 118,170 Z",
      {
        fill: "#a1887f",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#8d6e63",
        strokeWidth: 1.5,
      },
    ),
  );
  // Base darker lower band
  svg.appendChild(
    rc.path(
      "M118,185 L118,195 C118,198 155,200 200,200 C245,200 282,198 282,195 L282,185 C282,188 245,190 200,190 C155,190 118,188 118,185 Z",
      {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );
  // Base top rim
  svg.appendChild(
    rc.ellipse(200, 170, 164, 8, {
      fill: "#bcaaa4",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#8d6e63",
      strokeWidth: 1,
    }),
  );
  // Base wood grain lines
  svg.appendChild(
    rc.line(130, 178, 270, 178, {
      roughness: 2,
      stroke: "rgba(109,76,65,0.3)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(125, 185, 275, 185, {
      roughness: 2,
      stroke: "rgba(109,76,65,0.25)",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(128, 192, 272, 192, {
      roughness: 1.8,
      stroke: "rgba(109,76,65,0.2)",
      strokeWidth: 0.4,
    }),
  );
  // Base highlight
  svg.appendChild(
    rc.path("M140,175 C165,173 200,172 240,174", {
      fill: "none",
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.5,
    }),
  );

  // ── Glass dome (bell jar shape) ──
  svg.appendChild(
    rc.path(
      "M125,170 C125,170 115,140 115,110 C115,70 140,35 200,25 C260,35 285,70 285,110 C285,140 275,170 275,170",
      {
        fill: "rgba(220,235,250,0.12)",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "rgba(150,180,210,0.5)",
        strokeWidth: 1.8,
      },
    ),
  );

  // Glass dome inner edge (double glass effect)
  svg.appendChild(
    rc.path(
      "M132,168 C132,168 123,140 123,112 C123,75 145,42 200,32 C255,42 277,75 277,112 C277,140 268,168 268,168",
      {
        fill: "none",
        roughness: 1,
        stroke: "rgba(150,180,210,0.3)",
        strokeWidth: 0.8,
      },
    ),
  );

  // ── Glass reflections (curved highlight streaks) ──
  svg.appendChild(
    rc.path("M150,55 C145,75 142,100 145,130", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.35)",
      strokeWidth: 3,
    }),
  );
  svg.appendChild(
    rc.path("M158,50 C154,68 152,90 154,115", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M245,70 C248,90 250,110 248,135", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 1.5,
    }),
  );

  // ── Small bright reflection spots ──
  svg.appendChild(
    rc.circle(155, 50, 4, {
      fill: "rgba(255,255,255,0.3)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.circle(148, 60, 3, {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Metal handle/knob at top ──
  // Handle stem
  svg.appendChild(
    rc.line(200, 15, 200, 25, {
      roughness: 1,
      stroke: "#90a4ae",
      strokeWidth: 2.5,
    }),
  );
  // Handle knob
  svg.appendChild(
    rc.circle(200, 12, 10, {
      fill: "#b0bec5",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#78909c",
      strokeWidth: 1,
    }),
  );
  // Handle knob highlight
  svg.appendChild(
    rc.circle(198, 10, 3, {
      fill: "rgba(255,255,255,0.35)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  // Handle base ring
  svg.appendChild(
    rc.ellipse(200, 22, 14, 5, {
      fill: "#90a4ae",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#78909c",
      strokeWidth: 0.8,
    }),
  );

  // ── Pebbles inside at the bottom ──
  const pebbles = [
    { x: 160, y: 164, w: 14, h: 8, color: "#bcaaa4" },
    { x: 175, y: 166, w: 12, h: 7, color: "#d7ccc8" },
    { x: 190, y: 163, w: 10, h: 6, color: "#a1887f" },
    { x: 205, y: 165, w: 13, h: 7, color: "#bcaaa4" },
    { x: 220, y: 164, w: 11, h: 7, color: "#d7ccc8" },
    { x: 235, y: 166, w: 10, h: 6, color: "#a1887f" },
    { x: 145, y: 166, w: 10, h: 6, color: "#d7ccc8" },
    { x: 248, y: 165, w: 9, h: 5, color: "#bcaaa4" },
  ];
  pebbles.forEach(({ x, y, w, h, color }) => {
    svg.appendChild(
      rc.ellipse(x, y, w, h, {
        fill: color,
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#8d6e63",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Moss dots inside ──
  const mossDots = [
    [155, 160],
    [168, 158],
    [182, 162],
    [195, 159],
    [210, 161],
    [225, 158],
    [240, 160],
    [200, 157],
    [172, 155],
    [215, 155],
    [148, 162],
    [252, 162],
  ];
  mossDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 4 + Math.random() * 3, {
        fill: "#81c784",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#4caf50",
        strokeWidth: 0.3,
      }),
    );
  });
  // Darker moss accents
  const mossAccents = [
    [162, 157],
    [188, 160],
    [210, 158],
    [238, 159],
    [175, 161],
  ];
  mossAccents.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 3, {
        fill: "#66bb6a",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      }),
    );
  });

  // ── Tiny mushroom inside ──
  // Stem
  svg.appendChild(
    rc.line(230, 148, 230, 156, {
      roughness: 1,
      stroke: "#efebe9",
      strokeWidth: 2,
    }),
  );
  // Cap
  svg.appendChild(
    rc.arc(230, 148, 12, 8, Math.PI, 2 * Math.PI, true, {
      fill: "#ef5350",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#c62828",
      strokeWidth: 0.5,
    }),
  );
  // Mushroom spots
  svg.appendChild(
    rc.circle(228, 146, 2, {
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.circle(233, 145, 1.5, {
      fill: "rgba(255,255,255,0.5)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Small fern/leaf inside ──
  svg.appendChild(
    rc.path("M170,155 C168,145 172,138 175,130", {
      fill: "none",
      roughness: 1.5,
      stroke: "#4caf50",
      strokeWidth: 1,
    }),
  );
  // Fern leaves
  svg.appendChild(
    rc.line(172, 148, 165, 145, {
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(173, 142, 179, 140, {
      fill: "none",
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(174, 136, 168, 134, {
      roughness: 1.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );

  // ── Cute heart on glass ──
  svg.appendChild(
    rc.path(
      "M200,100 C198,96 194,96 194,100 C194,103 200,106 200,106 C200,106 206,103 206,100 C206,96 202,96 200,100 Z",
      {
        fill: "rgba(244,143,177,0.2)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "rgba(233,30,99,0.2)",
        strokeWidth: 0.5,
      },
    ),
  );

  // ── Sparkle accents (condensation) ──
  const sparkles = [
    [260, 55],
    [265, 80],
    [255, 105],
    [145, 135],
    [270, 130],
    [140, 90],
    [250, 150],
  ];
  sparkles.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "rgba(255,255,255,0.3)",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      }),
    );
  });

  // ── Decorative dots along base rim ──
  [135, 150, 165, 180, 195, 210, 225, 240, 255, 270].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 170, 2, {
        fill: "#6d4c41",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // ── Star sparkle accents outside dome ──
  [
    [130, 40],
    [270, 35],
    [200, 5],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.line(x - 3, y, x + 3, y, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.4)",
        strokeWidth: 0.8,
      }),
    );
    svg.appendChild(
      rc.line(x, y - 3, x, y + 3, {
        roughness: 0.5,
        stroke: "rgba(255,255,255,0.4)",
        strokeWidth: 0.8,
      }),
    );
  });
};

export function Terrarium({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
