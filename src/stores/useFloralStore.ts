"use client";

import { create } from "zustand";
import type { FlowerType } from "@/types/flower";
import type { ArrangementData, ArrangementType } from "@/types/arrangement";
import type { OccasionType } from "@/types/floral";
import { createArrangement } from "@/lib/arrangement";
import { OCCASION_MAP } from "@/lib/occasions";
import { ARRANGEMENT_TYPES, ALL_WRAPPERS, MIN_FLOWERS, MAX_FLOWERS } from "@/lib/constants";

/** Create a compound wrapper ID like "freehand_tissue" or "rough_vase" */
function randomWrapperId(): string {
  const base = ALL_WRAPPERS[Math.floor(Math.random() * ALL_WRAPPERS.length)];
  const style = Math.random() > 0.5 ? "freehand" : "rough";
  return `${style}_${base}`;
}

function randomWrapperIdFrom(exclude: string): string {
  let id = randomWrapperId();
  // Ensure it's different from current
  let attempts = 0;
  while (id === exclude && attempts < 10) {
    id = randomWrapperId();
    attempts++;
  }
  return id;
}

interface FloralState {
  currentStep: number;
  occasion: OccasionType;
  selectedFlowers: FlowerType[];
  arrangement: ArrangementData | null;
  /** Compound wrapper ID: "rough_tissue", "freehand_vase", etc. */
  wrapper: string;
  cardTo: string;
  cardMessage: string;
  cardFrom: string;

  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setOccasion: (occasion: OccasionType) => void;
  addFlower: (flower: FlowerType) => void;
  removeFlower: (flower: FlowerType) => void;
  removeFlowerAtIndex: (index: number) => void;
  clearFlowers: () => void;
  shuffleArrangement: () => void;
  cycleWrapper: () => void;
  setCardTo: (value: string) => void;
  setCardMessage: (value: string) => void;
  setCardFrom: (value: string) => void;
  reset: () => void;
  flowerCount: () => number;
  canProceedFromStep: (step: number) => boolean;
}

const TOTAL_STEPS = 5;
const LAST_STEP = TOTAL_STEPS - 1;
const PICK_BLOOMS_STEP = 1;

const INITIAL_WRAPPER = "rough_tissue";

export const useFloralStore = create<FloralState>((set, get) => ({
  currentStep: 0,
  occasion: "none",
  selectedFlowers: [],
  arrangement: null,
  wrapper: INITIAL_WRAPPER,
  cardTo: "",
  cardMessage: "",
  cardFrom: "",

  nextStep: () => {
    const { currentStep, selectedFlowers } = get();
    if (currentStep === PICK_BLOOMS_STEP && selectedFlowers.length >= MIN_FLOWERS) {
      const arrangement = createArrangement(selectedFlowers, "triangle");
      set({ currentStep: currentStep + 1, arrangement });
    } else {
      set({ currentStep: Math.min(currentStep + 1, LAST_STEP) });
    }
  },

  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  goToStep: (step) => set({ currentStep: Math.max(0, Math.min(step, LAST_STEP)) }),

  setOccasion: (occasion) => {
    const occasionData = OCCASION_MAP[occasion];
    const suggested = occasionData?.suggestedFlowers || [];
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
      if (state.selectedFlowers.length >= MAX_FLOWERS) return state;
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
    const randomType: ArrangementType =
      ARRANGEMENT_TYPES[Math.floor(Math.random() * ARRANGEMENT_TYPES.length)];
    const shuffled = [...selectedFlowers].sort(() => Math.random() - 0.5);
    set({ arrangement: createArrangement(shuffled, randomType) });
  },

  cycleWrapper: () =>
    set((state) => ({
      wrapper: randomWrapperIdFrom(state.wrapper),
    })),

  setCardTo: (value) => set({ cardTo: value }),
  setCardMessage: (value) => set({ cardMessage: value }),
  setCardFrom: (value) => set({ cardFrom: value }),

  reset: () => {
    const occasionData = OCCASION_MAP["none"];
    const suggested = occasionData?.suggestedFlowers || [];
    const preSelected = suggested.slice(0, Math.min(suggested.length, 5));
    set({
      currentStep: 0,
      occasion: "none",
      selectedFlowers: preSelected,
      arrangement: null,
      wrapper: INITIAL_WRAPPER,
      cardTo: "",
      cardMessage: "",
      cardFrom: "",
    });
  },

  flowerCount: () => get().selectedFlowers.length,

  canProceedFromStep: (step) => {
    const state = get();
    switch (step) {
      case 0:
        return true;
      case 1:
        return (
          state.selectedFlowers.length >= MIN_FLOWERS && state.selectedFlowers.length <= MAX_FLOWERS
        );
      case 2:
        return state.arrangement !== null;
      case 3:
        return state.cardMessage.trim().length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  },
}));
