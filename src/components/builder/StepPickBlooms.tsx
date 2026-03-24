"use client";

import { FLOWERS } from "@/flowers/data";
import { useFloralStore } from "@/stores/useFloralStore";
import { OCCASION_MAP } from "@/lib/occasions";
import { FlowerCard } from "./FlowerCard";
import type { FlowerType } from "@/types/flower";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { MAX_FLOWERS, MIN_FLOWERS } from "@/lib/constants";

export function StepPickBlooms() {
  const { occasion, selectedFlowers, addFlower, removeFlower } = useFloralStore();

  const flowerCount = selectedFlowers.length;
  const isMaxed = flowerCount >= MAX_FLOWERS;

  // Count occurrences of each flower
  const flowerCounts: Record<string, number> = {};
  selectedFlowers.forEach((f) => {
    flowerCounts[f] = (flowerCounts[f] || 0) + 1;
  });

  // Get suggested flowers for the occasion
  const occasionData = OCCASION_MAP[occasion];
  const suggestedFlowers = occasionData?.suggestedFlowers || [];

  // Sort: suggested first, then rest
  const sortedFlowers = [...FLOWERS].sort((a, b) => {
    const aIsSuggested = suggestedFlowers.includes(a.id);
    const bIsSuggested = suggestedFlowers.includes(b.id);
    if (aIsSuggested && !bIsSuggested) return -1;
    if (!aIsSuggested && bIsSuggested) return 1;
    return 0;
  });

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-extrabold text-foreground">Pick your blooms</h2>
        <p className="text-muted-foreground">
          Select{" "}
          <span className="font-semibold text-petal">
            {MIN_FLOWERS} to {MAX_FLOWERS}
          </span>{" "}
          flowers for your Floral
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm border border-cream-dark">
          <span
            className={`text-sm font-bold ${
              flowerCount >= MIN_FLOWERS ? "text-petal" : "text-muted-foreground"
            }`}
          >
            {flowerCount}
          </span>
          <span className="text-xs text-muted-foreground">/ {MAX_FLOWERS} selected</span>
        </div>
      </div>

      {suggestedFlowers.length > 0 && (
        <p className="text-center text-xs text-muted-foreground">
          Suggested for {occasionData?.label}:{" "}
          <span className="text-petal font-medium">
            {suggestedFlowers.map((f) => FLOWERS.find((fl) => fl.id === f)?.name).join(", ")}
          </span>
        </p>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
        {sortedFlowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            flowerId={flower.id}
            count={flowerCounts[flower.id] || 0}
            onSelect={() => addFlower(flower.id)}
            disabled={isMaxed && !flowerCounts[flower.id]}
          />
        ))}
      </div>

      {/* Selected flowers summary */}
      {flowerCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 pt-2"
        >
          {selectedFlowers.map((flower, i) => (
            <motion.button
              key={`${flower}-${i}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => removeFlower(flower as FlowerType)}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-medium text-foreground border border-cream-dark hover:border-petal/50 hover:bg-petal-light/30 transition-all cursor-pointer group"
            >
              <span className="capitalize">{flower}</span>
              <X className="w-3 h-3 text-muted-foreground group-hover:text-petal transition-colors" />
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
