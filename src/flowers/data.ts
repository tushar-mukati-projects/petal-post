import type { FlowerDefinition } from "@/types/flower";

export const FLOWERS: FlowerDefinition[] = [
  { id: "rose", name: "Rose", meaning: "Love and passion", birthMonth: "June", size: "medium" },
  { id: "tulip", name: "Tulip", meaning: "Perfect love", birthMonth: "January", size: "medium" },
  {
    id: "sunflower",
    name: "Sunflower",
    meaning: "Adoration and loyalty",
    birthMonth: "August",
    size: "large",
  },
  {
    id: "peony",
    name: "Peony",
    meaning: "Prosperity and romance",
    birthMonth: "May",
    size: "large",
  },
  {
    id: "dahlia",
    name: "Dahlia",
    meaning: "Elegance and dignity",
    birthMonth: "November",
    size: "large",
  },
  {
    id: "daisy",
    name: "Daisy",
    meaning: "Innocence and purity",
    birthMonth: "April",
    size: "small",
  },
  { id: "lily", name: "Lily", meaning: "Devotion and purity", birthMonth: "May", size: "medium" },
  {
    id: "orchid",
    name: "Orchid",
    meaning: "Beauty and strength",
    birthMonth: "October",
    size: "small",
  },
  { id: "anemone", name: "Anemone", meaning: "Anticipation", birthMonth: "March", size: "small" },
  {
    id: "carnation",
    name: "Carnation",
    meaning: "Fascination and love",
    birthMonth: "January",
    size: "medium",
  },
  {
    id: "ranunculus",
    name: "Ranunculus",
    meaning: "Charm and attraction",
    birthMonth: "February",
    size: "medium",
  },
  {
    id: "zinnia",
    name: "Zinnia",
    meaning: "Thoughts of friends",
    birthMonth: "September",
    size: "medium",
  },
];

export const FLOWER_MAP = Object.fromEntries(FLOWERS.map((f) => [f.id, f])) as Record<
  string,
  FlowerDefinition
>;
