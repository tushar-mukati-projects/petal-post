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

export function FreehandHeartbox({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Heart shape outline - shifted down to fill viewBox better
    const heart: [number, number][] = [
      [200, 190],
      [183, 176],
      [166, 162],
      [149, 145],
      [134, 128],
      [122, 110],
      [115, 92],
      [113, 77],
      [116, 63],
      [123, 52],
      [133, 45],
      [146, 42],
      [159, 45],
      [172, 52],
      [183, 62],
      [192, 73],
      [200, 85],
      [208, 73],
      [217, 62],
      [228, 52],
      [241, 45],
      [254, 42],
      [267, 45],
      [277, 52],
      [284, 63],
      [287, 77],
      [285, 92],
      [278, 110],
      [266, 128],
      [251, 145],
      [234, 162],
      [217, 176],
      [200, 190],
    ];
    // Rim edge (slightly offset from heart for box depth)
    const rim: [number, number][] = [
      [200, 184],
      [184, 171],
      [168, 158],
      [153, 142],
      [140, 126],
      [130, 109],
      [124, 93],
      [122, 78],
      [125, 66],
      [131, 56],
      [140, 50],
      [151, 48],
      [162, 50],
      [173, 57],
      [184, 65],
      [193, 76],
      [200, 85],
      [207, 76],
      [216, 65],
      [227, 57],
      [238, 50],
      [249, 48],
      [260, 50],
      [269, 56],
      [275, 66],
      [278, 78],
      [276, 93],
      [270, 109],
      [260, 126],
      [247, 142],
      [232, 158],
      [216, 171],
      [200, 184],
    ];
    // Inner shadow line
    const innerShadow: [number, number][] = [
      [200, 176],
      [186, 164],
      [172, 150],
      [159, 135],
      [148, 119],
      [140, 103],
      [135, 89],
      [134, 78],
      [137, 69],
      [143, 61],
      [151, 56],
      [160, 55],
      [170, 58],
      [179, 65],
      [188, 74],
      [195, 83],
      [200, 92],
      [205, 83],
      [212, 74],
      [221, 65],
      [230, 58],
      [240, 55],
      [249, 56],
      [257, 61],
      [263, 69],
      [266, 78],
      [265, 89],
      [260, 103],
      [252, 119],
      [241, 135],
      [228, 150],
      [214, 164],
      [200, 176],
    ];
    // Bow - left loop
    const bowLeft: [number, number][] = [
      [196, 70],
      [184, 56],
      [175, 46],
      [170, 40],
      [168, 35],
      [172, 30],
      [180, 30],
      [187, 35],
      [192, 44],
      [196, 56],
      [196, 70],
    ];
    // Bow - right loop
    const bowRight: [number, number][] = [
      [204, 70],
      [216, 56],
      [225, 46],
      [230, 40],
      [232, 35],
      [228, 30],
      [220, 30],
      [213, 35],
      [208, 44],
      [204, 56],
      [204, 70],
    ];
    // Bow - tail left
    const bowTailL: [number, number][] = [
      [196, 70],
      [186, 77],
      [179, 82],
      [172, 80],
    ];
    // Bow - tail right
    const bowTailR: [number, number][] = [
      [204, 70],
      [214, 77],
      [221, 82],
      [228, 80],
    ];
    // Cushion lines inside
    const cushion1: [number, number][] = [
      [158, 90],
      [168, 112],
      [174, 134],
      [172, 154],
    ];
    const cushion2: [number, number][] = [
      [200, 95],
      [200, 118],
      [200, 140],
      [200, 162],
    ];
    const cushion3: [number, number][] = [
      [242, 90],
      [232, 112],
      [226, 134],
      [228, 154],
    ];
    // Horizontal cushion line
    const cushionH: [number, number][] = [
      [140, 112],
      [158, 121],
      [180, 126],
      [200, 127],
      [220, 126],
      [242, 121],
      [260, 112],
    ];

    return {
      heart: getSvgPathFromStroke(getStroke(heart, { ...OPTS, size: 3.5 })),
      rim: getSvgPathFromStroke(getStroke(rim, { ...OPTS, size: 2.5 })),
      innerShadow: getSvgPathFromStroke(
        getStroke(innerShadow, { ...OPTS, size: 1.5, thinning: 0.7 }),
      ),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...OPTS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...OPTS, size: 2.5 })),
      bowTailL: getSvgPathFromStroke(getStroke(bowTailL, { ...OPTS, size: 2 })),
      bowTailR: getSvgPathFromStroke(getStroke(bowTailR, { ...OPTS, size: 2 })),
      cushion1: getSvgPathFromStroke(getStroke(cushion1, { ...OPTS, size: 1, thinning: 0.8 })),
      cushion2: getSvgPathFromStroke(getStroke(cushion2, { ...OPTS, size: 1, thinning: 0.8 })),
      cushion3: getSvgPathFromStroke(getStroke(cushion3, { ...OPTS, size: 1, thinning: 0.8 })),
      cushionH: getSvgPathFromStroke(getStroke(cushionH, { ...OPTS, size: 1, thinning: 0.8 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Heart fill */}
      <path
        d="M200,190 C183,176 149,145 122,110 C115,92 113,77 116,63 C123,52 146,42 172,52 C183,62 192,73 200,85 C208,73 217,62 228,52 C254,42 277,52 284,63 C287,77 285,92 278,110 C251,145 217,176 200,190 Z"
        fill="#e91e63"
      />
      {/* Highlight on left lobe */}
      <path
        d="M148,58 C140,64 132,78 132,92 C132,82 140,66 150,56 Z"
        fill="rgba(255,255,255,0.2)"
      />
      {/* Highlight on right lobe */}
      <path
        d="M252,58 C260,64 268,78 268,92 C268,82 260,66 250,56 Z"
        fill="rgba(255,255,255,0.2)"
      />
      {/* Cushion lines */}
      <path d={paths.cushion1} fill="rgba(136,14,79,0.25)" />
      <path d={paths.cushion2} fill="rgba(136,14,79,0.25)" />
      <path d={paths.cushion3} fill="rgba(136,14,79,0.25)" />
      <path d={paths.cushionH} fill="rgba(136,14,79,0.2)" />
      {/* Inner shadow */}
      <path d={paths.innerShadow} fill="rgba(136,14,79,0.3)" />
      {/* Heart outline */}
      <path d={paths.heart} fill="#880e4f" />
      {/* Rim edge */}
      <path d={paths.rim} fill="#ad1457" />
      {/* Decorative dots around rim */}
      <circle cx="138" cy="120" r="2.5" fill="#f48fb1" />
      <circle cx="149" cy="138" r="2.5" fill="#f48fb1" />
      <circle cx="163" cy="154" r="2.5" fill="#f48fb1" />
      <circle cx="180" cy="168" r="2.5" fill="#f48fb1" />
      <circle cx="200" cy="176" r="2.5" fill="#f48fb1" />
      <circle cx="220" cy="168" r="2.5" fill="#f48fb1" />
      <circle cx="237" cy="154" r="2.5" fill="#f48fb1" />
      <circle cx="251" cy="138" r="2.5" fill="#f48fb1" />
      <circle cx="262" cy="120" r="2.5" fill="#f48fb1" />
      {/* Bow */}
      <path d={paths.bowLeft} fill="#c2185b" />
      <path d={paths.bowRight} fill="#c2185b" />
      <path d={paths.bowTailL} fill="#ad1457" />
      <path d={paths.bowTailR} fill="#ad1457" />
      <circle cx="200" cy="68" r="4" fill="#880e4f" />
    </svg>
  );
}
