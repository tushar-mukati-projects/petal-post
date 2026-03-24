import type { ArrangementType } from "@/types/arrangement";
import type { WrapperType } from "@/types/floral";
import type { EmojiType } from "@/types/reaction";

// ===== Floral renderer dimensions =====
export const FLORAL_WIDTH = 380;
export const FLORAL_HEIGHT = 440;
/** Clipped display height (hides top dead space) */
export const FLORAL_DISPLAY_HEIGHT = 370;
/** Margin to shift flowers into view */
export const FLORAL_DISPLAY_OFFSET = -50;
export const FLORAL_CLIP_TOP = -20;

// ===== Flower selection limits =====
export const MIN_FLOWERS = 6;
export const MAX_FLOWERS = 15;

// ===== Card character limits =====
export const CARD_TO_MAX = 50;
export const CARD_FROM_MAX = 50;
export const CARD_MESSAGE_MAX = 500;

// ===== Arrangement types =====
export const ARRANGEMENT_TYPES: ArrangementType[] = [
  "dome",
  "cascade",
  "crescent",
  "tower",
  "fan",
  "wild",
  "spiral",
  "triangle",
  "diamond",
  "cluster",
  "wave",
  "scatter",
];

// ===== All wrapper types =====
export const ALL_WRAPPERS: WrapperType[] = [
  "paper",
  "vase",
  "basket",
  "ribbon",
  "foliage",
  "tissue",
  "jar",
  "pot",
  "giftbox",
  "bucket",
  "teacup",
  "envelope",
  "boot",
  "sunhat",
  "paperbag",
  "crate",
  "cone",
  "mug",
  "lantern",
  "nest",
  "shell",
  "heartbox",
  "cloud",
  "wagon",
  "bicycle",
  "macrame",
  "kimono",
  "terrarium",
  "origami",
  "vintage",
];

// ===== Reaction emojis =====
export const REACTION_EMOJIS: { type: EmojiType; icon: string }[] = [
  { type: "heart", icon: "❤️" },
  { type: "fire", icon: "🔥" },
  { type: "sparkle", icon: "✨" },
  { type: "wow", icon: "😮" },
];
