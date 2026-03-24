"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/axios";
import type { CreateBouquetPayload } from "@/types/bouquet";

export function useCreateBouquet() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateBouquetPayload) => {
      const { data } = await api.post("/api/creations", payload);
      return data as { id: string; createdAt: string };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["collections"] });
      toast.success("Created! Sharing the love...");
      router.push(`/creation/${data.id}`);
    },
    onError: () => {
      toast.error("Failed to create. Please try again.");
    },
  });
}
