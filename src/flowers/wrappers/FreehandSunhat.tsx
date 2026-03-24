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

export function FreehandSunhat({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Brim outline - wide ellipse
    const brimTop: [number, number][] = [
      [60, 130],
      [90, 118],
      [130, 110],
      [170, 106],
      [200, 105],
      [230, 106],
      [270, 110],
      [310, 118],
      [340, 130],
    ];
    const brimBottom: [number, number][] = [
      [60, 130],
      [90, 145],
      [130, 155],
      [170, 160],
      [200, 162],
      [230, 160],
      [270, 155],
      [310, 145],
      [340, 130],
    ];
    // Brim edge (outer rim)
    const brimEdge: [number, number][] = [
      [55, 132],
      [80, 150],
      [120, 162],
      [160, 168],
      [200, 170],
      [240, 168],
      [280, 162],
      [320, 150],
      [345, 132],
    ];
    // Crown dome
    const crownLeft: [number, number][] = [
      [140, 110],
      [138, 95],
      [140, 78],
      [148, 62],
      [160, 50],
      [175, 42],
      [190, 38],
    ];
    const crownRight: [number, number][] = [
      [260, 110],
      [262, 95],
      [260, 78],
      [252, 62],
      [240, 50],
      [225, 42],
      [210, 38],
    ];
    const crownTop: [number, number][] = [
      [190, 38],
      [195, 36],
      [200, 35],
      [205, 36],
      [210, 38],
    ];
    // Ribbon band
    const ribbonTop: [number, number][] = [
      [140, 100],
      [160, 96],
      [180, 94],
      [200, 93],
      [220, 94],
      [240, 96],
      [260, 100],
    ];
    const ribbonBottom: [number, number][] = [
      [140, 112],
      [160, 108],
      [180, 106],
      [200, 105],
      [220, 106],
      [240, 108],
      [260, 112],
    ];
    // Bow on the right side
    const bowLoop1: [number, number][] = [
      [270, 105],
      [280, 95],
      [290, 88],
      [295, 85],
      [292, 92],
      [285, 100],
      [275, 106],
    ];
    const bowLoop2: [number, number][] = [
      [270, 105],
      [278, 112],
      [285, 118],
      [288, 122],
      [284, 118],
      [277, 112],
      [272, 108],
    ];
    const bowTail1: [number, number][] = [
      [270, 106],
      [278, 115],
      [282, 125],
      [280, 132],
    ];
    const bowTail2: [number, number][] = [
      [272, 104],
      [282, 108],
      [292, 115],
      [298, 122],
    ];
    // Horizontal weave lines on brim
    const weaveH1: [number, number][] = [
      [75, 128],
      [120, 120],
      [170, 116],
      [200, 115],
      [230, 116],
      [280, 120],
      [325, 128],
    ];
    const weaveH2: [number, number][] = [
      [70, 138],
      [120, 132],
      [170, 128],
      [200, 127],
      [230, 128],
      [280, 132],
      [330, 138],
    ];
    const weaveH3: [number, number][] = [
      [72, 148],
      [120, 143],
      [170, 140],
      [200, 139],
      [230, 140],
      [280, 143],
      [328, 148],
    ];
    // Vertical weave lines on brim
    const weaveV1: [number, number][] = [
      [120, 112],
      [118, 125],
      [117, 140],
      [118, 155],
    ];
    const weaveV2: [number, number][] = [
      [160, 108],
      [159, 120],
      [158, 135],
      [159, 155],
    ];
    const weaveV3: [number, number][] = [
      [200, 106],
      [200, 120],
      [200, 135],
      [200, 155],
    ];
    const weaveV4: [number, number][] = [
      [240, 108],
      [241, 120],
      [242, 135],
      [241, 155],
    ];
    const weaveV5: [number, number][] = [
      [280, 112],
      [282, 125],
      [283, 140],
      [282, 155],
    ];
    // Crown weave texture
    const crownWeave1: [number, number][] = [
      [155, 70],
      [175, 55],
      [200, 48],
      [225, 55],
      [245, 70],
    ];
    const crownWeave2: [number, number][] = [
      [145, 88],
      [170, 74],
      [200, 68],
      [230, 74],
      [255, 88],
    ];

    return {
      brimTop: getSvgPathFromStroke(getStroke(brimTop, { ...STROKE_OPTIONS, size: 3.5 })),
      brimBottom: getSvgPathFromStroke(getStroke(brimBottom, { ...STROKE_OPTIONS, size: 3 })),
      brimEdge: getSvgPathFromStroke(getStroke(brimEdge, { ...STROKE_OPTIONS, size: 3 })),
      crownLeft: getSvgPathFromStroke(getStroke(crownLeft, { ...STROKE_OPTIONS, size: 3 })),
      crownRight: getSvgPathFromStroke(getStroke(crownRight, { ...STROKE_OPTIONS, size: 3 })),
      crownTop: getSvgPathFromStroke(getStroke(crownTop, { ...STROKE_OPTIONS, size: 2.5 })),
      ribbonTop: getSvgPathFromStroke(getStroke(ribbonTop, { ...STROKE_OPTIONS, size: 2.5 })),
      ribbonBottom: getSvgPathFromStroke(getStroke(ribbonBottom, { ...STROKE_OPTIONS, size: 2.5 })),
      bowLoop1: getSvgPathFromStroke(getStroke(bowLoop1, { ...STROKE_OPTIONS, size: 2 })),
      bowLoop2: getSvgPathFromStroke(getStroke(bowLoop2, { ...STROKE_OPTIONS, size: 2 })),
      bowTail1: getSvgPathFromStroke(getStroke(bowTail1, { ...STROKE_OPTIONS, size: 1.5 })),
      bowTail2: getSvgPathFromStroke(getStroke(bowTail2, { ...STROKE_OPTIONS, size: 1.5 })),
      weaveH1: getSvgPathFromStroke(
        getStroke(weaveH1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      weaveH2: getSvgPathFromStroke(
        getStroke(weaveH2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      weaveH3: getSvgPathFromStroke(
        getStroke(weaveH3, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      weaveV1: getSvgPathFromStroke(
        getStroke(weaveV1, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      weaveV2: getSvgPathFromStroke(
        getStroke(weaveV2, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      weaveV3: getSvgPathFromStroke(
        getStroke(weaveV3, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      weaveV4: getSvgPathFromStroke(
        getStroke(weaveV4, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      weaveV5: getSvgPathFromStroke(
        getStroke(weaveV5, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      crownWeave1: getSvgPathFromStroke(
        getStroke(crownWeave1, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      crownWeave2: getSvgPathFromStroke(
        getStroke(crownWeave2, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Brim fill */}
      <path
        d="M60,130 C90,115 150,105 200,105 C250,105 310,115 340,130 C320,150 260,165 200,168 C140,165 80,150 60,130 Z"
        fill="#f5deb3"
      />
      {/* Crown fill */}
      <path
        d="M140,110 C138,90 148,60 175,42 C190,36 210,36 225,42 C252,60 262,90 260,110 Z"
        fill="#e8d4b8"
      />
      {/* Ribbon band fill */}
      <path
        d="M140,100 C170,94 200,93 260,100 L260,112 C230,106 170,106 140,112 Z"
        fill="rgba(188,143,143,0.6)"
      />
      {/* Crown weave texture */}
      <path d={paths.crownWeave1} fill="rgba(139,119,101,0.25)" />
      <path d={paths.crownWeave2} fill="rgba(139,119,101,0.25)" />
      {/* Weave texture - horizontal */}
      <path d={paths.weaveH1} fill="rgba(139,119,101,0.25)" />
      <path d={paths.weaveH2} fill="rgba(139,119,101,0.25)" />
      <path d={paths.weaveH3} fill="rgba(139,119,101,0.25)" />
      {/* Weave texture - vertical */}
      <path d={paths.weaveV1} fill="rgba(139,119,101,0.2)" />
      <path d={paths.weaveV2} fill="rgba(139,119,101,0.2)" />
      <path d={paths.weaveV3} fill="rgba(139,119,101,0.2)" />
      <path d={paths.weaveV4} fill="rgba(139,119,101,0.2)" />
      <path d={paths.weaveV5} fill="rgba(139,119,101,0.2)" />
      {/* Brim outline */}
      <path d={paths.brimTop} fill="#a1887f" />
      <path d={paths.brimBottom} fill="#a1887f" />
      <path d={paths.brimEdge} fill="#8d6e63" />
      {/* Crown outline */}
      <path d={paths.crownLeft} fill="#a1887f" />
      <path d={paths.crownRight} fill="#a1887f" />
      <path d={paths.crownTop} fill="#8d6e63" />
      {/* Ribbon */}
      <path d={paths.ribbonTop} fill="#c48b9f" />
      <path d={paths.ribbonBottom} fill="#c48b9f" />
      {/* Bow */}
      <path d={paths.bowLoop1} fill="#d4a0b0" />
      <path d={paths.bowLoop2} fill="#d4a0b0" />
      <path d={paths.bowTail1} fill="#c48b9f" />
      <path d={paths.bowTail2} fill="#c48b9f" />
    </svg>
  );
}
