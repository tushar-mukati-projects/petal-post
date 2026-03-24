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

export function FreehandRibbon({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Stems spreading outward from a gathering point around y:140
    const stem1: [number, number][] = [
      [120, 18],
      [128, 40],
      [140, 60],
      [155, 80],
      [172, 100],
      [186, 120],
      [195, 140],
      [198, 160],
      [198, 180],
      [197, 200],
    ];
    const stem2: [number, number][] = [
      [150, 15],
      [155, 40],
      [162, 60],
      [172, 80],
      [184, 100],
      [194, 120],
      [199, 140],
      [200, 160],
      [200, 180],
      [199, 200],
    ];
    const stem3: [number, number][] = [
      [200, 12],
      [200, 40],
      [200, 60],
      [200, 80],
      [200, 100],
      [200, 120],
      [200, 140],
      [200, 160],
      [200, 180],
      [200, 200],
    ];
    const stem4: [number, number][] = [
      [250, 15],
      [245, 40],
      [238, 60],
      [228, 80],
      [216, 100],
      [206, 120],
      [201, 140],
      [200, 160],
      [200, 180],
      [201, 200],
    ];
    const stem5: [number, number][] = [
      [280, 18],
      [272, 40],
      [260, 60],
      [245, 80],
      [228, 100],
      [214, 120],
      [205, 140],
      [202, 160],
      [202, 180],
      [203, 200],
    ];
    const stem6: [number, number][] = [
      [100, 22],
      [112, 45],
      [128, 65],
      [148, 85],
      [168, 105],
      [185, 122],
      [195, 140],
      [197, 160],
      [197, 180],
      [196, 200],
    ];
    const stem7: [number, number][] = [
      [300, 22],
      [288, 45],
      [272, 65],
      [252, 85],
      [232, 105],
      [215, 122],
      [205, 140],
      [203, 160],
      [203, 180],
      [204, 200],
    ];
    // Ribbon wrap band (horizontal across gathering point)
    const ribbonTop: [number, number][] = [
      [172, 132],
      [180, 130],
      [190, 129],
      [200, 128],
      [210, 129],
      [220, 130],
      [228, 132],
    ];
    const ribbonBottom: [number, number][] = [
      [172, 148],
      [180, 150],
      [190, 151],
      [200, 152],
      [210, 151],
      [220, 150],
      [228, 148],
    ];
    const ribbonLeft: [number, number][] = [
      [172, 132],
      [171, 136],
      [170, 140],
      [171, 144],
      [172, 148],
    ];
    const ribbonRight: [number, number][] = [
      [228, 132],
      [229, 136],
      [230, 140],
      [229, 144],
      [228, 148],
    ];
    // Bow left loop - bigger
    const bowLeft: [number, number][] = [
      [180, 138],
      [165, 126],
      [148, 118],
      [136, 120],
      [132, 130],
      [138, 140],
      [132, 150],
      [136, 158],
      [148, 162],
      [165, 154],
      [180, 142],
    ];
    // Bow right loop - bigger
    const bowRight: [number, number][] = [
      [220, 138],
      [235, 126],
      [252, 118],
      [264, 120],
      [268, 130],
      [262, 140],
      [268, 150],
      [264, 158],
      [252, 162],
      [235, 154],
      [220, 142],
    ];
    // Center knot
    const knot: [number, number][] = [
      [190, 134],
      [193, 132],
      [200, 131],
      [207, 132],
      [210, 134],
      [211, 138],
      [210, 142],
      [207, 145],
      [200, 146],
      [193, 145],
      [190, 142],
      [189, 138],
      [190, 134],
    ];
    // Curling tail left - longer
    const tailLeft: [number, number][] = [
      [172, 148],
      [160, 158],
      [148, 168],
      [142, 178],
      [145, 186],
      [154, 184],
      [160, 176],
      [156, 166],
    ];
    // Curling tail right - longer
    const tailRight: [number, number][] = [
      [228, 148],
      [240, 158],
      [252, 168],
      [258, 178],
      [255, 186],
      [246, 184],
      [240, 176],
      [244, 166],
    ];

    return {
      stem1: getSvgPathFromStroke(getStroke(stem1, { ...OPTS, size: 3.5 })),
      stem2: getSvgPathFromStroke(getStroke(stem2, { ...OPTS, size: 3 })),
      stem3: getSvgPathFromStroke(getStroke(stem3, { ...OPTS, size: 3.5 })),
      stem4: getSvgPathFromStroke(getStroke(stem4, { ...OPTS, size: 3 })),
      stem5: getSvgPathFromStroke(getStroke(stem5, { ...OPTS, size: 3.5 })),
      stem6: getSvgPathFromStroke(getStroke(stem6, { ...OPTS, size: 3 })),
      stem7: getSvgPathFromStroke(getStroke(stem7, { ...OPTS, size: 3 })),
      ribbonTop: getSvgPathFromStroke(getStroke(ribbonTop, { ...OPTS, size: 2.5 })),
      ribbonBottom: getSvgPathFromStroke(getStroke(ribbonBottom, { ...OPTS, size: 2.5 })),
      ribbonLeft: getSvgPathFromStroke(getStroke(ribbonLeft, { ...OPTS, size: 2 })),
      ribbonRight: getSvgPathFromStroke(getStroke(ribbonRight, { ...OPTS, size: 2 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...OPTS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...OPTS, size: 2.5 })),
      knot: getSvgPathFromStroke(getStroke(knot, { ...OPTS, size: 2.5 })),
      tailLeft: getSvgPathFromStroke(getStroke(tailLeft, { ...OPTS, size: 2 })),
      tailRight: getSvgPathFromStroke(getStroke(tailRight, { ...OPTS, size: 2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Stem fills (green rods) */}
      <path d={paths.stem1} fill="#66bb6a" />
      <path d={paths.stem2} fill="#4caf50" />
      <path d={paths.stem3} fill="#43a047" />
      <path d={paths.stem4} fill="#4caf50" />
      <path d={paths.stem5} fill="#66bb6a" />
      <path d={paths.stem6} fill="#81c784" />
      <path d={paths.stem7} fill="#81c784" />
      {/* Ribbon wrap band fill */}
      <path
        d="M172,132 C180,129 200,128 228,132 L228,148 C220,151 200,152 172,148 Z"
        fill="#f48fb1"
      />
      {/* Bow left loop fill */}
      <path
        d="M180,138 C165,126 148,118 136,120 C132,130 138,140 132,150 C136,158 148,162 165,154 Z"
        fill="#f8bbd0"
      />
      {/* Bow right loop fill */}
      <path
        d="M220,138 C235,126 252,118 264,120 C268,130 262,140 268,150 C264,158 252,162 235,154 Z"
        fill="#f8bbd0"
      />
      {/* Knot fill */}
      <ellipse cx="200" cy="139" rx="11" ry="8" fill="#ec407a" />
      {/* Ribbon outlines */}
      <path d={paths.ribbonTop} fill="#e91e63" />
      <path d={paths.ribbonBottom} fill="#e91e63" />
      <path d={paths.ribbonLeft} fill="#e91e63" />
      <path d={paths.ribbonRight} fill="#e91e63" />
      {/* Bow outlines */}
      <path d={paths.bowLeft} fill="#ec407a" />
      <path d={paths.bowRight} fill="#ec407a" />
      {/* Knot outline */}
      <path d={paths.knot} fill="#c2185b" />
      {/* Curling tails */}
      <path d={paths.tailLeft} fill="#ec407a" />
      <path d={paths.tailRight} fill="#ec407a" />
    </svg>
  );
}
