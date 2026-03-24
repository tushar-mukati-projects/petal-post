"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { ReactionCounts } from "@/types/reaction";

export function useGetReactions(bouquetId: string, sessionId: string) {
  return useQuery<ReactionCounts>({
    queryKey: ["reactions", bouquetId, sessionId],
    queryFn: async () => {
      const { data } = await api.get(
        `/api/reactions?bouquetId=${bouquetId}&sessionId=${sessionId}`,
      );
      return data;
    },
    enabled: !!bouquetId,
    staleTime: 10_000,
  });
}
