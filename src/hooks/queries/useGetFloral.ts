"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import type { Floral } from "@/types/floral";

export function useGetFloral(id: string | undefined) {
  return useQuery<Floral>({
    queryKey: ["floral", id],
    queryFn: async () => {
      const { data } = await api.get(`/api/creations/${id}`);
      return data;
    },
    enabled: !!id,
    staleTime: Infinity,
  });
}
