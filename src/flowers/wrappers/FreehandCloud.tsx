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

export function FreehandCloud({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Cloud bumps - 6 overlapping circular arcs forming the top
    const bump1: [number, number][] = [
      [88, 105],
      [85, 92],
      [88, 76],
      [98, 65],
      [112, 60],
      [128, 62],
      [138, 70],
      [140, 82],
    ];
    const bump2: [number, number][] = [
      [125, 78],
      [128, 62],
      [138, 48],
      [155, 40],
      [172, 40],
      [185, 48],
      [190, 62],
    ];
    const bump3: [number, number][] = [
      [178, 56],
      [183, 38],
      [196, 28],
      [212, 24],
      [228, 28],
      [238, 38],
      [242, 52],
    ];
    const bump4: [number, number][] = [
      [234, 44],
      [242, 32],
      [258, 26],
      [274, 28],
      [284, 38],
      [288, 52],
    ];
    const bump5: [number, number][] = [
      [280, 46],
      [290, 38],
      [304, 36],
      [316, 42],
      [324, 54],
      [326, 68],
      [320, 82],
    ];
    const bump6: [number, number][] = [
      [316, 78],
      [326, 86],
      [328, 98],
      [324, 108],
      [314, 114],
    ];

    // Flat bottom
    const bottomLine: [number, number][] = [
      [88, 105],
      [115, 116],
      [148, 122],
      [180, 126],
      [210, 128],
      [240, 126],
      [270, 122],
      [300, 116],
      [314, 112],
    ];

    // Blue shadow underneath
    const shadowLine: [number, number][] = [
      [100, 122],
      [135, 132],
      [175, 136],
      [210, 138],
      [245, 136],
      [285, 130],
      [310, 122],
    ];

    // Rain drops
    const drop1: [number, number][] = [
      [155, 148],
      [153, 158],
      [152, 168],
      [153, 176],
      [156, 184],
      [159, 190],
    ];
    const drop2: [number, number][] = [
      [210, 150],
      [208, 160],
      [207, 170],
      [208, 178],
      [211, 186],
      [214, 192],
    ];
    const drop3: [number, number][] = [
      [265, 146],
      [263, 156],
      [262, 166],
      [263, 174],
      [266, 182],
      [269, 188],
    ];

    // Sun peeking behind (top right)
    const sunArc: [number, number][] = [
      [310, 24],
      [322, 20],
      [336, 18],
      [350, 20],
      [360, 28],
      [366, 38],
      [368, 50],
      [364, 62],
    ];
    // Sun rays
    const ray1: [number, number][] = [
      [368, 34],
      [378, 28],
      [386, 24],
    ];
    const ray2: [number, number][] = [
      [372, 48],
      [384, 46],
      [394, 44],
    ];
    const ray3: [number, number][] = [
      [370, 60],
      [380, 64],
      [390, 66],
    ];
    const ray4: [number, number][] = [
      [356, 20],
      [362, 10],
      [366, 4],
    ];
    const ray5: [number, number][] = [
      [340, 16],
      [342, 6],
      [344, -2],
    ];

    return {
      bump1: getSvgPathFromStroke(getStroke(bump1, { ...OPTS, size: 3.5 })),
      bump2: getSvgPathFromStroke(getStroke(bump2, { ...OPTS, size: 3.5 })),
      bump3: getSvgPathFromStroke(getStroke(bump3, { ...OPTS, size: 3.5 })),
      bump4: getSvgPathFromStroke(getStroke(bump4, { ...OPTS, size: 3.5 })),
      bump5: getSvgPathFromStroke(getStroke(bump5, { ...OPTS, size: 3.5 })),
      bump6: getSvgPathFromStroke(getStroke(bump6, { ...OPTS, size: 3 })),
      bottomLine: getSvgPathFromStroke(getStroke(bottomLine, { ...OPTS, size: 3 })),
      shadowLine: getSvgPathFromStroke(
        getStroke(shadowLine, { ...OPTS, size: 2.5, thinning: 0.3 }),
      ),
      drop1: getSvgPathFromStroke(getStroke(drop1, { ...OPTS, size: 2.5, thinning: 0.7 })),
      drop2: getSvgPathFromStroke(getStroke(drop2, { ...OPTS, size: 2.5, thinning: 0.7 })),
      drop3: getSvgPathFromStroke(getStroke(drop3, { ...OPTS, size: 2.5, thinning: 0.7 })),
      sunArc: getSvgPathFromStroke(getStroke(sunArc, { ...OPTS, size: 3 })),
      ray1: getSvgPathFromStroke(getStroke(ray1, { ...OPTS, size: 2, thinning: 0.8 })),
      ray2: getSvgPathFromStroke(getStroke(ray2, { ...OPTS, size: 2, thinning: 0.8 })),
      ray3: getSvgPathFromStroke(getStroke(ray3, { ...OPTS, size: 2, thinning: 0.8 })),
      ray4: getSvgPathFromStroke(getStroke(ray4, { ...OPTS, size: 2, thinning: 0.8 })),
      ray5: getSvgPathFromStroke(getStroke(ray5, { ...OPTS, size: 2, thinning: 0.8 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Sun fill behind cloud */}
      <circle cx="345" cy="38" r="30" fill="#fff9c4" />
      {/* Sun rays */}
      <path d={paths.ray1} fill="#ffd54f" />
      <path d={paths.ray2} fill="#ffd54f" />
      <path d={paths.ray3} fill="#ffd54f" />
      <path d={paths.ray4} fill="#ffd54f" />
      <path d={paths.ray5} fill="#ffd54f" />
      {/* Sun arc outline */}
      <path d={paths.sunArc} fill="#ffb300" />
      {/* Cloud shadow fill */}
      <path
        d="M100,122 C135,134 175,138 210,138 C250,138 290,132 310,122 L314,114 C314,120 290,128 210,132 C130,128 98,118 96,112 Z"
        fill="#bbdefb"
      />
      <path d={paths.shadowLine} fill="rgba(144,202,249,0.5)" />
      {/* Cloud body fill */}
      <path
        d="M88,105 C84,88 90,62 115,58 C125,40 155,34 178,46 C186,28 214,20 235,30 C246,24 274,26 286,44 C298,36 326,40 328,66 C334,76 330,105 316,112 L314,114 C295,118 260,126 210,128 C160,126 115,118 88,105 Z"
        fill="#ffffff"
      />
      {/* Cloud bump outlines */}
      <path d={paths.bump1} fill="#90a4ae" />
      <path d={paths.bump2} fill="#90a4ae" />
      <path d={paths.bump3} fill="#90a4ae" />
      <path d={paths.bump4} fill="#90a4ae" />
      <path d={paths.bump5} fill="#90a4ae" />
      <path d={paths.bump6} fill="#90a4ae" />
      {/* Bottom line */}
      <path d={paths.bottomLine} fill="#90a4ae" />
      {/* Rosy cheek dots */}
      <circle cx="165" cy="88" r="7" fill="rgba(244,143,177,0.4)" />
      <circle cx="255" cy="82" r="7" fill="rgba(244,143,177,0.4)" />
      {/* Rain drops */}
      <path d={paths.drop1} fill="#64b5f6" />
      <path d={paths.drop2} fill="#64b5f6" />
      <path d={paths.drop3} fill="#64b5f6" />
      {/* Drop tips */}
      <circle cx="158" cy="190" r="2.5" fill="#64b5f6" />
      <circle cx="213" cy="192" r="2.5" fill="#64b5f6" />
      <circle cx="268" cy="188" r="2.5" fill="#64b5f6" />
    </svg>
  );
}
