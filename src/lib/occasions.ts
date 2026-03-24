import type { FlowerType } from "@/types/flower";
import type { OccasionType } from "@/types/floral";

export interface OccasionTemplate {
  id: OccasionType;
  label: string;
  icon: string;
  gradient: string;
  suggestedFlowers: FlowerType[];
  cardPlaceholder: string;
  description: string;
}

export const OCCASIONS: OccasionTemplate[] = [
  {
    id: "none",
    label: "Just Because",
    icon: "\uD83D\uDC9D",
    gradient: "from-rose-pastel to-lavender",
    suggestedFlowers: ["rose", "daisy", "tulip", "sunflower", "peony"],
    cardPlaceholder: "I wanted you to know...",
    description: "No reason needed to brighten someone's day",
  },
  {
    id: "birthday",
    label: "Birthday",
    icon: "\uD83C\uDF82",
    gradient: "from-pink-200 to-purple-200",
    suggestedFlowers: ["daisy", "sunflower", "carnation", "zinnia", "dahlia"],
    cardPlaceholder: "Wishing you the happiest birthday...",
    description: "Celebrate their special day with flowers",
  },
  {
    id: "valentine",
    label: "Valentine's",
    icon: "\uD83D\uDC95",
    gradient: "from-red-200 to-pink-200",
    suggestedFlowers: ["rose", "peony", "tulip", "ranunculus", "orchid"],
    cardPlaceholder: "You hold a special place in my heart...",
    description: "Express your love with romantic blooms",
  },
  {
    id: "thankyou",
    label: "Thank You",
    icon: "\uD83D\uDE4F",
    gradient: "from-yellow-200 to-orange-200",
    suggestedFlowers: ["sunflower", "daisy", "zinnia", "carnation", "ranunculus"],
    cardPlaceholder: "I just wanted to say thank you for...",
    description: "Show gratitude with warm, sunny blooms",
  },
  {
    id: "getwell",
    label: "Get Well",
    icon: "\uD83D\uDC90",
    gradient: "from-blue-200 to-green-200",
    suggestedFlowers: ["lily", "daisy", "orchid", "anemone", "tulip"],
    cardPlaceholder: "Sending healing thoughts your way...",
    description: "Send comfort and well wishes",
  },
  {
    id: "congrats",
    label: "Congrats!",
    icon: "\uD83C\uDF89",
    gradient: "from-amber-200 to-yellow-200",
    suggestedFlowers: ["sunflower", "dahlia", "peony", "rose", "zinnia"],
    cardPlaceholder: "Congratulations on this amazing achievement...",
    description: "Celebrate their success with bold blooms",
  },
];

export const OCCASION_MAP = Object.fromEntries(OCCASIONS.map((o) => [o.id, o])) as Record<
  OccasionType,
  OccasionTemplate
>;
