"use client";

import type { FlowerMode } from "@/types/flower";
import type { ArrangementData } from "@/types/arrangement";
import type { WrapperType } from "@/types/bouquet";
import { FlowerLayer } from "./FlowerLayer";
import { WrapperLayer } from "./WrapperLayer";

interface BouquetRendererProps {
  arrangement: ArrangementData;
  mode: FlowerMode;
  wrapper: WrapperType;
  animate?: boolean;
  className?: string;
  scale?: number;
}

export function BouquetRenderer({
  arrangement,
  mode,
  wrapper,
  animate = false,
  className,
  scale = 1,
}: BouquetRendererProps) {
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
      {arrangement.positions.map((pos, i) => (
        <FlowerLayer
          key={`${pos.flowerId}-${pos.index}`}
          position={pos}
          mode={mode}
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
