"use client";

import { FlowerIcon } from "@/flowers";
import type { FlowerType } from "@/types/flower";
import type { FlowerPosition } from "@/types/arrangement";
import { motion } from "framer-motion";

interface FlowerLayerProps {
  position: FlowerPosition;
  animate?: boolean;
  index?: number;
}

export function FlowerLayer({ position, animate = false, index = 0 }: FlowerLayerProps) {
  const style: React.CSSProperties = {
    position: "absolute",
    left: `${position.x - 60}px`,
    top: `${position.y - 60}px`,
    transform: `rotate(${position.rotation}deg) scale(${position.scale})`,
    zIndex: position.zIndex,
    transformOrigin: "center center",
  };

  if (animate) {
    return (
      <motion.div
        style={{ ...style, transform: undefined }}
        initial={{ scale: 0, opacity: 0, rotate: position.rotation }}
        animate={{
          scale: position.scale,
          opacity: 1,
          rotate: [position.rotation - 1.5, position.rotation + 1.5, position.rotation - 1.5],
        }}
        transition={{
          scale: { delay: index * 0.08, duration: 0.5, type: "spring", stiffness: 200 },
          opacity: { delay: index * 0.08, duration: 0.3 },
          rotate: {
            delay: index * 0.08 + 0.5,
            duration: 3 + (index % 5) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <FlowerIcon id={position.flowerId as FlowerType} size={120} />
      </motion.div>
    );
  }

  return (
    <div style={style}>
      <FlowerIcon id={position.flowerId as FlowerType} size={120} />
    </div>
  );
}
