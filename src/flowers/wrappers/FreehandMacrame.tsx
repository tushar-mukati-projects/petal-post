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

const STROKE_OPTIONS = {
  size: 3,
  thinning: 0.5,
  smoothing: 0.5,
  streamline: 0.5,
};

export function FreehandMacrame({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Wooden dowel bar at top
    const dowel: [number, number][] = [
      [100, 15],
      [130, 14],
      [160, 13],
      [200, 13],
      [240, 13],
      [270, 14],
      [300, 15],
    ];
    const dowelBottom: [number, number][] = [
      [100, 21],
      [130, 20],
      [160, 19],
      [200, 19],
      [240, 19],
      [270, 20],
      [300, 21],
    ];
    // Rope strand 1 (far left)
    const rope1: [number, number][] = [
      [120, 19],
      [114, 35],
      [110, 50],
      [118, 65],
      [128, 80],
      [122, 95],
      [118, 110],
      [124, 125],
    ];
    // Rope strand 2
    const rope2: [number, number][] = [
      [160, 19],
      [153, 35],
      [148, 50],
      [156, 65],
      [165, 80],
      [158, 95],
      [152, 110],
      [158, 125],
    ];
    // Rope strand 3
    const rope3: [number, number][] = [
      [240, 19],
      [247, 35],
      [252, 50],
      [244, 65],
      [235, 80],
      [242, 95],
      [248, 110],
      [242, 125],
    ];
    // Rope strand 4 (far right)
    const rope4: [number, number][] = [
      [280, 19],
      [286, 35],
      [290, 50],
      [282, 65],
      [272, 80],
      [278, 95],
      [282, 110],
      [276, 125],
    ];
    // Diamond knot top left
    const diamondTL: [number, number][] = [
      [140, 50],
      [131, 58],
      [140, 66],
      [149, 58],
      [140, 50],
    ];
    // Diamond knot top right
    const diamondTR: [number, number][] = [
      [260, 50],
      [251, 58],
      [260, 66],
      [269, 58],
      [260, 50],
    ];
    // Diamond knot center
    const diamondCenter: [number, number][] = [
      [200, 75],
      [188, 85],
      [200, 95],
      [212, 85],
      [200, 75],
    ];
    // Bead at intersection 1
    const bead1: [number, number][] = [
      [140, 55],
      [143, 53],
      [146, 56],
      [143, 59],
      [140, 57],
    ];
    // Bead at intersection 2
    const bead2: [number, number][] = [
      [260, 55],
      [263, 53],
      [266, 56],
      [263, 59],
      [260, 57],
    ];
    // Bead at center intersection
    const bead3: [number, number][] = [
      [200, 82],
      [203, 80],
      [206, 83],
      [203, 86],
      [200, 84],
    ];
    // Cradle / net bottom (holding pot)
    const cradleLeft: [number, number][] = [
      [124, 125],
      [120, 135],
      [124, 145],
      [134, 155],
      [148, 162],
      [165, 165],
    ];
    const cradleRight: [number, number][] = [
      [276, 125],
      [280, 135],
      [276, 145],
      [266, 155],
      [252, 162],
      [235, 165],
    ];
    const cradleBottom: [number, number][] = [
      [158, 125],
      [154, 140],
      [160, 155],
      [178, 164],
      [200, 166],
      [222, 164],
      [240, 155],
      [246, 140],
      [242, 125],
    ];
    // Fringe tassel 1
    const fringe1: [number, number][] = [
      [130, 160],
      [126, 172],
      [122, 184],
      [118, 195],
    ];
    // Fringe tassel 2
    const fringe2: [number, number][] = [
      [155, 165],
      [152, 177],
      [150, 188],
      [147, 198],
    ];
    // Fringe tassel 3
    const fringe3: [number, number][] = [
      [200, 166],
      [200, 178],
      [200, 190],
      [200, 200],
    ];
    // Fringe tassel 4
    const fringe4: [number, number][] = [
      [245, 165],
      [248, 177],
      [250, 188],
      [253, 198],
    ];
    // Fringe tassel 5
    const fringe5: [number, number][] = [
      [270, 160],
      [274, 172],
      [278, 184],
      [282, 195],
    ];

    return {
      dowel: getSvgPathFromStroke(getStroke(dowel, { ...STROKE_OPTIONS, size: 4 })),
      dowelBottom: getSvgPathFromStroke(getStroke(dowelBottom, { ...STROKE_OPTIONS, size: 3 })),
      rope1: getSvgPathFromStroke(getStroke(rope1, { ...STROKE_OPTIONS, size: 2.5 })),
      rope2: getSvgPathFromStroke(getStroke(rope2, { ...STROKE_OPTIONS, size: 2.5 })),
      rope3: getSvgPathFromStroke(getStroke(rope3, { ...STROKE_OPTIONS, size: 2.5 })),
      rope4: getSvgPathFromStroke(getStroke(rope4, { ...STROKE_OPTIONS, size: 2.5 })),
      diamondTL: getSvgPathFromStroke(getStroke(diamondTL, { ...STROKE_OPTIONS, size: 2 })),
      diamondTR: getSvgPathFromStroke(getStroke(diamondTR, { ...STROKE_OPTIONS, size: 2 })),
      diamondCenter: getSvgPathFromStroke(getStroke(diamondCenter, { ...STROKE_OPTIONS, size: 2 })),
      bead1: getSvgPathFromStroke(getStroke(bead1, { ...STROKE_OPTIONS, size: 2.5 })),
      bead2: getSvgPathFromStroke(getStroke(bead2, { ...STROKE_OPTIONS, size: 2.5 })),
      bead3: getSvgPathFromStroke(getStroke(bead3, { ...STROKE_OPTIONS, size: 2.5 })),
      cradleLeft: getSvgPathFromStroke(getStroke(cradleLeft, { ...STROKE_OPTIONS, size: 2.5 })),
      cradleRight: getSvgPathFromStroke(getStroke(cradleRight, { ...STROKE_OPTIONS, size: 2.5 })),
      cradleBottom: getSvgPathFromStroke(getStroke(cradleBottom, { ...STROKE_OPTIONS, size: 2.5 })),
      fringe1: getSvgPathFromStroke(
        getStroke(fringe1, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      fringe2: getSvgPathFromStroke(
        getStroke(fringe2, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      fringe3: getSvgPathFromStroke(
        getStroke(fringe3, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      fringe4: getSvgPathFromStroke(
        getStroke(fringe4, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      fringe5: getSvgPathFromStroke(
        getStroke(fringe5, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Rope color fill for cradle area */}
      <path
        d="M124,125 C120,140 134,158 165,165 L235,165 C266,158 280,140 276,125 L242,125 C240,142 228,155 200,158 C172,155 160,142 158,125 Z"
        fill="rgba(210,180,140,0.25)"
      />
      {/* Wooden dowel fill */}
      <path d="M98,12 L302,12 L302,23 L98,23 Z" fill="#8d6e63" />
      <path d={paths.dowel} fill="#5d4037" />
      <path d={paths.dowelBottom} fill="#6d4c41" />
      {/* Rope strands */}
      <path d={paths.rope1} fill="#c9a96e" />
      <path d={paths.rope2} fill="#c9a96e" />
      <path d={paths.rope3} fill="#c9a96e" />
      <path d={paths.rope4} fill="#c9a96e" />
      {/* Diamond knot patterns */}
      <path d={paths.diamondTL} fill="#b8956a" />
      <path d={paths.diamondTR} fill="#b8956a" />
      <path d={paths.diamondCenter} fill="#b8956a" />
      {/* Beads at intersections */}
      <path d={paths.bead1} fill="#8d6e63" />
      <path d={paths.bead2} fill="#8d6e63" />
      <path d={paths.bead3} fill="#8d6e63" />
      {/* Cradle net */}
      <path d={paths.cradleLeft} fill="#c9a96e" />
      <path d={paths.cradleRight} fill="#c9a96e" />
      <path d={paths.cradleBottom} fill="#c9a96e" />
      {/* Fringe tassels */}
      <path d={paths.fringe1} fill="#d4b896" />
      <path d={paths.fringe2} fill="#d4b896" />
      <path d={paths.fringe3} fill="#d4b896" />
      <path d={paths.fringe4} fill="#d4b896" />
      <path d={paths.fringe5} fill="#d4b896" />
    </svg>
  );
}
