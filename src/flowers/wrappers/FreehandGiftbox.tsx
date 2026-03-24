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

export function FreehandGiftbox({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Box body
    const boxLeft: [number, number][] = [
      [115, 95],
      [115, 110],
      [115, 130],
      [115, 150],
      [115, 170],
      [115, 190],
      [115, 198],
    ];
    const boxRight: [number, number][] = [
      [285, 95],
      [285, 110],
      [285, 130],
      [285, 150],
      [285, 170],
      [285, 190],
      [285, 198],
    ];
    const boxBottom: [number, number][] = [
      [115, 198],
      [140, 199],
      [170, 200],
      [200, 200],
      [230, 200],
      [260, 199],
      [285, 198],
    ];
    const boxTop: [number, number][] = [
      [115, 95],
      [140, 94],
      [170, 93],
      [200, 92],
      [230, 93],
      [260, 94],
      [285, 95],
    ];

    // Lid (tilted behind, slightly offset)
    const lidFront: [number, number][] = [
      [108, 92],
      [135, 90],
      [165, 88],
      [200, 87],
      [235, 88],
      [265, 90],
      [292, 92],
    ];
    const lidBack: [number, number][] = [
      [105, 72],
      [135, 68],
      [165, 65],
      [200, 64],
      [235, 65],
      [265, 68],
      [295, 72],
    ];
    const lidLeft: [number, number][] = [
      [108, 92],
      [106, 82],
      [105, 72],
    ];
    const lidRight: [number, number][] = [
      [292, 92],
      [294, 82],
      [295, 72],
    ];

    // Vertical ribbon
    const ribbonVLeft: [number, number][] = [
      [188, 92],
      [188, 110],
      [188, 130],
      [188, 150],
      [188, 170],
      [188, 190],
      [188, 200],
    ];
    const ribbonVRight: [number, number][] = [
      [212, 92],
      [212, 110],
      [212, 130],
      [212, 150],
      [212, 170],
      [212, 190],
      [212, 200],
    ];

    // Horizontal ribbon
    const ribbonHTop: [number, number][] = [
      [115, 138],
      [140, 137],
      [170, 136],
      [200, 135],
      [230, 136],
      [260, 137],
      [285, 138],
    ];
    const ribbonHBottom: [number, number][] = [
      [115, 155],
      [140, 154],
      [170, 153],
      [200, 152],
      [230, 153],
      [260, 154],
      [285, 155],
    ];

    // Bow - left loop
    const bowLeftLoop: [number, number][] = [
      [200, 72],
      [190, 65],
      [175, 55],
      [162, 48],
      [155, 44],
      [152, 48],
      [158, 55],
      [170, 62],
      [185, 68],
      [200, 72],
    ];
    // Bow - right loop
    const bowRightLoop: [number, number][] = [
      [200, 72],
      [210, 65],
      [225, 55],
      [238, 48],
      [245, 44],
      [248, 48],
      [242, 55],
      [230, 62],
      [215, 68],
      [200, 72],
    ];
    // Bow center knot
    const bowKnot: [number, number][] = [
      [194, 68],
      [192, 72],
      [194, 78],
      [200, 80],
      [206, 78],
      [208, 72],
      [206, 68],
      [200, 66],
      [194, 68],
    ];

    // Tissue peeking out from top
    const tissue1: [number, number][] = [
      [170, 92],
      [165, 82],
      [162, 74],
      [168, 68],
      [175, 72],
    ];
    const tissue2: [number, number][] = [
      [230, 92],
      [235, 82],
      [238, 74],
      [232, 68],
      [225, 72],
    ];

    // Sparkle dots
    const sparkle1: [number, number][] = [
      [140, 38],
      [142, 34],
      [144, 38],
      [142, 42],
      [140, 38],
    ];
    const sparkle2: [number, number][] = [
      [260, 32],
      [262, 28],
      [264, 32],
      [262, 36],
      [260, 32],
    ];
    const sparkle3: [number, number][] = [
      [305, 60],
      [307, 56],
      [309, 60],
      [307, 64],
      [305, 60],
    ];
    const sparkle4: [number, number][] = [
      [95, 55],
      [97, 51],
      [99, 55],
      [97, 59],
      [95, 55],
    ];

    return {
      boxLeft: getSvgPathFromStroke(getStroke(boxLeft, { ...OPTS, size: 3.5 })),
      boxRight: getSvgPathFromStroke(getStroke(boxRight, { ...OPTS, size: 3.5 })),
      boxBottom: getSvgPathFromStroke(getStroke(boxBottom, { ...OPTS, size: 3 })),
      boxTop: getSvgPathFromStroke(getStroke(boxTop, { ...OPTS, size: 2.5 })),
      lidFront: getSvgPathFromStroke(getStroke(lidFront, { ...OPTS, size: 3 })),
      lidBack: getSvgPathFromStroke(getStroke(lidBack, { ...OPTS, size: 3 })),
      lidLeft: getSvgPathFromStroke(getStroke(lidLeft, { ...OPTS, size: 3 })),
      lidRight: getSvgPathFromStroke(getStroke(lidRight, { ...OPTS, size: 3 })),
      ribbonVLeft: getSvgPathFromStroke(getStroke(ribbonVLeft, { ...OPTS, size: 2 })),
      ribbonVRight: getSvgPathFromStroke(getStroke(ribbonVRight, { ...OPTS, size: 2 })),
      ribbonHTop: getSvgPathFromStroke(getStroke(ribbonHTop, { ...OPTS, size: 2 })),
      ribbonHBottom: getSvgPathFromStroke(getStroke(ribbonHBottom, { ...OPTS, size: 2 })),
      bowLeftLoop: getSvgPathFromStroke(getStroke(bowLeftLoop, { ...OPTS, size: 2.5 })),
      bowRightLoop: getSvgPathFromStroke(getStroke(bowRightLoop, { ...OPTS, size: 2.5 })),
      bowKnot: getSvgPathFromStroke(getStroke(bowKnot, { ...OPTS, size: 2.5 })),
      tissue1: getSvgPathFromStroke(getStroke(tissue1, { ...OPTS, size: 2, thinning: 0.6 })),
      tissue2: getSvgPathFromStroke(getStroke(tissue2, { ...OPTS, size: 2, thinning: 0.6 })),
      sparkle1: getSvgPathFromStroke(getStroke(sparkle1, { ...OPTS, size: 1.5 })),
      sparkle2: getSvgPathFromStroke(getStroke(sparkle2, { ...OPTS, size: 1.5 })),
      sparkle3: getSvgPathFromStroke(getStroke(sparkle3, { ...OPTS, size: 1.2 })),
      sparkle4: getSvgPathFromStroke(getStroke(sparkle4, { ...OPTS, size: 1.2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Box body fill */}
      <path d="M115,95 L115,198 L285,198 L285,95 Z" fill="#e91e63" />
      {/* Lid fill */}
      <path d="M108,92 L105,72 L295,72 L292,92 Z" fill="#c2185b" />
      {/* Vertical ribbon fill */}
      <path d="M188,92 L188,200 L212,200 L212,92 Z" fill="#ffd700" />
      {/* Horizontal ribbon fill */}
      <path d="M115,138 L285,138 L285,155 L115,155 Z" fill="#ffd700" />
      {/* Ribbon cross center */}
      <rect x="188" y="136" width="24" height="19" fill="#ffab00" />
      {/* Tissue peeking fill */}
      <path d="M165,92 L162,74 L175,72 L170,92 Z" fill="#fffde7" />
      <path d="M230,92 L238,74 L225,72 L235,92 Z" fill="#fffde7" />
      {/* Bow loops fill */}
      <path d="M200,72 C190,65 162,48 155,44 C152,48 170,62 200,72 Z" fill="#ffd700" />
      <path d="M200,72 C210,65 238,48 245,44 C248,48 230,62 200,72 Z" fill="#ffd700" />
      {/* Bow outlines */}
      <path d={paths.bowLeftLoop} fill="#f9a825" />
      <path d={paths.bowRightLoop} fill="#f9a825" />
      <path d={paths.bowKnot} fill="#f57f17" />
      {/* Tissue outlines */}
      <path d={paths.tissue1} fill="rgba(200,200,200,0.5)" />
      <path d={paths.tissue2} fill="rgba(200,200,200,0.5)" />
      {/* Ribbon outlines */}
      <path d={paths.ribbonVLeft} fill="#f9a825" />
      <path d={paths.ribbonVRight} fill="#f9a825" />
      <path d={paths.ribbonHTop} fill="#f9a825" />
      <path d={paths.ribbonHBottom} fill="#f9a825" />
      {/* Box outlines */}
      <path d={paths.boxLeft} fill="#880e4f" />
      <path d={paths.boxRight} fill="#880e4f" />
      <path d={paths.boxBottom} fill="#880e4f" />
      <path d={paths.boxTop} fill="#880e4f" />
      {/* Lid outlines */}
      <path d={paths.lidFront} fill="#880e4f" />
      <path d={paths.lidBack} fill="#880e4f" />
      <path d={paths.lidLeft} fill="#880e4f" />
      <path d={paths.lidRight} fill="#880e4f" />
      {/* Sparkle dots */}
      <path d={paths.sparkle1} fill="#fff176" />
      <path d={paths.sparkle2} fill="#fff176" />
      <path d={paths.sparkle3} fill="#fff9c4" />
      <path d={paths.sparkle4} fill="#fff9c4" />
      <circle cx="142" cy="38" r="1" fill="#ffffff" />
      <circle cx="262" cy="32" r="1" fill="#ffffff" />
      <circle cx="307" cy="60" r="0.8" fill="#ffffff" />
      <circle cx="97" cy="55" r="0.8" fill="#ffffff" />
    </svg>
  );
}
