"use client";

import type { OccasionType } from "@/types/floral";
import { motion } from "framer-motion";

const OCCASION_TEXT: Record<OccasionType, string> = {
  none: "",
  birthday: "Happy Birthday",
  valentine: "With Love",
  thankyou: "Thank You",
  getwell: "Get Well Soon",
  congrats: "Congrats!",
};

interface OccasionBadgeProps {
  occasion: OccasionType;
  animate?: boolean;
}

export function OccasionBadge({ occasion, animate = false }: OccasionBadgeProps) {
  const text = OCCASION_TEXT[occasion];
  if (!text) return null;

  const content = (
    <div className="absolute inset-x-0 top-0 flex items-start justify-center pointer-events-none select-none overflow-hidden z-0 pt-4">
      <span
        className="font-handwritten text-7xl sm:text-8xl lg:text-9xl font-bold text-petal/[0.12] rotate-[-8deg] whitespace-nowrap tracking-wide"
        style={{ letterSpacing: "0.08em" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-x-0 top-0 z-0"
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
