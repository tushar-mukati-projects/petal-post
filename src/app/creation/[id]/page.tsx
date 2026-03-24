"use client";

import { use } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BouquetRenderer } from "@/components/bouquet/BouquetRenderer";
import { ShareButtons } from "@/components/bouquet/ShareButtons";
import { ReactionBar } from "@/components/garden/ReactionBar";
import { useGetBouquet } from "@/hooks/queries/useGetBouquet";
import type { ArrangementData } from "@/types/arrangement";
import type { FlowerMode } from "@/types/flower";
import type { WrapperType } from "@/types/bouquet";
import { Loader2, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/shared/FloatingHearts";

export default function CreationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: creation, isLoading, isError } = useGetBouquet(id);

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
              This creation may have been removed or the link is incorrect.
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
        {/* Central stage */}
        <div className="w-full max-w-md mx-auto">
          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-medium text-petal tracking-wide uppercase mb-1"
          >
            A gift for you
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-2xl sm:text-3xl font-heading font-extrabold text-foreground mb-2"
          >
            Someone made this for you!
          </motion.h1>

          {/* Bouquet showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Soft glow behind bouquet */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-petal-light/40 via-rose-pastel/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Bouquet - clip top dead space */}
            <div className="relative overflow-hidden" style={{ height: 370, marginTop: -20 }}>
              <div style={{ marginTop: -50 }}>
                <BouquetRenderer
                  arrangement={creation.arrangement as ArrangementData}
                  mode={creation.mode as FlowerMode}
                  wrapper={creation.wrapper as WrapperType}
                  animate
                />
              </div>
            </div>
          </motion.div>

          {/* Card - overlaps slightly into bouquet area */}
          {hasCard && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              className="-mt-4 relative z-10"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-cream-dark/60 p-6 mx-auto max-w-sm">
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
            <ShareButtons creationId={id} />
            <ReactionBar bouquetId={id} />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
