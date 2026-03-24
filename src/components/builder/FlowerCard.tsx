"use client";

import { FlowerIcon } from "@/flowers";
import { FLOWER_MAP } from "@/flowers/data";
import type { FlowerType, FlowerMode } from "@/types/flower";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface FlowerCardProps {
  flowerId: FlowerType;
  mode: FlowerMode;
  count: number;
  onSelect: () => void;
  disabled?: boolean;
}

export function FlowerCard({ flowerId, mode, count, onSelect, disabled }: FlowerCardProps) {
  const flower = FLOWER_MAP[flowerId];

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={onSelect}
        disabled={disabled}
        className={cn(
          "relative flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200 cursor-pointer",
          "bg-white/60 hover:bg-white hover:shadow-md hover:scale-105 active:scale-95 border border-transparent",
          count > 0 && "border-petal/30 bg-petal-light/30 shadow-sm",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <div className="relative">
          <FlowerIcon id={flowerId} mode={mode} size={80} />
          {count > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-petal text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full border-0">
              {count}
            </Badge>
          )}
        </div>
        <span className="text-xs font-medium text-muted-foreground capitalize">{flower?.name}</span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-white border-cream-dark shadow-lg rounded-xl px-4 py-3"
      >
        <div className="text-center space-y-1">
          <p className="font-heading font-bold text-sm capitalize">{flower?.name}</p>
          <p className="text-xs text-petal italic">{flower?.meaning}</p>
          <p className="text-xs text-muted-foreground">Birth month: {flower?.birthMonth}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
