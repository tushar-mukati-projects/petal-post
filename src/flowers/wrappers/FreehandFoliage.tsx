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

export function FreehandFoliage({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Large leaf left 1
    const leafLeft1: [number, number][] = [
      [130, 100],
      [115, 80],
      [105, 60],
      [100, 40],
      [105, 30],
      [115, 35],
      [125, 50],
      [135, 70],
      [140, 90],
      [135, 100],
    ];
    // Large leaf left 2
    const leafLeft2: [number, number][] = [
      [150, 110],
      [130, 100],
      [110, 95],
      [90, 90],
      [80, 85],
      [85, 78],
      [100, 80],
      [120, 85],
      [140, 95],
      [155, 105],
    ];
    // Large leaf right 1
    const leafRight1: [number, number][] = [
      [270, 100],
      [285, 80],
      [295, 60],
      [300, 40],
      [295, 30],
      [285, 35],
      [275, 50],
      [265, 70],
      [260, 90],
      [265, 100],
    ];
    // Large leaf right 2
    const leafRight2: [number, number][] = [
      [250, 110],
      [270, 100],
      [290, 95],
      [310, 90],
      [320, 85],
      [315, 78],
      [300, 80],
      [280, 85],
      [260, 95],
      [245, 105],
    ];
    // Leaf vein left 1
    const veinL1: [number, number][] = [
      [130, 100],
      [120, 75],
      [110, 50],
      [103, 35],
    ];
    // Leaf vein left 2
    const veinL2: [number, number][] = [
      [150, 108],
      [125, 95],
      [100, 85],
      [85, 82],
    ];
    // Leaf vein right 1
    const veinR1: [number, number][] = [
      [270, 100],
      [280, 75],
      [290, 50],
      [297, 35],
    ];
    // Leaf vein right 2
    const veinR2: [number, number][] = [
      [250, 108],
      [275, 95],
      [300, 85],
      [315, 82],
    ];
    // Stems
    const stem1: [number, number][] = [
      [185, 30],
      [183, 60],
      [182, 100],
      [180, 140],
      [178, 180],
      [177, 210],
    ];
    const stem2: [number, number][] = [
      [195, 28],
      [196, 60],
      [197, 100],
      [198, 140],
      [200, 180],
      [201, 210],
    ];
    const stem3: [number, number][] = [
      [205, 30],
      [208, 60],
      [210, 100],
      [212, 140],
      [214, 180],
      [216, 210],
    ];
    const stem4: [number, number][] = [
      [175, 32],
      [172, 60],
      [170, 100],
      [168, 140],
      [166, 180],
      [164, 210],
    ];
    const stem5: [number, number][] = [
      [215, 32],
      [218, 60],
      [220, 100],
      [222, 140],
      [224, 180],
      [226, 210],
    ];
    // Fern fronds left
    const fernL1: [number, number][] = [
      [155, 70],
      [145, 65],
      [138, 58],
      [140, 52],
      [148, 55],
      [155, 62],
    ];
    const fernL2: [number, number][] = [
      [150, 85],
      [138, 80],
      [130, 74],
      [132, 68],
      [140, 72],
      [150, 78],
    ];
    const fernL3: [number, number][] = [
      [148, 55],
      [140, 48],
      [135, 40],
      [138, 36],
      [144, 42],
      [150, 50],
    ];
    // Fern fronds right
    const fernR1: [number, number][] = [
      [245, 70],
      [255, 65],
      [262, 58],
      [260, 52],
      [252, 55],
      [245, 62],
    ];
    const fernR2: [number, number][] = [
      [250, 85],
      [262, 80],
      [270, 74],
      [268, 68],
      [260, 72],
      [250, 78],
    ];
    // Eucalyptus sprigs left
    const eucL: [number, number][] = [
      [160, 50],
      [150, 42],
      [142, 30],
      [138, 20],
      [140, 15],
      [148, 22],
      [155, 35],
      [160, 45],
    ];
    // Eucalyptus sprigs right
    const eucR: [number, number][] = [
      [240, 50],
      [250, 42],
      [258, 30],
      [262, 20],
      [260, 15],
      [252, 22],
      [245, 35],
      [240, 45],
    ];
    // Twine tie
    const twineMain: [number, number][] = [
      [160, 140],
      [170, 137],
      [180, 135],
      [190, 134],
      [200, 133],
      [210, 134],
      [220, 135],
      [230, 137],
      [240, 140],
    ];
    const twineMain2: [number, number][] = [
      [160, 145],
      [170, 142],
      [180, 140],
      [190, 139],
      [200, 138],
      [210, 139],
      [220, 140],
      [230, 142],
      [240, 145],
    ];
    // Bow left loop
    const bowLeft: [number, number][] = [
      [190, 136],
      [182, 130],
      [178, 122],
      [180, 116],
      [186, 118],
      [190, 126],
      [192, 134],
    ];
    // Bow right loop
    const bowRight: [number, number][] = [
      [210, 136],
      [218, 130],
      [222, 122],
      [220, 116],
      [214, 118],
      [210, 126],
      [208, 134],
    ];
    // Bow tail left
    const bowTailL: [number, number][] = [
      [192, 138],
      [185, 148],
      [180, 158],
    ];
    // Bow tail right
    const bowTailR: [number, number][] = [
      [208, 138],
      [215, 148],
      [220, 158],
    ];

    return {
      leafLeft1: getSvgPathFromStroke(getStroke(leafLeft1, { ...STROKE_OPTIONS, size: 3.5 })),
      leafLeft2: getSvgPathFromStroke(getStroke(leafLeft2, { ...STROKE_OPTIONS, size: 3.5 })),
      leafRight1: getSvgPathFromStroke(getStroke(leafRight1, { ...STROKE_OPTIONS, size: 3.5 })),
      leafRight2: getSvgPathFromStroke(getStroke(leafRight2, { ...STROKE_OPTIONS, size: 3.5 })),
      veinL1: getSvgPathFromStroke(getStroke(veinL1, { ...STROKE_OPTIONS, size: 1.5 })),
      veinL2: getSvgPathFromStroke(getStroke(veinL2, { ...STROKE_OPTIONS, size: 1.5 })),
      veinR1: getSvgPathFromStroke(getStroke(veinR1, { ...STROKE_OPTIONS, size: 1.5 })),
      veinR2: getSvgPathFromStroke(getStroke(veinR2, { ...STROKE_OPTIONS, size: 1.5 })),
      stem1: getSvgPathFromStroke(getStroke(stem1, { ...STROKE_OPTIONS, size: 2.5 })),
      stem2: getSvgPathFromStroke(getStroke(stem2, { ...STROKE_OPTIONS, size: 2.5 })),
      stem3: getSvgPathFromStroke(getStroke(stem3, { ...STROKE_OPTIONS, size: 2 })),
      stem4: getSvgPathFromStroke(getStroke(stem4, { ...STROKE_OPTIONS, size: 2 })),
      stem5: getSvgPathFromStroke(getStroke(stem5, { ...STROKE_OPTIONS, size: 2 })),
      fernL1: getSvgPathFromStroke(getStroke(fernL1, { ...STROKE_OPTIONS, size: 2.5 })),
      fernL2: getSvgPathFromStroke(getStroke(fernL2, { ...STROKE_OPTIONS, size: 2.5 })),
      fernL3: getSvgPathFromStroke(getStroke(fernL3, { ...STROKE_OPTIONS, size: 2.5 })),
      fernR1: getSvgPathFromStroke(getStroke(fernR1, { ...STROKE_OPTIONS, size: 2.5 })),
      fernR2: getSvgPathFromStroke(getStroke(fernR2, { ...STROKE_OPTIONS, size: 2.5 })),
      eucL: getSvgPathFromStroke(getStroke(eucL, { ...STROKE_OPTIONS, size: 2 })),
      eucR: getSvgPathFromStroke(getStroke(eucR, { ...STROKE_OPTIONS, size: 2 })),
      twineMain: getSvgPathFromStroke(getStroke(twineMain, { ...STROKE_OPTIONS, size: 2.5 })),
      twineMain2: getSvgPathFromStroke(getStroke(twineMain2, { ...STROKE_OPTIONS, size: 2.5 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...STROKE_OPTIONS, size: 2 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...STROKE_OPTIONS, size: 2 })),
      bowTailL: getSvgPathFromStroke(getStroke(bowTailL, { ...STROKE_OPTIONS, size: 1.5 })),
      bowTailR: getSvgPathFromStroke(getStroke(bowTailR, { ...STROKE_OPTIONS, size: 1.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 220" className={className}>
      {/* Leaf fills */}
      <path
        d="M130,100 C120,80 108,55 100,40 C100,28 115,30 125,50 C135,70 140,90 135,100 Z"
        fill="rgba(46,125,50,0.35)"
      />
      <path
        d="M150,110 C130,100 105,92 80,85 C82,75 100,76 125,85 C145,93 155,105 155,110 Z"
        fill="rgba(56,142,60,0.3)"
      />
      <path
        d="M270,100 C280,80 292,55 300,40 C300,28 285,30 275,50 C265,70 260,90 265,100 Z"
        fill="rgba(46,125,50,0.35)"
      />
      <path
        d="M250,110 C270,100 295,92 320,85 C318,75 300,76 275,85 C255,93 245,105 245,110 Z"
        fill="rgba(56,142,60,0.3)"
      />
      {/* Fern frond fills (lighter green) */}
      <path
        d="M155,70 C145,63 136,55 140,50 C148,52 156,62 155,70 Z"
        fill="rgba(129,199,132,0.4)"
      />
      <path
        d="M150,85 C138,78 128,70 132,65 C140,68 152,78 150,85 Z"
        fill="rgba(129,199,132,0.4)"
      />
      <path
        d="M148,55 C140,46 133,38 138,34 C144,40 150,48 148,55 Z"
        fill="rgba(129,199,132,0.4)"
      />
      <path
        d="M245,70 C255,63 264,55 260,50 C252,52 244,62 245,70 Z"
        fill="rgba(129,199,132,0.4)"
      />
      <path
        d="M250,85 C262,78 272,70 268,65 C260,68 248,78 250,85 Z"
        fill="rgba(129,199,132,0.4)"
      />
      {/* Eucalyptus sprig fills */}
      <path d="M160,50 C150,40 140,25 138,15 C142,12 155,30 160,50 Z" fill="rgba(76,175,80,0.3)" />
      <path d="M240,50 C250,40 260,25 262,15 C258,12 245,30 240,50 Z" fill="rgba(76,175,80,0.3)" />
      {/* Stems */}
      <path d={paths.stem1} fill="rgba(76,175,80,0.5)" />
      <path d={paths.stem2} fill="rgba(56,142,60,0.5)" />
      <path d={paths.stem3} fill="rgba(76,175,80,0.45)" />
      <path d={paths.stem4} fill="rgba(76,175,80,0.4)" />
      <path d={paths.stem5} fill="rgba(76,175,80,0.4)" />
      {/* Leaf outlines */}
      <path d={paths.leafLeft1} fill="#2e7d32" />
      <path d={paths.leafLeft2} fill="#388e3c" />
      <path d={paths.leafRight1} fill="#2e7d32" />
      <path d={paths.leafRight2} fill="#388e3c" />
      {/* Leaf veins */}
      <path d={paths.veinL1} fill="rgba(27,94,32,0.6)" />
      <path d={paths.veinL2} fill="rgba(27,94,32,0.6)" />
      <path d={paths.veinR1} fill="rgba(27,94,32,0.6)" />
      <path d={paths.veinR2} fill="rgba(27,94,32,0.6)" />
      {/* Fern frond outlines */}
      <path d={paths.fernL1} fill="#66bb6a" />
      <path d={paths.fernL2} fill="#66bb6a" />
      <path d={paths.fernL3} fill="#66bb6a" />
      <path d={paths.fernR1} fill="#66bb6a" />
      <path d={paths.fernR2} fill="#66bb6a" />
      {/* Eucalyptus sprig outlines */}
      <path d={paths.eucL} fill="#4caf50" />
      <path d={paths.eucR} fill="#4caf50" />
      {/* Twine tie */}
      <path d={paths.twineMain} fill="#8d6e63" />
      <path d={paths.twineMain2} fill="#8d6e63" />
      {/* Bow */}
      <path d={paths.bowLeft} fill="#a1887f" />
      <path d={paths.bowRight} fill="#a1887f" />
      <path d={paths.bowTailL} fill="#8d6e63" />
      <path d={paths.bowTailR} fill="#8d6e63" />
    </svg>
  );
}
