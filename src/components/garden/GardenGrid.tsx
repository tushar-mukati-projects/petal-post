"use client";

import { useGetGardenBouquets } from "@/hooks/queries/useGetGardenBouquets";
import { GardenCard } from "./GardenCard";
import { Button } from "@/components/ui/button";
import { Loader2, Flower2 } from "lucide-react";
import type { FlowerMode } from "@/types/flower";
import type { ArrangementData } from "@/types/arrangement";
import type { WrapperType } from "@/types/bouquet";

export function GardenGrid() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetGardenBouquets();

  const creations = data?.pages.flatMap((p) => p.creations) || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-petal" />
      </div>
    );
  }

  if (creations.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <Flower2 className="w-12 h-12 text-muted-foreground mx-auto" />
        <p className="text-muted-foreground">No creations here yet. Be the first to share one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {creations.map((item, i) => (
          <GardenCard
            key={item.id}
            id={item.id}
            mode={item.mode as FlowerMode}
            arrangement={item.arrangement as ArrangementData}
            wrapper={item.wrapper as WrapperType}
            createdAt={item.createdAt}
            index={i}
          />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-cream-dark"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
