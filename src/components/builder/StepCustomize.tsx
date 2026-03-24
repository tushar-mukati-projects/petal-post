"use client";

import { useBouquetStore } from "@/stores/useBouquetStore";
import { BouquetRenderer } from "@/components/bouquet/BouquetRenderer";
import { WRAPPER_LABELS } from "@/flowers/wrappers";
import { FLOWER_MAP } from "@/flowers/data";
import { Button } from "@/components/ui/button";
import type { WrapperType } from "@/types/bouquet";
import { Shuffle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const WRAPPERS: WrapperType[] = ["paper", "vase", "basket", "ribbon"];

const WRAPPER_DESCRIPTIONS: Record<WrapperType, string> = {
  paper: "Classic & charming",
  vase: "Elegant & clear",
  basket: "Rustic & warm",
  ribbon: "Chic & refined",
};

const WRAPPER_EMOJIS: Record<WrapperType, string> = {
  paper: "📜",
  vase: "🏺",
  basket: "🧺",
  ribbon: "🎀",
};

export function StepCustomize() {
  const { mode, selectedFlowers, arrangement, wrapperTheme, shuffleArrangement, setWrapper } =
    useBouquetStore();

  if (!arrangement) return null;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-extrabold text-foreground">
          Style your creation
        </h2>
        <p className="text-muted-foreground">Choose a wrapper and arrange your flowers</p>
      </div>

      {/* Main preview */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wrapperTheme}
            initial={{ opacity: 0.7, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.7, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-cream/40 to-white/60 rounded-3xl p-4 sm:p-6 border border-cream-dark/40 shadow-sm"
          >
            <BouquetRenderer
              arrangement={arrangement}
              mode={mode}
              wrapper={wrapperTheme}
              scale={0.8}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Wrapper style cards */}
      <div className="space-y-3">
        <p className="text-center text-sm font-medium text-foreground">Wrapper Style</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {WRAPPERS.map((w, i) => (
            <motion.button
              key={w}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setWrapper(w)}
              className={cn(
                "relative rounded-2xl border-2 p-3 transition-all cursor-pointer overflow-hidden",
                wrapperTheme === w
                  ? "border-petal bg-petal-light/30 shadow-md"
                  : "border-cream-dark bg-white/60 hover:bg-cream/50 hover:border-petal/30",
              )}
            >
              <div className="flex justify-center items-center h-28 sm:h-32 pointer-events-none">
                <BouquetRenderer arrangement={arrangement} mode={mode} wrapper={w} scale={0.3} />
              </div>
              <div className="text-center mt-2 space-y-0.5">
                <p className="text-xs font-bold text-foreground flex items-center justify-center gap-1">
                  <span>{WRAPPER_EMOJIS[w]}</span>
                  {WRAPPER_LABELS[w]}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {WRAPPER_DESCRIPTIONS[w]}
                </p>
              </div>
              {wrapperTheme === w && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 bg-petal rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected flowers display */}
      <div className="space-y-2">
        <p className="text-center text-sm font-medium text-foreground">Your Flowers</p>
        <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
          {selectedFlowers.map((f, i) => {
            const flower = FLOWER_MAP[f];
            return (
              <motion.span
                key={`${f}-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-cream-dark text-xs font-medium text-foreground shadow-sm"
              >
                <span className="capitalize">{flower?.name || f}</span>
              </motion.span>
            );
          })}
        </div>
      </div>

      {/* Shuffle */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="rounded-full gap-2 border-cream-dark hover:border-petal/50 hover:bg-petal-light/20"
          onClick={shuffleArrangement}
        >
          <Shuffle className="w-4 h-4" />
          Shuffle Arrangement
        </Button>
      </div>
    </div>
  );
}
