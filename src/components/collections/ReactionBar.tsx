"use client";

import { useGetReactions } from "@/hooks/queries/useGetReactions";
import { useAddReaction } from "@/hooks/queries/useAddReaction";
import type { EmojiType } from "@/types/reaction";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EMOJIS: { type: EmojiType; icon: string }[] = [
  { type: "heart", icon: "\u2764\uFE0F" },
  { type: "fire", icon: "\uD83D\uDD25" },
  { type: "sparkle", icon: "\u2728" },
  { type: "wow", icon: "\uD83D\uDE2E" },
];

interface ReactionBarProps {
  floralId: string;
  compact?: boolean;
}

export function ReactionBar({ floralId, compact = false }: ReactionBarProps) {
  const { data: reactions } = useGetReactions(floralId);
  const { mutate: addReaction } = useAddReaction();

  const handleReact = (emoji: EmojiType) => {
    addReaction({ floralId, emoji });
  };

  return (
    <div className={cn("flex items-center", compact ? "gap-1" : "gap-2")}>
      {EMOJIS.map(({ type, icon }) => {
        const count = reactions?.[type] || 0;

        return (
          <motion.button
            key={type}
            whileTap={{ scale: 1.3 }}
            onClick={() => handleReact(type)}
            className={cn(
              "flex items-center gap-1 rounded-full transition-all cursor-pointer",
              compact ? "px-2 py-0.5 text-xs" : "px-3 py-1.5 text-sm",
              "bg-white/60 border border-transparent hover:bg-white hover:border-cream-dark",
            )}
          >
            <span className={compact ? "text-sm" : "text-base"}>{icon}</span>
            {count > 0 && <span className="text-muted-foreground font-medium">{count}</span>}
          </motion.button>
        );
      })}
    </div>
  );
}
