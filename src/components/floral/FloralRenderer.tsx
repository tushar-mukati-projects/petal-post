"use client";

import type { ArrangementData, FlowerPosition } from "@/types/arrangement";
import { isTemplateArrangement } from "@/types/arrangement";
import { resolvePositions } from "@/lib/arrangement";
import { FlowerLayer } from "./FlowerLayer";
import { WrapperLayer } from "./WrapperLayer";

interface FloralRendererProps {
  arrangement: ArrangementData;
  /** Wrapper ID — e.g. "tissue", "rough_tissue", "freehand_tissue" */
  wrapper: string;
  animate?: boolean;
  className?: string;
  scale?: number;
}

export function FloralRenderer({
  arrangement,
  wrapper,
  animate = false,
  className,
  scale = 1,
}: FloralRendererProps) {
  const positions: FlowerPosition[] = isTemplateArrangement(arrangement)
    ? resolvePositions(arrangement)
    : (arrangement as { positions: FlowerPosition[] }).positions;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: 380,
        height: 440,
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: "top center",
      }}
    >
      {positions.map((pos, i) => (
        <FlowerLayer
          key={`${pos.flowerId}-${pos.index}`}
          position={pos}
          animate={animate}
          index={i}
        />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full">
        <WrapperLayer wrapper={wrapper} />
      </div>
    </div>
  );
}
