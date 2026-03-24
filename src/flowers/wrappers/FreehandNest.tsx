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

export function FreehandNest({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Twig arc 1 - bottom bowl
    const twig1: [number, number][] = [
      [130, 150],
      [145, 170],
      [165, 182],
      [185, 188],
      [200, 190],
      [215, 188],
      [235, 182],
      [255, 170],
      [270, 150],
    ];
    // Twig arc 2 - mid bowl
    const twig2: [number, number][] = [
      [125, 135],
      [140, 158],
      [160, 172],
      [180, 180],
      [200, 182],
      [220, 180],
      [240, 172],
      [260, 158],
      [275, 135],
    ];
    // Twig arc 3 - upper bowl
    const twig3: [number, number][] = [
      [122, 120],
      [135, 145],
      [155, 162],
      [175, 172],
      [200, 175],
      [225, 172],
      [245, 162],
      [265, 145],
      [278, 120],
    ];
    // Twig arc 4 - near rim
    const twig4: [number, number][] = [
      [118, 108],
      [132, 130],
      [150, 150],
      [170, 162],
      [200, 167],
      [230, 162],
      [250, 150],
      [268, 130],
      [282, 108],
    ];
    // Twig arc 5 - cross weave left-to-right
    const twig5: [number, number][] = [
      [135, 115],
      [148, 140],
      [165, 158],
      [185, 170],
      [210, 175],
      [238, 165],
      [258, 148],
      [272, 125],
    ];
    // Twig arc 6 - cross weave right-to-left
    const twig6: [number, number][] = [
      [270, 118],
      [255, 142],
      [238, 160],
      [218, 172],
      [192, 175],
      [165, 168],
      [145, 152],
      [130, 130],
    ];
    // Twig arc 7 - deep bottom
    const twig7: [number, number][] = [
      [148, 162],
      [165, 178],
      [185, 186],
      [200, 188],
      [215, 186],
      [235, 178],
      [252, 162],
    ];
    // Twig arc 8 - another cross weave
    const twig8: [number, number][] = [
      [140, 125],
      [155, 150],
      [175, 168],
      [200, 176],
      [225, 168],
      [245, 150],
      [260, 125],
    ];
    // Twig arc 9 - shallow
    const twig9: [number, number][] = [
      [128, 112],
      [150, 135],
      [175, 152],
      [200, 158],
      [225, 152],
      [250, 135],
      [272, 112],
    ];
    // Twig arc 10 - offset variation
    const twig10: [number, number][] = [
      [132, 128],
      [148, 148],
      [168, 165],
      [192, 174],
      [218, 172],
      [242, 160],
      [262, 140],
      [275, 118],
    ];
    // Braided rim left
    const rimTop: [number, number][] = [
      [115, 102],
      [130, 98],
      [150, 96],
      [170, 95],
      [190, 95],
      [200, 95],
      [210, 95],
      [230, 96],
      [250, 98],
      [270, 102],
      [285, 108],
    ];
    // Braided rim bottom edge
    const rimBottom: [number, number][] = [
      [115, 110],
      [130, 106],
      [150, 104],
      [170, 103],
      [200, 102],
      [230, 103],
      [250, 104],
      [270, 106],
      [285, 112],
    ];
    // Stray twig left
    const strayLeft: [number, number][] = [
      [115, 100],
      [108, 90],
      [102, 78],
      [100, 68],
    ];
    // Stray twig right
    const strayRight: [number, number][] = [
      [285, 105],
      [292, 92],
      [296, 82],
      [295, 72],
    ];
    // Egg 1 outline
    const egg1: [number, number][] = [
      [182, 110],
      [178, 106],
      [176, 100],
      [177, 94],
      [180, 90],
      [185, 88],
      [190, 90],
      [193, 94],
      [194, 100],
      [192, 106],
      [188, 110],
      [182, 110],
    ];
    // Egg 2 outline
    const egg2: [number, number][] = [
      [205, 108],
      [201, 104],
      [199, 98],
      [200, 92],
      [203, 88],
      [208, 86],
      [213, 88],
      [216, 92],
      [217, 98],
      [215, 104],
      [211, 108],
      [205, 108],
    ];
    // Egg 3 outline (smaller, partially hidden)
    const egg3: [number, number][] = [
      [193, 112],
      [191, 108],
      [190, 104],
      [191, 100],
      [194, 97],
      [198, 96],
      [202, 98],
      [204, 102],
      [204, 106],
      [202, 110],
      [198, 113],
      [193, 112],
    ];
    // Feather detail
    const feather: [number, number][] = [
      [220, 95],
      [225, 90],
      [232, 84],
      [238, 80],
      [242, 78],
    ];
    // Feather barbs
    const featherBarb: [number, number][] = [
      [228, 88],
      [232, 82],
      [228, 84],
      [234, 78],
    ];

    return {
      twig1: getSvgPathFromStroke(getStroke(twig1, { ...OPTS, size: 3.5 })),
      twig2: getSvgPathFromStroke(getStroke(twig2, { ...OPTS, size: 3 })),
      twig3: getSvgPathFromStroke(getStroke(twig3, { ...OPTS, size: 3.5 })),
      twig4: getSvgPathFromStroke(getStroke(twig4, { ...OPTS, size: 3 })),
      twig5: getSvgPathFromStroke(getStroke(twig5, { ...OPTS, size: 2.5 })),
      twig6: getSvgPathFromStroke(getStroke(twig6, { ...OPTS, size: 2.5 })),
      twig7: getSvgPathFromStroke(getStroke(twig7, { ...OPTS, size: 3 })),
      twig8: getSvgPathFromStroke(getStroke(twig8, { ...OPTS, size: 2.5 })),
      twig9: getSvgPathFromStroke(getStroke(twig9, { ...OPTS, size: 3 })),
      twig10: getSvgPathFromStroke(getStroke(twig10, { ...OPTS, size: 2.5 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...OPTS, size: 4 })),
      rimBottom: getSvgPathFromStroke(getStroke(rimBottom, { ...OPTS, size: 3 })),
      strayLeft: getSvgPathFromStroke(getStroke(strayLeft, { ...OPTS, size: 2, thinning: 0.8 })),
      strayRight: getSvgPathFromStroke(getStroke(strayRight, { ...OPTS, size: 2, thinning: 0.8 })),
      egg1: getSvgPathFromStroke(getStroke(egg1, { ...OPTS, size: 2 })),
      egg2: getSvgPathFromStroke(getStroke(egg2, { ...OPTS, size: 2 })),
      egg3: getSvgPathFromStroke(getStroke(egg3, { ...OPTS, size: 2 })),
      feather: getSvgPathFromStroke(getStroke(feather, { ...OPTS, size: 1.5, thinning: 0.8 })),
      featherBarb: getSvgPathFromStroke(
        getStroke(featherBarb, { ...OPTS, size: 1, thinning: 0.9 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Nest bowl fill */}
      <path
        d="M118,105 Q120,165 200,190 Q280,165 282,105 L278,108 Q275,160 200,185 Q125,160 122,108 Z"
        fill="#a1887f"
      />
      {/* Egg fills */}
      <ellipse cx="185" cy="99" rx="9" ry="12" fill="#b3e5fc" />
      <ellipse cx="208" cy="97" rx="9" ry="12" fill="#b3e5fc" />
      <ellipse cx="197" cy="104" rx="7" ry="10" fill="#b3e5fc" />
      {/* Egg speckles */}
      <circle cx="182" cy="95" r="1.2" fill="#90a4ae" />
      <circle cx="188" cy="102" r="1" fill="#90a4ae" />
      <circle cx="186" cy="92" r="0.8" fill="#90a4ae" />
      <circle cx="205" cy="93" r="1.2" fill="#90a4ae" />
      <circle cx="211" cy="100" r="1" fill="#90a4ae" />
      <circle cx="209" cy="90" r="0.8" fill="#90a4ae" />
      <circle cx="195" cy="100" r="1" fill="#90a4ae" />
      <circle cx="199" cy="107" r="0.8" fill="#90a4ae" />
      {/* Twig arcs - overlapping for woven look */}
      <path d={paths.twig1} fill="#6d4c41" />
      <path d={paths.twig2} fill="#795548" />
      <path d={paths.twig3} fill="#6d4c41" />
      <path d={paths.twig4} fill="#8d6e63" />
      <path d={paths.twig5} fill="#5d4037" />
      <path d={paths.twig6} fill="#5d4037" />
      <path d={paths.twig7} fill="#6d4c41" />
      <path d={paths.twig8} fill="#795548" />
      <path d={paths.twig9} fill="#8d6e63" />
      <path d={paths.twig10} fill="#6d4c41" />
      {/* Braided rim */}
      <path d={paths.rimTop} fill="#5d4037" />
      <path d={paths.rimBottom} fill="#4e342e" />
      {/* Stray twigs */}
      <path d={paths.strayLeft} fill="#795548" />
      <path d={paths.strayRight} fill="#795548" />
      {/* Egg outlines */}
      <path d={paths.egg1} fill="#4fc3f7" />
      <path d={paths.egg2} fill="#4fc3f7" />
      <path d={paths.egg3} fill="#4fc3f7" />
      {/* Feather */}
      <path d={paths.feather} fill="#bcaaa4" />
      <path d={paths.featherBarb} fill="#d7ccc8" />
    </svg>
  );
}
