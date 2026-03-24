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

export function FreehandPot({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Pot body left side (tapered trapezoid)
    const potLeft: [number, number][] = [
      [148, 75],
      [145, 90],
      [142, 110],
      [140, 130],
      [138, 150],
      [137, 170],
      [140, 185],
    ];
    // Pot body right side
    const potRight: [number, number][] = [
      [252, 75],
      [255, 90],
      [258, 110],
      [260, 130],
      [262, 150],
      [263, 170],
      [260, 185],
    ];
    // Pot bottom
    const potBottom: [number, number][] = [
      [140, 185],
      [160, 188],
      [180, 189],
      [200, 190],
      [220, 189],
      [240, 188],
      [260, 185],
    ];
    // Rim top (wider rectangle)
    const rimTop: [number, number][] = [
      [138, 60],
      [160, 58],
      [180, 57],
      [200, 56],
      [220, 57],
      [240, 58],
      [262, 60],
    ];
    // Rim bottom
    const rimBottom: [number, number][] = [
      [142, 78],
      [160, 76],
      [180, 75],
      [200, 74],
      [220, 75],
      [240, 76],
      [258, 78],
    ];
    // Rim left side
    const rimLeft: [number, number][] = [
      [138, 60],
      [140, 65],
      [142, 70],
      [144, 75],
      [148, 78],
    ];
    // Rim right side
    const rimRight: [number, number][] = [
      [262, 60],
      [260, 65],
      [258, 70],
      [256, 75],
      [252, 78],
    ];
    // Saucer ellipse (many points)
    const saucer: [number, number][] = [];
    for (let i = 0; i <= 24; i++) {
      const t = (2 * Math.PI * i) / 24;
      const x = 200 + 80 * Math.cos(t);
      const y = 195 + 10 * Math.sin(t);
      saucer.push([x, y]);
    }
    // Soil top surface
    const soilTop: [number, number][] = [
      [148, 75],
      [165, 70],
      [180, 68],
      [200, 66],
      [220, 68],
      [235, 70],
      [252, 75],
    ];
    // Decorative line on pot
    const decoLine: [number, number][] = [
      [144, 120],
      [160, 118],
      [180, 117],
      [200, 116],
      [220, 117],
      [240, 118],
      [256, 120],
    ];
    // Small heart (drawn as two curves meeting at a point)
    const heartLeft: [number, number][] = [
      [200, 148],
      [196, 142],
      [190, 138],
      [185, 139],
      [183, 144],
      [186, 150],
      [192, 156],
      [200, 162],
    ];
    const heartRight: [number, number][] = [
      [200, 148],
      [204, 142],
      [210, 138],
      [215, 139],
      [217, 144],
      [214, 150],
      [208, 156],
      [200, 162],
    ];
    // Decorative line 2 on pot
    const decoLine2: [number, number][] = [
      [143, 130],
      [160, 128],
      [180, 127],
      [200, 126],
      [220, 127],
      [240, 128],
      [257, 130],
    ];

    return {
      potLeft: getSvgPathFromStroke(getStroke(potLeft, { ...OPTS, size: 3.5 })),
      potRight: getSvgPathFromStroke(getStroke(potRight, { ...OPTS, size: 3.5 })),
      potBottom: getSvgPathFromStroke(getStroke(potBottom, { ...OPTS, size: 3 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...OPTS, size: 3.5 })),
      rimBottom: getSvgPathFromStroke(getStroke(rimBottom, { ...OPTS, size: 3 })),
      rimLeft: getSvgPathFromStroke(getStroke(rimLeft, { ...OPTS, size: 3 })),
      rimRight: getSvgPathFromStroke(getStroke(rimRight, { ...OPTS, size: 3 })),
      saucer: getSvgPathFromStroke(getStroke(saucer, { ...OPTS, size: 3 })),
      soilTop: getSvgPathFromStroke(getStroke(soilTop, { ...OPTS, size: 2.5, thinning: 0.3 })),
      decoLine: getSvgPathFromStroke(getStroke(decoLine, { ...OPTS, size: 1.5, thinning: 0.6 })),
      decoLine2: getSvgPathFromStroke(getStroke(decoLine2, { ...OPTS, size: 1.5, thinning: 0.6 })),
      heartLeft: getSvgPathFromStroke(getStroke(heartLeft, { ...OPTS, size: 2.5 })),
      heartRight: getSvgPathFromStroke(getStroke(heartRight, { ...OPTS, size: 2.5 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Saucer fill */}
      <ellipse cx="200" cy="195" rx="80" ry="10" fill="#d4845e" />
      {/* Pot body fill */}
      <path
        d="M148,75 C145,90 140,130 137,170 L140,185 C160,189 200,190 200,190 C200,190 240,189 260,185 L263,170 C260,130 255,90 252,75 Z"
        fill="#c75b39"
      />
      {/* Rim fill */}
      <path d="M138,60 C160,57 200,56 262,60 L258,78 C240,75 200,74 142,78 Z" fill="#d4845e" />
      {/* Soil fill */}
      <path d="M148,75 C165,70 200,66 252,75 L250,78 C240,76 200,74 150,78 Z" fill="#5d4037" />
      {/* Decorative lines */}
      <path d={paths.decoLine} fill="rgba(93,64,55,0.2)" />
      <path d={paths.decoLine2} fill="rgba(93,64,55,0.2)" />
      {/* Heart */}
      <path
        d="M200,148 C196,142 190,138 185,139 C183,144 186,150 200,162 C214,150 217,144 215,139 C210,138 204,142 200,148 Z"
        fill="#e57373"
        opacity="0.5"
      />
      <path d={paths.heartLeft} fill="#c62828" />
      <path d={paths.heartRight} fill="#c62828" />
      {/* Pot body outlines */}
      <path d={paths.potLeft} fill="#8d4925" />
      <path d={paths.potRight} fill="#8d4925" />
      <path d={paths.potBottom} fill="#8d4925" />
      {/* Rim outlines */}
      <path d={paths.rimTop} fill="#6d3a1f" />
      <path d={paths.rimBottom} fill="#8d4925" />
      <path d={paths.rimLeft} fill="#6d3a1f" />
      <path d={paths.rimRight} fill="#6d3a1f" />
      {/* Saucer outline */}
      <path d={paths.saucer} fill="#8d4925" />
      {/* Soil top outline */}
      <path d={paths.soilTop} fill="#3e2723" />
    </svg>
  );
}
