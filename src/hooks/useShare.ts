"use client";

import { useCallback } from "react";
import { useClipboard } from "./useClipboard";

export function useShare() {
  const { copy } = useClipboard();

  const share = useCallback(
    async (data: { title: string; text: string; url: string }) => {
      if (typeof navigator !== "undefined" && navigator.share) {
        try {
          await navigator.share(data);
        } catch (err) {
          if ((err as Error).name !== "AbortError") {
            copy(data.url);
          }
        }
      } else {
        copy(data.url);
      }
    },
    [copy],
  );

  return { share };
}
