"use client";

import { useMemo } from "react";

const EMOJIS = ["💖", "💕", "🌸", "✨", "🩷", "💗"];

interface FloatingElement {
  id: number;
  emoji: string;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const elements: FloatingElement[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(seededRandom(i * 7 + 1) * EMOJIS.length)],
      size: 12 + seededRandom(i * 3 + 2) * 16,
      left: seededRandom(i * 5 + 3) * 100,
      duration: 8 + seededRandom(i * 11 + 4) * 10,
      delay: seededRandom(i * 13 + 5) * 12,
      opacity: 0.15 + seededRandom(i * 17 + 6) * 0.2,
      drift: -30 + seededRandom(i * 19 + 7) * 60,
    }));
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--float-opacity);
          }
          70% {
            opacity: var(--float-opacity);
          }
          100% {
            transform: translateY(-110vh) translateX(var(--float-drift)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {elements.map((el) => (
          <span
            key={el.id}
            className="absolute bottom-0 select-none"
            style={
              {
                left: `${el.left}%`,
                fontSize: `${el.size}px`,
                "--float-opacity": el.opacity,
                "--float-drift": `${el.drift}px`,
                animation: `floatUp ${el.duration}s ${el.delay}s ease-in-out infinite`,
                opacity: 0,
                willChange: "transform, opacity",
              } as React.CSSProperties
            }
          >
            {el.emoji}
          </span>
        ))}
      </div>
    </>
  );
}
