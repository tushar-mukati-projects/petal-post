"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/axios";
import type { CreateFloralPayload } from "@/types/floral";

export function useCreateFloral() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateFloralPayload) => {
      const { data } = await api.post("/api/creations", payload);
      return data as { id: string; createdAt: string };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["collections"] });
      toast.success("Floral sent! Sharing the love...");
      router.push(`/creation/${data.id}`);
    },
    onError: () => {
      toast.error("Failed to create. Please try again.");
    },
  });
}
