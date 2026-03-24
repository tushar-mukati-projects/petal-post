"use client";

import { useMemo } from "react";
import getStroke from "perfect-freehand";

function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return "";
  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"],
  );
  d.push("Z");
  return d.join(" ");
}

const OPTS = { size: 3, thinning: 0.5, smoothing: 0.5, streamline: 0.5 };

export function FreehandShell({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Fan/scallop outer shape - left side
    const shellLeft: [number, number][] = [
      [200, 175],
      [185, 168],
      [168, 155],
      [152, 138],
      [138, 118],
      [128, 95],
      [122, 72],
      [120, 52],
    ];
    // Fan/scallop outer shape - right side
    const shellRight: [number, number][] = [
      [280, 52],
      [278, 72],
      [272, 95],
      [262, 118],
      [248, 138],
      [232, 155],
      [215, 168],
      [200, 175],
    ];
    // Scalloped edge arcs along top
    const scallopEdge: [number, number][] = [
      [120, 52],
      [128, 45],
      [138, 42],
      [148, 45],
      [155, 42],
      [165, 39],
      [175, 42],
      [182, 39],
      [192, 37],
      [200, 40],
      [208, 37],
      [218, 39],
      [225, 42],
      [235, 39],
      [245, 42],
      [252, 45],
      [262, 42],
      [272, 45],
      [280, 52],
    ];
    // Ridge line 1 (leftmost)
    const ridge1: [number, number][] = [
      [200, 175],
      [178, 150],
      [160, 125],
      [145, 98],
      [135, 72],
      [128, 50],
    ];
    // Ridge line 2
    const ridge2: [number, number][] = [
      [200, 175],
      [184, 148],
      [170, 118],
      [158, 88],
      [150, 60],
      [147, 44],
    ];
    // Ridge line 3
    const ridge3: [number, number][] = [
      [200, 175],
      [190, 145],
      [182, 112],
      [176, 80],
      [172, 55],
      [170, 42],
    ];
    // Ridge line 4 (center-left)
    const ridge4: [number, number][] = [
      [200, 175],
      [196, 142],
      [193, 108],
      [191, 76],
      [190, 50],
      [190, 40],
    ];
    // Ridge line 5 (center)
    const ridge5: [number, number][] = [
      [200, 175],
      [200, 140],
      [200, 108],
      [200, 76],
      [200, 50],
      [200, 39],
    ];
    // Ridge line 6 (center-right)
    const ridge6: [number, number][] = [
      [200, 175],
      [204, 142],
      [207, 108],
      [209, 76],
      [210, 50],
      [210, 40],
    ];
    // Ridge line 7
    const ridge7: [number, number][] = [
      [200, 175],
      [210, 145],
      [218, 112],
      [224, 80],
      [228, 55],
      [230, 42],
    ];
    // Ridge line 8
    const ridge8: [number, number][] = [
      [200, 175],
      [216, 148],
      [230, 118],
      [242, 88],
      [250, 60],
      [253, 44],
    ];
    // Ridge line 9 (rightmost)
    const ridge9: [number, number][] = [
      [200, 175],
      [222, 150],
      [240, 125],
      [255, 98],
      [265, 72],
      [272, 50],
    ];
    // Shell lip at bottom
    const shellLip: [number, number][] = [
      [180, 172],
      [185, 178],
      [192, 182],
      [200, 183],
      [208, 182],
      [215, 178],
      [220, 172],
    ];
    // Spiral detail at base
    const spiral: [number, number][] = [
      [200, 175],
      [195, 172],
      [192, 168],
      [194, 164],
      [198, 162],
      [203, 164],
      [205, 168],
      [202, 171],
      [198, 170],
    ];

    return {
      shellLeft: getSvgPathFromStroke(getStroke(shellLeft, { ...OPTS, size: 3.5 })),
      shellRight: getSvgPathFromStroke(getStroke(shellRight, { ...OPTS, size: 3.5 })),
      scallopEdge: getSvgPathFromStroke(getStroke(scallopEdge, { ...OPTS, size: 3 })),
      ridge1: getSvgPathFromStroke(getStroke(ridge1, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge2: getSvgPathFromStroke(getStroke(ridge2, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge3: getSvgPathFromStroke(getStroke(ridge3, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge4: getSvgPathFromStroke(getStroke(ridge4, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge5: getSvgPathFromStroke(getStroke(ridge5, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge6: getSvgPathFromStroke(getStroke(ridge6, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge7: getSvgPathFromStroke(getStroke(ridge7, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge8: getSvgPathFromStroke(getStroke(ridge8, { ...OPTS, size: 1.5, thinning: 0.7 })),
      ridge9: getSvgPathFromStroke(getStroke(ridge9, { ...OPTS, size: 1.5, thinning: 0.7 })),
      shellLip: getSvgPathFromStroke(getStroke(shellLip, { ...OPTS, size: 3 })),
      spiral: getSvgPathFromStroke(getStroke(spiral, { ...OPTS, size: 2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Shell fill */}
      <path
        d="M120,52 C128,45 148,45 155,42 C165,39 175,42 182,39 C192,37 200,40 208,37 C218,39 225,42 235,39 C245,42 252,45 262,42 C272,45 280,52 280,52 L272,95 L262,118 L248,138 L232,155 L215,168 L200,175 L185,168 L168,155 L152,138 L138,118 L128,95 Z"
        fill="#ffccbc"
      />
      {/* Lighter highlight on left */}
      <path d="M140,55 L200,175 L165,155 L150,130 L140,100 Z" fill="rgba(255,255,255,0.15)" />
      {/* Ridge lines */}
      <path d={paths.ridge1} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge2} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge3} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge4} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge5} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge6} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge7} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge8} fill="rgba(188,143,120,0.4)" />
      <path d={paths.ridge9} fill="rgba(188,143,120,0.4)" />
      {/* Shell outlines */}
      <path d={paths.shellLeft} fill="#a1887f" />
      <path d={paths.shellRight} fill="#a1887f" />
      <path d={paths.scallopEdge} fill="#a1887f" />
      {/* Shell lip */}
      <path d={paths.shellLip} fill="#8d6e63" />
      {/* Spiral at base */}
      <path d={paths.spiral} fill="#8d6e63" />
      {/* Pearl highlight */}
      <circle cx="195" cy="160" r="5" fill="rgba(255,255,255,0.7)" />
      <circle cx="195" cy="159" r="3" fill="rgba(255,255,255,0.9)" />
    </svg>
  );
}
