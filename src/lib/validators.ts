import { z } from "zod/v4";

const flowerTypes = [
  "rose",
  "tulip",
  "sunflower",
  "peony",
  "dahlia",
  "daisy",
  "lily",
  "orchid",
  "anemone",
  "carnation",
  "ranunculus",
  "zinnia",
] as const;

const arrangementSchema = z.object({
  type: z.enum([
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
  ]),
  flowers: z.array(z.string()),
});

export const createFloralSchema = z.object({
  occasion: z.enum(["none", "birthday", "valentine", "thankyou", "getwell", "congrats"]),
  flowers: z.array(z.enum(flowerTypes)).min(6).max(15),
  arrangement: arrangementSchema,
  wrapper: z.enum([
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
  ]),
  cardTo: z.string().max(50),
  cardMessage: z.string().max(500),
  cardFrom: z.string().max(50),
});

export const addReactionSchema = z.object({
  floralId: z.string().uuid(),
  emoji: z.enum(["heart", "fire", "sparkle", "wow"]),
});

export type CreateFloralInput = z.infer<typeof createFloralSchema>;
export type AddReactionInput = z.infer<typeof addReactionSchema>;
