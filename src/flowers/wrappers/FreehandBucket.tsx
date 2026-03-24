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

export function FreehandBucket({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Bucket body left side (tapered trapezoid)
    const bodyLeft: [number, number][] = [
      [125, 70],
      [118, 90],
      [113, 110],
      [109, 130],
      [106, 150],
      [105, 170],
      [105, 185],
      [107, 195],
    ];
    // Bucket body right side
    const bodyRight: [number, number][] = [
      [275, 70],
      [282, 90],
      [287, 110],
      [291, 130],
      [294, 150],
      [295, 170],
      [295, 185],
      [293, 195],
    ];
    // Bucket top rim
    const topRim: [number, number][] = [
      [125, 70],
      [145, 66],
      [170, 64],
      [200, 63],
      [230, 64],
      [255, 66],
      [275, 70],
    ];
    // Bucket bottom edge
    const bottomEdge: [number, number][] = [
      [107, 195],
      [130, 198],
      [160, 199],
      [200, 200],
      [240, 199],
      [270, 198],
      [293, 195],
    ];
    // Handle arc
    const handle: [number, number][] = [
      [132, 70],
      [128, 55],
      [130, 42],
      [140, 30],
      [155, 22],
      [175, 18],
      [200, 16],
      [225, 18],
      [245, 22],
      [260, 30],
      [270, 42],
      [272, 55],
      [268, 70],
    ];
    // Upper band ring
    const upperBand: [number, number][] = [
      [118, 90],
      [140, 86],
      [165, 84],
      [200, 83],
      [235, 84],
      [260, 86],
      [282, 90],
    ];
    // Lower band ring
    const lowerBand: [number, number][] = [
      [106, 165],
      [130, 161],
      [160, 159],
      [200, 158],
      [240, 159],
      [270, 161],
      [294, 165],
    ];
    // Rivet left top
    const rivetLT: [number, number][] = [
      [127, 68],
      [129, 66],
      [131, 67],
      [131, 70],
      [129, 72],
      [127, 70],
    ];
    // Rivet right top
    const rivetRT: [number, number][] = [
      [269, 68],
      [271, 66],
      [273, 67],
      [273, 70],
      [271, 72],
      [269, 70],
    ];
    // Rivet left bottom
    const rivetLB: [number, number][] = [
      [110, 163],
      [112, 161],
      [114, 162],
      [114, 165],
      [112, 167],
      [110, 165],
    ];
    // Rivet right bottom
    const rivetRB: [number, number][] = [
      [290, 163],
      [292, 161],
      [294, 162],
      [294, 165],
      [292, 167],
      [290, 165],
    ];
    // Highlight streak
    const highlight: [number, number][] = [
      [120, 80],
      [117, 100],
      [114, 120],
      [112, 140],
      [112, 160],
      [113, 180],
    ];
    // Water droplet 1
    const drop1: [number, number][] = [
      [150, 200],
      [149, 204],
      [150, 208],
      [152, 206],
      [151, 202],
    ];
    // Water droplet 2
    const drop2: [number, number][] = [
      [250, 198],
      [249, 202],
      [250, 206],
      [252, 204],
      [251, 200],
    ];
    // Water droplet 3
    const drop3: [number, number][] = [
      [200, 200],
      [199, 205],
      [200, 210],
      [202, 207],
      [201, 203],
    ];
    // Inner rim line
    const innerRim: [number, number][] = [
      [128, 74],
      [155, 71],
      [200, 70],
      [245, 71],
      [272, 74],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...STROKE_OPTIONS, size: 3.5 })),
      topRim: getSvgPathFromStroke(getStroke(topRim, { ...STROKE_OPTIONS, size: 3 })),
      bottomEdge: getSvgPathFromStroke(getStroke(bottomEdge, { ...STROKE_OPTIONS, size: 3 })),
      handle: getSvgPathFromStroke(getStroke(handle, { ...STROKE_OPTIONS, size: 3 })),
      upperBand: getSvgPathFromStroke(getStroke(upperBand, { ...STROKE_OPTIONS, size: 2.5 })),
      lowerBand: getSvgPathFromStroke(getStroke(lowerBand, { ...STROKE_OPTIONS, size: 2.5 })),
      rivetLT: getSvgPathFromStroke(getStroke(rivetLT, { ...STROKE_OPTIONS, size: 2 })),
      rivetRT: getSvgPathFromStroke(getStroke(rivetRT, { ...STROKE_OPTIONS, size: 2 })),
      rivetLB: getSvgPathFromStroke(getStroke(rivetLB, { ...STROKE_OPTIONS, size: 2 })),
      rivetRB: getSvgPathFromStroke(getStroke(rivetRB, { ...STROKE_OPTIONS, size: 2 })),
      highlight: getSvgPathFromStroke(
        getStroke(highlight, { ...STROKE_OPTIONS, size: 2, thinning: 0.8 }),
      ),
      drop1: getSvgPathFromStroke(getStroke(drop1, { ...STROKE_OPTIONS, size: 1.5 })),
      drop2: getSvgPathFromStroke(getStroke(drop2, { ...STROKE_OPTIONS, size: 1.5 })),
      drop3: getSvgPathFromStroke(getStroke(drop3, { ...STROKE_OPTIONS, size: 1.8 })),
      innerRim: getSvgPathFromStroke(getStroke(innerRim, { ...STROKE_OPTIONS, size: 2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Metal body fill */}
      <path d="M125,70 C145,66 255,66 275,70 L295,195 C270,200 130,200 105,195 Z" fill="#b0bec5" />
      {/* Slight gradient overlay for metal sheen */}
      <path
        d="M125,70 C145,66 200,64 200,64 L200,200 C160,200 125,198 105,195 Z"
        fill="rgba(207,216,220,0.3)"
      />
      {/* Handle */}
      <path d={paths.handle} fill="#78909c" />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#607d8b" />
      <path d={paths.bodyRight} fill="#607d8b" />
      {/* Top rim */}
      <path d={paths.topRim} fill="#546e7a" />
      <path d={paths.innerRim} fill="#78909c" />
      {/* Bottom edge */}
      <path d={paths.bottomEdge} fill="#546e7a" />
      {/* Band rings */}
      <path d={paths.upperBand} fill="#78909c" />
      <path d={paths.lowerBand} fill="#78909c" />
      {/* Rivets */}
      <path d={paths.rivetLT} fill="#455a64" />
      <path d={paths.rivetRT} fill="#455a64" />
      <path d={paths.rivetLB} fill="#455a64" />
      <path d={paths.rivetRB} fill="#455a64" />
      {/* Highlight streak */}
      <path d={paths.highlight} fill="rgba(255,255,255,0.35)" />
      {/* Water droplets */}
      <path d={paths.drop1} fill="rgba(100,181,246,0.5)" />
      <path d={paths.drop2} fill="rgba(100,181,246,0.5)" />
      <path d={paths.drop3} fill="rgba(100,181,246,0.6)" />
    </svg>
  );
}
