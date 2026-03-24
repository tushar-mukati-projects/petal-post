"use client";

import { useFloralStore } from "@/stores/useFloralStore";
import { FloralRenderer } from "@/components/floral/FloralRenderer";
import { useCreateFloral } from "@/hooks/queries/useCreateFloral";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { FloatingHearts } from "@/components/shared/FloatingHearts";
import { OCCASION_MAP } from "@/lib/occasions";
import { motion } from "framer-motion";

export function StepPreview() {
  const { occasion, selectedFlowers, arrangement, wrapper, cardTo, cardMessage, cardFrom } =
    useFloralStore();

  const { mutate: createFloral, isPending } = useCreateFloral();

  if (!arrangement) return null;

  const handleSend = () => {
    createFloral({
      occasion,
      flowers: selectedFlowers,
      arrangement,
      wrapper,
      cardTo,
      cardMessage,
      cardFrom,
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
            Preview your Floral
          </h2>
          <p className="text-muted-foreground text-sm">Here&apos;s what your recipient will see</p>
        </div>

        {/* Floral showcase */}
        <div className="relative">
          <div className="relative flex justify-center z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-72 h-72 rounded-full bg-rose-pastel/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-64 h-64 rounded-full bg-petal-light/25 blur-xl pointer-events-none" />

            <div className="relative overflow-hidden" style={{ height: 370, marginTop: -20 }}>
              <div style={{ marginTop: -50 }}>
                <FloralRenderer arrangement={arrangement} wrapper={wrapper} />
              </div>
            </div>
          </div>
        </div>

        {/* Card preview */}
        {hasCard && (
          <div className="-mt-6 relative z-10 flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-lg border border-cream-dark/60 p-6 max-w-xs rotate-[-2deg]">
              {occasion && (
                <span className="absolute -top-2 -right-2 font-handwritten text-xs font-semibold text-petal bg-petal-light/60 px-2.5 py-0.5 rounded-full rotate-[8deg] shadow-sm">
                  {OCCASION_MAP[occasion]?.icon} {OCCASION_MAP[occasion]?.label}
                </span>
              )}
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
            {isPending ? "Sending..." : "Send Floral"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
