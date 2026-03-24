"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow underneath ──
  svg.appendChild(
    rc.ellipse(200, 198, 300, 14, {
      fill: "rgba(62,39,35,0.10)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 260, 10, {
      fill: "rgba(62,39,35,0.06)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // ── Wide brim (upturned, crown faces down) ──
  svg.appendChild(
    rc.path(
      "M55,130 C55,118 78,103 120,96 L280,96 C322,103 345,118 345,130 L345,148 C345,162 312,172 200,172 C88,172 55,162 55,148 Z",
      {
        fill: "#f5deb3",
        fillStyle: "hachure",
        fillWeight: 0.5,
        hachureGap: 5,
        hachureAngle: 30,
        roughness: 2.2,
        stroke: "#d4a574",
        strokeWidth: 1.5,
      },
    ),
  );

  // ── Darker underside of brim for depth ──
  svg.appendChild(
    rc.path(
      "M65,140 C65,155 100,170 200,170 C300,170 335,155 335,140 L335,148 C335,162 305,172 200,172 C95,172 65,162 65,148 Z",
      {
        fill: "#d4a060",
        fillStyle: "hachure",
        fillWeight: 0.4,
        hachureGap: 4,
        hachureAngle: 0,
        roughness: 1.5,
        stroke: "none",
      },
    ),
  );

  // ── Brim straw texture - vertical weave lines ──
  for (let x = 75; x <= 325; x += 10) {
    const yStart = 98 + Math.abs(200 - x) * 0.14;
    const yEnd = 166 - Math.abs(200 - x) * 0.09;
    svg.appendChild(
      rc.line(x, yStart, x, yEnd, {
        roughness: 2,
        stroke: "#c89860",
        strokeWidth: 0.45,
      }),
    );
  }

  // ── Brim horizontal weave lines (cross-hatch effect) ──
  [102, 110, 118, 126, 134, 142, 150, 158, 164].forEach((y) => {
    const inset = Math.max(0, (y - 96) * 0.35);
    svg.appendChild(
      rc.line(60 + inset, y, 340 - inset, y, {
        roughness: 2.2,
        stroke: "#c89860",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Straw weave knot dots on brim (cute texture) ──
  const knotPositions = [
    [100, 120],
    [130, 110],
    [160, 140],
    [180, 125],
    [220, 125],
    [240, 140],
    [270, 110],
    [300, 120],
    [150, 155],
    [250, 155],
    [200, 150],
    [120, 145],
    [280, 145],
  ];
  knotPositions.forEach(([x, y]) => {
    svg.appendChild(
      rc.circle(x, y, 3, {
        fill: "#c49a6c",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "#b8895a",
        strokeWidth: 0.3,
      }),
    );
  });

  // ── Crown (inverted dome container) ──
  svg.appendChild(
    rc.path(
      "M138,96 C138,86 143,58 148,48 C158,32 174,24 200,22 C226,24 242,32 252,48 C257,58 262,86 262,96",
      {
        fill: "#f5deb3",
        fillStyle: "hachure",
        fillWeight: 0.6,
        hachureGap: 4,
        hachureAngle: 45,
        roughness: 2,
        stroke: "#d4a574",
        strokeWidth: 1.5,
      },
    ),
  );

  // ── Crown darker side for 3D depth (right side) ──
  svg.appendChild(
    rc.path(
      "M220,26 C240,34 250,48 255,60 C260,78 262,92 262,96 L250,96 C250,88 248,70 244,56 C238,40 228,30 220,26",
      {
        fill: "#dcc498",
        fillStyle: "hachure",
        fillWeight: 0.3,
        hachureGap: 3,
        hachureAngle: 60,
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );

  // ── Crown weave horizontal lines ──
  [34, 42, 50, 58, 66, 74, 82, 90].forEach((y) => {
    const spread = Math.min((y - 22) * 0.78, 56);
    svg.appendChild(
      rc.line(200 - spread, y, 200 + spread, y, {
        roughness: 1.8,
        stroke: "#c89860",
        strokeWidth: 0.5,
      }),
    );
  });

  // ── Crown vertical weave lines ──
  for (let x = 150; x <= 250; x += 8) {
    const topY = 28 + Math.abs(200 - x) * 0.45;
    svg.appendChild(
      rc.line(x, topY, x, 94, {
        roughness: 1.5,
        stroke: "#c89860",
        strokeWidth: 0.4,
      }),
    );
  }

  // ── Ribbon band around crown base ──
  svg.appendChild(
    rc.path("M136,87 L264,87 L264,99 L136,99 Z", {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#5d4037",
      strokeWidth: 1.2,
    }),
  );

  // ── Ribbon texture lines ──
  svg.appendChild(
    rc.line(140, 91, 260, 91, {
      roughness: 1.5,
      stroke: "#7b5b4e",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(140, 95, 260, 95, {
      roughness: 1.5,
      stroke: "#7b5b4e",
      strokeWidth: 0.4,
    }),
  );

  // ── Ribbon highlight ──
  svg.appendChild(
    rc.line(140, 89, 260, 89, {
      roughness: 1.2,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1,
    }),
  );

  // ── Ribbon bow on left side ──
  svg.appendChild(
    rc.path("M148,93 C132,76 124,82 138,94 C124,106 132,114 148,96 Z", {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#5d4037",
      strokeWidth: 1,
    }),
  );

  // ── Bow center knot ──
  svg.appendChild(
    rc.circle(141, 94, 5, {
      fill: "#6d4c41",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#5d4037",
      strokeWidth: 0.5,
    }),
  );

  // ── Ribbon tail ──
  svg.appendChild(
    rc.path("M138,98 L126,118 L132,112", {
      fill: "none",
      roughness: 2,
      stroke: "#8d6e63",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M136,100 L120,114 L126,110", {
      fill: "none",
      roughness: 2,
      stroke: "#7b5b4e",
      strokeWidth: 1,
    }),
  );

  // ── Tiny flower pin on ribbon ──
  // Flower center
  svg.appendChild(
    rc.circle(270, 93, 5, {
      fill: "#fff176",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#f9a825",
      strokeWidth: 0.6,
    }),
  );
  // Flower petals
  const petalAngles = [0, 72, 144, 216, 288];
  petalAngles.forEach((angle) => {
    const rad = (angle * Math.PI) / 180;
    const px = 270 + Math.cos(rad) * 6;
    const py = 93 + Math.sin(rad) * 6;
    svg.appendChild(
      rc.circle(px, py, 5, {
        fill: "#ffcdd2",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#ef9a9a",
        strokeWidth: 0.4,
      }),
    );
  });
  // Flower center on top
  svg.appendChild(
    rc.circle(270, 93, 3.5, {
      fill: "#fff9c4",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#fdd835",
      strokeWidth: 0.5,
    }),
  );

  // ── Brim edge highlight (shine) ──
  svg.appendChild(
    rc.path("M70,128 C95,118 145,110 200,108 C255,110 305,118 330,128", {
      fill: "none",
      roughness: 2.5,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 2.5,
    }),
  );

  // ── Crown highlight (shine on left) ──
  svg.appendChild(
    rc.line(155, 36, 152, 88, {
      roughness: 1,
      stroke: "rgba(255,255,255,0.15)",
      strokeWidth: 2,
    }),
  );

  // ── Tiny decorative dots on brim edge ──
  [80, 120, 200, 280, 320].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 168, 2, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });
};

export function SunHat({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
