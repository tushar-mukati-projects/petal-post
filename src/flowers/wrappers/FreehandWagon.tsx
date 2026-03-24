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

export function FreehandWagon({ className }: { className?: string }) {
  const paths = useMemo(() => {
    // Wagon body - top edge
    const bodyTop: [number, number][] = [
      [120, 80],
      [140, 78],
      [170, 77],
      [200, 76],
      [230, 77],
      [260, 78],
      [280, 80],
    ];
    // Wagon body - bottom edge
    const bodyBottom: [number, number][] = [
      [125, 140],
      [150, 142],
      [175, 143],
      [200, 143],
      [225, 143],
      [250, 142],
      [275, 140],
    ];
    // Wagon body - left side
    const bodyLeft: [number, number][] = [
      [120, 80],
      [121, 95],
      [122, 110],
      [123, 125],
      [125, 140],
    ];
    // Wagon body - right side
    const bodyRight: [number, number][] = [
      [280, 80],
      [279, 95],
      [278, 110],
      [277, 125],
      [275, 140],
    ];
    // Rim detail top
    const rimTop: [number, number][] = [
      [118, 77],
      [140, 74],
      [170, 73],
      [200, 72],
      [230, 73],
      [260, 74],
      [282, 77],
    ];
    // Axle front
    const axleFront: [number, number][] = [
      [145, 148],
      [155, 148],
      [165, 148],
    ];
    // Axle rear
    const axleRear: [number, number][] = [
      [235, 148],
      [245, 148],
      [255, 148],
    ];
    // Left wheel outer
    const wheel1: [number, number][] = [
      [155, 145],
      [145, 148],
      [138, 155],
      [135, 165],
      [138, 175],
      [145, 182],
      [155, 185],
      [165, 182],
      [172, 175],
      [175, 165],
      [172, 155],
      [165, 148],
      [155, 145],
    ];
    // Right wheel outer
    const wheel2: [number, number][] = [
      [245, 145],
      [235, 148],
      [228, 155],
      [225, 165],
      [228, 175],
      [235, 182],
      [245, 185],
      [255, 182],
      [262, 175],
      [265, 165],
      [262, 155],
      [255, 148],
      [245, 145],
    ];
    // Wheel 1 spokes
    const spoke1a: [number, number][] = [
      [155, 155],
      [155, 175],
    ];
    const spoke1b: [number, number][] = [
      [145, 165],
      [165, 165],
    ];
    const spoke1c: [number, number][] = [
      [147, 157],
      [163, 173],
    ];
    const spoke1d: [number, number][] = [
      [163, 157],
      [147, 173],
    ];
    // Wheel 2 spokes
    const spoke2a: [number, number][] = [
      [245, 155],
      [245, 175],
    ];
    const spoke2b: [number, number][] = [
      [235, 165],
      [255, 165],
    ];
    const spoke2c: [number, number][] = [
      [237, 157],
      [253, 173],
    ];
    const spoke2d: [number, number][] = [
      [253, 157],
      [237, 173],
    ];
    // Handle
    const handle: [number, number][] = [
      [120, 110],
      [110, 108],
      [98, 105],
      [85, 100],
      [75, 92],
      [68, 82],
      [65, 72],
    ];
    // Handle grip
    const grip: [number, number][] = [
      [62, 68],
      [60, 72],
      [62, 76],
      [68, 78],
      [72, 74],
      [70, 68],
      [64, 66],
      [62, 68],
    ];
    // Hay/straw strands inside
    const hay1: [number, number][] = [
      [140, 78],
      [145, 68],
      [150, 60],
      [158, 55],
    ];
    const hay2: [number, number][] = [
      [170, 76],
      [175, 65],
      [182, 58],
      [188, 52],
    ];
    const hay3: [number, number][] = [
      [210, 76],
      [215, 66],
      [222, 58],
      [228, 55],
    ];
    const hay4: [number, number][] = [
      [245, 77],
      [248, 68],
      [252, 62],
      [258, 58],
    ];
    const hay5: [number, number][] = [
      [190, 76],
      [192, 65],
      [196, 56],
      [200, 50],
    ];

    return {
      bodyTop: getSvgPathFromStroke(getStroke(bodyTop, { ...OPTS, size: 3.5 })),
      bodyBottom: getSvgPathFromStroke(getStroke(bodyBottom, { ...OPTS, size: 3 })),
      bodyLeft: getSvgPathFromStroke(getStroke(bodyLeft, { ...OPTS, size: 3.5 })),
      bodyRight: getSvgPathFromStroke(getStroke(bodyRight, { ...OPTS, size: 3.5 })),
      rimTop: getSvgPathFromStroke(getStroke(rimTop, { ...OPTS, size: 2.5 })),
      axleFront: getSvgPathFromStroke(getStroke(axleFront, { ...OPTS, size: 3 })),
      axleRear: getSvgPathFromStroke(getStroke(axleRear, { ...OPTS, size: 3 })),
      wheel1: getSvgPathFromStroke(getStroke(wheel1, { ...OPTS, size: 3 })),
      wheel2: getSvgPathFromStroke(getStroke(wheel2, { ...OPTS, size: 3 })),
      spoke1a: getSvgPathFromStroke(getStroke(spoke1a, { ...OPTS, size: 1.5 })),
      spoke1b: getSvgPathFromStroke(getStroke(spoke1b, { ...OPTS, size: 1.5 })),
      spoke1c: getSvgPathFromStroke(getStroke(spoke1c, { ...OPTS, size: 1.5 })),
      spoke1d: getSvgPathFromStroke(getStroke(spoke1d, { ...OPTS, size: 1.5 })),
      spoke2a: getSvgPathFromStroke(getStroke(spoke2a, { ...OPTS, size: 1.5 })),
      spoke2b: getSvgPathFromStroke(getStroke(spoke2b, { ...OPTS, size: 1.5 })),
      spoke2c: getSvgPathFromStroke(getStroke(spoke2c, { ...OPTS, size: 1.5 })),
      spoke2d: getSvgPathFromStroke(getStroke(spoke2d, { ...OPTS, size: 1.5 })),
      handle: getSvgPathFromStroke(getStroke(handle, { ...OPTS, size: 3.5 })),
      grip: getSvgPathFromStroke(getStroke(grip, { ...OPTS, size: 3 })),
      hay1: getSvgPathFromStroke(getStroke(hay1, { ...OPTS, size: 1.5, thinning: 0.8 })),
      hay2: getSvgPathFromStroke(getStroke(hay2, { ...OPTS, size: 1.5, thinning: 0.8 })),
      hay3: getSvgPathFromStroke(getStroke(hay3, { ...OPTS, size: 1.5, thinning: 0.8 })),
      hay4: getSvgPathFromStroke(getStroke(hay4, { ...OPTS, size: 1.5, thinning: 0.8 })),
      hay5: getSvgPathFromStroke(getStroke(hay5, { ...OPTS, size: 1.5, thinning: 0.8 })),
    };
  }, []);

  return (
    <svg viewBox="0 0 400 200" className={className}>
      {/* Wagon body fill */}
      <rect x="120" y="76" width="160" height="67" rx="3" fill="#f44336" />
      {/* Rim highlight */}
      <rect x="118" y="72" width="164" height="8" rx="2" fill="#d32f2f" />
      {/* Hay/straw inside */}
      <path d={paths.hay1} fill="#c8b052" />
      <path d={paths.hay2} fill="#d4b84a" />
      <path d={paths.hay3} fill="#c8b052" />
      <path d={paths.hay4} fill="#d4b84a" />
      <path d={paths.hay5} fill="#baa842" />
      {/* Body outlines */}
      <path d={paths.bodyTop} fill="#b71c1c" />
      <path d={paths.bodyBottom} fill="#b71c1c" />
      <path d={paths.bodyLeft} fill="#b71c1c" />
      <path d={paths.bodyRight} fill="#b71c1c" />
      <path d={paths.rimTop} fill="#c62828" />
      {/* Rivet dots */}
      <circle cx="135" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="155" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="175" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="195" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="215" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="235" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="255" cy="82" r="2.5" fill="#ef9a9a" />
      <circle cx="270" cy="82" r="2.5" fill="#ef9a9a" />
      {/* Axles */}
      <path d={paths.axleFront} fill="#616161" />
      <path d={paths.axleRear} fill="#616161" />
      {/* Wheel fills */}
      <circle cx="155" cy="165" r="18" fill="#424242" />
      <circle cx="155" cy="165" r="12" fill="#616161" />
      <circle cx="245" cy="165" r="18" fill="#424242" />
      <circle cx="245" cy="165" r="12" fill="#616161" />
      {/* Hub caps */}
      <circle cx="155" cy="165" r="4" fill="#9e9e9e" />
      <circle cx="245" cy="165" r="4" fill="#9e9e9e" />
      {/* Wheel outlines */}
      <path d={paths.wheel1} fill="#212121" />
      <path d={paths.wheel2} fill="#212121" />
      {/* Spokes */}
      <path d={paths.spoke1a} fill="#9e9e9e" />
      <path d={paths.spoke1b} fill="#9e9e9e" />
      <path d={paths.spoke1c} fill="#9e9e9e" />
      <path d={paths.spoke1d} fill="#9e9e9e" />
      <path d={paths.spoke2a} fill="#9e9e9e" />
      <path d={paths.spoke2b} fill="#9e9e9e" />
      <path d={paths.spoke2c} fill="#9e9e9e" />
      <path d={paths.spoke2d} fill="#9e9e9e" />
      {/* Handle */}
      <path d={paths.handle} fill="#795548" />
      <path d={paths.grip} fill="#4e342e" />
    </svg>
  );
}
