"use client";

import type { ArrangementData } from "@/types/arrangement";
import type { WrapperType } from "@/types/floral";
import { FloralRenderer } from "@/components/floral/FloralRenderer";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

interface CollectionCardProps {
  id: string;
  arrangement: ArrangementData;
  wrapper: WrapperType;
  createdAt: string;
  index?: number;
}

export function CollectionCard({
  arrangement,
  wrapper,
  createdAt,
  index = 0,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
        <div className="relative h-64 flex items-center justify-center overflow-hidden bg-cream/50 p-4">
          <div className="transform scale-[0.5] origin-center">
            <FloralRenderer arrangement={arrangement} wrapper={wrapper} />
          </div>
        </div>
        <div className="p-3 space-y-2">
          <p className="text-xs text-muted-foreground">{formatDate(createdAt)}</p>
        </div>
      </div>
    </motion.div>
  );
}
