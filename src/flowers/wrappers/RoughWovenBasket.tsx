"use client";

import { RoughCanvas, type DrawFn } from "./RoughCanvas";

const draw: DrawFn = (rc, svg) => {
  // Drop shadow underneath basket
  svg.appendChild(
    rc.ellipse(204, 196, 200, 12, {
      fill: "rgba(62,39,35,0.1)",
      fillStyle: "solid",
      roughness: 0.8,
      stroke: "none",
    }),
  );

  // Handle arc (thicker, double line for woven look)
  svg.appendChild(
    rc.arc(200, 55, 124, 84, Math.PI, 0, false, {
      fill: "none",
      roughness: 2,
      stroke: "#795548",
      strokeWidth: 4,
    }),
  );
  svg.appendChild(
    rc.arc(200, 55, 116, 76, Math.PI, 0, false, {
      fill: "none",
      roughness: 1.8,
      stroke: "#a1887f",
      strokeWidth: 1.5,
    }),
  );

  // Handle winding detail (small cross marks on handle)
  [-45, -30, -15, 0, 15, 30, 45].forEach((angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    const hx = 200 + Math.cos(Math.PI + rad) * 60;
    const hy = 55 + Math.sin(Math.PI + rad) * 40;
    svg.appendChild(
      rc.line(hx - 3, hy - 2, hx + 3, hy + 2, {
        roughness: 2,
        stroke: "#6d4c41",
        strokeWidth: 0.8,
      }),
    );
  });

  // Basket body (darker back layer for depth)
  svg.appendChild(
    rc.path(
      "M107,57 C104,60 100,67 97,82 L90,157 C88,174 100,190 122,194 L278,194 C300,190 312,174 310,157 L303,82 C300,67 296,60 293,57 Z",
      {
        fill: "#8d6e63",
        fillStyle: "solid",
        roughness: 1.2,
        stroke: "none",
      },
    ),
  );

  // Basket body (main with cross-hatch weave)
  svg.appendChild(
    rc.path(
      "M105,55 C102,58 98,65 95,80 L88,155 C86,172 98,188 120,192 L280,192 C302,188 314,172 312,155 L305,80 C302,65 298,58 295,55 Z",
      {
        fill: "#a1887f",
        fillStyle: "cross-hatch",
        fillWeight: 0.6,
        hachureGap: 7,
        hachureAngle: 60,
        roughness: 1.8,
        stroke: "#795548",
        strokeWidth: 1.5,
      },
    ),
  );

  // Side shading (left darker area)
  svg.appendChild(
    rc.path("M105,55 C102,58 98,65 95,80 L88,155 C86,170 92,182 105,188 L105,55 Z", {
      fill: "rgba(62,39,35,0.12)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Side shading (right darker area)
  svg.appendChild(
    rc.path("M295,55 C298,58 302,65 305,80 L312,155 C314,170 308,182 295,188 L295,55 Z", {
      fill: "rgba(62,39,35,0.08)",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Horizontal weave lines (more detailed)
  [68, 80, 92, 104, 116, 128, 140, 152, 164, 176].forEach((y) => {
    const shrinkFactor = (y - 55) * 0.05;
    svg.appendChild(
      rc.line(92 + shrinkFactor * 0.3, y, 308 - shrinkFactor * 0.3, y, {
        roughness: 2,
        stroke: "#6d4c41",
        strokeWidth: 0.8,
      }),
    );
  });

  // Vertical weave lines (closer together for tighter weave)
  for (let x = 100; x <= 300; x += 12) {
    svg.appendChild(
      rc.line(x, 58, x - 3, 188, {
        roughness: 1.8,
        stroke: "#795548",
        strokeWidth: 0.6,
      }),
    );
  }

  // Diagonal weave accent lines (adds weave complexity)
  for (let x = 110; x <= 290; x += 25) {
    svg.appendChild(
      rc.line(x, 65, x + 8, 185, {
        roughness: 2,
        stroke: "rgba(121,85,72,0.2)",
        strokeWidth: 0.4,
      }),
    );
  }

  // Rim (thicker, double layer)
  svg.appendChild(
    rc.path("M100,50 L300,50 L302,64 L98,64 Z", {
      fill: "#8d6e63",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#5d4037",
      strokeWidth: 1.2,
    }),
  );
  // Rim highlight strip
  svg.appendChild(
    rc.path("M102,51 L298,51 L298,55 L102,55 Z", {
      fill: "rgba(188,170,164,0.4)",
      fillStyle: "solid",
      roughness: 1.8,
      stroke: "none",
    }),
  );

  // Rim braid detail (small zigzag on top of rim)
  svg.appendChild(
    rc.path(
      "M105,54 L115,50 L125,54 L135,50 L145,54 L155,50 L165,54 L175,50 L185,54 L195,50 L205,54 L215,50 L225,54 L235,50 L245,54 L255,50 L265,54 L275,50 L285,54 L295,50",
      {
        fill: "none",
        roughness: 2,
        stroke: "#5d4037",
        strokeWidth: 0.6,
      },
    ),
  );

  // Small leaves peeking from the rim (cute detail)
  // Left leaf
  svg.appendChild(
    rc.path("M130,52 C122,38 115,40 120,48 C118,42 124,36 130,48 Z", {
      fill: "#66bb6a",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#43a047",
      strokeWidth: 0.6,
    }),
  );
  // Right leaf
  svg.appendChild(
    rc.path("M270,52 C278,38 285,40 280,48 C282,42 276,36 270,48 Z", {
      fill: "#81c784",
      fillStyle: "solid",
      roughness: 2.2,
      stroke: "#66bb6a",
      strokeWidth: 0.6,
    }),
  );
  // Center small flower
  svg.appendChild(
    rc.circle(200, 46, 6, {
      fill: "#f48fb1",
      fillStyle: "solid",
      roughness: 2,
      stroke: "#e91e63",
      strokeWidth: 0.5,
    }),
  );
  svg.appendChild(
    rc.circle(200, 46, 2.5, {
      fill: "#fff9c4",
      fillStyle: "solid",
      roughness: 1.5,
      stroke: "none",
    }),
  );

  // Highlight on basket body (left)
  svg.appendChild(
    rc.line(108, 65, 100, 175, {
      roughness: 0.6,
      stroke: "rgba(255,255,255,0.1)",
      strokeWidth: 3,
    }),
  );

  // Small decorative dots along the bottom
  [140, 165, 190, 210, 235, 260].forEach((x) => {
    svg.appendChild(
      rc.circle(x, 186, 2.5, {
        fill: "rgba(93,64,55,0.2)",
        fillStyle: "solid",
        roughness: 2,
        stroke: "none",
      }),
    );
  });

  // Bottom ellipse
  svg.appendChild(
    rc.ellipse(200, 194, 180, 8, {
      fill: "rgba(62,39,35,0.06)",
      fillStyle: "solid",
      roughness: 1,
      stroke: "none",
    }),
  );
};

export function WovenBasket({ className }: { className?: string }) {
  return <RoughCanvas className={className} draw={draw} />;
}
