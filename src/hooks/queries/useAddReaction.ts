"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { EmojiType, ReactionCounts } from "@/types/reaction";

interface AddReactionPayload {
  bouquetId: string;
  emoji: EmojiType;
  sessionId: string;
}

export function useAddReaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: AddReactionPayload) => {
      const { data } = await api.post("/api/reactions", payload);
      return data as { action: "added" | "removed" };
    },
    onMutate: async (payload) => {
      const queryKey = ["reactions", payload.bouquetId, payload.sessionId];
      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData<ReactionCounts>(queryKey);

      // Optimistic update
      if (previous) {
        const isRemoving = previous.userReactions.includes(payload.emoji);
        const updated: ReactionCounts = {
          ...previous,
          [payload.emoji]: isRemoving
            ? Math.max(0, previous[payload.emoji] - 1)
            : previous[payload.emoji] + 1,
          total: isRemoving ? Math.max(0, previous.total - 1) : previous.total + 1,
          userReactions: isRemoving
            ? previous.userReactions.filter((e) => e !== payload.emoji)
            : [...previous.userReactions, payload.emoji],
        };
        queryClient.setQueryData(queryKey, updated);
      }

      return { previous };
    },
    onError: (_err, payload, context) => {
      if (context?.previous) {
        queryClient.setQueryData(
          ["reactions", payload.bouquetId, payload.sessionId],
          context.previous,
        );
      }
    },
    onSettled: (_data, _err, payload) => {
      queryClient.invalidateQueries({
        queryKey: ["reactions", payload.bouquetId],
      });
    },
  });
}
