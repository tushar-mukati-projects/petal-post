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

export function FreehandKimono({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Wrapped package body - left side
    const bodyLeft: [number, number][] = [
      [108, 75],
      [104, 90],
      [102, 110],
      [100, 130],
      [100, 150],
      [102, 170],
      [106, 185],
      [112, 195],
    ];
    // Wrapped package body - right side
    const bodyRight: [number, number][] = [
      [292, 75],
      [296, 90],
      [298, 110],
      [300, 130],
      [300, 150],
      [298, 170],
      [294, 185],
      [288, 195],
    ];
    // Package top edge
    const topEdge: [number, number][] = [
      [108, 75],
      [130, 72],
      [160, 70],
      [200, 69],
      [240, 70],
      [270, 72],
      [292, 75],
    ];
    // Package bottom edge
    const bottomEdge: [number, number][] = [
      [112, 195],
      [140, 198],
      [200, 200],
      [260, 198],
      [288, 195],
    ];
    // Knot/bow center
    const knotCenter: [number, number][] = [
      [193, 56],
      [196, 48],
      [202, 46],
      [208, 48],
      [211, 56],
      [208, 62],
      [202, 64],
      [196, 62],
      [193, 56],
    ];
    // Bow left ear
    const bowLeft: [number, number][] = [
      [193, 52],
      [180, 44],
      [164, 36],
      [152, 32],
      [148, 36],
      [154, 46],
      [168, 52],
      [182, 58],
      [193, 58],
    ];
    // Bow right ear
    const bowRight: [number, number][] = [
      [211, 52],
      [224, 44],
      [236, 36],
      [248, 32],
      [252, 36],
      [246, 46],
      [232, 52],
      [218, 58],
      [211, 58],
    ];
    // Fold crease line 1
    const crease1: [number, number][] = [
      [145, 80],
      [148, 100],
      [152, 120],
      [155, 140],
      [158, 160],
      [160, 180],
    ];
    // Fold crease line 2
    const crease2: [number, number][] = [
      [252, 80],
      [254, 100],
      [256, 120],
      [257, 140],
      [256, 160],
      [254, 180],
    ];
    // Gold accent cord left
    const cordLeft: [number, number][] = [
      [193, 56],
      [186, 62],
      [180, 68],
      [176, 72],
      [172, 75],
    ];
    // Gold accent cord right
    const cordRight: [number, number][] = [
      [211, 56],
      [218, 62],
      [222, 68],
      [226, 72],
      [230, 75],
    ];
    // Seigaiha wave pattern arcs (tiny arcs across body)
    const wave1: [number, number][] = [
      [118, 120],
      [122, 116],
      [127, 118],
      [132, 115],
      [137, 118],
    ];
    const wave2: [number, number][] = [
      [118, 145],
      [122, 141],
      [127, 143],
      [132, 140],
      [137, 143],
    ];
    const wave3: [number, number][] = [
      [263, 120],
      [267, 116],
      [272, 118],
      [277, 115],
      [282, 118],
    ];
    const wave4: [number, number][] = [
      [263, 145],
      [267, 141],
      [272, 143],
      [277, 140],
      [282, 143],
    ];
    // Cherry blossom detail (small five-petal shape)
    const blossom1: [number, number][] = [
      [200, 130],
      [204, 126],
      [208, 128],
      [207, 133],
      [203, 135],
      [198, 133],
      [196, 128],
      [200, 126],
    ];
    // Blossom center dot
    const blossomCenter: [number, number][] = [
      [201, 130],
      [203, 129],
      [203, 131],
      [201, 132],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...STROKE_OPTIONS, size: 3.5 })),
      topEdge: getSvgPathFromStroke(getStroke(topEdge, { ...STROKE_OPTIONS, size: 3 })),
      bottomEdge: getSvgPathFromStroke(getStroke(bottomEdge, { ...STROKE_OPTIONS, size: 3 })),
      knotCenter: getSvgPathFromStroke(getStroke(knotCenter, { ...STROKE_OPTIONS, size: 2.5 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...STROKE_OPTIONS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...STROKE_OPTIONS, size: 2.5 })),
      crease1: getSvgPathFromStroke(
        getStroke(crease1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.7 }),
      ),
      crease2: getSvgPathFromStroke(
        getStroke(crease2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.7 }),
      ),
      cordLeft: getSvgPathFromStroke(getStroke(cordLeft, { ...STROKE_OPTIONS, size: 2 })),
      cordRight: getSvgPathFromStroke(getStroke(cordRight, { ...STROKE_OPTIONS, size: 2 })),
      wave1: getSvgPathFromStroke(
        getStroke(wave1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      wave2: getSvgPathFromStroke(
        getStroke(wave2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      wave3: getSvgPathFromStroke(
        getStroke(wave3, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      wave4: getSvgPathFromStroke(
        getStroke(wave4, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.3 }),
      ),
      blossom1: getSvgPathFromStroke(getStroke(blossom1, { ...STROKE_OPTIONS, size: 2 })),
      blossomCenter: getSvgPathFromStroke(
        getStroke(blossomCenter, { ...STROKE_OPTIONS, size: 1.5 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Indigo fabric body fill */}
      <path
        d="M108,75 C104,90 100,120 100,150 C102,175 108,192 112,195 L288,195 C292,192 298,175 300,150 C300,120 296,90 292,75 Z"
        fill="#3f51b5"
      />
      {/* Lighter fabric fold on left */}
      <path
        d="M108,75 L145,80 L160,180 L112,195 C108,190 100,160 100,130 C100,100 104,85 108,75 Z"
        fill="rgba(92,107,192,0.4)"
      />
      {/* Bow left ear fill */}
      <path d="M193,52 C180,44 164,36 152,32 C148,36 154,46 168,52 L193,58 Z" fill="#5c6bc0" />
      {/* Bow right ear fill */}
      <path d="M211,52 C224,44 236,36 248,32 C252,36 246,46 232,52 L211,58 Z" fill="#5c6bc0" />
      {/* Knot center fill */}
      <path
        d="M193,56 C196,48 202,46 208,48 C211,56 208,62 202,64 C196,62 193,56 193,56 Z"
        fill="#3949ab"
      />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#283593" />
      <path d={paths.bodyRight} fill="#283593" />
      <path d={paths.topEdge} fill="#1a237e" />
      <path d={paths.bottomEdge} fill="#1a237e" />
      {/* Fold creases */}
      <path d={paths.crease1} fill="rgba(26,35,126,0.4)" />
      <path d={paths.crease2} fill="rgba(26,35,126,0.4)" />
      {/* Gold accent cord */}
      <path d={paths.cordLeft} fill="#ffd700" />
      <path d={paths.cordRight} fill="#ffd700" />
      {/* Bow and knot outlines */}
      <path d={paths.bowLeft} fill="#283593" />
      <path d={paths.bowRight} fill="#283593" />
      <path d={paths.knotCenter} fill="#1a237e" />
      {/* Seigaiha wave patterns */}
      <path d={paths.wave1} fill="rgba(197,202,233,0.4)" />
      <path d={paths.wave2} fill="rgba(197,202,233,0.4)" />
      <path d={paths.wave3} fill="rgba(197,202,233,0.4)" />
      <path d={paths.wave4} fill="rgba(197,202,233,0.4)" />
      {/* Cherry blossom */}
      <path d={paths.blossom1} fill="rgba(244,143,177,0.6)" />
      <path d={paths.blossomCenter} fill="rgba(233,30,99,0.5)" />
    </svg>
  );
}
