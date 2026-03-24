"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow beneath bucket ──
  svg.appendChild(
    rc.ellipse(200, 198, 185, 14, {
      fill: "rgba(55,71,79,0.12)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 150, 10, {
      fill: "rgba(55,71,79,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Handle arc ──
  svg.appendChild(
    rc.arc(200, 48, 165, 84, Math.PI, 0, false, {
      fill: "none",
      roughness: 2.2,
      stroke: "#607d8b",
      strokeWidth: 4,
    }),
  );

  // Handle highlight
  svg.appendChild(
    rc.arc(200, 46, 155, 74, Math.PI + 0.2, -0.2, false, {
      fill: "none",
      roughness: 1,
      stroke: "rgba(255,255,255,0.18)",
      strokeWidth: 1.5,
    }),
  );

  // Handle attachment left
  svg.appendChild(
    rc.circle(128, 62, 10, {
      fill: "#90a4ae",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#455a64",
      strokeWidth: 1.2,
    }),
  );
  // Left attachment bolt
  svg.appendChild(
    rc.circle(128, 62, 4, {
      fill: "#607d8b",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#37474f",
      strokeWidth: 0.6,
    }),
  );

  // Handle attachment right
  svg.appendChild(
    rc.circle(272, 62, 10, {
      fill: "#90a4ae",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#455a64",
      strokeWidth: 1.2,
    }),
  );
  // Right attachment bolt
  svg.appendChild(
    rc.circle(272, 62, 4, {
      fill: "#607d8b",
      fillStyle: "solid",
      roughness: 1,
      stroke: "#37474f",
      strokeWidth: 0.6,
    }),
  );

  // ── Bucket body - darker outer ──
  svg.appendChild(
    rc.path("M125,55 L135,190 C135,196 160,200 200,200 C240,200 265,196 265,190 L275,55 Z", {
      fill: "#90a4ae",
      fillStyle: "cross-hatch",
      fillWeight: 0.4,
      hachureGap: 5,
      hachureAngle: 60,
      roughness: 2,
      stroke: "#607d8b",
      strokeWidth: 1.8,
    }),
  );

  // Bucket lighter inner body
  svg.appendChild(
    rc.path("M135,60 L143,186 C143,190 165,194 200,194 C235,194 255,190 255,186 L265,60 Z", {
      fill: "#b0bec5",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // ── Metal highlight streaks ──
  svg.appendChild(
    rc.line(150, 65, 146, 185, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.22)",
      strokeWidth: 5,
    }),
  );
  svg.appendChild(
    rc.line(158, 65, 155, 182, {
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 3,
    }),
  );

  // Reflection streak right side
  svg.appendChild(
    rc.line(250, 68, 252, 180, {
      roughness: 0.4,
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: 2,
    }),
  );

  // ── Dent marks ──
  svg.appendChild(
    rc.path("M210,100 C214,104 218,104 216,98", {
      fill: "none",
      roughness: 1.2,
      stroke: "#78909c",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.path("M240,130 C243,134 247,133 245,128", {
      fill: "none",
      roughness: 1.3,
      stroke: "#78909c",
      strokeWidth: 0.7,
    }),
  );
  svg.appendChild(
    rc.path("M170,140 C173,143 176,142 174,138", {
      fill: "none",
      roughness: 1.2,
      stroke: "#78909c",
      strokeWidth: 0.6,
    }),
  );

  // ── Rust spots ──
  [
    { x: 235, y: 95, r: 4 },
    { x: 175, y: 120, r: 3 },
    { x: 255, y: 155, r: 3.5 },
    { x: 155, y: 175, r: 2.5 },
    { x: 230, y: 175, r: 3 },
  ].forEach(({ x, y, r }) => {
    svg.appendChild(
      rc.circle(x, y, r * 2, {
        fill: "#a1887f",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#8d6e63",
        strokeWidth: 0.4,
      }),
    );
  });

  // ── Top rim band ──
  svg.appendChild(
    rc.path("M122,48 L125,64 L275,64 L278,48 Z", {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#455a64",
      strokeWidth: 1.2,
    }),
  );

  // Rim lighter top
  svg.appendChild(
    rc.path("M126,50 L128,60 L272,60 L274,50 Z", {
      fill: "#90a4ae",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Rim top ellipse
  svg.appendChild(
    rc.ellipse(200, 48, 158, 14, {
      fill: "#cfd8dc",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "#607d8b",
      strokeWidth: 1.2,
    }),
  );

  // Rim highlight
  svg.appendChild(
    rc.path("M155,48 C175,46 200,45 230,46", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.3)",
      strokeWidth: 1.2,
    }),
  );

  // ── Upper band / ring ──
  svg.appendChild(
    rc.path("M127,78 L274,78", {
      fill: "none",
      roughness: 2,
      stroke: "#455a64",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M128,85 L273,85", {
      fill: "none",
      roughness: 2,
      stroke: "#455a64",
      strokeWidth: 1.5,
    }),
  );

  // Upper band fill
  svg.appendChild(
    rc.path("M127,78 L274,78 L273,85 L128,85 Z", {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // ── Lower band / ring ──
  svg.appendChild(
    rc.path("M133,160 L267,160", {
      fill: "none",
      roughness: 2,
      stroke: "#455a64",
      strokeWidth: 1.5,
    }),
  );
  svg.appendChild(
    rc.path("M134,167 L266,167", {
      fill: "none",
      roughness: 2,
      stroke: "#455a64",
      strokeWidth: 1.5,
    }),
  );

  // Lower band fill
  svg.appendChild(
    rc.path("M133,160 L267,160 L266,167 L134,167 Z", {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // ── Rivets on upper band ──
  [145, 165, 185, 205, 225, 245].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 81, 6, {
        fill: "#546e7a",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#37474f",
        strokeWidth: 0.8,
      }),
    );
    // Rivet highlight
    svg.appendChild(
      rc.circle(x - 1, 80, 2, {
        fill: "rgba(255,255,255,0.2)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Rivets on lower band ──
  [148, 168, 188, 208, 228, 248].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 163, 6, {
        fill: "#546e7a",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#37474f",
        strokeWidth: 0.8,
      }),
    );
    // Rivet highlight
    svg.appendChild(
      rc.circle(x - 1, 162, 2, {
        fill: "rgba(255,255,255,0.2)",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });

  // ── Water drops on bucket ──
  const drops: [number, number][] = [
    [165, 98],
    [245, 110],
    [180, 145],
    [230, 140],
    [200, 175],
    [260, 170],
    [145, 130],
    [220, 105],
  ];
  drops.forEach(([x, y]) => {
    svg.appendChild(
      rc.path(
        `M${x},${y - 3} C${x + 2},${y - 1} ${x + 2},${y + 2} ${x},${y + 3} C${x - 2},${y + 2} ${x - 2},${y - 1} ${x},${y - 3} Z`,
        {
          fill: "rgba(144,202,249,0.4)",
          fillStyle: "solid",
          roughness: 1,
          stroke: "rgba(100,181,246,0.5)",
          strokeWidth: 0.4,
        },
      ),
    );
    // Drop highlight
    svg.appendChild(
      rc.circle(x - 0.5, y - 1.5, 1.2, {
        fill: "rgba(255,255,255,0.5)",
        fillStyle: "solid",
        roughness: 0.5,
        stroke: "none",
      }),
    );
  });

  // ── Bottom ellipse ──
  svg.appendChild(
    rc.ellipse(200, 195, 132, 10, {
      fill: "#78909c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#607d8b",
      strokeWidth: 0.8,
    }),
  );

  // ── Vertical seam lines ──
  svg.appendChild(
    rc.line(200, 66, 200, 190, {
      roughness: 1.5,
      stroke: "#607d8b",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(170, 64, 168, 188, {
      roughness: 1.5,
      stroke: "rgba(96,125,139,0.3)",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.line(230, 64, 232, 188, {
      roughness: 1.5,
      stroke: "rgba(96,125,139,0.3)",
      strokeWidth: 0.4,
    }),
  );

  // ── Cute tiny heart scratched into metal ──
  svg.appendChild(
    rc.path(
      "M200,120 C200,120 197,117 195,117 C193,117 192,118.5 192,120 C192,122.5 200,126 200,126 C200,126 208,122.5 208,120 C208,118.5 207,117 205,117 C203,117 200,120 200,120 Z",
      {
        fill: "none",
        roughness: 1.2,
        stroke: "#546e7a",
        strokeWidth: 0.7,
      },
    ),
  );
};

export function MetalBucket({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
