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

export function FreehandTerrarium({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Glass dome shape (bell curve with many points)
    const domeLeft: [number, number][] = [
      [125, 170],
      [120, 158],
      [114, 142],
      [110, 125],
      [108, 108],
      [110, 90],
      [115, 74],
      [122, 58],
      [132, 46],
      [146, 36],
      [162, 28],
      [180, 24],
      [200, 22],
    ];
    const domeRight: [number, number][] = [
      [200, 22],
      [220, 24],
      [238, 28],
      [254, 36],
      [268, 46],
      [278, 58],
      [285, 74],
      [290, 90],
      [292, 108],
      [290, 125],
      [286, 142],
      [280, 158],
      [275, 170],
    ];
    // Base rectangle bottom
    const baseTop: [number, number][] = [
      [118, 170],
      [140, 169],
      [165, 168],
      [200, 168],
      [235, 168],
      [260, 169],
      [282, 170],
    ];
    const baseBottom: [number, number][] = [
      [118, 197],
      [140, 198],
      [165, 199],
      [200, 199],
      [235, 199],
      [260, 198],
      [282, 197],
    ];
    const baseLeft: [number, number][] = [
      [118, 170],
      [116, 178],
      [116, 186],
      [118, 197],
    ];
    const baseRight: [number, number][] = [
      [282, 170],
      [284, 178],
      [284, 186],
      [282, 197],
    ];
    // Glass highlight left (curved white line)
    const highlightLeft: [number, number][] = [
      [120, 140],
      [116, 120],
      [116, 98],
      [120, 80],
      [128, 64],
      [140, 48],
    ];
    // Glass highlight right small
    const highlightRight: [number, number][] = [
      [278, 92],
      [280, 82],
      [280, 72],
    ];
    // Metal handle/knob at top
    const knobBase: [number, number][] = [
      [192, 22],
      [195, 16],
      [200, 13],
      [205, 16],
      [208, 22],
    ];
    const knobTop: [number, number][] = [
      [195, 16],
      [197, 10],
      [200, 8],
      [203, 10],
      [205, 16],
    ];
    // Pebbles inside - pebble 1
    const pebble1: [number, number][] = [
      [140, 165],
      [146, 162],
      [152, 163],
      [154, 166],
      [148, 168],
      [142, 167],
    ];
    // Pebble 2
    const pebble2: [number, number][] = [
      [162, 166],
      [168, 164],
      [174, 165],
      [173, 168],
      [168, 169],
      [163, 168],
    ];
    // Pebble 3
    const pebble3: [number, number][] = [
      [228, 165],
      [234, 163],
      [240, 164],
      [241, 167],
      [236, 169],
      [230, 167],
    ];
    // Pebble 4
    const pebble4: [number, number][] = [
      [250, 165],
      [256, 163],
      [260, 165],
      [259, 168],
      [254, 168],
    ];
    // Moss dots
    const moss1: [number, number][] = [
      [150, 160],
      [153, 158],
      [156, 160],
      [153, 162],
    ];
    const moss2: [number, number][] = [
      [195, 159],
      [198, 157],
      [201, 159],
      [198, 161],
    ];
    const moss3: [number, number][] = [
      [242, 160],
      [245, 158],
      [248, 160],
      [245, 162],
    ];
    // Tiny mushroom stem
    const mushroomStem: [number, number][] = [
      [203, 162],
      [203, 154],
      [204, 146],
    ];
    // Tiny mushroom cap
    const mushroomCap: [number, number][] = [
      [196, 147],
      [199, 142],
      [203, 139],
      [207, 142],
      [210, 147],
    ];

    return {
      domeLeft: getSvgPathFromStroke(getStroke(domeLeft, { ...STROKE_OPTIONS, size: 3 })),
      domeRight: getSvgPathFromStroke(getStroke(domeRight, { ...STROKE_OPTIONS, size: 3 })),
      baseTop: getSvgPathFromStroke(getStroke(baseTop, { ...STROKE_OPTIONS, size: 2.5 })),
      baseBottom: getSvgPathFromStroke(getStroke(baseBottom, { ...STROKE_OPTIONS, size: 2.5 })),
      baseLeft: getSvgPathFromStroke(getStroke(baseLeft, { ...STROKE_OPTIONS, size: 2.5 })),
      baseRight: getSvgPathFromStroke(getStroke(baseRight, { ...STROKE_OPTIONS, size: 2.5 })),
      highlightLeft: getSvgPathFromStroke(
        getStroke(highlightLeft, { ...STROKE_OPTIONS, size: 2, thinning: 0.8 }),
      ),
      highlightRight: getSvgPathFromStroke(
        getStroke(highlightRight, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.8 }),
      ),
      knobBase: getSvgPathFromStroke(getStroke(knobBase, { ...STROKE_OPTIONS, size: 2.5 })),
      knobTop: getSvgPathFromStroke(getStroke(knobTop, { ...STROKE_OPTIONS, size: 2 })),
      pebble1: getSvgPathFromStroke(getStroke(pebble1, { ...STROKE_OPTIONS, size: 2 })),
      pebble2: getSvgPathFromStroke(getStroke(pebble2, { ...STROKE_OPTIONS, size: 2 })),
      pebble3: getSvgPathFromStroke(getStroke(pebble3, { ...STROKE_OPTIONS, size: 2 })),
      pebble4: getSvgPathFromStroke(getStroke(pebble4, { ...STROKE_OPTIONS, size: 2 })),
      moss1: getSvgPathFromStroke(getStroke(moss1, { ...STROKE_OPTIONS, size: 2 })),
      moss2: getSvgPathFromStroke(getStroke(moss2, { ...STROKE_OPTIONS, size: 2 })),
      moss3: getSvgPathFromStroke(getStroke(moss3, { ...STROKE_OPTIONS, size: 2 })),
      mushroomStem: getSvgPathFromStroke(getStroke(mushroomStem, { ...STROKE_OPTIONS, size: 1.5 })),
      mushroomCap: getSvgPathFromStroke(getStroke(mushroomCap, { ...STROKE_OPTIONS, size: 2 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Cork base fill */}
      <path d="M118,170 L282,170 L284,199 L116,199 Z" fill="#a1887f" />
      {/* Glass dome fill (very transparent) */}
      <path
        d="M125,170 C120,152 108,108 110,86 C115,62 132,40 162,28 C180,22 220,22 238,28 C268,40 285,62 290,86 C292,108 280,152 275,170 Z"
        fill="rgba(220,240,245,0.15)"
      />
      {/* Ground/soil inside */}
      <path
        d="M130,170 C135,164 158,160 200,159 C242,160 265,164 270,170 Z"
        fill="rgba(121,85,72,0.25)"
      />
      {/* Pebbles */}
      <path d={paths.pebble1} fill="rgba(158,158,158,0.5)" />
      <path d={paths.pebble2} fill="rgba(189,189,189,0.5)" />
      <path d={paths.pebble3} fill="rgba(158,158,158,0.5)" />
      <path d={paths.pebble4} fill="rgba(189,189,189,0.4)" />
      {/* Moss dots */}
      <path d={paths.moss1} fill="rgba(102,187,106,0.6)" />
      <path d={paths.moss2} fill="rgba(129,199,132,0.6)" />
      <path d={paths.moss3} fill="rgba(102,187,106,0.6)" />
      {/* Tiny mushroom */}
      <path d={paths.mushroomStem} fill="rgba(188,170,164,0.6)" />
      <path d={paths.mushroomCap} fill="rgba(239,108,77,0.5)" />
      {/* Glass dome outline */}
      <path d={paths.domeLeft} fill="#78909c" />
      <path d={paths.domeRight} fill="#78909c" />
      {/* Glass highlights */}
      <path d={paths.highlightLeft} fill="rgba(255,255,255,0.35)" />
      <path d={paths.highlightRight} fill="rgba(255,255,255,0.25)" />
      {/* Metal knob at top */}
      <path d={paths.knobBase} fill="#78909c" />
      <path d={paths.knobTop} fill="#90a4ae" />
      {/* Cork base outline */}
      <path d={paths.baseTop} fill="#6d4c41" />
      <path d={paths.baseBottom} fill="#6d4c41" />
      <path d={paths.baseLeft} fill="#6d4c41" />
      <path d={paths.baseRight} fill="#6d4c41" />
    </svg>
  );
}
