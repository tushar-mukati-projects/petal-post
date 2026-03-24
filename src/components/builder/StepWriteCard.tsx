"use client";

import { useState } from "react";
import { useFloralStore } from "@/stores/useFloralStore";
import { OCCASION_MAP } from "@/lib/occasions";
import { getRandomCardMessage } from "@/lib/cardMessages";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export function StepWriteCard() {
  const { occasion, cardTo, cardMessage, cardFrom, setCardTo, setCardMessage, setCardFrom } =
    useFloralStore();

  const [fadeIn, setFadeIn] = useState(false);

  const occasionData = OCCASION_MAP[occasion];

  function handleGenerateMessage() {
    const random = getRandomCardMessage(occasion);
    setCardTo(random.to);
    setCardMessage(random.message);
    setCardFrom(random.from);

    setFadeIn(false);
    requestAnimationFrame(() => setFadeIn(true));
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-heading font-extrabold text-foreground">Write your card</h2>
        <p className="text-muted-foreground">Add a personal message to your Floral</p>
      </div>

      {/* Generate random message */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleGenerateMessage}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-petal to-rose-pastel px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          title="Get inspired!"
        >
          <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
          Get inspired!
        </button>
      </div>

      {/* Card preview */}
      <div className="max-w-md mx-auto">
        <div
          className={`bg-white rounded-2xl shadow-lg border border-cream-dark p-8 space-y-6 transition-opacity duration-500 ${fadeIn ? "animate-in fade-in" : ""}`}
          onAnimationEnd={() => setFadeIn(false)}
        >
          {/* Dear... */}
          <div className="flex items-baseline gap-2">
            <span className="text-foreground font-serif font-semibold text-lg">Dear</span>
            <Input
              value={cardTo}
              onChange={(e) => setCardTo(e.target.value)}
              placeholder="Beloved"
              className="border-0 border-b border-cream-dark rounded-none px-1 py-0 text-petal font-serif text-lg focus-visible:ring-0 focus-visible:border-petal bg-transparent placeholder:text-petal/30"
              maxLength={50}
            />
            <span className="text-foreground font-serif text-lg">,</span>
          </div>

          {/* Message */}
          <Textarea
            value={cardMessage}
            onChange={(e) => setCardMessage(e.target.value)}
            placeholder={occasionData?.cardPlaceholder || "I wanted you to know..."}
            className="min-h-[120px] border-0 bg-transparent resize-none font-serif text-muted-foreground focus-visible:ring-0 placeholder:text-muted-foreground/30 p-0"
            maxLength={500}
          />

          {/* Sincerely... */}
          <div className="text-right space-y-1">
            <p className="text-foreground font-serif font-semibold">Sincerely,</p>
            <Input
              value={cardFrom}
              onChange={(e) => setCardFrom(e.target.value)}
              placeholder="A Secret Admirer"
              className="border-0 border-b border-cream-dark rounded-none px-1 py-0 text-petal font-serif text-right focus-visible:ring-0 focus-visible:border-petal bg-transparent placeholder:text-petal/30"
              maxLength={50}
            />
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-3">
          {cardMessage.length}/500 characters
        </p>
      </div>
    </div>
  );
}
