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

export function FreehandBoot({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Boot shaft left
    const shaftLeft: [number, number][] = [
      [155, 30],
      [152, 45],
      [150, 60],
      [148, 80],
      [146, 100],
      [144, 120],
      [142, 140],
      [140, 155],
    ];
    // Boot shaft right
    const shaftRight: [number, number][] = [
      [245, 30],
      [248, 45],
      [250, 60],
      [250, 80],
      [250, 100],
      [250, 120],
      [250, 140],
      [250, 155],
    ];
    // Boot opening at top
    const opening: [number, number][] = [
      [155, 30],
      [170, 27],
      [185, 26],
      [200, 25],
      [215, 26],
      [230, 27],
      [245, 30],
    ];
    // Foot shape extending forward
    const footBottom: [number, number][] = [
      [140, 155],
      [135, 160],
      [130, 168],
      [128, 175],
      [130, 180],
    ];
    const toeArea: [number, number][] = [
      [130, 180],
      [145, 184],
      [165, 186],
      [190, 187],
      [220, 186],
      [245, 184],
      [265, 182],
      [278, 178],
      [285, 172],
    ];
    const toeCurve: [number, number][] = [
      [250, 155],
      [260, 158],
      [272, 162],
      [282, 168],
      [285, 172],
    ];
    // Sole
    const sole: [number, number][] = [
      [125, 182],
      [145, 190],
      [170, 193],
      [200, 194],
      [230, 193],
      [260, 190],
      [280, 185],
      [290, 178],
    ];

    // Lace trim at top (wavy line)
    const laceTrim: [number, number][] = [
      [152, 38],
      [160, 34],
      [168, 38],
      [176, 34],
      [184, 38],
      [192, 34],
      [200, 38],
      [208, 34],
      [216, 38],
      [224, 34],
      [232, 38],
      [240, 34],
      [248, 38],
    ];

    // Buckle detail
    const buckleOuter: [number, number][] = [
      [182, 108],
      [182, 100],
      [218, 100],
      [218, 108],
      [218, 118],
      [182, 118],
      [182, 108],
    ];
    const buckleInner: [number, number][] = [
      [190, 104],
      [190, 114],
      [210, 114],
      [210, 104],
      [190, 104],
    ];
    const buckleProng: [number, number][] = [
      [200, 100],
      [200, 106],
      [202, 112],
      [200, 118],
    ];

    // Polka dots (small circles as freehand)
    const dot1: [number, number][] = [
      [170, 55],
      [173, 53],
      [176, 55],
      [173, 57],
      [170, 55],
    ];
    const dot2: [number, number][] = [
      [220, 60],
      [223, 58],
      [226, 60],
      [223, 62],
      [220, 60],
    ];
    const dot3: [number, number][] = [
      [185, 78],
      [188, 76],
      [191, 78],
      [188, 80],
      [185, 78],
    ];
    const dot4: [number, number][] = [
      [230, 85],
      [233, 83],
      [236, 85],
      [233, 87],
      [230, 85],
    ];
    const dot5: [number, number][] = [
      [165, 130],
      [168, 128],
      [171, 130],
      [168, 132],
      [165, 130],
    ];
    const dot6: [number, number][] = [
      [215, 135],
      [218, 133],
      [221, 135],
      [218, 137],
      [215, 135],
    ];

    // Puddle underneath
    const puddleOuter: [number, number][] = [
      [115, 196],
      [140, 198],
      [170, 200],
      [200, 200],
      [230, 200],
      [260, 198],
      [295, 196],
    ];
    const puddleInner: [number, number][] = [
      [145, 196],
      [170, 197],
      [200, 197],
      [240, 197],
      [265, 196],
    ];

    return {
      shaftLeft: getSvgPathFromStroke(getStroke(shaftLeft, { ...OPTS, size: 3.5 })),
      shaftRight: getSvgPathFromStroke(getStroke(shaftRight, { ...OPTS, size: 3.5 })),
      opening: getSvgPathFromStroke(getStroke(opening, { ...OPTS, size: 3 })),
      footBottom: getSvgPathFromStroke(getStroke(footBottom, { ...OPTS, size: 3.5 })),
      toeArea: getSvgPathFromStroke(getStroke(toeArea, { ...OPTS, size: 3 })),
      toeCurve: getSvgPathFromStroke(getStroke(toeCurve, { ...OPTS, size: 3 })),
      sole: getSvgPathFromStroke(getStroke(sole, { ...OPTS, size: 4 })),
      laceTrim: getSvgPathFromStroke(getStroke(laceTrim, { ...OPTS, size: 2, thinning: 0.3 })),
      buckleOuter: getSvgPathFromStroke(getStroke(buckleOuter, { ...OPTS, size: 2.5 })),
      buckleInner: getSvgPathFromStroke(getStroke(buckleInner, { ...OPTS, size: 1.5 })),
      buckleProng: getSvgPathFromStroke(getStroke(buckleProng, { ...OPTS, size: 1.5 })),
      dot1: getSvgPathFromStroke(getStroke(dot1, { ...OPTS, size: 2 })),
      dot2: getSvgPathFromStroke(getStroke(dot2, { ...OPTS, size: 2 })),
      dot3: getSvgPathFromStroke(getStroke(dot3, { ...OPTS, size: 2 })),
      dot4: getSvgPathFromStroke(getStroke(dot4, { ...OPTS, size: 2 })),
      dot5: getSvgPathFromStroke(getStroke(dot5, { ...OPTS, size: 2 })),
      dot6: getSvgPathFromStroke(getStroke(dot6, { ...OPTS, size: 2 })),
      puddleOuter: getSvgPathFromStroke(
        getStroke(puddleOuter, { ...OPTS, size: 2, thinning: 0.3 }),
      ),
      puddleInner: getSvgPathFromStroke(
        getStroke(puddleInner, { ...OPTS, size: 1.2, thinning: 0.5 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Boot fill */}
      <path
        d="M155,30 C150,50 146,100 140,155 L128,175 C128,182 140,188 200,194 C260,190 290,178 290,178 L285,172 C280,162 250,155 250,155 C250,100 248,50 245,30 Z"
        fill="#f06292"
      />
      {/* Sole fill */}
      <path
        d="M125,182 C125,190 150,196 200,196 C260,196 290,185 290,178 L285,172 C278,178 260,186 200,188 C140,186 130,180 128,175 Z"
        fill="#ad1457"
      />
      {/* Buckle fill */}
      <path d="M182,100 L218,100 L218,118 L182,118 Z" fill="#ffd700" />
      {/* Polka dots fills */}
      <circle cx="173" cy="55" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="223" cy="60" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="188" cy="78" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="233" cy="85" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="168" cy="130" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="218" cy="135" r="4" fill="rgba(255,255,255,0.4)" />
      {/* Polka dot outlines */}
      <path d={paths.dot1} fill="rgba(255,255,255,0.6)" />
      <path d={paths.dot2} fill="rgba(255,255,255,0.6)" />
      <path d={paths.dot3} fill="rgba(255,255,255,0.6)" />
      <path d={paths.dot4} fill="rgba(255,255,255,0.6)" />
      <path d={paths.dot5} fill="rgba(255,255,255,0.6)" />
      <path d={paths.dot6} fill="rgba(255,255,255,0.6)" />
      {/* Boot outlines */}
      <path d={paths.shaftLeft} fill="#880e4f" />
      <path d={paths.shaftRight} fill="#880e4f" />
      <path d={paths.opening} fill="#880e4f" />
      <path d={paths.footBottom} fill="#880e4f" />
      <path d={paths.toeArea} fill="#880e4f" />
      <path d={paths.toeCurve} fill="#880e4f" />
      <path d={paths.sole} fill="#4a0028" />
      {/* Lace trim */}
      <path d={paths.laceTrim} fill="#ffffff" />
      {/* Buckle outlines */}
      <path d={paths.buckleOuter} fill="#8d6e63" />
      <path d={paths.buckleInner} fill="#8d6e63" />
      <path d={paths.buckleProng} fill="#8d6e63" />
      {/* Puddle */}
      <path
        d="M115,196 C140,200 170,200 200,200 C240,200 270,198 295,196 C280,199 250,201 200,201 C150,201 130,199 115,196 Z"
        fill="rgba(144,202,249,0.35)"
      />
      <path d={paths.puddleOuter} fill="rgba(100,181,246,0.4)" />
      <path d={paths.puddleInner} fill="rgba(100,181,246,0.25)" />
    </svg>
  );
}
