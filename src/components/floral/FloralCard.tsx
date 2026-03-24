"use client";

import { motion } from "framer-motion";

interface FloralCardProps {
  to: string;
  message: string;
  from: string;
  animate?: boolean;
}

export function FloralCard({ to, message, from, animate = false }: FloralCardProps) {
  const content = (
    <div className="bg-white rounded-2xl shadow-lg border border-cream-dark p-6 max-w-xs mx-auto">
      <div className="space-y-3 font-serif">
        {to && (
          <p className="text-foreground">
            <span className="font-semibold">Dear</span> <span className="text-petal">{to}</span>,
          </p>
        )}
        {message && (
          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
        )}
        {from && (
          <div className="text-right pt-2">
            <p className="text-foreground text-sm">
              <span className="font-semibold">Sincerely,</span>
            </p>
            <p className="text-petal text-sm">{from}</p>
          </div>
        )}
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
