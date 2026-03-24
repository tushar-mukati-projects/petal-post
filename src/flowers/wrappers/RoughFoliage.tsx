"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Grass tufts at base
  const grassPositions = [130, 150, 170, 190, 210, 230, 250, 270];
  grassPositions.forEach((x) => {
    const h = 8 + Math.random() * 6;
    svg.appendChild(
      rc.line(x, 218, x - 3, 218 - h, {
        roughness: 2,
        stroke: "#4caf50",
        strokeWidth: 1,
      }),
    );
    svg.appendChild(
      rc.line(x, 218, x + 3, 218 - h - 2, {
        roughness: 2,
        stroke: "#66bb6a",
        strokeWidth: 0.8,
      }),
    );
    svg.appendChild(
      rc.line(x, 218, x, 218 - h - 1, {
        roughness: 2,
        stroke: "#388e3c",
        strokeWidth: 0.6,
      }),
    );
  });

  // Main stems (more varied)
  const stemTargets = [200, 185, 215, 170, 230, 155, 245, 145, 255];
  stemTargets.forEach((x2, i) => {
    svg.appendChild(
      rc.line(200, 80, x2, 218, {
        roughness: 1.8,
        stroke: ["#2e7d32", "#388e3c", "#43a047"][i % 3],
        strokeWidth: 2.5 - i * 0.12,
      }),
    );
  });

  // Large leaves - left
  const leftLeaves = [
    { x: 100, y: 90, angle: -45, size: 120, fill: "#2e7d32" },
    { x: 125, y: 100, angle: -30, size: 100, fill: "#388e3c" },
    { x: 95, y: 120, angle: -55, size: 90, fill: "#1b5e20" },
    { x: 115, y: 135, angle: -40, size: 75, fill: "#2e7d32" },
  ];
  leftLeaves.forEach(({ x, y, angle, size, fill }) => {
    const rad = (angle * Math.PI) / 180;
    const ex = x + Math.cos(rad) * size;
    const ey = y + Math.sin(rad) * size;
    const cx1 = x + Math.cos(rad - 0.3) * size * 0.5;
    const cy1 = y + Math.sin(rad - 0.3) * size * 0.5;
    const cx2 = x + Math.cos(rad + 0.3) * size * 0.5;
    const cy2 = y + Math.sin(rad + 0.3) * size * 0.5;
    svg.appendChild(
      rc.path(
        `M${x},${y} C${cx1},${cy1} ${cx1 - 5},${cy1 - 10} ${ex},${ey} C${cx2 + 5},${cy2 + 10} ${cx2},${cy2} ${x},${y} Z`,
        {
          fill,
          fillStyle: "hachure",
          fillWeight: 0.5,
          hachureGap: 4,
          hachureAngle: angle + 90,
          roughness: 2.2,
          stroke: "#1b5e20",
          strokeWidth: 1,
        },
      ),
    );
    // Main vein
    svg.appendChild(rc.line(x, y, ex, ey, { roughness: 1.5, stroke: "#1b5e20", strokeWidth: 0.8 }));
    // Secondary veins
    for (let t = 0.25; t <= 0.75; t += 0.25) {
      const vx = x + (ex - x) * t;
      const vy = y + (ey - y) * t;
      const perpX = -Math.sin(rad) * 8;
      const perpY = Math.cos(rad) * 8;
      svg.appendChild(
        rc.line(vx, vy, vx + perpX, vy + perpY, {
          roughness: 2,
          stroke: "rgba(27,94,32,0.4)",
          strokeWidth: 0.4,
        }),
      );
    }
  });

  // Large leaves - right (mirrored)
  const rightLeaves = [
    { x: 300, y: 90, angle: -135, size: 120, fill: "#388e3c" },
    { x: 275, y: 100, angle: -150, size: 100, fill: "#43a047" },
    { x: 305, y: 120, angle: -125, size: 90, fill: "#2e7d32" },
    { x: 285, y: 135, angle: -140, size: 75, fill: "#388e3c" },
  ];
  rightLeaves.forEach(({ x, y, angle, size, fill }) => {
    const rad = (angle * Math.PI) / 180;
    const ex = x + Math.cos(rad) * size;
    const ey = y + Math.sin(rad) * size;
    const cx1 = x + Math.cos(rad - 0.3) * size * 0.5;
    const cy1 = y + Math.sin(rad - 0.3) * size * 0.5;
    const cx2 = x + Math.cos(rad + 0.3) * size * 0.5;
    const cy2 = y + Math.sin(rad + 0.3) * size * 0.5;
    svg.appendChild(
      rc.path(
        `M${x},${y} C${cx1},${cy1} ${cx1 - 5},${cy1 - 10} ${ex},${ey} C${cx2 + 5},${cy2 + 10} ${cx2},${cy2} ${x},${y} Z`,
        {
          fill,
          fillStyle: "hachure",
          fillWeight: 0.5,
          hachureGap: 4,
          hachureAngle: angle + 90,
          roughness: 2.2,
          stroke: "#2e7d32",
          strokeWidth: 1,
        },
      ),
    );
    // Main vein
    svg.appendChild(rc.line(x, y, ex, ey, { roughness: 1.5, stroke: "#2e7d32", strokeWidth: 0.8 }));
    // Secondary veins
    for (let t = 0.25; t <= 0.75; t += 0.25) {
      const vx = x + (ex - x) * t;
      const vy = y + (ey - y) * t;
      const perpX = Math.sin(rad) * 8;
      const perpY = -Math.cos(rad) * 8;
      svg.appendChild(
        rc.line(vx, vy, vx + perpX, vy + perpY, {
          roughness: 2,
          stroke: "rgba(46,125,50,0.4)",
          strokeWidth: 0.4,
        }),
      );
    }
  });

  // Small filler leaves (eucalyptus-style)
  const fillers = [
    { x: 145, y: 140, r: -20 },
    { x: 255, y: 140, r: 20 },
    { x: 160, y: 160, r: -10 },
    { x: 240, y: 160, r: 10 },
    { x: 175, y: 175, r: -5 },
    { x: 225, y: 175, r: 5 },
  ];
  fillers.forEach(({ x, y, r }) => {
    [-12, -24, -36, -48].forEach((dy) => {
      svg.appendChild(
        rc.ellipse(x + r * 0.1, y + dy, 11, 15, {
          fill: "#81c784",
          fillStyle: "solid",
          roughness: 2.2,
          stroke: "#66bb6a",
          strokeWidth: 0.6,
        }),
      );
    });
    // Filler stem
    svg.appendChild(
      rc.line(x, y, x + r * 0.1, y - 55, {
        roughness: 1.8,
        stroke: "#4caf50",
        strokeWidth: 0.8,
      }),
    );
  });

  // Small berries (cute clusters)
  const berryGroups = [
    { cx: 135, cy: 105, color: "#e53935" },
    { cx: 265, cy: 105, color: "#e53935" },
    { cx: 155, cy: 125, color: "#ef5350" },
    { cx: 245, cy: 125, color: "#ef5350" },
  ];
  berryGroups.forEach(({ cx, cy, color }) => {
    [
      { dx: 0, dy: 0 },
      { dx: 5, dy: -4 },
      { dx: -4, dy: -3 },
      { dx: 2, dy: -7 },
    ].forEach(({ dx, dy }) => {
      svg.appendChild(
        rc.circle(cx + dx, cy + dy, 5, {
          fill: color,
          fillStyle: "solid",
          roughness: 2,
          stroke: "#c62828",
          strokeWidth: 0.5,
        }),
      );
      // Berry highlight
      svg.appendChild(
        rc.circle(cx + dx - 1, cy + dy - 1, 1.5, {
          fill: "rgba(255,255,255,0.3)",
          fillStyle: "solid",
          roughness: 1,
          stroke: "none",
        }),
      );
    });
  });

  // Small flower buds
  [
    { x: 180, y: 95, color: "#f48fb1" },
    { x: 220, y: 95, color: "#ce93d8" },
  ].forEach(({ x, y, color }) => {
    svg.appendChild(
      rc.circle(x, y, 7, {
        fill: color,
        fillStyle: "solid",
        roughness: 2,
        stroke: "#ad1457",
        strokeWidth: 0.5,
      }),
    );
    svg.appendChild(
      rc.circle(x, y, 3, {
        fill: "#fff9c4",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "none",
      }),
    );
  });

  // Light highlight on central leaves
  svg.appendChild(
    rc.line(195, 85, 190, 140, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: 4,
    }),
  );

  // Twine tie
  svg.appendChild(
    rc.ellipse(200, 160, 55, 12, {
      fill: "none",
      roughness: 2.2,
      stroke: "#6d4c41",
      strokeWidth: 2.5,
    }),
  );
  // Double twine
  svg.appendChild(
    rc.ellipse(200, 162, 50, 10, {
      fill: "none",
      roughness: 2,
      stroke: "#5d4037",
      strokeWidth: 1.2,
    }),
  );
  // Knot
  svg.appendChild(rc.circle(200, 160, 8, { fill: "#5d4037", fillStyle: "solid", roughness: 1.8 }));
  // Knot highlight
  svg.appendChild(
    rc.circle(199, 159, 2.5, {
      fill: "rgba(255,255,255,0.15)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Ground shadow
  svg.appendChild(
    rc.ellipse(200, 219, 160, 4, {
      fill: "rgba(27,94,32,0.06)",
      fillStyle: "solid",
      roughness: 0.5,
      stroke: "none",
    }),
  );
};

export function Foliage({ className }: { className?: string }) {
  return <RoughCanvas className={className} viewBox="0 0 400 220" draw={draw} />;
}
