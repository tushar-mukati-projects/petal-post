import type { FlowerType } from "@/types/flower";
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
  /** Compound wrapper ID: "rough_tissue", "freehand_vase", etc. */
  wrapper: string;
  flowers: FlowerType[];
  arrangementType: ArrangementType;
  reactions: { heart: number; fire: number; sparkle: number; wow: number };
}

// Generate mocks: rough versions + freehand versions
const roughMocks: MockCreation[] = ALL_WRAPPERS.map((base, i) => ({
  id: `rough-${i + 1}`,
  wrapper: `rough_${base}`,
  flowers: FLOWER_COMBOS[i % FLOWER_COMBOS.length],
  arrangementType: ARRANGEMENT_TYPES[i % ARRANGEMENT_TYPES.length],
  reactions: {
    heart: 5 + ((i * 7 + 3) % 20),
    fire: 1 + ((i * 3 + 1) % 8),
    sparkle: 2 + ((i * 5 + 2) % 12),
    wow: (i * 2 + 1) % 6,
  },
}));

const freehandMocks: MockCreation[] = ALL_WRAPPERS.map((base, i) => ({
  id: `freehand-${i + 1}`,
  wrapper: `freehand_${base}`,
  flowers: FLOWER_COMBOS[(i + 5) % FLOWER_COMBOS.length],
  arrangementType: ARRANGEMENT_TYPES[(i + 3) % ARRANGEMENT_TYPES.length],
  reactions: {
    heart: 3 + ((i * 5 + 2) % 18),
    fire: (i * 2 + 3) % 7,
    sparkle: 1 + ((i * 4 + 1) % 10),
    wow: (i * 3 + 2) % 5,
  },
}));

// Interleave: rough, freehand, rough, freehand...
export const MOCK_CREATIONS: MockCreation[] = [];
for (let i = 0; i < Math.max(roughMocks.length, freehandMocks.length); i++) {
  if (i < roughMocks.length) MOCK_CREATIONS.push(roughMocks[i]);
  if (i < freehandMocks.length) MOCK_CREATIONS.push(freehandMocks[i]);
}
