export type FlowerType =
  | "rose"
  | "tulip"
  | "sunflower"
  | "peony"
  | "dahlia"
  | "daisy"
  | "lily"
  | "orchid"
  | "anemone"
  | "carnation"
  | "ranunculus"
  | "zinnia";

export type FlowerMode = "color" | "mono";

export type FlowerSize = "large" | "medium" | "small";

export interface FlowerDefinition {
  id: FlowerType;
  name: string;
  meaning: string;
  birthMonth: string;
  size: FlowerSize;
}
