"use client";

import type { ArrangementData, FlowerPosition } from "@/types/arrangement";
import { isTemplateArrangement } from "@/types/arrangement";
import type { WrapperType } from "@/types/floral";
import { resolvePositions } from "@/lib/arrangement";
import { FlowerLayer } from "./FlowerLayer";
import { WrapperLayer } from "./WrapperLayer";

interface FloralRendererProps {
  arrangement: ArrangementData;
  wrapper: WrapperType;
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
  // Resolve positions from template or use legacy positions
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
      {/* Flowers */}
      {positions.map((pos, i) => (
        <FlowerLayer
          key={`${pos.flowerId}-${pos.index}`}
          position={pos}
          animate={animate}
          index={i}
        />
      ))}

      {/* Wrapper at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full">
        <WrapperLayer wrapper={wrapper} />
      </div>
    </div>
  );
}
