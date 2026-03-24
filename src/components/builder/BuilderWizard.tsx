"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useBouquetStore } from "@/stores/useBouquetStore";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { StepOccasion } from "./StepOccasion";
import { StepPickBlooms } from "./StepPickBlooms";
import { StepCustomize } from "./StepCustomize";
import { StepWriteCard } from "./StepWriteCard";
import { StepPreview } from "./StepPreview";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FlowerMode } from "@/types/flower";
import type { OccasionType } from "@/types/bouquet";

const STEP_LABELS = ["Occasion", "Pick Blooms", "Customize", "Write Card", "Preview"];

const STEPS = [StepOccasion, StepPickBlooms, StepCustomize, StepWriteCard, StepPreview];

export function BuilderWizard() {
  const searchParams = useSearchParams();
  const { currentStep, nextStep, prevStep, setMode, setOccasion, canProceedFromStep, reset } =
    useBouquetStore();

  // Initialize from URL params
  useEffect(() => {
    reset();
    const mode = searchParams.get("mode");
    if (mode === "color" || mode === "mono") {
      setMode(mode as FlowerMode);
    }
    const occasion = searchParams.get("occasion");
    if (occasion) {
      setOccasion(occasion as OccasionType);
    }
  }, [searchParams, setMode, setOccasion, reset]);

  const canProceed = canProceedFromStep(currentStep);
  const isLastStep = currentStep === STEPS.length - 1;
  const StepComponent = STEPS[currentStep];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-8">
      {/* Progress */}
      <div className="mb-8 space-y-3">
        <div className="flex justify-between text-xs font-medium text-muted-foreground">
          {STEP_LABELS.map((label, i) => (
            <span
              key={label}
              className={`hidden sm:inline ${i <= currentStep ? "text-petal font-semibold" : ""}`}
            >
              {label}
            </span>
          ))}
          <span className="sm:hidden text-petal font-semibold">
            Step {currentStep + 1} of {STEP_LABELS.length}: {STEP_LABELS[currentStep]}
          </span>
        </div>
        <Progress
          value={((currentStep + 1) / STEPS.length) * 100}
          className="h-2 bg-cream-dark [&>div]:bg-gradient-to-r [&>div]:from-petal-soft [&>div]:to-petal"
        />
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <StepComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {!isLastStep && (
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream-dark">
          <Button
            variant="outline"
            className="rounded-full gap-1 border-cream-dark"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            className="rounded-full gap-1 bg-foreground text-background hover:bg-foreground/90"
            onClick={nextStep}
            disabled={!canProceed}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {isLastStep && (
        <div className="flex justify-start mt-8 pt-6 border-t border-cream-dark">
          <Button
            variant="outline"
            className="rounded-full gap-1 border-cream-dark"
            onClick={prevStep}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      )}
    </div>
  );
}
