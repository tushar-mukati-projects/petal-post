export interface FlowerPosition {
  flowerId: string;
  index: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}

export interface ArrangementData {
  positions: FlowerPosition[];
  seed: number;
}
