"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GardenGrid } from "@/components/garden/GardenGrid";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">
              Collections
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              A peek at the beautiful creations people have shared with the world
            </p>
          </div>

          <GardenGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
