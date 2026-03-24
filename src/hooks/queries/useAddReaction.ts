"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { EmojiType } from "@/types/reaction";

interface AddReactionPayload {
  floralId: string;
  emoji: EmojiType;
}

export function useAddReaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: AddReactionPayload) => {
      const { data } = await api.post("/api/reactions", payload);
      return data as { action: "added" };
    },
    onSettled: (_data, _err, payload) => {
      queryClient.invalidateQueries({
        queryKey: ["reactions", payload.floralId],
      });
    },
  });
}
