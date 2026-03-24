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

export function FreehandVintage({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Cylindrical tin body - left side
    const bodyLeft: [number, number][] = [
      [112, 50],
      [109, 65],
      [107, 85],
      [105, 105],
      [105, 125],
      [105, 145],
      [107, 165],
      [109, 185],
      [112, 195],
    ];
    // Body right side
    const bodyRight: [number, number][] = [
      [288, 50],
      [291, 65],
      [293, 85],
      [295, 105],
      [295, 125],
      [295, 145],
      [293, 165],
      [291, 185],
      [288, 195],
    ];
    // Top ellipse
    const topRim: [number, number][] = [
      [112, 50],
      [132, 46],
      [155, 43],
      [200, 42],
      [245, 43],
      [268, 46],
      [288, 50],
    ];
    // Bottom edge
    const bottomEdge: [number, number][] = [
      [112, 195],
      [132, 198],
      [160, 200],
      [200, 200],
      [240, 200],
      [268, 198],
      [288, 195],
    ];
    // Lid inner rim
    const lidInner: [number, number][] = [
      [116, 55],
      [140, 52],
      [170, 50],
      [200, 49],
      [230, 50],
      [260, 52],
      [284, 55],
    ];
    // Label frame top
    const labelTop: [number, number][] = [
      [128, 90],
      [148, 88],
      [170, 87],
      [200, 86],
      [230, 87],
      [252, 88],
      [272, 90],
    ];
    // Label frame bottom
    const labelBottom: [number, number][] = [
      [128, 160],
      [148, 162],
      [170, 163],
      [200, 164],
      [230, 163],
      [252, 162],
      [272, 160],
    ];
    // Label frame left
    const labelLeft: [number, number][] = [
      [128, 90],
      [125, 105],
      [124, 120],
      [124, 135],
      [125, 150],
      [128, 160],
    ];
    // Label frame right
    const labelRight: [number, number][] = [
      [272, 90],
      [275, 105],
      [276, 120],
      [276, 135],
      [275, 150],
      [272, 160],
    ];
    // Floral motif - small flower petals
    const petal1: [number, number][] = [
      [200, 118],
      [196, 110],
      [200, 105],
      [204, 110],
    ];
    const petal2: [number, number][] = [
      [200, 118],
      [208, 114],
      [211, 120],
      [206, 122],
    ];
    const petal3: [number, number][] = [
      [200, 118],
      [205, 126],
      [200, 131],
      [195, 126],
    ];
    const petal4: [number, number][] = [
      [200, 118],
      [192, 122],
      [189, 118],
      [194, 113],
    ];
    // Flower center
    const flowerCenter: [number, number][] = [
      [199, 117],
      [201, 116],
      [202, 118],
      [201, 120],
      [199, 120],
      [198, 118],
    ];
    // Beaded rim dots at top (series of small circles)
    const beadT1: [number, number][] = [
      [130, 57],
      [132, 55],
      [134, 57],
      [132, 59],
    ];
    const beadT2: [number, number][] = [
      [155, 54],
      [157, 52],
      [159, 54],
      [157, 56],
    ];
    const beadT3: [number, number][] = [
      [185, 52],
      [187, 50],
      [189, 52],
      [187, 54],
    ];
    const beadT4: [number, number][] = [
      [215, 52],
      [217, 50],
      [219, 52],
      [217, 54],
    ];
    const beadT5: [number, number][] = [
      [245, 54],
      [247, 52],
      [249, 54],
      [247, 56],
    ];
    // Beaded rim dots at bottom
    const beadB1: [number, number][] = [
      [130, 195],
      [132, 193],
      [134, 195],
      [132, 197],
    ];
    const beadB2: [number, number][] = [
      [160, 198],
      [162, 196],
      [164, 198],
      [162, 200],
    ];
    const beadB3: [number, number][] = [
      [220, 199],
      [222, 197],
      [224, 199],
      [222, 201],
    ];
    const beadB4: [number, number][] = [
      [260, 197],
      [262, 195],
      [264, 197],
      [262, 199],
    ];
    // Lid handle/knob
    const lidKnob: [number, number][] = [
      [194, 42],
      [197, 36],
      [200, 34],
      [203, 36],
      [206, 42],
    ];
    // Embossed dot pattern on body
    const dot1: [number, number][] = [
      [115, 75],
      [117, 73],
      [119, 75],
      [117, 77],
    ];
    const dot2: [number, number][] = [
      [283, 75],
      [285, 73],
      [287, 75],
      [285, 77],
    ];
    const dot3: [number, number][] = [
      [115, 175],
      [117, 173],
      [119, 175],
      [117, 177],
    ];
    const dot4: [number, number][] = [
      [283, 175],
      [285, 173],
      [287, 175],
      [285, 177],
    ];
    // Scroll detail under label
    const scrollLeft: [number, number][] = [
      [150, 140],
      [146, 144],
      [144, 148],
      [146, 152],
      [152, 150],
    ];
    const scrollRight: [number, number][] = [
      [250, 140],
      [254, 144],
      [256, 148],
      [254, 152],
      [248, 150],
    ];
    // Highlight streak
    const highlight: [number, number][] = [
      [114, 60],
      [111, 80],
      [110, 100],
      [110, 120],
      [111, 140],
      [112, 160],
      [114, 180],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...STROKE_OPTIONS, size: 3.5 })),
      topRim: getSvgPathFromStroke(getStroke(topRim, { ...STROKE_OPTIONS, size: 3 })),
      bottomEdge: getSvgPathFromStroke(getStroke(bottomEdge, { ...STROKE_OPTIONS, size: 3 })),
      lidInner: getSvgPathFromStroke(getStroke(lidInner, { ...STROKE_OPTIONS, size: 2 })),
      labelTop: getSvgPathFromStroke(getStroke(labelTop, { ...STROKE_OPTIONS, size: 2 })),
      labelBottom: getSvgPathFromStroke(getStroke(labelBottom, { ...STROKE_OPTIONS, size: 2 })),
      labelLeft: getSvgPathFromStroke(getStroke(labelLeft, { ...STROKE_OPTIONS, size: 2 })),
      labelRight: getSvgPathFromStroke(getStroke(labelRight, { ...STROKE_OPTIONS, size: 2 })),
      petal1: getSvgPathFromStroke(getStroke(petal1, { ...STROKE_OPTIONS, size: 2 })),
      petal2: getSvgPathFromStroke(getStroke(petal2, { ...STROKE_OPTIONS, size: 2 })),
      petal3: getSvgPathFromStroke(getStroke(petal3, { ...STROKE_OPTIONS, size: 2 })),
      petal4: getSvgPathFromStroke(getStroke(petal4, { ...STROKE_OPTIONS, size: 2 })),
      flowerCenter: getSvgPathFromStroke(getStroke(flowerCenter, { ...STROKE_OPTIONS, size: 1.5 })),
      beadT1: getSvgPathFromStroke(getStroke(beadT1, { ...STROKE_OPTIONS, size: 1.5 })),
      beadT2: getSvgPathFromStroke(getStroke(beadT2, { ...STROKE_OPTIONS, size: 1.5 })),
      beadT3: getSvgPathFromStroke(getStroke(beadT3, { ...STROKE_OPTIONS, size: 1.5 })),
      beadT4: getSvgPathFromStroke(getStroke(beadT4, { ...STROKE_OPTIONS, size: 1.5 })),
      beadT5: getSvgPathFromStroke(getStroke(beadT5, { ...STROKE_OPTIONS, size: 1.5 })),
      beadB1: getSvgPathFromStroke(getStroke(beadB1, { ...STROKE_OPTIONS, size: 1.5 })),
      beadB2: getSvgPathFromStroke(getStroke(beadB2, { ...STROKE_OPTIONS, size: 1.5 })),
      beadB3: getSvgPathFromStroke(getStroke(beadB3, { ...STROKE_OPTIONS, size: 1.5 })),
      beadB4: getSvgPathFromStroke(getStroke(beadB4, { ...STROKE_OPTIONS, size: 1.5 })),
      lidKnob: getSvgPathFromStroke(getStroke(lidKnob, { ...STROKE_OPTIONS, size: 2.5 })),
      dot1: getSvgPathFromStroke(getStroke(dot1, { ...STROKE_OPTIONS, size: 1.5 })),
      dot2: getSvgPathFromStroke(getStroke(dot2, { ...STROKE_OPTIONS, size: 1.5 })),
      dot3: getSvgPathFromStroke(getStroke(dot3, { ...STROKE_OPTIONS, size: 1.5 })),
      dot4: getSvgPathFromStroke(getStroke(dot4, { ...STROKE_OPTIONS, size: 1.5 })),
      scrollLeft: getSvgPathFromStroke(
        getStroke(scrollLeft, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
      scrollRight: getSvgPathFromStroke(
        getStroke(scrollRight, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
      highlight: getSvgPathFromStroke(
        getStroke(highlight, { ...STROKE_OPTIONS, size: 2, thinning: 0.8 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Tin body fill - dusty rose */}
      <path
        d="M112,50 C132,46 268,46 288,50 L295,125 L293,165 L288,195 C268,198 132,198 112,195 L107,165 L105,125 Z"
        fill="#d4a08a"
      />
      {/* Cream label area fill */}
      <path
        d="M128,90 C148,88 252,88 272,90 L275,135 L272,160 C252,162 148,162 128,160 L125,135 Z"
        fill="#fff8e1"
      />
      {/* Lid area slightly darker */}
      <path
        d="M112,50 C132,46 268,46 288,50 L284,55 C260,52 140,52 116,55 Z"
        fill="rgba(180,130,110,0.4)"
      />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#a1887f" />
      <path d={paths.bodyRight} fill="#a1887f" />
      <path d={paths.topRim} fill="#8d6e63" />
      <path d={paths.bottomEdge} fill="#8d6e63" />
      <path d={paths.lidInner} fill="#a1887f" />
      {/* Lid knob */}
      <path d={paths.lidKnob} fill="#8d6e63" />
      {/* Ornate label frame */}
      <path d={paths.labelTop} fill="#a1887f" />
      <path d={paths.labelBottom} fill="#a1887f" />
      <path d={paths.labelLeft} fill="#a1887f" />
      <path d={paths.labelRight} fill="#a1887f" />
      {/* Floral motif on label */}
      <path d={paths.petal1} fill="rgba(244,143,177,0.5)" />
      <path d={paths.petal2} fill="rgba(244,143,177,0.5)" />
      <path d={paths.petal3} fill="rgba(244,143,177,0.5)" />
      <path d={paths.petal4} fill="rgba(244,143,177,0.5)" />
      <path d={paths.flowerCenter} fill="rgba(255,183,77,0.6)" />
      {/* Scroll details */}
      <path d={paths.scrollLeft} fill="rgba(161,136,127,0.5)" />
      <path d={paths.scrollRight} fill="rgba(161,136,127,0.5)" />
      {/* Beaded rim dots - top */}
      <path d={paths.beadT1} fill="#a1887f" />
      <path d={paths.beadT2} fill="#a1887f" />
      <path d={paths.beadT3} fill="#a1887f" />
      <path d={paths.beadT4} fill="#a1887f" />
      <path d={paths.beadT5} fill="#a1887f" />
      {/* Beaded rim dots - bottom */}
      <path d={paths.beadB1} fill="#a1887f" />
      <path d={paths.beadB2} fill="#a1887f" />
      <path d={paths.beadB3} fill="#a1887f" />
      <path d={paths.beadB4} fill="#a1887f" />
      {/* Embossed dot pattern */}
      <path d={paths.dot1} fill="rgba(161,136,127,0.4)" />
      <path d={paths.dot2} fill="rgba(161,136,127,0.4)" />
      <path d={paths.dot3} fill="rgba(161,136,127,0.4)" />
      <path d={paths.dot4} fill="rgba(161,136,127,0.4)" />
      {/* Highlight streak */}
      <path d={paths.highlight} fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}
