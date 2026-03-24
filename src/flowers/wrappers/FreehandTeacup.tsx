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

export function FreehandTeacup({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Cup body (rounded trapezoid) - taller, pushed down
    const cupLeft: [number, number][] = [
      [115, 55],
      [112, 68],
      [110, 85],
      [109, 102],
      [110, 120],
      [115, 138],
      [124, 152],
      [136, 162],
    ];
    const cupRight: [number, number][] = [
      [265, 55],
      [268, 68],
      [270, 85],
      [271, 102],
      [270, 120],
      [265, 138],
      [256, 152],
      [244, 162],
    ];
    const cupBottom: [number, number][] = [
      [136, 162],
      [158, 167],
      [180, 169],
      [200, 170],
      [220, 169],
      [242, 167],
      [244, 162],
    ];
    const cupRim: [number, number][] = [
      [110, 55],
      [135, 50],
      [165, 48],
      [200, 47],
      [235, 48],
      [255, 50],
      [270, 55],
    ];

    // Handle (C-curve on right) - bigger
    const handleOuter: [number, number][] = [
      [267, 68],
      [282, 72],
      [294, 80],
      [304, 92],
      [308, 108],
      [304, 124],
      [294, 135],
      [282, 142],
      [267, 148],
    ];
    const handleInner: [number, number][] = [
      [270, 80],
      [280, 84],
      [288, 92],
      [292, 104],
      [292, 116],
      [288, 126],
      [280, 132],
      [270, 138],
    ];

    // Saucer - pushed down to fill bottom
    const saucerTop: [number, number][] = [
      [88, 174],
      [115, 170],
      [150, 168],
      [200, 167],
      [250, 168],
      [285, 170],
      [312, 174],
    ];
    const saucerBottom: [number, number][] = [
      [100, 190],
      [130, 195],
      [165, 198],
      [200, 199],
      [235, 198],
      [270, 195],
      [300, 190],
    ];
    const saucerLeftArc: [number, number][] = [
      [88, 174],
      [90, 180],
      [94, 186],
      [100, 190],
    ];
    const saucerRightArc: [number, number][] = [
      [312, 174],
      [310, 180],
      [306, 186],
      [300, 190],
    ];

    // Rim detail line
    const rimLine: [number, number][] = [
      [114, 60],
      [140, 56],
      [170, 54],
      [200, 53],
      [230, 54],
      [250, 56],
      [266, 60],
    ];

    // Liquid surface inside cup
    const liquidSurface: [number, number][] = [
      [118, 68],
      [145, 64],
      [175, 62],
      [200, 61],
      [225, 62],
      [250, 64],
      [262, 68],
    ];

    // Steam swirls
    const steam1: [number, number][] = [
      [178, 42],
      [176, 34],
      [180, 26],
      [176, 18],
      [180, 10],
      [177, 3],
    ];
    const steam2: [number, number][] = [
      [212, 40],
      [214, 32],
      [210, 24],
      [214, 16],
      [210, 8],
      [213, 2],
    ];

    // Small flower on cup
    const flowerStem: [number, number][] = [
      [195, 140],
      [193, 128],
      [191, 116],
    ];
    const petalTop: [number, number][] = [
      [191, 106],
      [189, 99],
      [191, 94],
      [196, 96],
      [191, 106],
    ];
    const petalRight: [number, number][] = [
      [191, 106],
      [198, 101],
      [205, 103],
      [200, 110],
      [191, 106],
    ];
    const petalLeft: [number, number][] = [
      [191, 106],
      [182, 103],
      [179, 110],
      [186, 112],
      [191, 106],
    ];
    const petalBottom: [number, number][] = [
      [191, 106],
      [189, 113],
      [193, 120],
      [197, 113],
      [191, 106],
    ];

    return {
      cupLeft: getSvgPathFromStroke(getStroke(cupLeft, { ...OPTS, size: 3.5 })),
      cupRight: getSvgPathFromStroke(getStroke(cupRight, { ...OPTS, size: 3.5 })),
      cupBottom: getSvgPathFromStroke(getStroke(cupBottom, { ...OPTS, size: 3 })),
      cupRim: getSvgPathFromStroke(getStroke(cupRim, { ...OPTS, size: 3 })),
      handleOuter: getSvgPathFromStroke(getStroke(handleOuter, { ...OPTS, size: 3 })),
      handleInner: getSvgPathFromStroke(getStroke(handleInner, { ...OPTS, size: 2.5 })),
      saucerTop: getSvgPathFromStroke(getStroke(saucerTop, { ...OPTS, size: 3 })),
      saucerBottom: getSvgPathFromStroke(getStroke(saucerBottom, { ...OPTS, size: 3 })),
      saucerLeftArc: getSvgPathFromStroke(getStroke(saucerLeftArc, { ...OPTS, size: 2.5 })),
      saucerRightArc: getSvgPathFromStroke(getStroke(saucerRightArc, { ...OPTS, size: 2.5 })),
      rimLine: getSvgPathFromStroke(getStroke(rimLine, { ...OPTS, size: 1.5, thinning: 0.6 })),
      liquidSurface: getSvgPathFromStroke(
        getStroke(liquidSurface, { ...OPTS, size: 2, thinning: 0.4 }),
      ),
      steam1: getSvgPathFromStroke(getStroke(steam1, { ...OPTS, size: 2, thinning: 0.8 })),
      steam2: getSvgPathFromStroke(getStroke(steam2, { ...OPTS, size: 2, thinning: 0.8 })),
      flowerStem: getSvgPathFromStroke(getStroke(flowerStem, { ...OPTS, size: 1.5 })),
      petalTop: getSvgPathFromStroke(getStroke(petalTop, { ...OPTS, size: 1.8 })),
      petalRight: getSvgPathFromStroke(getStroke(petalRight, { ...OPTS, size: 1.8 })),
      petalLeft: getSvgPathFromStroke(getStroke(petalLeft, { ...OPTS, size: 1.8 })),
      petalBottom: getSvgPathFromStroke(getStroke(petalBottom, { ...OPTS, size: 1.8 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Saucer fill */}
      <path
        d="M88,174 C88,174 115,167 200,167 C285,167 312,174 312,174 C310,184 280,199 200,199 C120,199 90,184 88,174 Z"
        fill="#fff8e1"
      />
      {/* Cup body fill */}
      <path
        d="M115,55 C110,78 109,102 110,125 C115,148 136,167 200,170 C244,167 265,148 270,125 C271,102 270,78 265,55 Z"
        fill="#fff8e1"
      />
      {/* Liquid fill */}
      <path
        d="M118,68 C145,62 250,62 262,68 L270,125 C265,148 244,167 200,170 C136,167 115,148 110,125 Z"
        fill="rgba(220,190,140,0.35)"
      />
      {/* Handle fill */}
      <path
        d="M267,68 C286,72 308,98 308,108 C308,124 286,148 267,148 L270,138 C282,134 292,120 292,108 C292,94 280,80 270,80 Z"
        fill="rgba(255,248,225,0.8)"
      />
      {/* Flower on cup - stem */}
      <path d={paths.flowerStem} fill="#66bb6a" />
      {/* Flower petals */}
      <path d={paths.petalTop} fill="#f48fb1" />
      <path d={paths.petalRight} fill="#f48fb1" />
      <path d={paths.petalLeft} fill="#f48fb1" />
      <path d={paths.petalBottom} fill="#f48fb1" />
      <circle cx="191" cy="106" r="2.5" fill="#ffd54f" />
      {/* Steam swirls */}
      <path d={paths.steam1} fill="rgba(158,158,158,0.25)" />
      <path d={paths.steam2} fill="rgba(158,158,158,0.25)" />
      {/* Cup outlines */}
      <path d={paths.cupLeft} fill="#a1887f" />
      <path d={paths.cupRight} fill="#a1887f" />
      <path d={paths.cupBottom} fill="#a1887f" />
      <path d={paths.cupRim} fill="#8d6e63" />
      <path d={paths.rimLine} fill="rgba(141,110,99,0.35)" />
      {/* Handle outlines */}
      <path d={paths.handleOuter} fill="#a1887f" />
      <path d={paths.handleInner} fill="rgba(141,110,99,0.4)" />
      {/* Liquid surface */}
      <path d={paths.liquidSurface} fill="rgba(180,150,100,0.4)" />
      {/* Saucer outlines */}
      <path d={paths.saucerTop} fill="#a1887f" />
      <path d={paths.saucerBottom} fill="#a1887f" />
      <path d={paths.saucerLeftArc} fill="#a1887f" />
      <path d={paths.saucerRightArc} fill="#a1887f" />
    </svg>
  );
}
