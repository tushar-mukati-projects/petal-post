"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Drop shadow underneath jar
  svg.appendChild(
    rc.ellipse(204, 200, 150, 10, {
      fill: "rgba(96,125,139,0.08)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // Jar body (outer glass edge for thickness)
  svg.appendChild(
    rc.path(
      "M133,58 C128,65 123,78 120,100 L120,168 C120,182 136,196 160,198 L240,198 C264,196 280,182 280,168 L280,100 C277,78 272,65 267,58",
      {
        fill: "rgba(176,190,197,0.08)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "rgba(120,144,156,0.3)",
        strokeWidth: 0.8,
      },
    ),
  );

  // Jar body (main)
  svg.appendChild(
    rc.path(
      "M135,58 C130,65 125,78 122,100 L122,168 C122,182 138,196 162,198 L238,198 C262,196 278,182 278,168 L278,100 C275,78 270,65 265,58",
      {
        fill: "rgba(200,230,230,0.2)",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#80cbc4",
        strokeWidth: 1.8,
      },
    ),
  );

  // Glass panel lines (mason jar embossing detail)
  svg.appendChild(
    rc.line(155, 65, 155, 190, {
      roughness: 1,
      stroke: "rgba(128,203,196,0.15)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(245, 65, 245, 190, {
      roughness: 1,
      stroke: "rgba(128,203,196,0.15)",
      strokeWidth: 0.5,
    }),
  );

  // Jar neck
  svg.appendChild(
    rc.path("M150,42 L150,58 M250,58 L250,42", {
      fill: "none",
      roughness: 1.2,
      stroke: "#80cbc4",
      strokeWidth: 1.2,
    }),
  );
  svg.appendChild(
    rc.rectangle(150, 42, 100, 16, {
      fill: "rgba(200,230,230,0.15)",
      fillStyle: "solid",
      roughness: 1.4,
      stroke: "#80cbc4",
      strokeWidth: 1,
    }),
  );

  // Neck thread ridges
  svg.appendChild(
    rc.path("M150,46 L250,46", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(128,203,196,0.3)",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.path("M150,50 L250,50", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(128,203,196,0.25)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M150,54 L250,54", {
      fill: "none",
      roughness: 1.5,
      stroke: "rgba(128,203,196,0.2)",
      strokeWidth: 0.4,
    }),
  );

  // Metal lid (cross-hatched)
  svg.appendChild(
    rc.rectangle(144, 34, 112, 10, {
      fill: "#b0bec5",
      fillStyle: "cross-hatch",
      fillWeight: 0.3,
      hachureGap: 3,
      roughness: 1.8,
      stroke: "#78909c",
      strokeWidth: 1,
    }),
  );

  // Lid ridges detail
  for (let x = 148; x <= 252; x += 8) {
    svg.appendChild(
      rc.line(x, 34, x, 44, {
        roughness: 1.5,
        stroke: "rgba(96,125,139,0.2)",
        strokeWidth: 0.4,
      }),
    );
  }

  // Lid top
  svg.appendChild(
    rc.rectangle(148, 30, 104, 6, {
      fill: "#cfd8dc",
      fillStyle: "solid",
      roughness: 1.4,
      stroke: "#90a4ae",
      strokeWidth: 0.6,
    }),
  );

  // Lid highlight
  svg.appendChild(
    rc.path("M152,31 L248,31 L248,33 L152,33 Z", {
      fill: "rgba(255,255,255,0.25)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );

  // Water body
  svg.appendChild(
    rc.path(
      "M126,118 C140,114 170,116 200,114 C230,116 260,114 274,118 L274,168 C274,180 260,194 238,196 L162,196 C140,194 126,180 126,168 Z",
      {
        fill: "rgba(128,203,196,0.18)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      },
    ),
  );

  // Water surface (main)
  svg.appendChild(
    rc.path("M128,118 C148,113 175,117 200,114 C225,117 252,113 272,118", {
      fill: "none",
      roughness: 2.5,
      stroke: "rgba(77,182,172,0.35)",
      strokeWidth: 1.2,
    }),
  );

  // Water surface ripple (secondary)
  svg.appendChild(
    rc.path("M132,121 C152,117 178,120 200,117 C222,120 248,117 268,121", {
      fill: "none",
      roughness: 2,
      stroke: "rgba(77,182,172,0.2)",
      strokeWidth: 0.7,
    }),
  );

  // Water ripple lines inside
  svg.appendChild(
    rc.path("M138,140 C158,138 180,139 200,137 C220,139 242,138 262,140", {
      fill: "none",
      roughness: 2,
      stroke: "rgba(77,182,172,0.1)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M135,158 C155,156 180,157 200,155 C220,157 245,156 265,158", {
      fill: "none",
      roughness: 1.8,
      stroke: "rgba(77,182,172,0.08)",
      strokeWidth: 0.4,
    }),
  );

  // Stems through glass
  [178, 188, 195, 200, 205, 212, 222].forEach((x, i) => {
    svg.appendChild(
      rc.line(x, 48, x + (i % 2 === 0 ? -2 : 2), 195, {
        roughness: 1.5,
        stroke: "rgba(102,187,106,0.25)",
        strokeWidth: 1.8,
      }),
    );
  });

  // Small leaves on submerged stems
  [
    { x: 180, y: 145, dx: -6, dy: -4 },
    { x: 220, y: 150, dx: 6, dy: -4 },
    { x: 195, y: 165, dx: -5, dy: -3 },
  ].forEach(({ x, y, dx, dy }) => {
    svg.appendChild(
      rc.path(
        `M${x},${y} C${x + dx},${y + dy} ${x + dx * 1.5},${y + dy * 1.2} ${x + dx * 2},${y + dy * 0.5}`,
        {
          fill: "none",
          roughness: 2,
          stroke: "rgba(102,187,106,0.15)",
          strokeWidth: 0.8,
        },
      ),
    );
  });

  // Bubbles in water (more, varied sizes)
  [
    { x: 170, y: 135, r: 4 },
    { x: 215, y: 150, r: 3.5 },
    { x: 190, y: 165, r: 3 },
    { x: 235, y: 140, r: 2.5 },
    { x: 155, y: 155, r: 2 },
    { x: 205, y: 175, r: 3 },
    { x: 248, y: 160, r: 2 },
    { x: 175, y: 180, r: 2.5 },
    { x: 230, y: 175, r: 1.8 },
    { x: 160, y: 170, r: 1.5 },
  ].forEach(({ x, y, r }) => {
    svg.appendChild(
      rc.circle(x, y, r * 2, {
        fill: "rgba(255,255,255,0.1)",
        fillStyle: "solid",
        roughness: 1.8,
        stroke: "rgba(128,203,196,0.25)",
        strokeWidth: 0.4,
      }),
    );
  });

  // Glass reflection (main left)
  svg.appendChild(
    rc.line(140, 62, 134, 165, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.25)",
      strokeWidth: 4,
    }),
  );

  // Glass reflection (secondary left)
  svg.appendChild(
    rc.line(144, 65, 138, 160, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1.5,
    }),
  );

  // Glass reflection (right subtle)
  svg.appendChild(
    rc.line(272, 70, 274, 155, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: 2,
    }),
  );

  // Sparkle dots on glass
  [
    { x: 137, y: 80 },
    { x: 140, y: 110 },
    { x: 270, y: 90 },
    { x: 273, y: 130 },
    { x: 138, y: 145 },
  ].forEach(({ x, y }) => {
    svg.appendChild(
      rc.circle(x, y, 2, {
        fill: "rgba(255,255,255,0.35)",
        fillStyle: "solid",
        roughness: 1,
        stroke: "none",
      }),
    );
  });

  // Twine around neck
  svg.appendChild(
    rc.path("M154,52 C170,56 190,58 200,58 C210,58 230,56 246,52", {
      fill: "none",
      roughness: 2,
      stroke: "#8d6e63",
      strokeWidth: 2,
    }),
  );
  // Second twine wrap
  svg.appendChild(
    rc.path("M156,55 C172,59 192,61 200,61 C208,61 228,59 244,55", {
      fill: "none",
      roughness: 1.8,
      stroke: "#6d4c41",
      strokeWidth: 1.2,
    }),
  );

  // Hanging tag (bigger, with detail)
  svg.appendChild(
    rc.line(246, 52, 252, 46, {
      roughness: 2,
      stroke: "#8d6e63",
      strokeWidth: 1,
    }),
  );
  svg.appendChild(
    rc.rectangle(248, 40, 24, 20, {
      fill: "#fff8e1",
      fillStyle: "solid",
      roughness: 2.5,
      stroke: "#bcaaa4",
      strokeWidth: 0.8,
    }),
  );

  // Tag hole
  svg.appendChild(
    rc.circle(260, 44, 3, {
      fill: "rgba(188,170,164,0.3)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#bcaaa4",
      strokeWidth: 0.4,
    }),
  );

  // Tag decorative lines (written text impression)
  svg.appendChild(
    rc.line(252, 50, 268, 50, {
      roughness: 2,
      stroke: "rgba(141,110,99,0.25)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(254, 53, 266, 53, {
      roughness: 2,
      stroke: "rgba(141,110,99,0.2)",
      strokeWidth: 0.4,
    }),
  );

  // Tiny heart on tag (cute detail)
  svg.appendChild(
    rc.path(
      "M260,55 C259,53 257,53 257,55 C257,56 260,58 260,58 C260,58 263,56 263,55 C263,53 261,53 260,55 Z",
      {
        fill: "rgba(233,30,99,0.3)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "rgba(233,30,99,0.4)",
        strokeWidth: 0.3,
      },
    ),
  );

  // Mason jar embossed text area (subtle rectangle outline on body)
  svg.appendChild(
    rc.rectangle(165, 130, 70, 30, {
      fill: "none",
      roughness: 2,
      stroke: "rgba(128,203,196,0.1)",
      strokeWidth: 0.5,
    }),
  );

  // Jar base detail
  svg.appendChild(
    rc.ellipse(200, 198, 110, 8, {
      fill: "rgba(176,190,197,0.1)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "rgba(120,144,156,0.2)",
      strokeWidth: 0.6,
    }),
  );
};

export function MasonJar({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
