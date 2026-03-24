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

export function FreehandPaperbag({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Bag body - left side
    const bodyLeft: [number, number][] = [
      [130, 50],
      [128, 70],
      [126, 100],
      [125, 130],
      [124, 160],
      [124, 190],
    ];
    // Bag body - right side
    const bodyRight: [number, number][] = [
      [270, 50],
      [272, 70],
      [274, 100],
      [275, 130],
      [276, 160],
      [276, 190],
    ];
    // Bag bottom
    const bodyBottom: [number, number][] = [
      [124, 190],
      [150, 193],
      [175, 195],
      [200, 196],
      [225, 195],
      [250, 193],
      [276, 190],
    ];
    // Folded top edge
    const topEdge: [number, number][] = [
      [128, 50],
      [150, 47],
      [175, 45],
      [200, 44],
      [225, 45],
      [250, 47],
      [272, 50],
    ];
    // Second fold line
    const foldLine: [number, number][] = [
      [130, 58],
      [155, 55],
      [180, 53],
      [200, 52],
      [220, 53],
      [245, 55],
      [270, 58],
    ];
    // Left handle
    const handleLeft: [number, number][] = [
      [155, 52],
      [150, 38],
      [148, 28],
      [152, 20],
      [160, 16],
      [168, 20],
      [172, 28],
      [170, 38],
      [168, 52],
    ];
    // Right handle
    const handleRight: [number, number][] = [
      [232, 52],
      [228, 38],
      [226, 28],
      [230, 20],
      [238, 16],
      [246, 20],
      [250, 28],
      [248, 38],
      [245, 52],
    ];
    // Side crease left
    const creaseLeft: [number, number][] = [
      [155, 58],
      [153, 90],
      [151, 130],
      [150, 170],
      [149, 192],
    ];
    // Side crease right
    const creaseRight: [number, number][] = [
      [245, 58],
      [247, 90],
      [249, 130],
      [250, 170],
      [251, 192],
    ];
    // Bottom crease
    const bottomCrease: [number, number][] = [
      [130, 178],
      [155, 180],
      [180, 181],
      [200, 182],
      [220, 181],
      [245, 180],
      [270, 178],
    ];
    // Paper texture lines
    const texture1: [number, number][] = [
      [140, 75],
      [160, 73],
      [180, 72],
      [200, 71],
      [220, 72],
      [240, 73],
      [260, 75],
    ];
    const texture2: [number, number][] = [
      [138, 110],
      [160, 108],
      [180, 107],
      [200, 106],
      [220, 107],
      [240, 108],
      [262, 110],
    ];
    const texture3: [number, number][] = [
      [136, 145],
      [160, 143],
      [180, 142],
      [200, 141],
      [220, 142],
      [240, 143],
      [264, 145],
    ];
    // Tissue paper peeking out - left piece
    const tissueL: [number, number][] = [
      [160, 48],
      [155, 35],
      [148, 22],
      [145, 12],
      [150, 8],
      [158, 15],
      [165, 28],
      [168, 40],
    ];
    // Tissue paper peeking out - center
    const tissueC: [number, number][] = [
      [195, 45],
      [192, 30],
      [190, 18],
      [192, 8],
      [198, 5],
      [204, 8],
      [206, 18],
      [205, 30],
      [203, 45],
    ];
    // Tissue paper peeking out - right piece
    const tissueR: [number, number][] = [
      [238, 48],
      [242, 35],
      [248, 22],
      [252, 12],
      [248, 8],
      [240, 15],
      [235, 28],
      [233, 40],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...STROKE_OPTIONS, size: 3 })),
      topEdge: getSvgPathFromStroke(getStroke(topEdge, { ...STROKE_OPTIONS, size: 3 })),
      foldLine: getSvgPathFromStroke(getStroke(foldLine, { ...STROKE_OPTIONS, size: 2.5 })),
      handleLeft: getSvgPathFromStroke(getStroke(handleLeft, { ...STROKE_OPTIONS, size: 3 })),
      handleRight: getSvgPathFromStroke(getStroke(handleRight, { ...STROKE_OPTIONS, size: 3 })),
      creaseLeft: getSvgPathFromStroke(
        getStroke(creaseLeft, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
      creaseRight: getSvgPathFromStroke(
        getStroke(creaseRight, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
      bottomCrease: getSvgPathFromStroke(getStroke(bottomCrease, { ...STROKE_OPTIONS, size: 2 })),
      texture1: getSvgPathFromStroke(
        getStroke(texture1, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      texture2: getSvgPathFromStroke(
        getStroke(texture2, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      texture3: getSvgPathFromStroke(
        getStroke(texture3, { ...STROKE_OPTIONS, size: 1.2, thinning: 0.3 }),
      ),
      tissueL: getSvgPathFromStroke(getStroke(tissueL, { ...STROKE_OPTIONS, size: 2 })),
      tissueC: getSvgPathFromStroke(getStroke(tissueC, { ...STROKE_OPTIONS, size: 2 })),
      tissueR: getSvgPathFromStroke(getStroke(tissueR, { ...STROKE_OPTIONS, size: 2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Bag body fill */}
      <path
        d="M130,50 C128,70 126,100 125,140 C124,170 124,190 124,190 L276,190 C276,170 275,140 274,100 C272,70 270,50 270,50 Z"
        fill="#d4a574"
      />
      {/* Folded top area (slightly lighter) */}
      <path d="M130,50 L270,50 L272,58 L130,58 Z" fill="rgba(222,184,135,0.5)" />
      {/* Side gusset shadows */}
      <path d="M130,58 L155,58 L149,192 L124,190 Z" fill="rgba(0,0,0,0.06)" />
      <path d="M270,58 L245,58 L251,192 L276,190 Z" fill="rgba(0,0,0,0.06)" />
      {/* Tissue paper fills */}
      <path d="M160,48 C155,30 148,15 150,8 C158,12 168,35 168,48 Z" fill="rgba(255,255,255,0.7)" />
      <path
        d="M195,45 C192,25 190,12 198,5 C206,12 206,25 203,45 Z"
        fill="rgba(255,255,255,0.75)"
      />
      <path d="M238,48 C242,30 252,15 248,8 C240,12 233,35 233,48 Z" fill="rgba(255,255,255,0.7)" />
      {/* Paper texture */}
      <path d={paths.texture1} fill="rgba(139,90,43,0.15)" />
      <path d={paths.texture2} fill="rgba(139,90,43,0.15)" />
      <path d={paths.texture3} fill="rgba(139,90,43,0.15)" />
      {/* Side creases */}
      <path d={paths.creaseLeft} fill="rgba(139,90,43,0.3)" />
      <path d={paths.creaseRight} fill="rgba(139,90,43,0.3)" />
      {/* Bottom crease */}
      <path d={paths.bottomCrease} fill="rgba(139,90,43,0.25)" />
      {/* Bag outline */}
      <path d={paths.bodyLeft} fill="#8b5a2b" />
      <path d={paths.bodyRight} fill="#8b5a2b" />
      <path d={paths.bodyBottom} fill="#8b5a2b" />
      {/* Top edge */}
      <path d={paths.topEdge} fill="#8b5a2b" />
      <path d={paths.foldLine} fill="rgba(139,90,43,0.5)" />
      {/* Handles */}
      <path d={paths.handleLeft} fill="#6d4c2a" />
      <path d={paths.handleRight} fill="#6d4c2a" />
      {/* Tissue outlines */}
      <path d={paths.tissueL} fill="rgba(180,180,180,0.5)" />
      <path d={paths.tissueC} fill="rgba(180,180,180,0.5)" />
      <path d={paths.tissueR} fill="rgba(180,180,180,0.5)" />
    </svg>
  );
}
