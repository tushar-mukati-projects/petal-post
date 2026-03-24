import type { FlowerType } from "@/types/flower";
import type { WrapperType } from "@/types/floral";
import type { ArrangementType } from "@/types/arrangement";
import { ALL_WRAPPERS, ARRANGEMENT_TYPES } from "./constants";

const FLOWER_COMBOS: FlowerType[][] = [
  ["rose", "peony", "dahlia", "lily", "tulip", "ranunculus"],
  ["sunflower", "daisy", "zinnia", "carnation", "anemone", "orchid"],
  ["tulip", "rose", "peony", "lily", "daisy", "carnation", "orchid"],
  ["dahlia", "ranunculus", "anemone", "zinnia", "sunflower", "rose"],
  ["peony", "rose", "lily", "orchid", "tulip", "daisy"],
  ["sunflower", "dahlia", "zinnia", "carnation", "ranunculus", "anemone"],
  ["rose", "lily", "orchid", "daisy", "tulip", "peony", "carnation"],
  ["dahlia", "rose", "sunflower", "lily", "peony", "zinnia"],
  ["tulip", "carnation", "ranunculus", "orchid", "daisy", "anemone"],
  ["peony", "dahlia", "rose", "sunflower", "lily", "tulip", "zinnia"],
  ["orchid", "anemone", "daisy", "carnation", "ranunculus", "rose"],
  ["sunflower", "peony", "tulip", "dahlia", "lily", "orchid"],
  ["rose", "zinnia", "carnation", "daisy", "tulip", "ranunculus"],
];

export interface MockCreation {
  id: string;
  wrapper: WrapperType;
  flowers: FlowerType[];
  arrangementType: ArrangementType;
  reactions: { heart: number; fire: number; sparkle: number; wow: number };
}

export const MOCK_CREATIONS: MockCreation[] = ALL_WRAPPERS.map((wrapper, i) => ({
  id: `mock-${i + 1}`,
  wrapper,
  flowers: FLOWER_COMBOS[i % FLOWER_COMBOS.length],
  arrangementType: ARRANGEMENT_TYPES[i % ARRANGEMENT_TYPES.length],
  reactions: {
    heart: 5 + ((i * 7 + 3) % 20),
    fire: 1 + ((i * 3 + 1) % 8),
    sparkle: 2 + ((i * 5 + 2) % 12),
    wow: (i * 2 + 1) % 6,
  },
}));
