"use client";

import { create } from "zustand";
import type { FlowerType, FlowerMode } from "@/types/flower";
import type { ArrangementData } from "@/types/arrangement";
import type { OccasionType, WrapperType } from "@/types/bouquet";
import { generateArrangement, newSeed } from "@/lib/arrangement";
import { OCCASION_MAP } from "@/lib/occasions";

interface BouquetState {
  // Wizard navigation
  currentStep: number;
  mode: FlowerMode;

  // Step 1: Occasion
  occasion: OccasionType;

  // Step 2: Flower selection
  selectedFlowers: FlowerType[];

  // Step 3: Arrangement & wrapper
  arrangement: ArrangementData | null;
  arrangementSeed: number;
  wrapperTheme: WrapperType;

  // Step 4: Card
  cardTo: string;
  cardMessage: string;
  cardFrom: string;

  // Actions: Navigation
  setMode: (mode: FlowerMode) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;

  // Actions: Occasion
  setOccasion: (occasion: OccasionType) => void;

  // Actions: Flower selection
  addFlower: (flower: FlowerType) => void;
  removeFlower: (flower: FlowerType) => void;
  removeFlowerAtIndex: (index: number) => void;
  clearFlowers: () => void;

  // Actions: Arrangement
  shuffleArrangement: () => void;
  cycleWrapper: () => void;
  setWrapper: (wrapper: WrapperType) => void;

  // Actions: Card
  setCardTo: (value: string) => void;
  setCardMessage: (value: string) => void;
  setCardFrom: (value: string) => void;

  // Actions: Reset
  reset: () => void;

  // Computed
  flowerCount: () => number;
  canProceedFromStep: (step: number) => boolean;
}

const WRAPPER_ORDER: WrapperType[] = ["paper", "vase", "basket", "ribbon"];

export const useBouquetStore = create<BouquetState>((set, get) => ({
  currentStep: 0,
  mode: "color",
  occasion: "none",
  selectedFlowers: [],
  arrangement: null,
  arrangementSeed: newSeed(),
  wrapperTheme: "paper",
  cardTo: "",
  cardMessage: "",
  cardFrom: "",

  setMode: (mode) => set({ mode }),

  nextStep: () => {
    const { currentStep, selectedFlowers, arrangementSeed } = get();
    // Generate arrangement when moving from step 1 (pick blooms) to step 2 (customize)
    if (currentStep === 1 && selectedFlowers.length >= 6) {
      const arrangement = generateArrangement(selectedFlowers, arrangementSeed);
      set({ currentStep: currentStep + 1, arrangement });
    } else {
      set({ currentStep: Math.min(currentStep + 1, 4) });
    }
  },

  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),

  goToStep: (step) => set({ currentStep: Math.max(0, Math.min(step, 4)) }),

  setOccasion: (occasion) => {
    const occasionData = OCCASION_MAP[occasion];
    const suggested = occasionData?.suggestedFlowers || [];
    // Pre-select first 5 suggested flowers when switching occasion
    const current = get().selectedFlowers;
    if (current.length === 0 && suggested.length > 0) {
      const preSelected = suggested.slice(0, Math.min(suggested.length, 5));
      set({ occasion, selectedFlowers: preSelected });
    } else {
      set({ occasion });
    }
  },

  addFlower: (flower) =>
    set((state) => {
      if (state.selectedFlowers.length >= 10) return state;
      return { selectedFlowers: [...state.selectedFlowers, flower] };
    }),

  removeFlower: (flower) =>
    set((state) => {
      const idx = state.selectedFlowers.lastIndexOf(flower);
      if (idx === -1) return state;
      const next = [...state.selectedFlowers];
      next.splice(idx, 1);
      return { selectedFlowers: next };
    }),

  removeFlowerAtIndex: (index) =>
    set((state) => {
      const next = [...state.selectedFlowers];
      next.splice(index, 1);
      return { selectedFlowers: next };
    }),

  clearFlowers: () => set({ selectedFlowers: [] }),

  shuffleArrangement: () => {
    const { selectedFlowers } = get();
    const seed = newSeed();
    const arrangement = generateArrangement(selectedFlowers, seed);
    set({ arrangement, arrangementSeed: seed });
  },

  cycleWrapper: () =>
    set((state) => {
      const idx = WRAPPER_ORDER.indexOf(state.wrapperTheme);
      const next = WRAPPER_ORDER[(idx + 1) % WRAPPER_ORDER.length];
      return { wrapperTheme: next };
    }),

  setWrapper: (wrapper) => set({ wrapperTheme: wrapper }),

  setCardTo: (value) => set({ cardTo: value }),
  setCardMessage: (value) => set({ cardMessage: value }),
  setCardFrom: (value) => set({ cardFrom: value }),

  reset: () =>
    set({
      currentStep: 0,
      mode: "color",
      occasion: "none",
      selectedFlowers: [],
      arrangement: null,
      arrangementSeed: newSeed(),
      wrapperTheme: "paper",
      cardTo: "",
      cardMessage: "",
      cardFrom: "",
    }),

  flowerCount: () => get().selectedFlowers.length,

  canProceedFromStep: (step) => {
    const state = get();
    switch (step) {
      case 0: // Occasion - always can proceed
        return true;
      case 1: // Pick blooms - need 6-10
        return state.selectedFlowers.length >= 6 && state.selectedFlowers.length <= 10;
      case 2: // Customize - always can proceed if we have arrangement
        return state.arrangement !== null;
      case 3: // Write card - at least message should be written
        return state.cardMessage.trim().length > 0;
      case 4: // Preview - always can proceed
        return true;
      default:
        return false;
    }
  },
}));
