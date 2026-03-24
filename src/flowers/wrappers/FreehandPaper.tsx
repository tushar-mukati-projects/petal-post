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

export function FreehandPaper({ className }: { className?: string }) {
  const paths = useMemo(() => {
    const coneLeft: [number, number][] = [
      [100, 45],
      [105, 60],
      [110, 80],
      [115, 100],
      [120, 130],
      [125, 160],
      [130, 190],
    ];
    const coneRight: [number, number][] = [
      [300, 45],
      [295, 60],
      [290, 80],
      [285, 100],
      [280, 130],
      [275, 160],
      [270, 190],
    ];
    const coneBottom: [number, number][] = [
      [130, 190],
      [150, 196],
      [175, 199],
      [200, 200],
      [225, 199],
      [250, 196],
      [270, 190],
    ];
    const coneTop: [number, number][] = [
      [100, 45],
      [130, 42],
      [160, 40],
      [200, 38],
      [240, 40],
      [270, 42],
      [300, 45],
    ];
    const foldLeft: [number, number][] = [
      [100, 45],
      [92, 48],
      [88, 52],
      [90, 55],
      [105, 80],
      [115, 120],
      [120, 160],
      [130, 190],
    ];
    const foldRight: [number, number][] = [
      [300, 45],
      [308, 48],
      [312, 52],
      [310, 55],
      [295, 80],
      [285, 120],
      [280, 160],
      [270, 190],
    ];
    const twine: [number, number][] = [
      [155, 100],
      [165, 105],
      [180, 108],
      [200, 110],
      [220, 108],
      [235, 105],
      [245, 100],
    ];
    const bowLeft: [number, number][] = [
      [190, 106],
      [180, 95],
      [172, 92],
      [170, 98],
      [175, 106],
      [170, 115],
      [175, 120],
      [185, 112],
      [190, 108],
    ];
    const bowRight: [number, number][] = [
      [210, 106],
      [220, 95],
      [228, 92],
      [230, 98],
      [225, 106],
      [230, 115],
      [225, 120],
      [215, 112],
      [210, 108],
    ];
    const crease1: [number, number][] = [
      [165, 48],
      [160, 100],
      [155, 160],
      [152, 192],
    ];
    const crease2: [number, number][] = [
      [235, 48],
      [240, 100],
      [245, 160],
      [248, 192],
    ];

    return {
      coneLeft: getSvgPathFromStroke(getStroke(coneLeft, { ...OPTS, size: 3.5 })),
      coneRight: getSvgPathFromStroke(getStroke(coneRight, { ...OPTS, size: 3.5 })),
      coneBottom: getSvgPathFromStroke(getStroke(coneBottom, { ...OPTS, size: 3 })),
      coneTop: getSvgPathFromStroke(getStroke(coneTop, { ...OPTS, size: 2.5 })),
      foldLeft: getSvgPathFromStroke(getStroke(foldLeft, { ...OPTS, size: 2.5 })),
      foldRight: getSvgPathFromStroke(getStroke(foldRight, { ...OPTS, size: 2.5 })),
      twine: getSvgPathFromStroke(getStroke(twine, { ...OPTS, size: 3 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...OPTS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...OPTS, size: 2.5 })),
      crease1: getSvgPathFromStroke(getStroke(crease1, { ...OPTS, size: 1, thinning: 0.8 })),
      crease2: getSvgPathFromStroke(getStroke(crease2, { ...OPTS, size: 1, thinning: 0.8 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Paper fill */}
      <path
        d="M100,45 L130,190 C150,198 200,200 200,200 C200,200 250,198 270,190 L300,45 Z"
        fill="#d4a574"
      />
      {/* Left fold */}
      <path d="M100,45 L88,52 L130,190 Z" fill="#c49a6c" />
      {/* Right fold */}
      <path d="M300,45 L312,52 L270,190 Z" fill="#c49a6c" />
      {/* Crease lines */}
      <path d={paths.crease1} fill="rgba(141,110,99,0.15)" />
      <path d={paths.crease2} fill="rgba(141,110,99,0.15)" />
      {/* Outlines */}
      <path d={paths.coneLeft} fill="#8d6e63" />
      <path d={paths.coneRight} fill="#8d6e63" />
      <path d={paths.coneBottom} fill="#8d6e63" />
      <path d={paths.coneTop} fill="#a1887f" />
      <path d={paths.foldLeft} fill="#6d4c41" />
      <path d={paths.foldRight} fill="#6d4c41" />
      {/* Twine */}
      <path d={paths.twine} fill="#5d4037" />
      {/* Bow */}
      <path d={paths.bowLeft} fill="#6d4c41" />
      <path d={paths.bowRight} fill="#6d4c41" />
      <circle cx="200" cy="107" r="4" fill="#5d4037" />
    </svg>
  );
}
