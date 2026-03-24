"use client";

import Link from "next/link";
import type { FlowerMode } from "@/types/flower";
import type { ArrangementData } from "@/types/arrangement";
import type { WrapperType } from "@/types/bouquet";
import { BouquetRenderer } from "@/components/bouquet/BouquetRenderer";
import { ReactionBar } from "./ReactionBar";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

interface GardenCardProps {
  id: string;
  mode: FlowerMode;
  arrangement: ArrangementData;
  wrapper: WrapperType;
  createdAt: string;
  index?: number;
}

export function GardenCard({
  id,
  mode,
  arrangement,
  wrapper,
  createdAt,
  index = 0,
}: GardenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/creation/${id}`} className="block group">
        <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]">
          {/* Bouquet preview */}
          <div className="relative h-64 flex items-center justify-center overflow-hidden bg-cream/50 p-4">
            <div className="transform scale-[0.5] origin-center">
              <BouquetRenderer arrangement={arrangement} mode={mode} wrapper={wrapper} />
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 space-y-2">
            <p className="text-xs text-muted-foreground">{formatDate(createdAt)}</p>
          </div>
        </div>
      </Link>

      {/* Reactions outside the link */}
      <div className="mt-2 flex justify-center">
        <ReactionBar bouquetId={id} compact />
      </div>
    </motion.div>
  );
}
