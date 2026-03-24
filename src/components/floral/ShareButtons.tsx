"use client";

import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks/useClipboard";
import { useShare } from "@/hooks/useShare";
import { Copy, Share2, Check, Download } from "lucide-react";

interface ShareButtonsProps {
  creationId: string;
  onDownload?: () => void;
}

export function ShareButtons({ creationId, onDownload }: ShareButtonsProps) {
  const { copy, copied } = useClipboard();
  const { share } = useShare();

  const url =
    typeof window !== "undefined" ? `${window.location.origin}/creation/${creationId}` : "";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
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
            title: "Someone sent you a Floral!",
            text: "Check out this beautiful Floral made with PetalPost!",
            url,
          })
        }
      >
        <Share2 className="w-4 h-4" />
        Share
      </Button>
      {onDownload && (
        <Button
          variant="outline"
          className="rounded-full gap-2 border-petal/30 text-petal hover:bg-petal-light/20"
          onClick={onDownload}
        >
          <Download className="w-4 h-4" />
          Save PNG
        </Button>
      )}
    </div>
  );
}
