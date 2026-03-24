"use client";

import { FloralRenderer } from "@/components/floral/FloralRenderer";
import { createArrangement } from "@/lib/arrangement";
import { WRAPPER_LABELS } from "@/flowers/wrappers";
import { REACTION_EMOJIS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { MockCreation } from "@/lib/mockData";
import { Loader2 } from "lucide-react";

interface LazyCardProps {
  mock: MockCreation;
}

export function LazyCard({ mock }: LazyCardProps) {
  const { ref, visible } = useIntersectionObserver("200px");

  const arrangement = visible ? createArrangement(mock.flowers, mock.arrangementType) : null;

  return (
    <div ref={ref}>
      <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
        <div className="relative h-64 flex items-center justify-center overflow-hidden bg-cream/50 p-4">
          {arrangement ? (
            <div className="transform scale-[0.5] origin-center">
              <FloralRenderer arrangement={arrangement} wrapper={mock.wrapper} />
            </div>
          ) : (
            <Loader2 className="w-6 h-6 animate-spin text-petal/30" />
          )}
        </div>
        <div className="p-3 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{WRAPPER_LABELS[mock.wrapper]}</p>
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {REACTION_EMOJIS.map(({ type, icon }) => {
          const count = mock.reactions[type];
          return (
            <span
              key={type}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/60 border border-transparent text-xs"
            >
              <span className="text-sm">{icon}</span>
              {count > 0 && <span className="text-muted-foreground font-medium">{count}</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
