"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { GardenBouquetResponse } from "@/types/bouquet";

export function useGetGardenBouquets(limit = 12) {
  return useInfiniteQuery<GardenBouquetResponse>({
    queryKey: ["collections"],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get(`/api/creations?page=${pageParam}&limit=${limit}`);
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.page + 1 : undefined),
    staleTime: 30_000,
  });
}
