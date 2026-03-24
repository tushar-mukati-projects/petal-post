"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // ── Shadow beneath envelope ──
  svg.appendChild(
    rc.ellipse(200, 198, 230, 14, {
      fill: "rgba(180,130,80,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );
  svg.appendChild(
    rc.ellipse(200, 198, 190, 10, {
      fill: "rgba(180,130,80,0.06)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Envelope body (darker outer) ──
  svg.appendChild(
    rc.path("M88,78 L88,196 L312,196 L312,78 Z", {
      fill: "#ffe0b2",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 8,
      hachureAngle: 45,
      roughness: 2.2,
      stroke: "#c9a06c",
      strokeWidth: 1.8,
    }),
  );

  // Envelope lighter inner
  svg.appendChild(
    rc.path("M95,84 L95,190 L305,190 L305,84 Z", {
      fill: "#fff3e0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Envelope highlight
  svg.appendChild(
    rc.path("M98,86 L98,150", {
      fill: "none",
      roughness: 0.5,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 2.5,
    }),
  );
  svg.appendChild(
    rc.path("M104,88 L104,140", {
      fill: "none",
      roughness: 0.4,
      stroke: "rgba(255,255,255,0.12)",
      strokeWidth: 1.5,
    }),
  );

  // ── Postal marks / postmark circle ──
  svg.appendChild(
    rc.circle(280, 102, 28, {
      fill: "none",
      roughness: 2,
      stroke: "rgba(180,130,80,0.35)",
      strokeWidth: 0.8,
    }),
  );
  svg.appendChild(
    rc.circle(280, 102, 22, {
      fill: "none",
      roughness: 1.8,
      stroke: "rgba(180,130,80,0.3)",
      strokeWidth: 0.6,
    }),
  );
  // Postmark lines through circle
  svg.appendChild(
    rc.line(262, 96, 298, 96, {
      roughness: 1.5,
      stroke: "rgba(180,130,80,0.3)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(264, 102, 296, 102, {
      roughness: 1.5,
      stroke: "rgba(180,130,80,0.3)",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.line(262, 108, 298, 108, {
      roughness: 1.5,
      stroke: "rgba(180,130,80,0.3)",
      strokeWidth: 0.5,
    }),
  );

  // ── Stamp in top right ──
  svg.appendChild(
    rc.path("M270, 82 L270,72 L298,72 L298,82 Z", {
      fill: "#ef9a9a",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#c9a06c",
      strokeWidth: 0.8,
    }),
  );
  // Stamp perforated edges (tiny dots)
  [272, 276, 280, 284, 288, 292, 296].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 71, 1, {
        fill: "#c9a06c",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
    svg.appendChild(
      rc.circle(x, 83, 1, {
        fill: "#c9a06c",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });
  [73, 77, 81].forEach((y) => {
    svg.appendChild(
      rc.circle(269, y, 1, {
        fill: "#c9a06c",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
    svg.appendChild(
      rc.circle(299, y, 1, {
        fill: "#c9a06c",
        fillStyle: "solid",
        roughness: 0.8,
        stroke: "none",
      }),
    );
  });
  // Tiny heart on stamp
  svg.appendChild(
    rc.path(
      "M284,77 C284,77 282,74.5 280,74.5 C278,74.5 277,75.5 277,77 C277,79 284,82 284,82 C284,82 291,79 291,77 C291,75.5 290,74.5 288,74.5 C286,74.5 284,77 284,77 Z",
      {
        fill: "#e53935",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#c62828",
        strokeWidth: 0.4,
      },
    ),
  );

  // ── Bottom V-fold on envelope front ──
  svg.appendChild(
    rc.path("M88,196 L200,128 L312,196", {
      fill: "#ffe0b2",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 6,
      hachureAngle: -30,
      roughness: 2,
      stroke: "#c9a06c",
      strokeWidth: 1.2,
    }),
  );

  // V-fold lighter inner
  svg.appendChild(
    rc.path("M100,190 L200,135 L300,190", {
      fill: "#fff3e0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // ── Open flap - pointing upward ──
  svg.appendChild(
    rc.path("M88,78 L200,12 L312,78 Z", {
      fill: "#ffe0b2",
      fillStyle: "hachure",
      fillWeight: 0.3,
      hachureGap: 7,
      hachureAngle: 60,
      roughness: 2.2,
      stroke: "#c9a06c",
      strokeWidth: 1.8,
    }),
  );

  // Flap lighter inner
  svg.appendChild(
    rc.path("M100,78 L200,22 L300,78 Z", {
      fill: "#fff3e0",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "none",
    }),
  );

  // Flap inner fold line
  svg.appendChild(
    rc.path("M94,78 L200,18 L306,78", {
      fill: "none",
      roughness: 2,
      stroke: "#b8925a",
      strokeWidth: 0.8,
    }),
  );

  // Flap highlight
  svg.appendChild(
    rc.path("M140,60 L195,25", {
      fill: "none",
      roughness: 0.8,
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: 1.5,
    }),
  );

  // ── Paper peeking out from inside (love letter) ──
  svg.appendChild(
    rc.path("M112,52 L112,78 L288,78 L288,52 Z", {
      fill: "#ffffff",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#e0d5c8",
      strokeWidth: 0.8,
    }),
  );

  // Love letter text lines
  svg.appendChild(
    rc.line(125, 58, 210, 58, {
      roughness: 2,
      stroke: "#d4c5b5",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(130, 63, 195, 63, {
      roughness: 2,
      stroke: "#d4c5b5",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(128, 68, 205, 68, {
      roughness: 2,
      stroke: "#d4c5b5",
      strokeWidth: 0.6,
    }),
  );
  svg.appendChild(
    rc.line(132, 73, 188, 73, {
      roughness: 2,
      stroke: "#d4c5b5",
      strokeWidth: 0.6,
    }),
  );

  // "Dear" header (slightly darker)
  svg.appendChild(
    rc.line(125, 58, 148, 58, {
      roughness: 1.5,
      stroke: "#b8a090",
      strokeWidth: 0.8,
    }),
  );

  // Tiny heart on letter
  svg.appendChild(
    rc.path(
      "M270,65 C270,65 268,62.5 266,62.5 C264,62.5 263,63.5 263,65 C263,67 270,70 270,70 C270,70 277,67 277,65 C277,63.5 276,62.5 274,62.5 C272,62.5 270,65 270,65 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.3,
      },
    ),
  );

  // ── Left side fold ──
  svg.appendChild(
    rc.path("M88,78 L200,140 L88,196", {
      fill: "none",
      roughness: 1.5,
      stroke: "#b8925a",
      strokeWidth: 0.8,
    }),
  );

  // ── Right side fold ──
  svg.appendChild(
    rc.path("M312,78 L200,140 L312,196", {
      fill: "none",
      roughness: 1.5,
      stroke: "#b8925a",
      strokeWidth: 0.8,
    }),
  );

  // ── Wax seal ──
  // Seal base (darker)
  svg.appendChild(
    rc.circle(200, 148, 36, {
      fill: "#b71c1c",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#7f0000",
      strokeWidth: 1.5,
    }),
  );
  // Seal inner (lighter)
  svg.appendChild(
    rc.circle(200, 148, 28, {
      fill: "#c62828",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "#b71c1c",
      strokeWidth: 0.8,
    }),
  );
  // Seal wax drip edges
  svg.appendChild(
    rc.path("M184,154 C182,158 183,162 186,160", {
      fill: "#b71c1c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#7f0000",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M216,153 C219,157 218,162 215,159", {
      fill: "#b71c1c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#7f0000",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.path("M196,162 C194,166 196,169 199,167", {
      fill: "#b71c1c",
      fillStyle: "solid",
      roughness: 1.2,
      stroke: "#7f0000",
      strokeWidth: 0.5,
    }),
  );
  // Seal highlight
  svg.appendChild(
    rc.circle(193, 142, 5, {
      fill: "rgba(255,255,255,0.2)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // Heart embossed on wax seal
  svg.appendChild(
    rc.path(
      "M200,144 C200,144 194,136 189,136 C184,136 181,140 181,144 C181,152 200,160 200,160 C200,160 219,152 219,144 C219,140 216,136 211,136 C206,136 200,144 200,144 Z",
      {
        fill: "#e53935",
        fillStyle: "solid",
        roughness: 1.5,
        stroke: "#d32f2f",
        strokeWidth: 0.8,
      },
    ),
  );

  // Heart highlight on seal
  svg.appendChild(
    rc.circle(192, 140, 4, {
      fill: "rgba(255,200,200,0.3)",
      fillStyle: "solid",
      roughness: 0.6,
      stroke: "none",
    }),
  );

  // ── Small floating hearts ──
  // Heart 1
  svg.appendChild(
    rc.path(
      "M105,100 C105,100 103,97 101,97 C99,97 98,98.5 98,100 C98,102 105,105.5 105,105.5 C105,105.5 112,102 112,100 C112,98.5 111,97 109,97 C107,97 105,100 105,100 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.4,
      },
    ),
  );

  // Heart 2
  svg.appendChild(
    rc.path(
      "M300,140 C300,140 298,137 296,137 C294,137 293,138.5 293,140 C293,142 300,145.5 300,145.5 C300,145.5 307,142 307,140 C307,138.5 306,137 304,137 C302,137 300,140 300,140 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.4,
      },
    ),
  );

  // Heart 3 (tiny)
  svg.appendChild(
    rc.path(
      "M115,170 C115,170 113.5,168 112,168 C110.5,168 110,169 110,170 C110,171.5 115,173.5 115,173.5 C115,173.5 120,171.5 120,170 C120,169 119.5,168 118,168 C116.5,168 115,170 115,170 Z",
      {
        fill: "#f48fb1",
        fillStyle: "solid",
        roughness: 1,
        stroke: "#e91e63",
        strokeWidth: 0.3,
      },
    ),
  );

  // ── Decorative dots along bottom edge ──
  [115, 135, 155, 175, 195, 215, 235, 255, 275, 295].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 193, 2.5, {
        fill: "#d4a574",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      }),
    );
  });

  // ── Envelope texture lines ──
  svg.appendChild(
    rc.path("M92,120 L308,120", {
      fill: "none",
      roughness: 2,
      stroke: "rgba(201,160,108,0.15)",
      strokeWidth: 0.4,
    }),
  );
  svg.appendChild(
    rc.path("M92,150 L308,150", {
      fill: "none",
      roughness: 2,
      stroke: "rgba(201,160,108,0.12)",
      strokeWidth: 0.3,
    }),
  );
};

export function LoveEnvelope({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
