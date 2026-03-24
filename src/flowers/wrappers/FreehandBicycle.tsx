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

export function FreehandBicycle({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Basket body - left side (taller)
    const basketLeft: [number, number][] = [
      [140, 55],
      [133, 75],
      [128, 100],
      [124, 125],
      [122, 150],
      [120, 170],
      [119, 185],
    ];
    // Basket body - right side (taller)
    const basketRight: [number, number][] = [
      [260, 55],
      [267, 75],
      [272, 100],
      [276, 125],
      [278, 150],
      [280, 170],
      [281, 185],
    ];
    // Basket body - bottom
    const basketBottom: [number, number][] = [
      [119, 185],
      [140, 189],
      [165, 192],
      [190, 193],
      [200, 194],
      [210, 193],
      [235, 192],
      [260, 189],
      [281, 185],
    ];
    // Braided rim
    const rimOuter: [number, number][] = [
      [137, 52],
      [155, 48],
      [175, 45],
      [190, 44],
      [200, 43],
      [210, 44],
      [225, 45],
      [245, 48],
      [263, 52],
    ];
    const rimInner: [number, number][] = [
      [139, 59],
      [157, 55],
      [177, 53],
      [192, 52],
      [200, 51],
      [208, 52],
      [223, 53],
      [243, 55],
      [261, 59],
    ];
    // Horizontal weave lines
    const weaveH1: [number, number][] = [
      [132, 75],
      [155, 72],
      [180, 70],
      [200, 69],
      [220, 70],
      [245, 72],
      [268, 75],
    ];
    const weaveH2: [number, number][] = [
      [127, 98],
      [152, 95],
      [178, 93],
      [200, 92],
      [222, 93],
      [248, 95],
      [273, 98],
    ];
    const weaveH3: [number, number][] = [
      [124, 122],
      [150, 119],
      [177, 117],
      [200, 116],
      [223, 117],
      [250, 119],
      [276, 122],
    ];
    const weaveH4: [number, number][] = [
      [122, 146],
      [148, 143],
      [176, 141],
      [200, 140],
      [224, 141],
      [252, 143],
      [278, 146],
    ];
    const weaveH5: [number, number][] = [
      [120, 168],
      [147, 166],
      [176, 164],
      [200, 163],
      [224, 164],
      [253, 166],
      [280, 168],
    ];
    // Vertical weave lines
    const weaveV1: [number, number][] = [
      [152, 52],
      [147, 80],
      [142, 115],
      [138, 150],
      [136, 190],
    ];
    const weaveV2: [number, number][] = [
      [175, 46],
      [172, 80],
      [170, 115],
      [168, 150],
      [167, 192],
    ];
    const weaveV3: [number, number][] = [
      [200, 43],
      [200, 80],
      [200, 115],
      [200, 150],
      [200, 193],
    ];
    const weaveV4: [number, number][] = [
      [225, 46],
      [228, 80],
      [230, 115],
      [232, 150],
      [233, 192],
    ];
    const weaveV5: [number, number][] = [
      [248, 52],
      [253, 80],
      [258, 115],
      [262, 150],
      [264, 190],
    ];
    // Left handlebar
    const handlebarL: [number, number][] = [
      [140, 55],
      [128, 44],
      [116, 34],
      [106, 26],
      [96, 22],
    ];
    // Right handlebar
    const handlebarR: [number, number][] = [
      [260, 55],
      [272, 44],
      [284, 34],
      [294, 26],
      [304, 22],
    ];
    // Left grip
    const gripL: [number, number][] = [
      [96, 22],
      [92, 19],
      [88, 17],
      [84, 19],
      [82, 23],
      [84, 27],
      [88, 29],
      [92, 27],
      [96, 24],
    ];
    // Right grip
    const gripR: [number, number][] = [
      [304, 22],
      [308, 19],
      [312, 17],
      [316, 19],
      [318, 23],
      [316, 27],
      [312, 29],
      [308, 27],
      [304, 24],
    ];
    // Bell
    const bell: [number, number][] = [
      [290, 30],
      [287, 26],
      [284, 22],
      [284, 18],
      [287, 15],
      [292, 14],
      [297, 16],
      [298, 20],
      [296, 24],
      [293, 28],
      [290, 30],
    ];
    // Bracket support left
    const bracketL: [number, number][] = [
      [137, 58],
      [132, 68],
      [126, 82],
      [122, 100],
    ];
    // Bracket support right
    const bracketR: [number, number][] = [
      [263, 58],
      [268, 68],
      [274, 82],
      [278, 100],
    ];

    return {
      basketLeft: getSvgPathFromStroke(getStroke(basketLeft, { ...OPTS, size: 3.5 })),
      basketRight: getSvgPathFromStroke(getStroke(basketRight, { ...OPTS, size: 3.5 })),
      basketBottom: getSvgPathFromStroke(getStroke(basketBottom, { ...OPTS, size: 3 })),
      rimOuter: getSvgPathFromStroke(getStroke(rimOuter, { ...OPTS, size: 3.5 })),
      rimInner: getSvgPathFromStroke(getStroke(rimInner, { ...OPTS, size: 2.5 })),
      weaveH1: getSvgPathFromStroke(getStroke(weaveH1, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveH2: getSvgPathFromStroke(getStroke(weaveH2, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveH3: getSvgPathFromStroke(getStroke(weaveH3, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveH4: getSvgPathFromStroke(getStroke(weaveH4, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveH5: getSvgPathFromStroke(getStroke(weaveH5, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveV1: getSvgPathFromStroke(getStroke(weaveV1, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveV2: getSvgPathFromStroke(getStroke(weaveV2, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveV3: getSvgPathFromStroke(getStroke(weaveV3, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveV4: getSvgPathFromStroke(getStroke(weaveV4, { ...OPTS, size: 1.5, thinning: 0.6 })),
      weaveV5: getSvgPathFromStroke(getStroke(weaveV5, { ...OPTS, size: 1.5, thinning: 0.6 })),
      handlebarL: getSvgPathFromStroke(getStroke(handlebarL, { ...OPTS, size: 3 })),
      handlebarR: getSvgPathFromStroke(getStroke(handlebarR, { ...OPTS, size: 3 })),
      gripL: getSvgPathFromStroke(getStroke(gripL, { ...OPTS, size: 3 })),
      gripR: getSvgPathFromStroke(getStroke(gripR, { ...OPTS, size: 3 })),
      bell: getSvgPathFromStroke(getStroke(bell, { ...OPTS, size: 2 })),
      bracketL: getSvgPathFromStroke(getStroke(bracketL, { ...OPTS, size: 2.5 })),
      bracketR: getSvgPathFromStroke(getStroke(bracketR, { ...OPTS, size: 2.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Basket body fill */}
      <path d="M140,55 L119,185 L281,185 L260,55 Z" fill="#f0dcc4" />
      {/* Basket bottom curve */}
      <path d="M119,185 Q200,198 281,185 L281,185 Q200,195 119,185 Z" fill="#e0cdb5" />
      {/* Weave pattern - horizontal */}
      <path d={paths.weaveH1} fill="rgba(141,110,99,0.35)" />
      <path d={paths.weaveH2} fill="rgba(141,110,99,0.35)" />
      <path d={paths.weaveH3} fill="rgba(141,110,99,0.35)" />
      <path d={paths.weaveH4} fill="rgba(141,110,99,0.35)" />
      <path d={paths.weaveH5} fill="rgba(141,110,99,0.35)" />
      {/* Weave pattern - vertical */}
      <path d={paths.weaveV1} fill="rgba(141,110,99,0.3)" />
      <path d={paths.weaveV2} fill="rgba(141,110,99,0.3)" />
      <path d={paths.weaveV3} fill="rgba(141,110,99,0.3)" />
      <path d={paths.weaveV4} fill="rgba(141,110,99,0.3)" />
      <path d={paths.weaveV5} fill="rgba(141,110,99,0.3)" />
      {/* Basket outlines */}
      <path d={paths.basketLeft} fill="#8d6e63" />
      <path d={paths.basketRight} fill="#8d6e63" />
      <path d={paths.basketBottom} fill="#8d6e63" />
      {/* Braided rim */}
      <path d={paths.rimOuter} fill="#6d4c41" />
      <path d={paths.rimInner} fill="#795548" />
      {/* Bracket supports */}
      <path d={paths.bracketL} fill="#757575" />
      <path d={paths.bracketR} fill="#757575" />
      {/* Handlebars */}
      <path d={paths.handlebarL} fill="#9e9e9e" />
      <path d={paths.handlebarR} fill="#9e9e9e" />
      {/* Grips */}
      <path d={paths.gripL} fill="#424242" />
      <path d={paths.gripR} fill="#424242" />
      {/* Bell */}
      <path d={paths.bell} fill="#ffd54f" />
      <circle cx="291" cy="21" r="2" fill="#ffee58" />
      {/* Bell clapper */}
      <circle cx="291" cy="28" r="1.5" fill="#f9a825" />
    </svg>
  );
}
