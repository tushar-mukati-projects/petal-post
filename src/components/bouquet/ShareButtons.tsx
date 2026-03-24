"use client";

import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/useClipboard";
import { useShare } from "@/hooks/useShare";
import { Copy, Share2, Check } from "lucide-react";

interface ShareButtonsProps {
  creationId: string;
}

export function ShareButtons({ creationId }: ShareButtonsProps) {
  const { copy, copied } = useClipboard();
  const { share } = useShare();

  const url =
    typeof window !== "undefined" ? `${window.location.origin}/creation/${creationId}` : "";

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="default"
        className="rounded-full gap-2 bg-foreground text-background hover:bg-foreground/90"
        onClick={() => copy(url)}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? "Copied!" : "Copy Link"}
      </Button>
      <Button
        variant="outline"
        className="rounded-full gap-2 border-foreground/20"
        onClick={() =>
          share({
            title: "Someone made this for you!",
            text: "Check out this beautiful digital flower creation made with PetalPost!",
            url,
          })
        }
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
    </div>
  );
}
