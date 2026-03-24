export type ArrangementType =
  | "dome"
  | "cascade"
  | "crescent"
  | "tower"
  | "fan"
  | "wild"
  | "spiral"
  | "triangle"
  | "diamond"
  | "cluster"
  | "wave"
  | "scatter";

export interface FlowerPosition {
  flowerId: string;
  index: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}

/** New template-based format */
export interface TemplateArrangement {
  type: ArrangementType;
  flowers: string[];
}

/** Legacy coordinate-based format */
export interface CoordinateArrangement {
  positions: FlowerPosition[];
  seed: number;
}

export type ArrangementData = TemplateArrangement | CoordinateArrangement;

export function isTemplateArrangement(a: ArrangementData): a is TemplateArrangement {
  return "type" in a && "flowers" in a;
}
