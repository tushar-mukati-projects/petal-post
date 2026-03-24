"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Ground shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 220, 12, {
      fill: "rgba(50,30,20,0.10)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // ── Sand texture at base ──
  svg.appendChild(
    rc.path(
      "M60,192 C100,188 180,186 280,188 C320,190 350,194 355,198 L45,198 C50,195 55,193 60,192 Z",
      {
        fill: "#ffe0b2",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      },
    ),
  );
  // Sand grain dots
  const sandGrains = [
    [75, 195],
    [95, 197],
    [110, 194],
    [130, 196],
    [155, 195],
    [180, 197],
    [210, 194],
    [240, 196],
    [265, 195],
    [285, 197],
    [305, 194],
    [320, 196],
    [145, 198],
    [225, 198],
    [170, 196],
  ];
  sandGrains.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 1.5, {
        fill: "#ffcc80",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Small starfish nearby ──
  // Starfish body
  svg.appendChild(
    rc.path(
      "M55,178 L58,170 L62,178 L70,175 L64,181 L70,187 L62,184 L58,192 L55,184 L47,187 L52,181 L47,175 Z",
      {
        fill: "#ffab91",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#ff8a65",
        strokeWidth: 0.8,
      },
    ),
  );
  // Starfish center dot
  svg.appendChild(
    rc.circle(58, 181, 3, {
      fill: "#ff7043",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Starfish arm dots
  [
    [55, 173],
    [65, 176],
    [67, 185],
    [55, 188],
    [49, 179],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 1.2, {
        fill: "#ffccbc",
        fillStyle: "solid",
        roughness: 0.6,
        stroke: "none",
      }),
    );
  });

  // ── Shell body — large scallop fan shape ──
  svg.appendChild(
    rc.path(
      "M90,190 C85,168 82,138 100,108 C115,82 145,57 200,42 C255,57 285,82 300,108 C318,138 315,168 310,190 Z",
      {
        fill: "#ffccbc",
        fillStyle: "solid",
        roughness: 2,
        stroke: "#d84315",
        strokeWidth: 1.8,
      },
    ),
  );

  // ── Inner shell area (lighter, warmer) ──
  svg.appendChild(
    rc.path(
      "M108,185 C106,165 104,140 118,115 C130,95 156,73 200,62 C244,73 270,95 282,115 C296,140 294,165 292,185 Z",
      {
        fill: "#fff3e0",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#ffab91",
        strokeWidth: 1,
      },
    ),
  );

  // ── Iridescent inner glow (pinkish layer) ──
  svg.appendChild(
    rc.path(
      "M125,180 C123,162 122,140 135,120 C146,104 168,86 200,78 C232,86 254,104 265,120 C278,140 277,162 275,180 Z",
      {
        fill: "#f8bbd0",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
        fillWeight: 0.3,
      },
    ),
  );

  // ── Radial ridges from base center outward (fan lines) ──
  const centerX = 200;
  const centerY = 200;
  const ridgeAngles = [-78, -66, -54, -42, -30, -18, -6, 6, 18, 30, 42, 54, 66, 78];
  ridgeAngles.forEach((angleDeg, i) => {
    const rad = (angleDeg * Math.PI) / 180;
    const length = 155;
    const endX = centerX + Math.sin(rad) * length * 0.72;
    const endY = centerY - Math.cos(rad) * length;
    svg.appendChild(
      rc.line(centerX, centerY, endX, endY, {
        roughness: 2,
        stroke: i % 2 === 0 ? "#ff8a65" : "#ffab91",
        strokeWidth: i % 3 === 0 ? 1.2 : 0.8,
      }),
    );
  });

  // ── Scalloped edges along the top — overlapping arcs ──
  const scallops = [
    { cx: 115, cy: 128, w: 58, h: 38, start: Math.PI * 1.1, end: Math.PI * 2 },
    { cx: 143, cy: 98, w: 52, h: 32, start: Math.PI * 1.15, end: Math.PI * 1.95 },
    { cx: 172, cy: 74, w: 48, h: 30, start: Math.PI * 1.2, end: Math.PI * 1.9 },
    { cx: 200, cy: 62, w: 44, h: 28, start: Math.PI * 1.15, end: Math.PI * 1.85 },
    { cx: 228, cy: 74, w: 48, h: 30, start: Math.PI * 1.1, end: Math.PI * 1.8 },
    { cx: 257, cy: 98, w: 52, h: 32, start: Math.PI * 1.05, end: Math.PI * 1.85 },
    { cx: 285, cy: 128, w: 58, h: 38, start: Math.PI * 1, end: Math.PI * 1.9 },
  ];
  scallops.forEach((s) => {
    svg.appendChild(
      rc.arc(s.cx, s.cy, s.w, s.h, s.start, s.end, false, {
        fill: "none",
        roughness: 2,
        stroke: "#ff8a65",
        strokeWidth: 1.3,
      }),
    );
  });

  // ── Hachure overlay for texture ──
  svg.appendChild(
    rc.path(
      "M100,185 C98,158 100,128 118,102 C135,78 160,62 200,52 C240,62 265,78 282,102 C300,128 302,158 300,185 Z",
      {
        fill: "#ffab91",
        fillStyle: "hachure",
        fillWeight: 0.4,
        hachureGap: 9,
        hachureAngle: 85,
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Additional concentric arc texture lines for 3D feel ──
  const concentricArcs = [
    { y: 160, w: 180, h: 20 },
    { y: 140, w: 150, h: 18 },
    { y: 120, w: 120, h: 16 },
    { y: 100, w: 90, h: 14 },
    { y: 82, w: 60, h: 10 },
  ];
  concentricArcs.forEach(({ y, w, h }) => {
    svg.appendChild(
      rc.arc(200, y, w, h, Math.PI * 0.05, Math.PI * 0.95, false, {
        fill: "none",
        roughness: 1.5,
        stroke: "rgba(255,138,101,0.35)",
        strokeWidth: 0.7,
      }),
    );
  });

  // ── Bottom base/lip of the shell ──
  svg.appendChild(
    rc.path("M86,188 L314,188 C312,195 297,202 282,202 L118,202 C103,202 90,195 86,188 Z", {
      fill: "#ffccbc",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#d84315",
      strokeWidth: 1.5,
    }),
  );

  // ── Pearl inside shell ──
  // Pearl shadow
  svg.appendChild(
    rc.ellipse(200, 172, 22, 10, {
      fill: "rgba(0,0,0,0.08)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Pearl body
  svg.appendChild(
    rc.circle(200, 165, 18, {
      fill: "#fafafa",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#e0e0e0",
      strokeWidth: 0.8,
    }),
  );
  // Pearl inner glow
  svg.appendChild(
    rc.circle(200, 165, 12, {
      fill: "#fff9c4",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  // Pearl highlight (top left shine)
  svg.appendChild(
    rc.circle(195, 160, 5, {
      fill: "rgba(255,255,255,0.8)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.circle(193, 158, 2.5, {
      fill: "rgba(255,255,255,0.9)",
      fillStyle: "solid",
      roughness: 0.3,
      stroke: "none",
    }),
  );

  // ── Iridescent highlight streaks ──
  svg.appendChild(
    rc.path("M135,150 C145,135 165,120 185,112", {
      fill: "none",
      roughness: 1.2,
      stroke: "rgba(255,255,255,0.4)",
      strokeWidth: 2,
    }),
  );
  svg.appendChild(
    rc.path("M145,160 C155,148 170,135 188,125", {
      fill: "none",
      roughness: 1.2,
      stroke: "rgba(206,147,216,0.25)",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M255,150 C248,138 235,122 218,112", {
      fill: "none",
      roughness: 1.2,
      stroke: "rgba(129,212,250,0.25)",
      strokeWidth: 1.5,
    }),
  );

  // ── Sparkle/shimmer dots ──
  [
    [170, 95],
    [200, 80],
    [230, 95],
    [155, 130],
    [245, 130],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 4, {
        fill: "rgba(255,255,255,0.55)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Spiral hint at shell base center ──
  svg.appendChild(
    rc.arc(200, 182, 32, 22, 0, Math.PI * 1.6, false, {
      fill: "none",
      roughness: 2,
      stroke: "#ff8a65",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.arc(200, 180, 20, 14, 0.3, Math.PI * 1.3, false, {
      fill: "none",
      roughness: 1.8,
      stroke: "#ffab91",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.arc(200, 179, 10, 8, 0.5, Math.PI * 1.0, false, {
      fill: "none",
      roughness: 1.5,
      stroke: "#ffccbc",
      strokeWidth: 0.6,
    }),
  );
};

export function Seashell({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
