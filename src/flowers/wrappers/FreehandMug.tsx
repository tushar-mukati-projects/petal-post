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

export function FreehandMug({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Mug body - left side
    const bodyLeft: [number, number][] = [
      [130, 55],
      [128, 70],
      [126, 90],
      [125, 110],
      [124, 130],
      [124, 150],
      [125, 170],
      [128, 185],
      [132, 190],
    ];
    // Mug body - right side
    const bodyRight: [number, number][] = [
      [250, 55],
      [252, 70],
      [254, 90],
      [255, 110],
      [256, 130],
      [256, 150],
      [255, 170],
      [252, 185],
      [248, 190],
    ];
    // Mug bottom
    const bodyBottom: [number, number][] = [
      [132, 190],
      [155, 194],
      [180, 196],
      [200, 197],
      [220, 196],
      [245, 194],
      [248, 190],
    ];
    // Rim ellipse top
    const rimTop: [number, number][] = [
      [125, 55],
      [145, 48],
      [170, 44],
      [200, 42],
      [230, 44],
      [250, 48],
      [255, 55],
    ];
    // Rim ellipse bottom
    const rimBottom: [number, number][] = [
      [127, 62],
      [150, 58],
      [175, 55],
      [200, 54],
      [225, 55],
      [250, 58],
      [253, 62],
    ];
    // Base
    const baseLine: [number, number][] = [
      [128, 192],
      [155, 196],
      [180, 198],
      [200, 199],
      [220, 198],
      [245, 196],
      [252, 192],
    ];
    // C-handle outer
    const handleOuter: [number, number][] = [
      [254, 80],
      [268, 78],
      [282, 82],
      [292, 92],
      [298, 108],
      [300, 125],
      [298, 142],
      [292, 155],
      [282, 162],
      [268, 165],
      [256, 160],
    ];
    // C-handle inner
    const handleInner: [number, number][] = [
      [256, 95],
      [266, 93],
      [275, 98],
      [280, 108],
      [282, 120],
      [280, 135],
      [275, 145],
      [266, 148],
      [258, 145],
    ];
    // Liquid surface inside
    const liquidSurface: [number, number][] = [
      [132, 70],
      [155, 66],
      [180, 64],
      [200, 63],
      [220, 64],
      [245, 66],
      [252, 70],
    ];
    // Steam swirl 1
    const steam1: [number, number][] = [
      [175, 38],
      [172, 30],
      [175, 22],
      [180, 16],
      [178, 10],
    ];
    // Steam swirl 2
    const steam2: [number, number][] = [
      [200, 36],
      [198, 26],
      [202, 18],
      [198, 10],
      [200, 4],
    ];
    // Steam swirl 3
    const steam3: [number, number][] = [
      [225, 38],
      [228, 30],
      [225, 22],
      [220, 16],
      [222, 10],
    ];
    // Heart on front - left half
    const heartLeft: [number, number][] = [
      [190, 140],
      [184, 132],
      [180, 124],
      [182, 116],
      [188, 114],
      [192, 118],
      [190, 128],
    ];
    // Heart on front - right half
    const heartRight: [number, number][] = [
      [190, 140],
      [196, 132],
      [200, 124],
      [198, 116],
      [192, 114],
      [188, 118],
      [190, 128],
    ];
    // Mug body highlight
    const highlight: [number, number][] = [
      [135, 70],
      [133, 90],
      [132, 110],
      [132, 130],
      [133, 150],
      [135, 170],
    ];
    // Small shine dots (short strokes)
    const shine1: [number, number][] = [
      [145, 85],
      [144, 90],
      [145, 95],
    ];
    const shine2: [number, number][] = [
      [146, 105],
      [145, 108],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...STROKE_OPTIONS, size: 3 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...STROKE_OPTIONS, size: 3 })),
      rimBottom: getSvgPathFromStroke(getStroke(rimBottom, { ...STROKE_OPTIONS, size: 2.5 })),
      baseLine: getSvgPathFromStroke(getStroke(baseLine, { ...STROKE_OPTIONS, size: 3 })),
      handleOuter: getSvgPathFromStroke(getStroke(handleOuter, { ...STROKE_OPTIONS, size: 3.5 })),
      handleInner: getSvgPathFromStroke(getStroke(handleInner, { ...STROKE_OPTIONS, size: 2.5 })),
      liquidSurface: getSvgPathFromStroke(
        getStroke(liquidSurface, { ...STROKE_OPTIONS, size: 2, thinning: 0.3 }),
      ),
      steam1: getSvgPathFromStroke(
        getStroke(steam1, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      steam2: getSvgPathFromStroke(
        getStroke(steam2, { ...STROKE_OPTIONS, size: 2.5, thinning: 0.7 }),
      ),
      steam3: getSvgPathFromStroke(
        getStroke(steam3, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 }),
      ),
      heartLeft: getSvgPathFromStroke(getStroke(heartLeft, { ...STROKE_OPTIONS, size: 2 })),
      heartRight: getSvgPathFromStroke(getStroke(heartRight, { ...STROKE_OPTIONS, size: 2 })),
      highlight: getSvgPathFromStroke(
        getStroke(highlight, { ...STROKE_OPTIONS, size: 2, thinning: 0.8 }),
      ),
      shine1: getSvgPathFromStroke(getStroke(shine1, { ...STROKE_OPTIONS, size: 1.5 })),
      shine2: getSvgPathFromStroke(getStroke(shine2, { ...STROKE_OPTIONS, size: 1.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Mug body fill */}
      <path
        d="M130,55 C128,70 125,100 124,130 C124,160 128,185 132,190 L248,190 C252,185 256,160 256,130 C255,100 252,70 250,55 Z"
        fill="#90caf9"
      />
      {/* Liquid inside */}
      <path
        d="M132,70 C155,64 200,62 252,70 L256,130 C256,160 252,185 248,190 L132,190 C128,185 124,160 124,130 Z"
        fill="rgba(66,165,245,0.3)"
      />
      {/* Handle fill */}
      <path
        d="M254,80 C270,76 292,88 300,125 C298,155 275,168 256,160 L258,145 C270,148 282,138 282,120 C282,102 270,92 256,95 Z"
        fill="#90caf9"
      />
      {/* Heart fill on front */}
      <path
        d="M190,140 C184,130 178,120 182,114 C188,110 192,116 190,126 C188,116 192,110 198,114 C202,120 196,130 190,140 Z"
        fill="rgba(244,67,54,0.5)"
      />
      {/* Steam */}
      <path d={paths.steam1} fill="rgba(200,200,200,0.4)" />
      <path d={paths.steam2} fill="rgba(200,200,200,0.45)" />
      <path d={paths.steam3} fill="rgba(200,200,200,0.4)" />
      {/* Highlight */}
      <path d={paths.highlight} fill="rgba(255,255,255,0.3)" />
      <path d={paths.shine1} fill="rgba(255,255,255,0.4)" />
      <path d={paths.shine2} fill="rgba(255,255,255,0.35)" />
      {/* Body outline */}
      <path d={paths.bodyLeft} fill="#5c6bc0" />
      <path d={paths.bodyRight} fill="#5c6bc0" />
      <path d={paths.bodyBottom} fill="#5c6bc0" />
      {/* Rim */}
      <path d={paths.rimTop} fill="#3f51b5" />
      <path d={paths.rimBottom} fill="#5c6bc0" />
      {/* Base */}
      <path d={paths.baseLine} fill="#3f51b5" />
      {/* Handle */}
      <path d={paths.handleOuter} fill="#5c6bc0" />
      <path d={paths.handleInner} fill="#7986cb" />
      {/* Liquid surface line */}
      <path d={paths.liquidSurface} fill="rgba(33,150,243,0.5)" />
      {/* Heart outline on front */}
      <path d={paths.heartLeft} fill="#e53935" />
      <path d={paths.heartRight} fill="#e53935" />
    </svg>
  );
}
