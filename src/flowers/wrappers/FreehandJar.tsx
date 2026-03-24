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

export function FreehandJar({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Jar body left side - wider
    const bodyLeft: [number, number][] = [
      [120, 55],
      [114, 65],
      [108, 80],
      [104, 100],
      [102, 120],
      [102, 140],
      [102, 160],
      [104, 180],
      [108, 195],
    ];
    // Jar body right side - wider
    const bodyRight: [number, number][] = [
      [280, 55],
      [286, 65],
      [292, 80],
      [296, 100],
      [298, 120],
      [298, 140],
      [298, 160],
      [296, 180],
      [292, 195],
    ];
    // Jar bottom
    const bodyBottom: [number, number][] = [
      [108, 195],
      [130, 198],
      [160, 200],
      [200, 200],
      [240, 200],
      [270, 198],
      [292, 195],
    ];
    // Neck left
    const neckLeft: [number, number][] = [
      [132, 35],
      [126, 40],
      [122, 45],
      [120, 50],
      [120, 55],
    ];
    // Neck right
    const neckRight: [number, number][] = [
      [268, 35],
      [274, 40],
      [278, 45],
      [280, 50],
      [280, 55],
    ];
    // Lid band top
    const lidTop: [number, number][] = [
      [125, 28],
      [145, 26],
      [170, 25],
      [200, 25],
      [230, 25],
      [255, 26],
      [275, 28],
    ];
    // Lid band bottom
    const lidBottom: [number, number][] = [
      [128, 38],
      [150, 36],
      [175, 35],
      [200, 35],
      [225, 35],
      [250, 36],
      [272, 38],
    ];
    // Lid left side
    const lidLeft: [number, number][] = [
      [125, 28],
      [126, 32],
      [127, 35],
      [128, 38],
    ];
    // Lid right side
    const lidRight: [number, number][] = [
      [275, 28],
      [274, 32],
      [273, 35],
      [272, 38],
    ];
    // Water surface line
    const waterLine: [number, number][] = [
      [107, 100],
      [130, 97],
      [160, 100],
      [200, 96],
      [240, 99],
      [270, 96],
      [294, 100],
    ];
    // Stem 1 (left leaning)
    const stem1: [number, number][] = [
      [180, 35],
      [178, 60],
      [175, 90],
      [172, 120],
      [170, 150],
      [168, 180],
      [167, 198],
    ];
    // Stem 2 (center)
    const stem2: [number, number][] = [
      [200, 35],
      [200, 60],
      [200, 90],
      [200, 120],
      [200, 150],
      [200, 180],
      [200, 198],
    ];
    // Stem 3 (right leaning)
    const stem3: [number, number][] = [
      [220, 35],
      [222, 60],
      [225, 90],
      [228, 120],
      [230, 150],
      [232, 180],
      [233, 198],
    ];
    // Glass highlight (left edge reflection)
    const highlight: [number, number][] = [
      [116, 65],
      [112, 85],
      [108, 110],
      [106, 135],
      [108, 160],
      [112, 185],
    ];
    // Thread ridges on lid
    const threadLine1: [number, number][] = [
      [128, 30],
      [155, 28],
      [200, 27],
      [245, 28],
      [272, 30],
    ];
    const threadLine2: [number, number][] = [
      [128, 34],
      [155, 32],
      [200, 31],
      [245, 32],
      [272, 34],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...OPTS, size: 3 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...OPTS, size: 3 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...OPTS, size: 3 })),
      neckLeft: getSvgPathFromStroke(getStroke(neckLeft, { ...OPTS, size: 2.5 })),
      neckRight: getSvgPathFromStroke(getStroke(neckRight, { ...OPTS, size: 2.5 })),
      lidTop: getSvgPathFromStroke(getStroke(lidTop, { ...OPTS, size: 3 })),
      lidBottom: getSvgPathFromStroke(getStroke(lidBottom, { ...OPTS, size: 2.5 })),
      lidLeft: getSvgPathFromStroke(getStroke(lidLeft, { ...OPTS, size: 2.5 })),
      lidRight: getSvgPathFromStroke(getStroke(lidRight, { ...OPTS, size: 2.5 })),
      waterLine: getSvgPathFromStroke(getStroke(waterLine, { ...OPTS, size: 2, thinning: 0.3 })),
      stem1: getSvgPathFromStroke(getStroke(stem1, { ...OPTS, size: 2 })),
      stem2: getSvgPathFromStroke(getStroke(stem2, { ...OPTS, size: 2.5 })),
      stem3: getSvgPathFromStroke(getStroke(stem3, { ...OPTS, size: 2 })),
      highlight: getSvgPathFromStroke(getStroke(highlight, { ...OPTS, size: 2, thinning: 0.8 })),
      threadLine1: getSvgPathFromStroke(
        getStroke(threadLine1, { ...OPTS, size: 1, thinning: 0.6 }),
      ),
      threadLine2: getSvgPathFromStroke(
        getStroke(threadLine2, { ...OPTS, size: 1, thinning: 0.6 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Glass fill */}
      <path
        d="M120,55 C114,65 104,100 102,140 C102,170 108,195 108,195 L292,195 C296,170 298,140 298,140 C296,100 286,65 280,55 L275,40 C275,40 268,35 200,35 C132,35 125,40 125,40 Z"
        fill="rgba(200,235,235,0.18)"
      />
      {/* Water fill */}
      <path
        d="M107,100 C130,96 200,98 294,100 L296,180 C296,195 292,195 292,195 L108,195 C108,195 104,195 104,180 Z"
        fill="rgba(128,203,196,0.15)"
      />
      {/* Lid band fill */}
      <path d="M125,28 C145,25 200,25 275,28 L272,38 C250,35 200,35 128,38 Z" fill="#90a4ae" />
      {/* Stems */}
      <path d={paths.stem1} fill="rgba(76,175,80,0.4)" />
      <path d={paths.stem2} fill="rgba(56,142,60,0.4)" />
      <path d={paths.stem3} fill="rgba(76,175,80,0.4)" />
      {/* Jar body outlines */}
      <path d={paths.bodyLeft} fill="#80cbc4" />
      <path d={paths.bodyRight} fill="#80cbc4" />
      <path d={paths.bodyBottom} fill="#80cbc4" />
      {/* Neck outlines */}
      <path d={paths.neckLeft} fill="#80cbc4" />
      <path d={paths.neckRight} fill="#80cbc4" />
      {/* Lid outlines */}
      <path d={paths.lidTop} fill="#78909c" />
      <path d={paths.lidBottom} fill="#78909c" />
      <path d={paths.lidLeft} fill="#78909c" />
      <path d={paths.lidRight} fill="#78909c" />
      {/* Thread ridges */}
      <path d={paths.threadLine1} fill="rgba(96,125,139,0.4)" />
      <path d={paths.threadLine2} fill="rgba(96,125,139,0.4)" />
      {/* Water line */}
      <path d={paths.waterLine} fill="rgba(77,182,172,0.45)" />
      {/* Glass highlight */}
      <path d={paths.highlight} fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
