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

export function FreehandVase({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Vase body outline - wider to fill viewBox
    const vaseLeft: [number, number][] = [
      [125, 45],
      [120, 50],
      [112, 65],
      [106, 85],
      [102, 105],
      [100, 125],
      [100, 145],
      [102, 165],
      [108, 180],
      [118, 192],
      [130, 198],
    ];
    const vaseRight: [number, number][] = [
      [275, 45],
      [280, 50],
      [288, 65],
      [294, 85],
      [298, 105],
      [300, 125],
      [300, 145],
      [298, 165],
      [292, 180],
      [282, 192],
      [270, 198],
    ];
    const vaseBottom: [number, number][] = [
      [130, 198],
      [155, 200],
      [200, 200],
      [245, 200],
      [270, 198],
    ];
    const vaseTop: [number, number][] = [
      [125, 45],
      [150, 42],
      [200, 40],
      [250, 42],
      [275, 45],
    ];
    const rimTop: [number, number][] = [
      [118, 40],
      [145, 36],
      [200, 34],
      [255, 36],
      [282, 40],
    ];
    const rimBottom: [number, number][] = [
      [118, 48],
      [145, 44],
      [200, 42],
      [255, 44],
      [282, 48],
    ];
    // Water line
    const waterLine: [number, number][] = [
      [105, 120],
      [130, 116],
      [160, 119],
      [200, 115],
      [240, 118],
      [270, 115],
      [296, 120],
    ];
    // Stems
    const stem1: [number, number][] = [
      [185, 40],
      [183, 80],
      [180, 120],
      [178, 160],
      [176, 198],
    ];
    const stem2: [number, number][] = [
      [200, 38],
      [200, 80],
      [200, 120],
      [200, 160],
      [200, 198],
    ];
    const stem3: [number, number][] = [
      [215, 40],
      [217, 80],
      [220, 120],
      [222, 160],
      [224, 198],
    ];
    // Highlight
    const highlight: [number, number][] = [
      [115, 60],
      [111, 85],
      [108, 110],
      [107, 135],
      [109, 160],
      [114, 180],
    ];

    return {
      left: getSvgPathFromStroke(getStroke(vaseLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      right: getSvgPathFromStroke(getStroke(vaseRight, { ...STROKE_OPTIONS, size: 3.5 })),
      bottom: getSvgPathFromStroke(getStroke(vaseBottom, { ...STROKE_OPTIONS, size: 3 })),
      top: getSvgPathFromStroke(getStroke(vaseTop, { ...STROKE_OPTIONS, size: 2.5 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...STROKE_OPTIONS, size: 3 })),
      rimBottom: getSvgPathFromStroke(getStroke(rimBottom, { ...STROKE_OPTIONS, size: 2.5 })),
      water: getSvgPathFromStroke(
        getStroke(waterLine, { ...STROKE_OPTIONS, size: 2, thinning: 0.3 }),
      ),
      stem1: getSvgPathFromStroke(getStroke(stem1, { ...STROKE_OPTIONS, size: 2 })),
      stem2: getSvgPathFromStroke(getStroke(stem2, { ...STROKE_OPTIONS, size: 2.5 })),
      stem3: getSvgPathFromStroke(getStroke(stem3, { ...STROKE_OPTIONS, size: 2 })),
      highlight: getSvgPathFromStroke(
        getStroke(highlight, { ...STROKE_OPTIONS, size: 2, thinning: 0.8 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Glass fill */}
      <path
        d="M118,45 L112,65 C104,85 100,115 100,145 C102,175 118,195 130,200 L270,200 C282,195 298,175 300,145 C300,115 296,85 288,65 L282,45 Z"
        fill="rgba(200,230,230,0.2)"
      />
      {/* Water */}
      <path
        d="M105,120 C130,115 200,118 296,120 L300,165 C298,180 282,195 270,198 L130,198 C118,195 102,180 100,165 Z"
        fill="rgba(128,203,196,0.18)"
      />
      {/* Stems */}
      <path d={paths.stem1} fill="rgba(102,187,106,0.4)" />
      <path d={paths.stem2} fill="rgba(76,175,80,0.4)" />
      <path d={paths.stem3} fill="rgba(102,187,106,0.4)" />
      {/* Vase outline */}
      <path d={paths.left} fill="#78909c" />
      <path d={paths.right} fill="#78909c" />
      <path d={paths.bottom} fill="#78909c" />
      <path d={paths.top} fill="#90a4ae" />
      {/* Rim */}
      <path d={paths.rimTop} fill="#607d8b" />
      <path d={paths.rimBottom} fill="#78909c" />
      {/* Water line */}
      <path d={paths.water} fill="rgba(77,182,172,0.4)" />
      {/* Glass highlight */}
      <path d={paths.highlight} fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}
