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

export function FreehandEnvelope({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Envelope body rectangle
    const bodyLeft: [number, number][] = [
      [100, 80],
      [100, 100],
      [100, 120],
      [100, 140],
      [100, 160],
      [100, 180],
      [100, 195],
    ];
    const bodyRight: [number, number][] = [
      [300, 80],
      [300, 100],
      [300, 120],
      [300, 140],
      [300, 160],
      [300, 180],
      [300, 195],
    ];
    const bodyBottom: [number, number][] = [
      [100, 195],
      [130, 197],
      [160, 198],
      [200, 199],
      [240, 198],
      [270, 197],
      [300, 195],
    ];
    const bodyTop: [number, number][] = [
      [100, 80],
      [130, 78],
      [160, 77],
      [200, 76],
      [240, 77],
      [270, 78],
      [300, 80],
    ];

    // Open flap (triangle opening upward)
    const flapLeft: [number, number][] = [
      [100, 80],
      [115, 68],
      [130, 56],
      [150, 42],
      [170, 30],
      [190, 22],
      [200, 18],
    ];
    const flapRight: [number, number][] = [
      [300, 80],
      [285, 68],
      [270, 56],
      [250, 42],
      [230, 30],
      [210, 22],
      [200, 18],
    ];

    // V-fold on front of envelope
    const vFoldLeft: [number, number][] = [
      [100, 80],
      [120, 95],
      [140, 108],
      [160, 120],
      [180, 132],
      [200, 142],
    ];
    const vFoldRight: [number, number][] = [
      [300, 80],
      [280, 95],
      [260, 108],
      [240, 120],
      [220, 132],
      [200, 142],
    ];

    // Heart seal
    const heartLeft: [number, number][] = [
      [200, 148],
      [195, 142],
      [190, 136],
      [186, 130],
      [185, 125],
      [186, 120],
      [190, 117],
      [195, 118],
      [200, 122],
    ];
    const heartRight: [number, number][] = [
      [200, 148],
      [205, 142],
      [210, 136],
      [214, 130],
      [215, 125],
      [214, 120],
      [210, 117],
      [205, 118],
      [200, 122],
    ];

    // Letter peeking out from top
    const letterLeft: [number, number][] = [
      [145, 76],
      [145, 60],
      [145, 45],
      [145, 30],
    ];
    const letterRight: [number, number][] = [
      [255, 76],
      [255, 60],
      [255, 45],
      [255, 30],
    ];
    const letterTop: [number, number][] = [
      [145, 30],
      [170, 28],
      [200, 27],
      [230, 28],
      [255, 30],
    ];

    // Text lines on letter
    const textLine1: [number, number][] = [
      [160, 42],
      [175, 41],
      [190, 42],
      [210, 41],
      [230, 42],
      [240, 42],
    ];
    const textLine2: [number, number][] = [
      [160, 52],
      [175, 51],
      [190, 52],
      [210, 51],
      [225, 52],
    ];
    const textLine3: [number, number][] = [
      [160, 62],
      [175, 61],
      [195, 62],
      [210, 62],
    ];

    // Floating hearts
    const floatHeart1L: [number, number][] = [
      [82, 60],
      [79, 54],
      [76, 50],
      [74, 48],
      [76, 47],
      [80, 50],
      [82, 54],
    ];
    const floatHeart1R: [number, number][] = [
      [82, 60],
      [85, 54],
      [88, 50],
      [90, 48],
      [88, 47],
      [84, 50],
      [82, 54],
    ];
    const floatHeart2L: [number, number][] = [
      [318, 45],
      [315, 39],
      [312, 35],
      [310, 33],
      [312, 32],
      [316, 35],
      [318, 39],
    ];
    const floatHeart2R: [number, number][] = [
      [318, 45],
      [321, 39],
      [324, 35],
      [326, 33],
      [324, 32],
      [320, 35],
      [318, 39],
    ];
    const floatHeart3L: [number, number][] = [
      [130, 15],
      [128, 11],
      [126, 8],
      [125, 7],
      [126, 6],
      [129, 8],
      [130, 11],
    ];
    const floatHeart3R: [number, number][] = [
      [130, 15],
      [132, 11],
      [134, 8],
      [135, 7],
      [134, 6],
      [131, 8],
      [130, 11],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...OPTS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...OPTS, size: 3.5 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...OPTS, size: 3 })),
      bodyTop: getSvgPathFromStroke(getStroke(bodyTop, { ...OPTS, size: 2.5 })),
      flapLeft: getSvgPathFromStroke(getStroke(flapLeft, { ...OPTS, size: 3 })),
      flapRight: getSvgPathFromStroke(getStroke(flapRight, { ...OPTS, size: 3 })),
      vFoldLeft: getSvgPathFromStroke(getStroke(vFoldLeft, { ...OPTS, size: 2.5 })),
      vFoldRight: getSvgPathFromStroke(getStroke(vFoldRight, { ...OPTS, size: 2.5 })),
      heartLeft: getSvgPathFromStroke(getStroke(heartLeft, { ...OPTS, size: 2.5 })),
      heartRight: getSvgPathFromStroke(getStroke(heartRight, { ...OPTS, size: 2.5 })),
      letterLeft: getSvgPathFromStroke(getStroke(letterLeft, { ...OPTS, size: 2 })),
      letterRight: getSvgPathFromStroke(getStroke(letterRight, { ...OPTS, size: 2 })),
      letterTop: getSvgPathFromStroke(getStroke(letterTop, { ...OPTS, size: 2 })),
      textLine1: getSvgPathFromStroke(getStroke(textLine1, { ...OPTS, size: 1.2, thinning: 0.7 })),
      textLine2: getSvgPathFromStroke(getStroke(textLine2, { ...OPTS, size: 1.2, thinning: 0.7 })),
      textLine3: getSvgPathFromStroke(getStroke(textLine3, { ...OPTS, size: 1.2, thinning: 0.7 })),
      floatHeart1L: getSvgPathFromStroke(getStroke(floatHeart1L, { ...OPTS, size: 1.8 })),
      floatHeart1R: getSvgPathFromStroke(getStroke(floatHeart1R, { ...OPTS, size: 1.8 })),
      floatHeart2L: getSvgPathFromStroke(getStroke(floatHeart2L, { ...OPTS, size: 1.5 })),
      floatHeart2R: getSvgPathFromStroke(getStroke(floatHeart2R, { ...OPTS, size: 1.5 })),
      floatHeart3L: getSvgPathFromStroke(getStroke(floatHeart3L, { ...OPTS, size: 1.2 })),
      floatHeart3R: getSvgPathFromStroke(getStroke(floatHeart3R, { ...OPTS, size: 1.2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Envelope body fill */}
      <path d="M100,80 L100,195 L300,195 L300,80 Z" fill="#fff3e0" />
      {/* Open flap fill */}
      <path d="M100,80 L200,18 L300,80 Z" fill="#fce4ec" />
      {/* V-fold shading on front */}
      <path d="M100,80 L200,142 L300,80 L300,195 L100,195 Z" fill="rgba(255,224,178,0.5)" />
      {/* Letter peeking out fill */}
      <path d="M145,76 L145,30 L255,30 L255,76 Z" fill="#fffde7" />
      {/* Text lines on letter */}
      <path d={paths.textLine1} fill="rgba(120,120,120,0.35)" />
      <path d={paths.textLine2} fill="rgba(120,120,120,0.35)" />
      <path d={paths.textLine3} fill="rgba(120,120,120,0.35)" />
      {/* Letter outline strokes */}
      <path d={paths.letterLeft} fill="#bdbdbd" />
      <path d={paths.letterRight} fill="#bdbdbd" />
      <path d={paths.letterTop} fill="#bdbdbd" />
      {/* Flap outlines */}
      <path d={paths.flapLeft} fill="#ad8762" />
      <path d={paths.flapRight} fill="#ad8762" />
      {/* V-fold outlines */}
      <path d={paths.vFoldLeft} fill="#c09a74" />
      <path d={paths.vFoldRight} fill="#c09a74" />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#ad8762" />
      <path d={paths.bodyRight} fill="#ad8762" />
      <path d={paths.bodyBottom} fill="#ad8762" />
      <path d={paths.bodyTop} fill="#ad8762" />
      {/* Heart seal fill */}
      <path
        d="M200,148 Q190,130 185,125 Q185,117 200,122 Q215,117 215,125 Q210,130 200,148 Z"
        fill="#e91e63"
      />
      {/* Heart seal outlines */}
      <path d={paths.heartLeft} fill="#c2185b" />
      <path d={paths.heartRight} fill="#c2185b" />
      {/* Floating hearts */}
      <path d={paths.floatHeart1L} fill="#f48fb1" />
      <path d={paths.floatHeart1R} fill="#f48fb1" />
      <path d={paths.floatHeart2L} fill="#f8bbd0" />
      <path d={paths.floatHeart2R} fill="#f8bbd0" />
      <path d={paths.floatHeart3L} fill="#f48fb1" />
      <path d={paths.floatHeart3R} fill="#f48fb1" />
    </svg>
  );
}
