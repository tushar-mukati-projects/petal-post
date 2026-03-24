"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OCCASIONS } from "@/lib/occasions";
import { motion } from "framer-motion";
import { Flower2, Palette, Eye, ChevronDown } from "lucide-react";
import { FloatingHearts } from "@/components/shared/FloatingHearts";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating hearts */}
      <FloatingHearts count={18} />

      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-pastel rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-lavender rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-mint rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-peach rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-6"
      >
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight">
          Petal
          <span className="bg-gradient-to-r from-petal via-petal-soft to-petal bg-clip-text text-transparent">
            Post
          </span>
        </h1>

        {/* Decorative flower row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-3 text-2xl sm:text-3xl tracking-widest select-none"
          aria-hidden="true"
        >
          🌸🌷🌻🌹🌺
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-md mx-auto font-light leading-relaxed"
        >
          Craft beautiful digital flowers for the people who make your heart bloom
        </motion.p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-12"
      >
        <Link href="/create?mode=color">
          <Button
            size="lg"
            className="rounded-full gap-2 bg-petal hover:bg-petal/90 text-white px-10 py-6 text-lg font-heading font-bold shadow-lg shadow-petal/25 hover:shadow-xl hover:shadow-petal/30 transition-shadow"
          >
            <Flower2 className="w-5 h-5" />
            Create Flowers
          </Button>
        </Link>
        <Link href="/create?mode=mono">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full gap-2 border-foreground/20 px-10 py-6 text-lg font-heading font-bold hover:bg-foreground/5 transition-colors"
          >
            <Palette className="w-5 h-5" />
            Black & White
          </Button>
        </Link>
        <Link href="/collections">
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full gap-2 px-10 py-6 text-lg font-heading font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <Eye className="w-5 h-5" />
            View Collections
          </Button>
        </Link>
      </motion.div>

      {/* Scroll indicator / decorative divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col items-center gap-1 mb-10"
      >
        <span className="text-xs text-muted-foreground/60 font-medium tracking-wide uppercase">
          Explore occasions
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      </motion.div>

      {/* Occasion preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <p className="text-center text-sm text-muted-foreground mb-4 font-medium">
          Made with love, delivered with a click
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {OCCASIONS.filter((o) => o.id !== "none").map((occ, i) => (
            <motion.div
              key={occ.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
            >
              <Link
                href={`/create?mode=color&occasion=${occ.id}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${occ.gradient} text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:scale-105 transition-all`}
              >
                <span>{occ.icon}</span>
                <span>{occ.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
