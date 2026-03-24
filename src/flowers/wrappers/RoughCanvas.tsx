"use client";

import { useRef, useEffect } from "react";
import rough from "roughjs";
import type { RoughSVG } from "roughjs/bin/svg";

export type DrawFn = (rc: RoughSVG, svg: SVGSVGElement) => void;

interface RoughCanvasProps {
  className?: string;
  viewBox?: string;
  draw: DrawFn;
}

export function RoughCanvas({ className, viewBox = "0 0 400 200", draw }: RoughCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const rc = rough.svg(svg);
    draw(rc, svg);
  }, [draw]);

  return <svg ref={svgRef} viewBox={viewBox} className={className} />;
}
