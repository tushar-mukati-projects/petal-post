"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 199, 130, 8, {
      fill: "rgba(62,39,35,0.08)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 199, 100, 5, {
      fill: "rgba(62,39,35,0.05)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Hanging string detail at very top ──
  svg.appendChild(
    rc.line(200, 0, 200, 14, {
      roughness: 1.5,
      stroke: "#f9a825",
      strokeWidth: 1.2,
    }),
  );
  // Small knot at string end
  svg.appendChild(
    rc.circle(200, 4, 2.5, {
      fill: "#f9a825",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#e89b1c",
      strokeWidth: 0.4,
    }),
  );

  // ── Hanging loop at top ──
  svg.appendChild(
    rc.path("M194,26 C194,16 197,10 200,10 C203,10 206,16 206,26", {
      fill: "none",
      roughness: 2.2,
      stroke: "#f9a825",
      strokeWidth: 1.8,
    }),
  );

  // ── Inner glow effect (drawn before body) ──
  svg.appendChild(
    rc.ellipse(200, 100, 140, 110, {
      fill: "rgba(255,200,100,0.08)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 100, 100, 80, {
      fill: "rgba(255,220,140,0.10)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 100, 50, 40, {
      fill: "rgba(255,240,180,0.12)",
      fillStyle: "solid",
      roughness: 0.3,
      stroke: "none",
    }),
  );

  // ── Main lantern body (oval) ──
  svg.appendChild(
    rc.ellipse(200, 100, 180, 140, {
      fill: "#ef5350",
      fillStyle: "hachure",
      fillWeight: 0.6,
      hachureGap: 5,
      hachureAngle: 90,
      roughness: 2.2,
      stroke: "#c62828",
      strokeWidth: 1.8,
    }),
  );

  // ── Darker sides for 3D depth ──
  svg.appendChild(
    rc.path(
      "M130,60 C118,75 112,90 112,100 C112,115 118,130 130,145 L140,140 C128,125 122,112 122,100 C122,88 128,75 140,64 Z",
      {
        fill: "#d32f2f",
        fillStyle: "hachure",
        fillWeight: 0.4,
        hachureGap: 4,
        hachureAngle: 80,
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );
  svg.appendChild(
    rc.path(
      "M270,60 C282,75 288,90 288,100 C288,115 282,130 270,145 L260,140 C272,125 278,112 278,100 C278,88 272,75 260,64 Z",
      {
        fill: "#d32f2f",
        fillStyle: "hachure",
        fillWeight: 0.4,
        hachureGap: 4,
        hachureAngle: 100,
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );

  // ── Vertical rib lines on the lantern (more ribs) ──
  [-70, -55, -40, -25, -12, 0, 12, 25, 40, 55, 70].forEach((offset) => {
    const x = 200 + offset;
    const spread = 1 - Math.abs(offset) / 90;
    const topY = 100 - 68 * spread;
    const botY = 100 + 68 * spread;
    svg.appendChild(
      rc.path(`M${x},${topY} C${x - 2},${topY + 30} ${x + 2},${botY - 30} ${x},${botY}`, {
        fill: "none",
        roughness: 2,
        stroke: "#c62828",
        strokeWidth: 0.65,
      }),
    );
  });

  // ── Horizontal rib lines for paper fold effect ──
  [70, 85, 100, 115, 130].forEach((y) => {
    const halfWidth = Math.sqrt(Math.max(0, 1 - ((y - 100) / 70) ** 2)) * 88;
    svg.appendChild(
      rc.line(200 - halfWidth, y, 200 + halfWidth, y, {
        roughness: 1.5,
        stroke: "rgba(198,40,40,0.25)",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Decorative double-diamond (simple Chinese-style motif) ──
  // Outer diamond
  svg.appendChild(
    rc.path("M200,78 L218,100 L200,122 L182,100 Z", {
      fill: "none",
      roughness: 2,
      stroke: "#ffd54f",
      strokeWidth: 1,
    }),
  );
  // Inner diamond
  svg.appendChild(
    rc.path("M200,86 L210,100 L200,114 L190,100 Z", {
      fill: "none",
      roughness: 1.8,
      stroke: "#ffd54f",
      strokeWidth: 0.7,
    }),
  );
  // Center dot
  svg.appendChild(
    rc.circle(200, 100, 3, {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#f9a825",
      strokeWidth: 0.4,
    }),
  );
  // Small dots at diamond corners
  [
    [200, 78],
    [218, 100],
    [200, 122],
    [182, 100],
  ].forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "#ffd54f",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Top gold trim ring ──
  svg.appendChild(
    rc.ellipse(200, 32, 62, 16, {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#f9a825",
      strokeWidth: 1.3,
    }),
  );
  // Trim ring highlight
  svg.appendChild(
    rc.ellipse(196, 30, 40, 6, {
      fill: "rgba(255,255,255,0.12)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Top cap / collar ──
  svg.appendChild(
    rc.path("M174,32 L174,40 C174,44 184,48 200,48 C216,48 226,44 226,40 L226,32", {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#f9a825",
      strokeWidth: 1,
    }),
  );
  // Collar detail lines
  svg.appendChild(
    rc.line(178, 36, 222, 36, {
      roughness: 1.2,
      stroke: "#e8b825",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(180, 42, 220, 42, {
      roughness: 1.2,
      stroke: "#e8b825",
      strokeWidth: 0.4,
    }),
  );

  // ── Bottom gold trim ring ──
  svg.appendChild(
    rc.ellipse(200, 168, 58, 14, {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#f9a825",
      strokeWidth: 1.3,
    }),
  );
  // Bottom trim highlight
  svg.appendChild(
    rc.ellipse(196, 166, 36, 5, {
      fill: "rgba(255,255,255,0.10)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Bottom collar ──
  svg.appendChild(
    rc.path("M176,168 L176,176 C176,180 185,184 200,184 C215,184 224,180 224,176 L224,168", {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#f9a825",
      strokeWidth: 1,
    }),
  );
  // Bottom collar detail
  svg.appendChild(
    rc.line(180, 172, 220, 172, {
      roughness: 1.2,
      stroke: "#e8b825",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(182, 178, 218, 178, {
      roughness: 1.2,
      stroke: "#e8b825",
      strokeWidth: 0.4,
    }),
  );

  // ── Tassel strings hanging from bottom ──
  svg.appendChild(
    rc.line(193, 184, 190, 196, {
      roughness: 2.2,
      stroke: "#ffd54f",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.line(200, 184, 200, 198, {
      roughness: 2.2,
      stroke: "#ffd54f",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.line(207, 184, 210, 196, {
      roughness: 2.2,
      stroke: "#ffd54f",
      strokeWidth: 1.5,
    }),
  );
  // Extra thin tassel threads
  svg.appendChild(
    rc.line(196, 184, 194, 194, {
      roughness: 2,
      stroke: "#ffca28",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.line(204, 184, 206, 194, {
      roughness: 2,
      stroke: "#ffca28",
      strokeWidth: 0.8,
    }),
  );

  // ── Tassel pom at bottom ──
  svg.appendChild(
    rc.circle(200, 197, 9, {
      fill: "#ffd54f",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#f9a825",
      strokeWidth: 0.8,
    }),
  );
  // Pom highlight
  svg.appendChild(
    rc.circle(198, 195, 3, {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Lantern glow highlight (left side) ──
  svg.appendChild(
    rc.ellipse(178, 88, 32, 44, {
      fill: "rgba(255,255,255,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Secondary smaller highlight ──
  svg.appendChild(
    rc.ellipse(182, 85, 14, 20, {
      fill: "rgba(255,255,255,0.08)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );

  // ── Small decorative dots around the lantern ──
  const decorDots = [
    [160, 75],
    [240, 75],
    [155, 125],
    [245, 125],
  ];
  decorDots.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "#ffd54f",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });
};

export function PaperLantern({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
