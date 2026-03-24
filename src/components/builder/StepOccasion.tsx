"use client";

import { OCCASIONS } from "@/lib/occasions";
import type { OccasionType } from "@/types/bouquet";
import { useBouquetStore } from "@/stores/useBouquetStore";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StepOccasion() {
  const { occasion, setOccasion } = useBouquetStore();

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-extrabold text-foreground">
          What&apos;s the occasion?
        </h2>
        <p className="text-muted-foreground">Choose an occasion or skip for a freeform creation</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
        {OCCASIONS.map((occ, i) => (
          <motion.button
            key={occ.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setOccasion(occ.id as OccasionType)}
            className={cn(
              "flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer",
              "hover:shadow-md hover:scale-[1.02]",
              occasion === occ.id
                ? "border-petal bg-petal-light/40 shadow-md"
                : "border-transparent bg-white/60 hover:bg-white",
            )}
          >
            <span className="text-3xl">{occ.icon}</span>
            <span className="text-sm font-semibold text-foreground">{occ.label}</span>
            <span className="text-xs text-muted-foreground text-center leading-snug">
              {occ.description}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
