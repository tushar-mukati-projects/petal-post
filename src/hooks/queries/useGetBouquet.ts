"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { Bouquet } from "@/types/bouquet";

export function useGetBouquet(id: string | undefined) {
  return useQuery<Bouquet>({
    queryKey: ["creation", id],
    queryFn: async () => {
      const { data } = await api.get(`/api/creations/${id}`);
      return data;
    },
    enabled: !!id,
    staleTime: Infinity,
  });
}
