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

export function FreehandTissue({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Main cone/wrap left side
    const coneLeft: [number, number][] = [
      [120, 65],
      [118, 80],
      [115, 100],
      [112, 120],
      [110, 140],
      [110, 160],
      [112, 180],
      [115, 195],
    ];
    // Main cone right side
    const coneRight: [number, number][] = [
      [280, 65],
      [282, 80],
      [285, 100],
      [288, 120],
      [290, 140],
      [290, 160],
      [288, 180],
      [285, 195],
    ];
    // Bottom curve
    const coneBottom: [number, number][] = [
      [115, 195],
      [140, 199],
      [170, 200],
      [200, 200],
      [230, 200],
      [260, 199],
      [285, 195],
    ];
    // Ruffle petal 1 (far left)
    const ruffle1: [number, number][] = [
      [120, 65],
      [112, 50],
      [108, 38],
      [115, 28],
      [128, 25],
      [140, 30],
      [148, 42],
      [150, 55],
      [148, 65],
    ];
    // Ruffle petal 2
    const ruffle2: [number, number][] = [
      [148, 65],
      [145, 48],
      [148, 35],
      [158, 22],
      [172, 20],
      [184, 28],
      [188, 42],
      [186, 55],
      [183, 65],
    ];
    // Ruffle petal 3 (center)
    const ruffle3: [number, number][] = [
      [183, 65],
      [182, 48],
      [186, 32],
      [195, 22],
      [207, 22],
      [216, 32],
      [220, 48],
      [218, 65],
    ];
    // Ruffle petal 4
    const ruffle4: [number, number][] = [
      [218, 65],
      [218, 48],
      [222, 35],
      [232, 24],
      [245, 22],
      [255, 30],
      [258, 45],
      [255, 58],
      [252, 65],
    ];
    // Ruffle petal 5 (far right)
    const ruffle5: [number, number][] = [
      [252, 65],
      [255, 50],
      [262, 38],
      [274, 28],
      [286, 30],
      [292, 40],
      [290, 52],
      [284, 62],
      [280, 65],
    ];
    // Fold line left
    const foldLeft: [number, number][] = [
      [155, 68],
      [150, 100],
      [145, 140],
      [142, 180],
      [140, 198],
    ];
    // Fold line right
    const foldRight: [number, number][] = [
      [245, 68],
      [250, 100],
      [255, 140],
      [258, 180],
      [260, 198],
    ];
    // Ribbon band
    const ribbonTop: [number, number][] = [
      [115, 110],
      [140, 107],
      [170, 105],
      [200, 104],
      [230, 105],
      [260, 107],
      [285, 110],
    ];
    const ribbonBottom: [number, number][] = [
      [114, 122],
      [140, 119],
      [170, 117],
      [200, 116],
      [230, 117],
      [260, 119],
      [286, 122],
    ];
    // Bow left loop
    const bowLeft: [number, number][] = [
      [192, 112],
      [180, 102],
      [170, 96],
      [165, 100],
      [168, 110],
      [165, 118],
      [170, 124],
      [180, 118],
      [192, 114],
    ];
    // Bow right loop
    const bowRight: [number, number][] = [
      [208, 112],
      [220, 102],
      [230, 96],
      [235, 100],
      [232, 110],
      [235, 118],
      [230, 124],
      [220, 118],
      [208, 114],
    ];
    // Center fold line
    const foldCenter: [number, number][] = [
      [200, 68],
      [200, 100],
      [200, 140],
      [200, 180],
      [200, 198],
    ];

    return {
      coneLeft: getSvgPathFromStroke(getStroke(coneLeft, { ...OPTS, size: 2.5 })),
      coneRight: getSvgPathFromStroke(getStroke(coneRight, { ...OPTS, size: 2.5 })),
      coneBottom: getSvgPathFromStroke(getStroke(coneBottom, { ...OPTS, size: 2.5 })),
      ruffle1: getSvgPathFromStroke(getStroke(ruffle1, { ...OPTS, size: 2.5 })),
      ruffle2: getSvgPathFromStroke(getStroke(ruffle2, { ...OPTS, size: 2.5 })),
      ruffle3: getSvgPathFromStroke(getStroke(ruffle3, { ...OPTS, size: 2.5 })),
      ruffle4: getSvgPathFromStroke(getStroke(ruffle4, { ...OPTS, size: 2.5 })),
      ruffle5: getSvgPathFromStroke(getStroke(ruffle5, { ...OPTS, size: 2.5 })),
      foldLeft: getSvgPathFromStroke(getStroke(foldLeft, { ...OPTS, size: 1.5, thinning: 0.7 })),
      foldRight: getSvgPathFromStroke(getStroke(foldRight, { ...OPTS, size: 1.5, thinning: 0.7 })),
      foldCenter: getSvgPathFromStroke(getStroke(foldCenter, { ...OPTS, size: 1, thinning: 0.8 })),
      ribbonTop: getSvgPathFromStroke(getStroke(ribbonTop, { ...OPTS, size: 2.5 })),
      ribbonBottom: getSvgPathFromStroke(getStroke(ribbonBottom, { ...OPTS, size: 2 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...OPTS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...OPTS, size: 2.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Main tissue body fill */}
      <path
        d="M120,65 C118,80 112,120 110,160 C112,185 115,195 115,195 C140,199 200,200 200,200 C200,200 260,199 285,195 C285,195 288,185 290,160 C288,120 282,80 280,65 Z"
        fill="#fce4ec"
      />
      {/* Ruffle fills */}
      <path d="M120,65 C112,50 108,38 115,28 C128,25 140,30 148,42 L148,65 Z" fill="#f8bbd0" />
      <path d="M148,65 C145,48 148,35 158,22 C172,20 184,28 188,42 L186,65 Z" fill="#fce4ec" />
      <path d="M183,65 C182,48 186,32 195,22 C207,22 216,32 220,48 L218,65 Z" fill="#f8bbd0" />
      <path d="M218,65 C218,48 222,35 232,24 C245,22 255,30 258,45 L255,65 Z" fill="#fce4ec" />
      <path d="M252,65 C255,50 262,38 274,28 C286,30 292,40 290,52 L280,65 Z" fill="#f8bbd0" />
      {/* Ribbon band fill */}
      <path
        d="M115,110 C140,106 200,104 285,110 L286,122 C260,118 200,116 114,122 Z"
        fill="#ec407a"
      />
      {/* Fold lines */}
      <path d={paths.foldLeft} fill="rgba(236,64,122,0.12)" />
      <path d={paths.foldRight} fill="rgba(236,64,122,0.12)" />
      <path d={paths.foldCenter} fill="rgba(236,64,122,0.08)" />
      {/* Body outlines */}
      <path d={paths.coneLeft} fill="#f48fb1" />
      <path d={paths.coneRight} fill="#f48fb1" />
      <path d={paths.coneBottom} fill="#f48fb1" />
      {/* Ruffle outlines */}
      <path d={paths.ruffle1} fill="#ec407a" />
      <path d={paths.ruffle2} fill="#ec407a" />
      <path d={paths.ruffle3} fill="#ec407a" />
      <path d={paths.ruffle4} fill="#ec407a" />
      <path d={paths.ruffle5} fill="#ec407a" />
      {/* Ribbon outlines */}
      <path d={paths.ribbonTop} fill="#c2185b" />
      <path d={paths.ribbonBottom} fill="#c2185b" />
      {/* Bow */}
      <path d={paths.bowLeft} fill="#c2185b" />
      <path d={paths.bowRight} fill="#c2185b" />
      <circle cx="200" cy="113" r="4" fill="#ad1457" />
    </svg>
  );
}
