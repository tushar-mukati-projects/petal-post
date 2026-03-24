"use client";

import { useRef, useState, useEffect } from "react";
import { MOCK_CREATIONS } from "@/lib/mockData";
import { LazyCard } from "./LazyCard";
import { Loader2 } from "lucide-react";

const PAGE_SIZE = 9;

export function CollectionGrid() {
  const [count, setCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount((c) => Math.min(c + PAGE_SIZE, MOCK_CREATIONS.length));
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visible = MOCK_CREATIONS.slice(0, count);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((mock) => (
          <LazyCard key={mock.id} mock={mock} />
        ))}
      </div>
      {count < MOCK_CREATIONS.length && (
        <div ref={sentinelRef} className="flex justify-center py-4">
          <Loader2 className="w-5 h-5 animate-spin text-petal/40" />
        </div>
      )}
    </div>
  );
}
