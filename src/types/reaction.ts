export type EmojiType = "heart" | "fire" | "sparkle" | "wow";

export interface Reaction {
  id: string;
  bouquetId: string;
  emoji: EmojiType;
  sessionId: string;
  createdAt: string;
}

export interface ReactionCounts {
  heart: number;
  fire: number;
  sparkle: number;
  wow: number;
  total: number;
  userReactions: EmojiType[];
}
