"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Rainbow arc peeking from behind cloud ──
  const rainbowColors = [
    { color: "#ef5350", w: 260, h: 160 },
    { color: "#ff9800", w: 248, h: 150 },
    { color: "#ffeb3b", w: 236, h: 140 },
    { color: "#66bb6a", w: 224, h: 130 },
    { color: "#42a5f5", w: 212, h: 120 },
    { color: "#ab47bc", w: 200, h: 110 },
  ];
  rainbowColors.forEach(({ color, w, h }) => {
    svg.appendChild(
      rc.arc(200, 175, w, h, Math.PI * 1.0, Math.PI * 2.0, false, {
        fill: "none",
        roughness: 1.5,
        stroke: color,
        strokeWidth: 2.5,
      }),
    );
  });

  // ── Sun rays peeking from top-right ──
  const sunCx = 340;
  const sunCy = 30;
  // Sun body (partially visible)
  svg.appendChild(
    rc.circle(sunCx, sunCy, 30, {
      fill: "#fff9c4",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#ffee58",
      strokeWidth: 1,
    }),
  );
  // Sun rays
  [210, 225, 240, 255, 270].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    svg.appendChild(
      rc.line(
        sunCx + Math.cos(rad) * 18,
        sunCy + Math.sin(rad) * 18,
        sunCx + Math.cos(rad) * 32,
        sunCy + Math.sin(rad) * 32,
        {
          roughness: 1.2,
          stroke: "#ffd54f",
          strokeWidth: 1.5,
        },
      ),
    );
  });

  // ── Blue shadow underneath cloud ──
  svg.appendChild(
    rc.ellipse(204, 196, 250, 18, {
      fill: "#bbdefb",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // ── Rain drops below cloud ──
  const drops = [
    { x: 130, y: 192, h: 8 },
    { x: 155, y: 195, h: 7 },
    { x: 180, y: 193, h: 9 },
    { x: 210, y: 196, h: 7 },
    { x: 240, y: 192, h: 8 },
    { x: 265, y: 195, h: 7 },
  ];
  drops.forEach(({ x, y, h }) => {
    svg.appendChild(
      rc.path(
        `M${x},${y} C${x - 2},${y + h * 0.5} ${x - 3},${y + h} ${x},${y + h + 2} C${x + 3},${y + h} ${x + 2},${y + h * 0.5} ${x},${y} Z`,
        {
          fill: "#90caf9",
          fillStyle: "solid",
          roughness: 1,
          stroke: "#64b5f6",
          strokeWidth: 0.5,
        },
      ),
    );
  });

  // ── Flat-ish bottom base ──
  svg.appendChild(
    rc.path("M78,175 L322,175 L327,190 L73,190 Z", {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#e0e0e0",
      strokeWidth: 1.5,
    }),
  );

  // ── Large cloud body — composed of overlapping ellipses ──
  // Bottom row of bumps (left to right)
  const bottomBumps = [
    { cx: 105, cy: 170, w: 82, h: 52 },
    { cx: 160, cy: 175, w: 78, h: 48 },
    { cx: 218, cy: 173, w: 82, h: 50 },
    { cx: 280, cy: 170, w: 80, h: 52 },
  ];
  bottomBumps.forEach((b) => {
    svg.appendChild(
      rc.ellipse(b.cx, b.cy, b.w, b.h, {
        fill: "#f5f5f5",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#e0e0e0",
        strokeWidth: 1.2,
      }),
    );
  });

  // Middle row of bumps
  const midBumps = [
    { cx: 118, cy: 140, w: 88, h: 58 },
    { cx: 185, cy: 133, w: 95, h: 62 },
    { cx: 258, cy: 138, w: 88, h: 58 },
  ];
  midBumps.forEach((b) => {
    svg.appendChild(
      rc.ellipse(b.cx, b.cy, b.w, b.h, {
        fill: "#fafafa",
        fillStyle: "solid",
        roughness: 2.2,
        stroke: "#e0e0e0",
        strokeWidth: 1.2,
      }),
    );
  });

  // Top row of bumps
  const topBumps = [
    { cx: 148, cy: 106, w: 78, h: 52 },
    { cx: 208, cy: 100, w: 82, h: 55 },
    { cx: 265, cy: 112, w: 68, h: 48 },
  ];
  topBumps.forEach((b) => {
    svg.appendChild(
      rc.ellipse(b.cx, b.cy, b.w, b.h, {
        fill: "#ffffff",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#e0e0e0",
        strokeWidth: 1.2,
      }),
    );
  });

  // Very top bumps (peak) — extra puffiness
  svg.appendChild(
    rc.ellipse(178, 82, 62, 42, {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#e0e0e0",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.ellipse(222, 85, 58, 40, {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#e0e0e0",
      strokeWidth: 1.2,
    }),
  );
  // Extra peak puff for more roundness
  svg.appendChild(
    rc.ellipse(200, 75, 50, 35, {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#e0e0e0",
      strokeWidth: 1,
    }),
  );
  // Small top tuft
  svg.appendChild(
    rc.ellipse(195, 66, 35, 25, {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#eeeeee",
      strokeWidth: 0.8,
    }),
  );

  // ── Inner white fill to unify the shape ──
  svg.appendChild(
    rc.path(
      "M88,175 C86,155 92,128 112,108 C128,92 152,78 182,72 C208,70 238,75 258,88 C278,98 298,118 306,143 C313,158 313,175 308,178 Z",
      {
        fill: "#ffffff",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      },
    ),
  );

  // ── Light blue shadow accents on bottom edge ──
  svg.appendChild(
    rc.path("M88,178 C128,186 198,189 268,186 L308,178", {
      fill: "none",
      roughness: 2,
      stroke: "#bbdefb",
      strokeWidth: 1.8,
    }),
  );

  // ── Subtle inner fluff details (more defined) ──
  svg.appendChild(
    rc.arc(155, 118, 42, 28, Math.PI * 0.8, Math.PI * 1.8, false, {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(224,224,224,0.6)",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.arc(225, 113, 38, 24, Math.PI * 0.9, Math.PI * 1.7, false, {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(224,224,224,0.6)",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.arc(190, 95, 35, 22, Math.PI * 0.7, Math.PI * 1.6, false, {
      fill: "none",
      roughness: 1.3,
      stroke: "rgba(224,224,224,0.5)",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.arc(140, 145, 40, 25, Math.PI * 0.8, Math.PI * 1.9, false, {
      fill: "none",
      roughness: 1.3,
      stroke: "rgba(224,224,224,0.4)",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.arc(260, 140, 36, 22, Math.PI * 0.85, Math.PI * 1.75, false, {
      fill: "none",
      roughness: 1.3,
      stroke: "rgba(224,224,224,0.4)",
      strokeWidth: 0.8,
    }),
  );

  // ── Highlight circles for cuteness and dimension ──
  [
    [145, 98],
    [195, 80],
    [242, 98],
    [170, 125],
    [230, 120],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 5, {
        fill: "rgba(255,255,255,0.85)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "rgba(224,224,224,0.4)",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── White shine streaks ──
  svg.appendChild(
    rc.path("M160, 90 C170,85 180,83 190,84", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.6)",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M215, 88 C225,84 235,85 242,88", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.5)",
      strokeWidth: 1.5,
    }),
  );

  // ── Star sparkles around the cloud ──
  const sparkles = [
    { x: 80, y: 90 },
    { x: 310, y: 85 },
    { x: 340, y: 130 },
    { x: 60, y: 130 },
    { x: 200, y: 50 },
  ];
  sparkles.forEach(({ x, y }) => {
    // Four-point star
    svg.appendChild(
      rc.line(x - 5, y, x + 5, y, { roughness: 0.5, stroke: "#ffd54f", strokeWidth: 1 }),
    );
    svg.appendChild(
      rc.line(x, y - 5, x, y + 5, { roughness: 0.5, stroke: "#ffd54f", strokeWidth: 1 }),
    );
    // Diagonal arms (smaller)
    svg.appendChild(
      rc.line(x - 3, y - 3, x + 3, y + 3, { roughness: 0.5, stroke: "#ffd54f", strokeWidth: 0.6 }),
    );
    svg.appendChild(
      rc.line(x + 3, y - 3, x - 3, y + 3, { roughness: 0.5, stroke: "#ffd54f", strokeWidth: 0.6 }),
    );
  });

  // ── Cute rosy cheeks on cloud face area ──
  svg.appendChild(
    rc.ellipse(165, 140, 18, 12, {
      fill: "rgba(244,143,177,0.2)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(235, 140, 18, 12, {
      fill: "rgba(244,143,177,0.2)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
};

export function FluffyCloud({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
