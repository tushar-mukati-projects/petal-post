"use client";

import { use, useRef, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloralRenderer } from "@/components/floral/FloralRenderer";
import { ShareButtons } from "@/components/floral/ShareButtons";
import { ReactionBar } from "@/components/collections/ReactionBar";
import { useGetFloral } from "@/hooks/queries/useGetFloral";
import type { ArrangementData } from "@/types/arrangement";
import type { WrapperType } from "@/types/floral";
import { OCCASION_MAP } from "@/lib/occasions";
import { Loader2, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/shared/FloatingHearts";
import { toPng } from "html-to-image";
import { toast } from "sonner";

export default function CreationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: creation, isLoading, isError } = useGetFloral(id);
  const captureRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(async () => {
    if (!captureRef.current) return;
    try {
      const dataUrl = await toPng(captureRef.current, {
        backgroundColor: "#faf5f0",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = "petalpost-floral.png";
      link.href = dataUrl;
      link.click();
      toast.success("Downloaded!");
    } catch {
      toast.error("Failed to download. Try again.");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-petal" />
      </div>
    );
  }

  if (isError || !creation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Flower2 className="w-16 h-16 text-muted-foreground mx-auto" />
            <h1 className="text-2xl font-heading font-bold">Not found</h1>
            <p className="text-muted-foreground">
              This Floral may have been removed or the link is incorrect.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const hasCard = creation.cardTo || creation.cardMessage || creation.cardFrom;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <FloatingHearts count={16} />
      <Header />

      <main className="flex-1 flex flex-col items-center px-4 py-6">
        <div className="w-full max-w-md mx-auto">
          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-medium text-petal tracking-wide uppercase mb-1"
          >
            A Floral for you
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-2"
          >
            Someone sent you a Floral!
          </motion.h1>

          {/* Capturable area (floral + card) */}
          <div ref={captureRef} className="pb-4 relative">
            {/* Floral showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center z-10"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-80 h-80 rounded-full bg-rose-pastel/30 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-72 h-72 rounded-full bg-petal-light/25 blur-xl pointer-events-none" />

              <div className="relative overflow-hidden" style={{ height: 370, marginTop: -20 }}>
                <div style={{ marginTop: -50 }}>
                  <FloralRenderer
                    arrangement={creation.arrangement as ArrangementData}
                    wrapper={creation.wrapper as WrapperType}
                    animate
                  />
                </div>
              </div>
            </motion.div>

            {/* Card */}
            {hasCard && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 120 }}
                className="-mt-6 relative z-10 flex justify-center"
              >
                <div className="relative bg-white rounded-2xl shadow-lg border border-cream-dark/60 p-6 max-w-xs rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  {creation.occasion && (
                    <span className="absolute -top-2 -right-2 font-handwritten text-xs font-semibold text-petal bg-petal-light/60 px-2.5 py-0.5 rounded-full rotate-[8deg] shadow-sm">
                      {
                        (OCCASION_MAP as Record<string, { icon: string; label: string }>)[
                          creation.occasion
                        ]?.icon
                      }{" "}
                      {
                        (OCCASION_MAP as Record<string, { icon: string; label: string }>)[
                          creation.occasion
                        ]?.label
                      }
                    </span>
                  )}
                  <div className="space-y-3 font-serif">
                    {creation.cardTo && (
                      <p className="text-foreground">
                        <span className="font-semibold">Dear</span>{" "}
                        <span className="text-petal">{creation.cardTo}</span>,
                      </p>
                    )}
                    {creation.cardMessage && (
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
                        {creation.cardMessage}
                      </p>
                    )}
                    {creation.cardFrom && (
                      <div className="text-right pt-2">
                        <p className="text-foreground text-sm">
                          <span className="font-semibold">Sincerely,</span>
                        </p>
                        <p className="text-petal text-sm">{creation.cardFrom}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-3 my-5"
          >
            <div className="flex-1 h-px bg-cream-dark/60" />
            <span className="text-xs text-muted-foreground/50 select-none">🌸</span>
            <div className="flex-1 h-px bg-cream-dark/60" />
          </motion.div>

          {/* Actions bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <ShareButtons creationId={id} onDownload={handleDownload} />
            <ReactionBar floralId={id} />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
