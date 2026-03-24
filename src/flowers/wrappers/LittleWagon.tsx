"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Ground shadow ──
  svg.appendChild(
    rc.ellipse(195, 199, 270, 14, {
      fill: "rgba(50,20,10,0.10)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Pull rope extending from handle ──
  svg.appendChild(
    rc.path("M38,78 C25,72 15,68 8,70 C5,72 6,76 10,78", {
      fill: "none",
      roughness: 2,
      stroke: "#8d6e63",
      strokeWidth: 1.8,
    }),
  );
  // Rope end fraying
  svg.appendChild(rc.line(8, 70, 3, 66, { roughness: 1.5, stroke: "#a1887f", strokeWidth: 0.8 }));
  svg.appendChild(rc.line(8, 70, 5, 63, { roughness: 1.5, stroke: "#a1887f", strokeWidth: 0.8 }));
  svg.appendChild(rc.line(8, 70, 10, 65, { roughness: 1.5, stroke: "#8d6e63", strokeWidth: 0.7 }));

  // ── Small flag on a stick at back of wagon ──
  // Flag pole
  svg.appendChild(
    rc.line(298, 80, 298, 38, {
      roughness: 1.5,
      stroke: "#795548",
      strokeWidth: 1.8,
    }),
  );
  // Flag (little triangle pennant)
  svg.appendChild(
    rc.path("M298,38 L320,46 L298,54 Z", {
      fill: "#ffeb3b",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#f9a825",
      strokeWidth: 0.8,
    }),
  );
  // Flag highlight
  svg.appendChild(
    rc.line(300, 42, 314, 46, {
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.4)",
      strokeWidth: 0.8,
    }),
  );
  // Flag pole ball top
  svg.appendChild(
    rc.circle(298, 36, 4, {
      fill: "#f9a825",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "#f57f17",
      strokeWidth: 0.5,
    }),
  );

  // ── Wagon body (main box) ──
  svg.appendChild(
    rc.path("M85,78 L305,78 L316,170 L74,170 Z", {
      fill: "#f44336",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#b71c1c",
      strokeWidth: 2.2,
    }),
  );

  // ── Wagon body — darker bottom strip for depth ──
  svg.appendChild(
    rc.path("M77,155 L313,155 L316,170 L74,170 Z", {
      fill: "#c62828",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#b71c1c",
      strokeWidth: 1.2,
    }),
  );

  // ── Mid-body color band for 3D feel ──
  svg.appendChild(
    rc.path("M80,120 L310,120 L313,155 L77,155 Z", {
      fill: "#d32f2f",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Rim/lip at top of wagon ──
  svg.appendChild(
    rc.path("M82,75 L308,75 L310,84 L80,84 Z", {
      fill: "#c62828",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#b71c1c",
      strokeWidth: 1.5,
    }),
  );

  // ── Interior visible area (slightly lighter) ──
  svg.appendChild(
    rc.path("M87,84 L303,84 L311,155 L79,155 Z", {
      fill: "#ef5350",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Hay / straw in wagon ──
  const hayStrands = [
    "M100,84 C105,72 112,68 118,75",
    "M130,84 C128,70 135,65 140,72",
    "M160,84 C163,68 170,62 175,70",
    "M190,84 C188,66 195,60 200,68",
    "M220,84 C222,65 228,60 232,70",
    "M248,84 C245,68 252,63 258,72",
    "M275,84 C278,70 282,66 286,75",
    "M115,84 C112,75 108,70 112,66",
    "M175,84 C180,70 185,66 182,72",
    "M235,84 C238,72 242,68 240,74",
    "M265,84 C262,73 266,68 270,72",
  ];
  hayStrands.forEach((d, i) => {
    svg.appendChild(
      rc.path(d, {
        fill: "none",
        roughness: 2.2,
        stroke: i % 3 === 0 ? "#f9a825" : i % 3 === 1 ? "#fdd835" : "#ffee58",
        strokeWidth: 1 + (i % 2) * 0.4,
      }),
    );
  });
  // Extra wispy hay bits
  svg.appendChild(rc.line(108, 70, 98, 60, { roughness: 2, stroke: "#ffee58", strokeWidth: 0.8 }));
  svg.appendChild(rc.line(280, 68, 290, 58, { roughness: 2, stroke: "#fdd835", strokeWidth: 0.8 }));
  svg.appendChild(rc.line(195, 62, 188, 52, { roughness: 2, stroke: "#f9a825", strokeWidth: 0.7 }));

  // ── Wagon side panel line details ──
  svg.appendChild(
    rc.line(91, 93, 80, 150, {
      roughness: 1.8,
      stroke: "#b71c1c",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(299, 93, 310, 150, {
      roughness: 1.8,
      stroke: "#b71c1c",
      strokeWidth: 0.8,
    }),
  );
  // Additional panel lines
  svg.appendChild(
    rc.line(195, 84, 195, 170, {
      roughness: 1.5,
      stroke: "#c62828",
      strokeWidth: 0.5,
    }),
  );

  // ── Side panel "LOVE" or wood plank detail ──
  svg.appendChild(
    rc.path("M82,110 L308,110", {
      fill: "none",
      roughness: 2,
      stroke: "#c62828",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.path("M80,138 L312,138", {
      fill: "none",
      roughness: 2,
      stroke: "#c62828",
      strokeWidth: 0.6,
    }),
  );

  // ── Highlight streak on wagon body ──
  svg.appendChild(
    rc.path("M92,90 C140,88 200,87 295,90", {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 2,
    }),
  );

  // ── Axle bar (connecting wheels) ──
  svg.appendChild(
    rc.line(115, 172, 275, 172, {
      roughness: 1.5,
      stroke: "#37474f",
      strokeWidth: 3,
    }),
  );

  // ── Left wheel (more detailed) ──
  // Tire
  svg.appendChild(
    rc.circle(120, 180, 40, {
      fill: "#37474f",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#212121",
      strokeWidth: 2.2,
    }),
  );
  // Tire tread marks
  [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    const r1 = 17;
    const r2 = 20;
    svg.appendChild(
      rc.line(
        120 + Math.cos(rad) * r1,
        180 + Math.sin(rad) * r1,
        120 + Math.cos(rad) * r2,
        180 + Math.sin(rad) * r2,
        { roughness: 1.2, stroke: "#546e7a", strokeWidth: 0.8 },
      ),
    );
  });
  // Inner rim
  svg.appendChild(
    rc.circle(120, 180, 26, {
      fill: "#455a64",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#37474f",
      strokeWidth: 1,
    }),
  );
  // Hub
  svg.appendChild(
    rc.circle(120, 180, 10, {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#455a64",
      strokeWidth: 1,
    }),
  );
  // Spokes (6)
  [0, 60, 120, 180, 240, 300].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    svg.appendChild(
      rc.line(
        120 + Math.cos(rad) * 5,
        180 + Math.sin(rad) * 5,
        120 + Math.cos(rad) * 13,
        180 + Math.sin(rad) * 13,
        { roughness: 1.5, stroke: "#616161", strokeWidth: 1 },
      ),
    );
  });
  // Wheel highlight
  svg.appendChild(
    rc.arc(116, 175, 12, 8, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.2,
    }),
  );

  // ── Right wheel (more detailed) ──
  // Tire
  svg.appendChild(
    rc.circle(270, 180, 40, {
      fill: "#37474f",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#212121",
      strokeWidth: 2.2,
    }),
  );
  // Tire tread marks
  [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    const r1 = 17;
    const r2 = 20;
    svg.appendChild(
      rc.line(
        270 + Math.cos(rad) * r1,
        180 + Math.sin(rad) * r1,
        270 + Math.cos(rad) * r2,
        180 + Math.sin(rad) * r2,
        { roughness: 1.2, stroke: "#546e7a", strokeWidth: 0.8 },
      ),
    );
  });
  // Inner rim
  svg.appendChild(
    rc.circle(270, 180, 26, {
      fill: "#455a64",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#37474f",
      strokeWidth: 1,
    }),
  );
  // Hub
  svg.appendChild(
    rc.circle(270, 180, 10, {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#455a64",
      strokeWidth: 1,
    }),
  );
  // Spokes (6)
  [0, 60, 120, 180, 240, 300].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    svg.appendChild(
      rc.line(
        270 + Math.cos(rad) * 5,
        180 + Math.sin(rad) * 5,
        270 + Math.cos(rad) * 13,
        180 + Math.sin(rad) * 13,
        { roughness: 1.5, stroke: "#616161", strokeWidth: 1 },
      ),
    );
  });
  // Wheel highlight
  svg.appendChild(
    rc.arc(266, 175, 12, 8, Math.PI * 1.2, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.2,
    }),
  );

  // ── Handle — extends from front of wagon ──
  svg.appendChild(
    rc.line(82, 130, 42, 78, {
      roughness: 2,
      stroke: "#6d4c41",
      strokeWidth: 3.2,
    }),
  );
  // Handle grip (thicker, rubber-like)
  svg.appendChild(
    rc.path("M36,76 L54,70", {
      fill: "none",
      roughness: 1.8,
      stroke: "#3e2723",
      strokeWidth: 4,
    }),
  );
  // Grip texture lines
  svg.appendChild(rc.line(40, 74, 40, 76, { roughness: 0.8, stroke: "#5d4037", strokeWidth: 0.6 }));
  svg.appendChild(rc.line(44, 73, 44, 75, { roughness: 0.8, stroke: "#5d4037", strokeWidth: 0.6 }));
  svg.appendChild(rc.line(48, 72, 48, 74, { roughness: 0.8, stroke: "#5d4037", strokeWidth: 0.6 }));
  // Handle connector to wagon body
  svg.appendChild(
    rc.circle(82, 130, 7, {
      fill: "#455a64",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#212121",
      strokeWidth: 1,
    }),
  );

  // ── Small decorative rivet dots on wagon body ──
  [115, 140, 165, 190, 215, 240, 265, 290].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 80, 3, {
        fill: "#b71c1c",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#ef5350",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── Corner bolts on wagon ──
  [
    [86, 84],
    [302, 84],
    [76, 168],
    [314, 168],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 4, {
        fill: "#455a64",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "#37474f",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── "Radio Flyer" style text line decoration ──
  svg.appendChild(
    rc.path("M110,130 L280,130", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 6,
    }),
  );
};

export function LittleWagon({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
