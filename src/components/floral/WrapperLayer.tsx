"use client";

import type { WrapperType } from "@/types/floral";
import { WRAPPER_COMPONENTS } from "@/flowers/wrappers";

interface WrapperLayerProps {
  wrapper: WrapperType;
  className?: string;
}

export function WrapperLayer({ wrapper, className }: WrapperLayerProps) {
  const Component = WRAPPER_COMPONENTS[wrapper];
  return <Component className={className} />;
}
