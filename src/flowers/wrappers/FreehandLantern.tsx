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

export function FreehandLantern({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Oval body outline - left side (wider)
    const bodyLeft: [number, number][] = [
      [155, 50],
      [138, 62],
      [124, 80],
      [116, 100],
      [114, 120],
      [118, 138],
      [128, 152],
      [142, 164],
      [160, 172],
      [180, 176],
      [200, 178],
    ];
    // Oval body outline - right side (wider)
    const bodyRight: [number, number][] = [
      [200, 178],
      [220, 176],
      [240, 172],
      [258, 164],
      [272, 152],
      [282, 138],
      [286, 120],
      [284, 100],
      [276, 80],
      [262, 62],
      [245, 50],
    ];
    // Top collar ring
    const topCollar: [number, number][] = [
      [150, 47],
      [162, 43],
      [175, 40],
      [190, 39],
      [200, 38],
      [210, 39],
      [225, 40],
      [238, 43],
      [250, 47],
    ];
    // Bottom collar ring
    const bottomCollar: [number, number][] = [
      [158, 176],
      [170, 180],
      [182, 183],
      [195, 184],
      [200, 185],
      [205, 184],
      [218, 183],
      [230, 180],
      [242, 176],
    ];
    // Top collar ring - second line
    const topCollar2: [number, number][] = [
      [150, 52],
      [162, 48],
      [175, 46],
      [190, 45],
      [200, 44],
      [210, 45],
      [225, 46],
      [238, 48],
      [250, 52],
    ];
    // Bottom collar ring - second line
    const bottomCollar2: [number, number][] = [
      [158, 172],
      [170, 176],
      [182, 178],
      [195, 179],
      [200, 180],
      [205, 179],
      [218, 178],
      [230, 176],
      [242, 172],
    ];
    // Hanging loop at top
    const loop: [number, number][] = [
      [193, 38],
      [189, 28],
      [186, 18],
      [189, 12],
      [196, 8],
      [204, 10],
      [210, 16],
      [212, 24],
      [210, 32],
      [207, 38],
    ];
    // Vertical rib 1 (center)
    const rib1: [number, number][] = [
      [200, 50],
      [200, 72],
      [200, 95],
      [200, 118],
      [200, 140],
      [200, 160],
      [200, 178],
    ];
    // Vertical rib 2 (left of center)
    const rib2: [number, number][] = [
      [165, 46],
      [156, 68],
      [148, 90],
      [144, 112],
      [148, 135],
      [156, 155],
      [168, 174],
    ];
    // Vertical rib 3 (right of center)
    const rib3: [number, number][] = [
      [235, 46],
      [244, 68],
      [252, 90],
      [256, 112],
      [252, 135],
      [244, 155],
      [232, 174],
    ];
    // Vertical rib 4 (far left)
    const rib4: [number, number][] = [
      [142, 55],
      [130, 74],
      [122, 96],
      [120, 118],
      [125, 140],
      [136, 158],
      [152, 172],
    ];
    // Vertical rib 5 (far right)
    const rib5: [number, number][] = [
      [258, 55],
      [270, 74],
      [278, 96],
      [280, 118],
      [275, 140],
      [264, 158],
      [248, 172],
    ];
    // Tassel strings (center)
    const tassel1: [number, number][] = [
      [200, 185],
      [200, 190],
      [199, 194],
      [200, 198],
    ];
    // Tassel strings (left)
    const tassel2: [number, number][] = [
      [196, 185],
      [194, 190],
      [193, 195],
      [194, 198],
    ];
    // Tassel strings (right)
    const tassel3: [number, number][] = [
      [204, 185],
      [206, 190],
      [207, 195],
      [206, 198],
    ];
    // Decorative diamond pattern top-left
    const decor1: [number, number][] = [
      [160, 100],
      [168, 93],
      [176, 100],
      [168, 107],
      [160, 100],
    ];
    // Decorative diamond pattern top-right
    const decor2: [number, number][] = [
      [224, 100],
      [232, 93],
      [240, 100],
      [232, 107],
      [224, 100],
    ];
    // Decorative wave across middle
    const decor3: [number, number][] = [
      [130, 118],
      [145, 112],
      [160, 118],
      [175, 112],
      [200, 118],
      [225, 112],
      [240, 118],
      [255, 112],
      [270, 118],
    ];

    return {
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...OPTS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...OPTS, size: 3.5 })),
      topCollar: getSvgPathFromStroke(getStroke(topCollar, { ...OPTS, size: 3 })),
      bottomCollar: getSvgPathFromStroke(getStroke(bottomCollar, { ...OPTS, size: 3 })),
      topCollar2: getSvgPathFromStroke(getStroke(topCollar2, { ...OPTS, size: 2 })),
      bottomCollar2: getSvgPathFromStroke(getStroke(bottomCollar2, { ...OPTS, size: 2 })),
      loop: getSvgPathFromStroke(getStroke(loop, { ...OPTS, size: 2.5 })),
      rib1: getSvgPathFromStroke(getStroke(rib1, { ...OPTS, size: 1.5, thinning: 0.7 })),
      rib2: getSvgPathFromStroke(getStroke(rib2, { ...OPTS, size: 1.5, thinning: 0.7 })),
      rib3: getSvgPathFromStroke(getStroke(rib3, { ...OPTS, size: 1.5, thinning: 0.7 })),
      rib4: getSvgPathFromStroke(getStroke(rib4, { ...OPTS, size: 1.5, thinning: 0.7 })),
      rib5: getSvgPathFromStroke(getStroke(rib5, { ...OPTS, size: 1.5, thinning: 0.7 })),
      tassel1: getSvgPathFromStroke(getStroke(tassel1, { ...OPTS, size: 2 })),
      tassel2: getSvgPathFromStroke(getStroke(tassel2, { ...OPTS, size: 1.5 })),
      tassel3: getSvgPathFromStroke(getStroke(tassel3, { ...OPTS, size: 1.5 })),
      decor1: getSvgPathFromStroke(getStroke(decor1, { ...OPTS, size: 2 })),
      decor2: getSvgPathFromStroke(getStroke(decor2, { ...OPTS, size: 2 })),
      decor3: getSvgPathFromStroke(getStroke(decor3, { ...OPTS, size: 1.5, thinning: 0.6 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Lantern body fill */}
      <ellipse cx="200" cy="114" rx="88" ry="68" fill="#ef5350" />
      {/* Top gold collar fill */}
      <rect x="148" y="38" width="104" height="14" rx="5" fill="#ffd54f" />
      {/* Bottom gold collar fill */}
      <rect x="155" y="173" width="90" height="12" rx="5" fill="#ffd54f" />
      {/* Tassel pom */}
      <circle cx="200" cy="198" r="6" fill="#ffd54f" />
      {/* Rib lines */}
      <path d={paths.rib1} fill="rgba(183,28,28,0.4)" />
      <path d={paths.rib2} fill="rgba(183,28,28,0.4)" />
      <path d={paths.rib3} fill="rgba(183,28,28,0.4)" />
      <path d={paths.rib4} fill="rgba(183,28,28,0.4)" />
      <path d={paths.rib5} fill="rgba(183,28,28,0.4)" />
      {/* Decorative patterns */}
      <path d={paths.decor1} fill="rgba(255,213,79,0.5)" />
      <path d={paths.decor2} fill="rgba(255,213,79,0.5)" />
      <path d={paths.decor3} fill="rgba(255,213,79,0.45)" />
      {/* Body outlines */}
      <path d={paths.bodyLeft} fill="#b71c1c" />
      <path d={paths.bodyRight} fill="#b71c1c" />
      {/* Collar outlines */}
      <path d={paths.topCollar} fill="#f9a825" />
      <path d={paths.bottomCollar} fill="#f9a825" />
      <path d={paths.topCollar2} fill="#f9a825" />
      <path d={paths.bottomCollar2} fill="#f9a825" />
      {/* Hanging loop */}
      <path d={paths.loop} fill="#b71c1c" />
      {/* Tassel strings */}
      <path d={paths.tassel1} fill="#b71c1c" />
      <path d={paths.tassel2} fill="#c62828" />
      <path d={paths.tassel3} fill="#c62828" />
    </svg>
  );
}
