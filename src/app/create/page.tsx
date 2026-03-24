"use client";

import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { BuilderWizard } from "@/components/builder/BuilderWizard";
import { Loader2 } from "lucide-react";

function BuilderContent() {
  return <BuilderWizard />;
}

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-petal" />
            </div>
          }
        >
          <BuilderContent />
        </Suspense>
      </main>
    </div>
  );
}
