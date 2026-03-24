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

export function FreehandOrigami({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Container left edge
    const leftEdge: [number, number][] = [
      [150, 65],
      [148, 85],
      [146, 105],
      [145, 125],
      [144, 145],
      [144, 165],
      [145, 185],
      [148, 200],
    ];
    // Container right edge
    const rightEdge: [number, number][] = [
      [250, 65],
      [252, 85],
      [254, 105],
      [255, 125],
      [256, 145],
      [256, 165],
      [255, 185],
      [252, 200],
    ];
    // Container bottom
    const bottom: [number, number][] = [
      [148, 200],
      [165, 202],
      [185, 203],
      [200, 204],
      [215, 203],
      [235, 202],
      [252, 200],
    ];
    // Rim left angle
    const rimLeft: [number, number][] = [
      [130, 80],
      [135, 74],
      [142, 68],
      [150, 65],
    ];
    // Rim right angle
    const rimRight: [number, number][] = [
      [250, 65],
      [258, 68],
      [265, 74],
      [270, 80],
    ];
    // Rim front edge
    const rimFront: [number, number][] = [
      [130, 80],
      [150, 77],
      [175, 74],
      [200, 73],
      [225, 74],
      [250, 77],
      [270, 80],
    ];
    // Fold crease - center vertical
    const creaseCenter: [number, number][] = [
      [200, 73],
      [200, 100],
      [200, 130],
      [200, 160],
      [200, 190],
      [200, 204],
    ];
    // Fold crease - diagonal left
    const creaseDiagLeft: [number, number][] = [
      [150, 65],
      [165, 95],
      [178, 130],
      [188, 165],
      [195, 200],
    ];
    // Fold crease - diagonal right
    const creaseDiagRight: [number, number][] = [
      [250, 65],
      [235, 95],
      [222, 130],
      [212, 165],
      [205, 200],
    ];
    // Inner rim fold line
    const innerRim: [number, number][] = [
      [145, 75],
      [165, 72],
      [185, 70],
      [200, 69],
      [215, 70],
      [235, 72],
      [255, 75],
    ];
    // Origami crane body (perched on right rim)
    const craneBody: [number, number][] = [
      [255, 60],
      [260, 55],
      [268, 52],
      [275, 50],
      [272, 55],
      [265, 58],
      [258, 62],
    ];
    // Crane wing up
    const craneWing: [number, number][] = [
      [260, 55],
      [256, 46],
      [254, 38],
      [258, 32],
      [264, 36],
      [266, 44],
      [265, 52],
    ];
    // Crane neck and head
    const craneNeck: [number, number][] = [
      [275, 50],
      [280, 44],
      [284, 40],
      [288, 38],
      [286, 42],
      [282, 46],
    ];
    // Panel accent line 1
    const accent1: [number, number][] = [
      [155, 100],
      [165, 120],
      [175, 140],
    ];
    // Panel accent line 2
    const accent2: [number, number][] = [
      [245, 100],
      [235, 120],
      [225, 140],
    ];

    return {
      leftEdge: getSvgPathFromStroke(getStroke(leftEdge, { ...STROKE_OPTIONS, size: 3 })),
      rightEdge: getSvgPathFromStroke(getStroke(rightEdge, { ...STROKE_OPTIONS, size: 3 })),
      bottom: getSvgPathFromStroke(getStroke(bottom, { ...STROKE_OPTIONS, size: 3 })),
      rimLeft: getSvgPathFromStroke(getStroke(rimLeft, { ...STROKE_OPTIONS, size: 3 })),
      rimRight: getSvgPathFromStroke(getStroke(rimRight, { ...STROKE_OPTIONS, size: 3 })),
      rimFront: getSvgPathFromStroke(getStroke(rimFront, { ...STROKE_OPTIONS, size: 2.5 })),
      creaseCenter: getSvgPathFromStroke(
        getStroke(creaseCenter, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.7 }),
      ),
      creaseDiagLeft: getSvgPathFromStroke(
        getStroke(creaseDiagLeft, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.7 }),
      ),
      creaseDiagRight: getSvgPathFromStroke(
        getStroke(creaseDiagRight, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.7 }),
      ),
      innerRim: getSvgPathFromStroke(getStroke(innerRim, { ...STROKE_OPTIONS, size: 2 })),
      craneBody: getSvgPathFromStroke(getStroke(craneBody, { ...STROKE_OPTIONS, size: 2 })),
      craneWing: getSvgPathFromStroke(getStroke(craneWing, { ...STROKE_OPTIONS, size: 2 })),
      craneNeck: getSvgPathFromStroke(getStroke(craneNeck, { ...STROKE_OPTIONS, size: 1.5 })),
      accent1: getSvgPathFromStroke(
        getStroke(accent1, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
      accent2: getSvgPathFromStroke(
        getStroke(accent2, { ...STROKE_OPTIONS, size: 1.5, thinning: 0.6 }),
      ),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Panel fills - left mint panel */}
      <path d="M150,65 L200,73 L200,204 L148,200 L144,145 Z" fill="#e8f5e9" />
      {/* Center-left lavender panel */}
      <path d="M150,65 L200,73 L195,200 L148,200 Z" fill="rgba(243,229,245,0.5)" />
      {/* Right peach panel */}
      <path d="M200,73 L250,65 L256,145 L255,185 L252,200 L200,204 Z" fill="#fff3e0" />
      {/* Center-right lavender panel */}
      <path d="M200,73 L250,65 L252,200 L205,200 Z" fill="rgba(243,229,245,0.5)" />
      {/* Rim flap left */}
      <path d="M130,80 L150,65 L150,77 L130,80 Z" fill="#e8f5e9" />
      {/* Rim flap right */}
      <path d="M270,80 L250,65 L250,77 L270,80 Z" fill="#fff3e0" />
      {/* Fold creases */}
      <path d={paths.creaseCenter} fill="rgba(120,120,120,0.25)" />
      <path d={paths.creaseDiagLeft} fill="rgba(120,120,120,0.15)" />
      <path d={paths.creaseDiagRight} fill="rgba(120,120,120,0.15)" />
      {/* Panel accent lines */}
      <path d={paths.accent1} fill="rgba(129,199,132,0.3)" />
      <path d={paths.accent2} fill="rgba(255,183,77,0.3)" />
      {/* Container outline */}
      <path d={paths.leftEdge} fill="#78909c" />
      <path d={paths.rightEdge} fill="#78909c" />
      <path d={paths.bottom} fill="#78909c" />
      {/* Rim edges */}
      <path d={paths.rimLeft} fill="#607d8b" />
      <path d={paths.rimRight} fill="#607d8b" />
      <path d={paths.rimFront} fill="#607d8b" />
      <path d={paths.innerRim} fill="#90a4ae" />
      {/* Origami crane perched on edge */}
      <path d={paths.craneBody} fill="rgba(244,143,177,0.7)" />
      <path d={paths.craneWing} fill="rgba(240,98,146,0.6)" />
      <path d={paths.craneNeck} fill="rgba(244,143,177,0.7)" />
    </svg>
  );
}
