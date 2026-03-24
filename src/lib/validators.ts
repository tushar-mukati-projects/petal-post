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

const flowerPositionSchema = z.object({
  flowerId: z.string(),
  index: z.number(),
  x: z.number(),
  y: z.number(),
  rotation: z.number(),
  scale: z.number(),
  zIndex: z.number(),
});

const arrangementSchema = z.object({
  positions: z.array(flowerPositionSchema),
  seed: z.number(),
});

export const createBouquetSchema = z.object({
  mode: z.enum(["color", "mono"]),
  occasion: z.enum(["none", "birthday", "valentine", "thankyou", "getwell", "congrats"]),
  flowers: z.array(z.enum(flowerTypes)).min(6).max(10),
  arrangement: arrangementSchema,
  wrapper: z.enum(["paper", "vase", "basket", "ribbon"]),
  cardTo: z.string().max(50),
  cardMessage: z.string().max(500),
  cardFrom: z.string().max(50),
  showInGarden: z.boolean().optional().default(true),
});

export const bouquetIdSchema = z.string().uuid();

export const addReactionSchema = z.object({
  bouquetId: z.string().uuid(),
  emoji: z.enum(["heart", "fire", "sparkle", "wow"]),
  sessionId: z.string().min(1),
});

export type CreateBouquetInput = z.infer<typeof createBouquetSchema>;
export type AddReactionInput = z.infer<typeof addReactionSchema>;
