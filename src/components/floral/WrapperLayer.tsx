"use client";

import type { WrapperType } from "@/types/floral";
import { WRAPPER_COMPONENTS, FREEHAND_WRAPPER_COMPONENTS } from "@/flowers/wrappers";

interface WrapperLayerProps {
  /** Wrapper ID — can be "tissue", "rough_tissue", or "freehand_tissue" */
  wrapper: string;
  className?: string;
}

/** Parse a wrapper ID into base type and style */
export function parseWrapperId(id: string): { base: WrapperType; isFreehand: boolean } {
  if (id.startsWith("freehand_")) {
    return { base: id.replace("freehand_", "") as WrapperType, isFreehand: true };
  }
  if (id.startsWith("rough_")) {
    return { base: id.replace("rough_", "") as WrapperType, isFreehand: false };
  }
  // Legacy: plain wrapper name defaults to rough
  return { base: id as WrapperType, isFreehand: false };
}

export function WrapperLayer({ wrapper, className }: WrapperLayerProps) {
  const { base, isFreehand } = parseWrapperId(wrapper);

  if (isFreehand) {
    const FreehandComponent = FREEHAND_WRAPPER_COMPONENTS[base];
    if (FreehandComponent) {
      return <FreehandComponent className={className} />;
    }
  }

  const Component = WRAPPER_COMPONENTS[base];
  if (!Component) return null;
  return <Component className={className} />;
}
