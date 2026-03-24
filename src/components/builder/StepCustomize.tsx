"use client";

import { useFloralStore } from "@/stores/useFloralStore";
import { FloralRenderer } from "@/components/floral/FloralRenderer";
import { Button } from "@/components/ui/button";
import { Shuffle, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StepCustomize() {
  const { arrangement, wrapper, shuffleArrangement, cycleWrapper } = useFloralStore();

  if (!arrangement) return null;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-extrabold text-foreground">Style your Floral</h2>
        <p className="text-muted-foreground">Shuffle to explore different styles</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          className="rounded-full gap-2 border-cream-dark hover:border-petal/50 hover:bg-petal-light/20"
          onClick={shuffleArrangement}
        >
          <Shuffle className="w-4 h-4" />
          Shuffle Arrangement
        </Button>
        <Button
          variant="outline"
          className="rounded-full gap-2 border-cream-dark hover:border-petal/50 hover:bg-petal-light/20"
          onClick={cycleWrapper}
        >
          <Package className="w-4 h-4" />
          Shuffle Wrapper
        </Button>
      </div>

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wrapper}
            initial={{ opacity: 0.7, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.7, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-cream/40 to-white/60 rounded-3xl p-4 sm:p-6 border border-cream-dark/40 shadow-sm"
          >
            <FloralRenderer arrangement={arrangement} wrapper={wrapper} scale={0.8} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
