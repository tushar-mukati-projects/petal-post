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

export function FreehandCrate({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Slat 1 (top)
    const slat1Top: [number, number][] = [
      [120, 60],
      [155, 58],
      [200, 57],
      [245, 58],
      [280, 60],
    ];
    const slat1Bottom: [number, number][] = [
      [120, 82],
      [155, 80],
      [200, 79],
      [245, 80],
      [280, 82],
    ];
    // Slat 2
    const slat2Top: [number, number][] = [
      [120, 85],
      [155, 83],
      [200, 82],
      [245, 83],
      [280, 85],
    ];
    const slat2Bottom: [number, number][] = [
      [120, 107],
      [155, 105],
      [200, 104],
      [245, 105],
      [280, 107],
    ];
    // Slat 3
    const slat3Top: [number, number][] = [
      [120, 110],
      [155, 108],
      [200, 107],
      [245, 108],
      [280, 110],
    ];
    const slat3Bottom: [number, number][] = [
      [120, 132],
      [155, 130],
      [200, 129],
      [245, 130],
      [280, 132],
    ];
    // Slat 4
    const slat4Top: [number, number][] = [
      [120, 135],
      [155, 133],
      [200, 132],
      [245, 133],
      [280, 135],
    ];
    const slat4Bottom: [number, number][] = [
      [120, 157],
      [155, 155],
      [200, 154],
      [245, 155],
      [280, 157],
    ];
    // Slat 5 (bottom)
    const slat5Top: [number, number][] = [
      [120, 160],
      [155, 158],
      [200, 157],
      [245, 158],
      [280, 160],
    ];
    const slat5Bottom: [number, number][] = [
      [120, 182],
      [155, 180],
      [200, 179],
      [245, 180],
      [280, 182],
    ];
    // Left side board
    const sideLeft: [number, number][] = [
      [120, 55],
      [118, 80],
      [117, 110],
      [117, 140],
      [118, 170],
      [120, 185],
    ];
    // Right side board
    const sideRight: [number, number][] = [
      [280, 55],
      [282, 80],
      [283, 110],
      [283, 140],
      [282, 170],
      [280, 185],
    ];
    // Top rim
    const topRim: [number, number][] = [
      [115, 55],
      [150, 52],
      [200, 50],
      [250, 52],
      [285, 55],
    ];
    // Bottom edge
    const bottomEdge: [number, number][] = [
      [118, 185],
      [150, 187],
      [200, 188],
      [250, 187],
      [282, 185],
    ];
    // Wood grain lines
    const grain1: [number, number][] = [
      [140, 65],
      [160, 64],
      [180, 63],
      [200, 64],
      [220, 65],
    ];
    const grain2: [number, number][] = [
      [145, 92],
      [170, 90],
      [200, 89],
      [230, 90],
      [255, 92],
    ];
    const grain3: [number, number][] = [
      [142, 118],
      [165, 116],
      [200, 115],
      [235, 116],
      [258, 118],
    ];
    const grain4: [number, number][] = [
      [148, 143],
      [175, 141],
      [200, 140],
      [225, 141],
      [252, 143],
    ];
    const grain5: [number, number][] = [
      [145, 168],
      [170, 166],
      [200, 165],
      [230, 166],
      [255, 168],
    ];
    // Hay poking out top - left
    const hay1: [number, number][] = [
      [155, 55],
      [148, 42],
      [142, 28],
      [140, 18],
    ];
    const hay2: [number, number][] = [
      [170, 53],
      [165, 40],
      [162, 25],
      [165, 15],
    ];
    const hay3: [number, number][] = [
      [190, 52],
      [188, 38],
      [192, 22],
      [195, 12],
    ];
    // Hay poking out top - right
    const hay4: [number, number][] = [
      [220, 52],
      [225, 38],
      [228, 25],
      [225, 14],
    ];
    const hay5: [number, number][] = [
      [240, 53],
      [245, 40],
      [250, 28],
      [252, 18],
    ];
    const hay6: [number, number][] = [
      [260, 55],
      [262, 42],
      [258, 30],
      [255, 22],
    ];
    // Small label outline
    const labelTop: [number, number][] = [
      [182, 125],
      [190, 124],
      [200, 123],
      [210, 124],
      [218, 125],
    ];
    const labelBottom: [number, number][] = [
      [182, 150],
      [190, 151],
      [200, 152],
      [210, 151],
      [218, 150],
    ];
    const labelLeft: [number, number][] = [
      [182, 125],
      [181, 132],
      [181, 140],
      [182, 150],
    ];
    const labelRight: [number, number][] = [
      [218, 125],
      [219, 132],
      [219, 140],
      [218, 150],
    ];
    // Heart on label
    const heartLeft: [number, number][] = [
      [200, 142],
      [195, 136],
      [192, 132],
      [194, 128],
      [198, 130],
      [200, 134],
    ];
    const heartRight: [number, number][] = [
      [200, 142],
      [205, 136],
      [208, 132],
      [206, 128],
      [202, 130],
      [200, 134],
    ];

    return {
      slat1Top: getSvgPathFromStroke(getStroke(slat1Top, { ...STROKE_OPTIONS, size: 2.5 })),
      slat1Bottom: getSvgPathFromStroke(getStroke(slat1Bottom, { ...STROKE_OPTIONS, size: 2.5 })),
      slat2Top: getSvgPathFromStroke(getStroke(slat2Top, { ...STROKE_OPTIONS, size: 2.5 })),
      slat2Bottom: getSvgPathFromStroke(getStroke(slat2Bottom, { ...STROKE_OPTIONS, size: 2.5 })),
      slat3Top: getSvgPathFromStroke(getStroke(slat3Top, { ...STROKE_OPTIONS, size: 2.5 })),
      slat3Bottom: getSvgPathFromStroke(getStroke(slat3Bottom, { ...STROKE_OPTIONS, size: 2.5 })),
      slat4Top: getSvgPathFromStroke(getStroke(slat4Top, { ...STROKE_OPTIONS, size: 2.5 })),
      slat4Bottom: getSvgPathFromStroke(getStroke(slat4Bottom, { ...STROKE_OPTIONS, size: 2.5 })),
      slat5Top: getSvgPathFromStroke(getStroke(slat5Top, { ...STROKE_OPTIONS, size: 2.5 })),
      slat5Bottom: getSvgPathFromStroke(getStroke(slat5Bottom, { ...STROKE_OPTIONS, size: 2.5 })),
      sideLeft: getSvgPathFromStroke(getStroke(sideLeft, { ...STROKE_OPTIONS, size: 3.5 })),
      sideRight: getSvgPathFromStroke(getStroke(sideRight, { ...STROKE_OPTIONS, size: 3.5 })),
      topRim: getSvgPathFromStroke(getStroke(topRim, { ...STROKE_OPTIONS, size: 3 })),
      bottomEdge: getSvgPathFromStroke(getStroke(bottomEdge, { ...STROKE_OPTIONS, size: 3 })),
      grain1: getSvgPathFromStroke(
        getStroke(grain1, { ...STROKE_OPTIONS, size: 1, thinning: 0.3 }),
      ),
      grain2: getSvgPathFromStroke(
        getStroke(grain2, { ...STROKE_OPTIONS, size: 1, thinning: 0.3 }),
      ),
      grain3: getSvgPathFromStroke(
        getStroke(grain3, { ...STROKE_OPTIONS, size: 1, thinning: 0.3 }),
      ),
      grain4: getSvgPathFromStroke(
        getStroke(grain4, { ...STROKE_OPTIONS, size: 1, thinning: 0.3 }),
      ),
      grain5: getSvgPathFromStroke(
        getStroke(grain5, { ...STROKE_OPTIONS, size: 1, thinning: 0.3 }),
      ),
      hay1: getSvgPathFromStroke(getStroke(hay1, { ...STROKE_OPTIONS, size: 1.5 })),
      hay2: getSvgPathFromStroke(getStroke(hay2, { ...STROKE_OPTIONS, size: 1.5 })),
      hay3: getSvgPathFromStroke(getStroke(hay3, { ...STROKE_OPTIONS, size: 1.5 })),
      hay4: getSvgPathFromStroke(getStroke(hay4, { ...STROKE_OPTIONS, size: 1.5 })),
      hay5: getSvgPathFromStroke(getStroke(hay5, { ...STROKE_OPTIONS, size: 1.5 })),
      hay6: getSvgPathFromStroke(getStroke(hay6, { ...STROKE_OPTIONS, size: 1.5 })),
      labelTop: getSvgPathFromStroke(getStroke(labelTop, { ...STROKE_OPTIONS, size: 1.5 })),
      labelBottom: getSvgPathFromStroke(getStroke(labelBottom, { ...STROKE_OPTIONS, size: 1.5 })),
      labelLeft: getSvgPathFromStroke(getStroke(labelLeft, { ...STROKE_OPTIONS, size: 1.5 })),
      labelRight: getSvgPathFromStroke(getStroke(labelRight, { ...STROKE_OPTIONS, size: 1.5 })),
      heartLeft: getSvgPathFromStroke(getStroke(heartLeft, { ...STROKE_OPTIONS, size: 1.5 })),
      heartRight: getSvgPathFromStroke(getStroke(heartRight, { ...STROKE_OPTIONS, size: 1.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Crate body fill */}
      <path d="M120,55 L280,55 L283,185 L117,185 Z" fill="#f5e6d0" />
      {/* Side boards (slightly darker) */}
      <path d="M117,55 L132,55 L132,185 L117,185 Z" fill="#e8d4b8" />
      <path d="M268,55 L283,55 L283,185 L268,185 Z" fill="#e8d4b8" />
      {/* Label fill */}
      <path d="M182,125 L218,125 L219,150 L181,150 Z" fill="rgba(255,255,240,0.8)" />
      {/* Hay fills */}
      <path
        d="M155,55 L148,42 L142,28 L140,18 L143,18 L150,30 L158,45 L160,55 Z"
        fill="rgba(218,185,107,0.5)"
      />
      <path
        d="M170,53 L165,40 L162,25 L165,15 L168,15 L167,28 L172,42 L175,53 Z"
        fill="rgba(218,185,107,0.45)"
      />
      <path
        d="M190,52 L188,38 L192,22 L195,12 L198,14 L194,26 L193,40 L195,52 Z"
        fill="rgba(218,185,107,0.5)"
      />
      <path
        d="M220,52 L225,38 L228,25 L225,14 L222,16 L224,28 L222,40 L218,52 Z"
        fill="rgba(218,185,107,0.45)"
      />
      <path
        d="M240,53 L245,40 L250,28 L252,18 L255,20 L252,32 L248,42 L243,53 Z"
        fill="rgba(218,185,107,0.5)"
      />
      <path
        d="M260,55 L262,42 L258,30 L255,22 L252,24 L256,34 L258,45 L258,55 Z"
        fill="rgba(218,185,107,0.45)"
      />
      {/* Wood grain */}
      <path d={paths.grain1} fill="rgba(160,120,60,0.15)" />
      <path d={paths.grain2} fill="rgba(160,120,60,0.15)" />
      <path d={paths.grain3} fill="rgba(160,120,60,0.15)" />
      <path d={paths.grain4} fill="rgba(160,120,60,0.15)" />
      <path d={paths.grain5} fill="rgba(160,120,60,0.15)" />
      {/* Slat outlines */}
      <path d={paths.slat1Top} fill="#a0845c" />
      <path d={paths.slat1Bottom} fill="#a0845c" />
      <path d={paths.slat2Top} fill="#a0845c" />
      <path d={paths.slat2Bottom} fill="#a0845c" />
      <path d={paths.slat3Top} fill="#a0845c" />
      <path d={paths.slat3Bottom} fill="#a0845c" />
      <path d={paths.slat4Top} fill="#a0845c" />
      <path d={paths.slat4Bottom} fill="#a0845c" />
      <path d={paths.slat5Top} fill="#a0845c" />
      <path d={paths.slat5Bottom} fill="#a0845c" />
      {/* Side boards */}
      <path d={paths.sideLeft} fill="#8b7355" />
      <path d={paths.sideRight} fill="#8b7355" />
      {/* Top rim & bottom */}
      <path d={paths.topRim} fill="#8b7355" />
      <path d={paths.bottomEdge} fill="#8b7355" />
      {/* Hay outlines */}
      <path d={paths.hay1} fill="#dab96b" />
      <path d={paths.hay2} fill="#c8a84e" />
      <path d={paths.hay3} fill="#dab96b" />
      <path d={paths.hay4} fill="#c8a84e" />
      <path d={paths.hay5} fill="#dab96b" />
      <path d={paths.hay6} fill="#c8a84e" />
      {/* Label outline */}
      <path d={paths.labelTop} fill="#a0845c" />
      <path d={paths.labelBottom} fill="#a0845c" />
      <path d={paths.labelLeft} fill="#a0845c" />
      <path d={paths.labelRight} fill="#a0845c" />
      {/* Heart on label */}
      <path d={paths.heartLeft} fill="#e57373" />
      <path d={paths.heartRight} fill="#e57373" />
    </svg>
  );
}
