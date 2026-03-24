"use client";

import { useBouquetStore } from "@/stores/useBouquetStore";
import { BouquetRenderer } from "@/components/bouquet/BouquetRenderer";
import { useCreateBouquet } from "@/hooks/queries/useCreateBouquet";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { FloatingHearts } from "@/components/shared/FloatingHearts";
import { motion } from "framer-motion";

export function StepPreview() {
  const {
    mode,
    occasion,
    selectedFlowers,
    arrangement,
    wrapperTheme,
    cardTo,
    cardMessage,
    cardFrom,
  } = useBouquetStore();

  const { mutate: createBouquet, isPending } = useCreateBouquet();

  if (!arrangement) return null;

  const handleSend = () => {
    createBouquet({
      mode,
      occasion,
      flowers: selectedFlowers,
      arrangement,
      wrapper: wrapperTheme,
      cardTo,
      cardMessage,
      cardFrom,
      showInGarden: true,
    });
  };

  const hasCard = cardTo || cardMessage || cardFrom;

  return (
    <div className="relative">
      <FloatingHearts count={12} />

      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-heading font-extrabold text-foreground">
            Preview your creation
          </h2>
          <p className="text-muted-foreground text-sm">Here&apos;s what your recipient will see</p>
        </div>

        {/* Bouquet showcase */}
        <div className="relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-petal-light/30 via-rose-pastel/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative overflow-hidden" style={{ height: 370, marginTop: -20 }}>
            <div style={{ marginTop: -50 }}>
              <BouquetRenderer arrangement={arrangement} mode={mode} wrapper={wrapperTheme} />
            </div>
          </div>
        </div>

        {/* Card preview */}
        {hasCard && (
          <div className="-mt-4 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg border border-cream-dark/60 p-6 mx-auto max-w-sm">
              <div className="space-y-3 font-serif">
                {cardTo && (
                  <p className="text-foreground">
                    <span className="font-semibold">Dear</span>{" "}
                    <span className="text-petal">{cardTo}</span>,
                  </p>
                )}
                {cardMessage && (
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
                    {cardMessage}
                  </p>
                )}
                {cardFrom && (
                  <div className="text-right pt-2">
                    <p className="text-foreground text-sm">
                      <span className="font-semibold">Sincerely,</span>
                    </p>
                    <p className="text-petal text-sm">{cardFrom}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-cream-dark/60" />
          <span className="text-xs text-muted-foreground/50 select-none">🌸</span>
          <div className="flex-1 h-px bg-cream-dark/60" />
        </div>

        {/* Send button */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="rounded-full gap-2 bg-petal hover:bg-petal/90 text-white px-10 text-base font-heading font-bold shadow-lg shadow-petal/20 hover:shadow-xl hover:shadow-petal/30 transition-shadow"
            onClick={handleSend}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isPending ? "Sending..." : "Send It"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
