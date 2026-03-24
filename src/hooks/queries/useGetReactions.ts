"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { ReactionCounts } from "@/types/reaction";

export function useGetReactions(floralId: string) {
  return useQuery<ReactionCounts>({
    queryKey: ["reactions", floralId],
    queryFn: async () => {
      const { data } = await api.get(`/api/reactions?floralId=${floralId}`);
      return data;
    },
    enabled: !!floralId,
    staleTime: 10_000,
  });
}
