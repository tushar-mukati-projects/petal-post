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

export function FreehandCone({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Cone left edge
    const coneLeft: [number, number][] = [
      [140, 42],
      [148, 60],
      [158, 85],
      [168, 110],
      [178, 135],
      [188, 160],
      [195, 180],
      [200, 195],
    ];
    // Cone right edge
    const coneRight: [number, number][] = [
      [260, 42],
      [252, 60],
      [242, 85],
      [232, 110],
      [222, 135],
      [212, 160],
      [205, 180],
      [200, 195],
    ];
    // Rim at top
    const rimLine: [number, number][] = [
      [138, 42],
      [155, 38],
      [175, 36],
      [200, 35],
      [225, 36],
      [245, 38],
      [262, 42],
    ];
    // Rim second line
    const rimLine2: [number, number][] = [
      [140, 48],
      [158, 44],
      [178, 42],
      [200, 41],
      [222, 42],
      [242, 44],
      [260, 48],
    ];
    // Waffle diagonal lines (top-left to bottom-right)
    const diagTLBR1: [number, number][] = [
      [148, 48],
      [160, 65],
      [172, 82],
      [185, 100],
      [198, 120],
    ];
    const diagTLBR2: [number, number][] = [
      [170, 42],
      [180, 60],
      [190, 78],
      [200, 100],
      [208, 120],
    ];
    const diagTLBR3: [number, number][] = [
      [195, 38],
      [200, 55],
      [206, 75],
      [210, 100],
      [205, 135],
    ];
    const diagTLBR4: [number, number][] = [
      [220, 40],
      [218, 58],
      [215, 78],
      [210, 105],
      [205, 145],
    ];
    const diagTLBR5: [number, number][] = [
      [242, 44],
      [235, 62],
      [225, 82],
      [215, 110],
      [205, 155],
    ];
    // Waffle diagonal lines (top-right to bottom-left)
    const diagTRBL1: [number, number][] = [
      [252, 48],
      [240, 65],
      [228, 82],
      [215, 100],
      [202, 120],
    ];
    const diagTRBL2: [number, number][] = [
      [230, 42],
      [220, 60],
      [210, 78],
      [200, 100],
      [192, 120],
    ];
    const diagTRBL3: [number, number][] = [
      [205, 38],
      [200, 55],
      [194, 75],
      [190, 100],
      [195, 135],
    ];
    const diagTRBL4: [number, number][] = [
      [180, 40],
      [182, 58],
      [185, 78],
      [190, 105],
      [195, 145],
    ];
    const diagTRBL5: [number, number][] = [
      [158, 44],
      [165, 62],
      [175, 82],
      [185, 110],
      [195, 155],
    ];
    // Cone tip detail
    const tipDetail: [number, number][] = [
      [197, 185],
      [199, 190],
      [200, 195],
      [201, 190],
      [203, 185],
    ];
    // Drip effects at rim
    const drip1: [number, number][] = [
      [160, 40],
      [158, 48],
      [157, 56],
      [158, 62],
    ];
    const drip2: [number, number][] = [
      [185, 37],
      [184, 46],
      [183, 55],
      [184, 60],
    ];
    const drip3: [number, number][] = [
      [220, 38],
      [221, 48],
      [222, 58],
      [221, 65],
    ];
    const drip4: [number, number][] = [
      [242, 40],
      [243, 50],
      [244, 58],
      [243, 64],
    ];

    return {
      coneLeft: getSvgPathFromStroke(getStroke(coneLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      coneRight: getSvgPathFromStroke(getStroke(coneRight, { ...STROKE_OPTIONS, size: 3.5 })),
      rimLine: getSvgPathFromStroke(getStroke(rimLine, { ...STROKE_OPTIONS, size: 3 })),
      rimLine2: getSvgPathFromStroke(getStroke(rimLine2, { ...STROKE_OPTIONS, size: 2.5 })),
      diagTLBR1: getSvgPathFromStroke(
        getStroke(diagTLBR1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTLBR2: getSvgPathFromStroke(
        getStroke(diagTLBR2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTLBR3: getSvgPathFromStroke(
        getStroke(diagTLBR3, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTLBR4: getSvgPathFromStroke(
        getStroke(diagTLBR4, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTLBR5: getSvgPathFromStroke(
        getStroke(diagTLBR5, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTRBL1: getSvgPathFromStroke(
        getStroke(diagTRBL1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTRBL2: getSvgPathFromStroke(
        getStroke(diagTRBL2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTRBL3: getSvgPathFromStroke(
        getStroke(diagTRBL3, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTRBL4: getSvgPathFromStroke(
        getStroke(diagTRBL4, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      diagTRBL5: getSvgPathFromStroke(
        getStroke(diagTRBL5, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.4 }),
      ),
      tipDetail: getSvgPathFromStroke(getStroke(tipDetail, { ...STROKE_OPTIONS, size: 2 })),
      drip1: getSvgPathFromStroke(getStroke(drip1, { ...STROKE_OPTIONS, size: 3, thinning: 0.7 })),
      drip2: getSvgPathFromStroke(
        getStroke(drip2, { ...STROKE_OPTIONS, size: 2.5, thinning: 0.7 }),
      ),
      drip3: getSvgPathFromStroke(
        getStroke(drip3, { ...STROKE_OPTIONS, size: 2.5, thinning: 0.7 }),
      ),
      drip4: getSvgPathFromStroke(getStroke(drip4, { ...STROKE_OPTIONS, size: 2, thinning: 0.7 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Cone fill */}
      <path d="M140,42 L260,42 L200,195 Z" fill="#d4a574" />
      {/* Lighter highlight on cone */}
      <path d="M165,50 L200,50 L200,180 L185,50 Z" fill="rgba(255,255,255,0.1)" />
      {/* Drip fills (melted ice cream effect) */}
      <path
        d="M158,40 C156,48 155,56 158,62 C161,58 160,48 160,40 Z"
        fill="rgba(255,235,210,0.7)"
      />
      <path
        d="M183,37 C181,46 181,55 184,60 C187,55 186,45 185,37 Z"
        fill="rgba(255,235,210,0.7)"
      />
      <path
        d="M219,38 C220,48 221,58 220,65 C217,60 218,48 218,38 Z"
        fill="rgba(255,235,210,0.7)"
      />
      <path
        d="M241,40 C243,50 244,58 242,64 C239,58 240,48 240,40 Z"
        fill="rgba(255,235,210,0.7)"
      />
      {/* Waffle pattern - diagonal left-to-right */}
      <path d={paths.diagTLBR1} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTLBR2} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTLBR3} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTLBR4} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTLBR5} fill="rgba(139,90,43,0.3)" />
      {/* Waffle pattern - diagonal right-to-left */}
      <path d={paths.diagTRBL1} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTRBL2} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTRBL3} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTRBL4} fill="rgba(139,90,43,0.3)" />
      <path d={paths.diagTRBL5} fill="rgba(139,90,43,0.3)" />
      {/* Cone outline */}
      <path d={paths.coneLeft} fill="#8b5a2b" />
      <path d={paths.coneRight} fill="#8b5a2b" />
      {/* Rim */}
      <path d={paths.rimLine} fill="#6d4c2a" />
      <path d={paths.rimLine2} fill="rgba(139,90,43,0.5)" />
      {/* Tip detail */}
      <path d={paths.tipDetail} fill="#6d4c2a" />
      {/* Drip outlines */}
      <path d={paths.drip1} fill="rgba(210,180,140,0.6)" />
      <path d={paths.drip2} fill="rgba(210,180,140,0.6)" />
      <path d={paths.drip3} fill="rgba(210,180,140,0.6)" />
      <path d={paths.drip4} fill="rgba(210,180,140,0.6)" />
    </svg>
  );
}
