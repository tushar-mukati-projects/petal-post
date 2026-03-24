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

export function FreehandBasket({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Basket body left side (tapered)
    const bodyLeft: [number, number][] = [
      [140, 95],
      [135, 110],
      [130, 130],
      [128, 150],
      [127, 170],
      [130, 190],
      [135, 198],
    ];
    // Basket body right side
    const bodyRight: [number, number][] = [
      [260, 95],
      [265, 110],
      [270, 130],
      [272, 150],
      [273, 170],
      [270, 190],
      [265, 198],
    ];
    // Basket bottom curve
    const bodyBottom: [number, number][] = [
      [135, 198],
      [155, 200],
      [175, 200],
      [200, 200],
      [225, 200],
      [245, 200],
      [265, 198],
    ];
    // Rim bar (wider than body)
    const rimTop: [number, number][] = [
      [132, 90],
      [155, 88],
      [180, 87],
      [200, 86],
      [220, 87],
      [245, 88],
      [268, 90],
    ];
    const rimBottom: [number, number][] = [
      [135, 100],
      [155, 98],
      [180, 97],
      [200, 96],
      [220, 97],
      [245, 98],
      [265, 100],
    ];
    // Handle arc (many points along a semicircle)
    const handle: [number, number][] = [];
    for (let i = 0; i <= 20; i++) {
      const t = Math.PI * (i / 20);
      const x = 200 - 55 * Math.cos(t);
      const y = 88 - 55 * Math.sin(t);
      handle.push([x, y]);
    }
    // Horizontal weave lines
    const weave1: [number, number][] = [
      [134, 115],
      [160, 113],
      [200, 112],
      [240, 113],
      [266, 115],
    ];
    const weave2: [number, number][] = [
      [131, 135],
      [160, 133],
      [200, 132],
      [240, 133],
      [269, 135],
    ];
    const weave3: [number, number][] = [
      [129, 155],
      [160, 153],
      [200, 152],
      [240, 153],
      [271, 155],
    ];
    const weave4: [number, number][] = [
      [128, 175],
      [160, 173],
      [200, 172],
      [240, 173],
      [272, 175],
    ];
    const weave5: [number, number][] = [
      [131, 192],
      [160, 190],
      [200, 189],
      [240, 190],
      [269, 192],
    ];
    // Bow on handle - left loop
    const bowLeft: [number, number][] = [
      [195, 42],
      [185, 34],
      [178, 30],
      [176, 36],
      [180, 44],
      [176, 50],
      [180, 55],
      [188, 48],
      [195, 44],
    ];
    // Bow on handle - right loop
    const bowRight: [number, number][] = [
      [205, 42],
      [215, 34],
      [222, 30],
      [224, 36],
      [220, 44],
      [224, 50],
      [220, 55],
      [212, 48],
      [205, 44],
    ];
    // Vertical weave accents
    const vWeave1: [number, number][] = [
      [165, 96],
      [163, 130],
      [162, 165],
      [163, 198],
    ];
    const vWeave2: [number, number][] = [
      [200, 96],
      [200, 130],
      [200, 165],
      [200, 198],
    ];
    const vWeave3: [number, number][] = [
      [235, 96],
      [237, 130],
      [238, 165],
      [237, 198],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...OPTS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...OPTS, size: 3.5 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...OPTS, size: 3 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...OPTS, size: 3.5 })),
      rimBottom: getSvgPathFromStroke(getStroke(rimBottom, { ...OPTS, size: 3 })),
      handle: getSvgPathFromStroke(getStroke(handle, { ...OPTS, size: 3.5 })),
      weave1: getSvgPathFromStroke(getStroke(weave1, { ...OPTS, size: 2, thinning: 0.4 })),
      weave2: getSvgPathFromStroke(getStroke(weave2, { ...OPTS, size: 2, thinning: 0.4 })),
      weave3: getSvgPathFromStroke(getStroke(weave3, { ...OPTS, size: 2, thinning: 0.4 })),
      weave4: getSvgPathFromStroke(getStroke(weave4, { ...OPTS, size: 2, thinning: 0.4 })),
      weave5: getSvgPathFromStroke(getStroke(weave5, { ...OPTS, size: 2, thinning: 0.4 })),
      bowLeft: getSvgPathFromStroke(getStroke(bowLeft, { ...OPTS, size: 2.5 })),
      bowRight: getSvgPathFromStroke(getStroke(bowRight, { ...OPTS, size: 2.5 })),
      vWeave1: getSvgPathFromStroke(getStroke(vWeave1, { ...OPTS, size: 1.5, thinning: 0.6 })),
      vWeave2: getSvgPathFromStroke(getStroke(vWeave2, { ...OPTS, size: 1.5, thinning: 0.6 })),
      vWeave3: getSvgPathFromStroke(getStroke(vWeave3, { ...OPTS, size: 1.5, thinning: 0.6 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Basket body fill */}
      <path
        d="M140,95 L135,110 C128,150 127,170 130,190 L135,198 C155,200 200,200 200,200 C200,200 245,200 265,198 L270,190 C273,170 272,150 265,110 L260,95 Z"
        fill="#a1887f"
      />
      {/* Rim fill */}
      <path d="M132,90 C155,87 200,86 268,90 L265,100 C245,97 200,96 135,100 Z" fill="#8d6e63" />
      {/* Handle fill */}
      <path
        d="M145,88 C145,50 165,28 200,28 C235,28 255,50 255,88"
        fill="none"
        stroke="#a1887f"
        strokeWidth="8"
      />
      {/* Vertical weave accents */}
      <path d={paths.vWeave1} fill="rgba(109,76,65,0.2)" />
      <path d={paths.vWeave2} fill="rgba(109,76,65,0.2)" />
      <path d={paths.vWeave3} fill="rgba(109,76,65,0.2)" />
      {/* Horizontal weave lines */}
      <path d={paths.weave1} fill="rgba(109,76,65,0.35)" />
      <path d={paths.weave2} fill="rgba(109,76,65,0.35)" />
      <path d={paths.weave3} fill="rgba(109,76,65,0.35)" />
      <path d={paths.weave4} fill="rgba(109,76,65,0.35)" />
      <path d={paths.weave5} fill="rgba(109,76,65,0.35)" />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#6d4c41" />
      <path d={paths.bodyRight} fill="#6d4c41" />
      <path d={paths.bodyBottom} fill="#6d4c41" />
      {/* Rim outlines */}
      <path d={paths.rimTop} fill="#5d4037" />
      <path d={paths.rimBottom} fill="#5d4037" />
      {/* Handle outline */}
      <path d={paths.handle} fill="#6d4c41" />
      {/* Bow on handle */}
      <path d={paths.bowLeft} fill="#e91e63" />
      <path d={paths.bowRight} fill="#e91e63" />
      <circle cx="200" cy="43" r="3.5" fill="#c2185b" />
    </svg>
  );
}
