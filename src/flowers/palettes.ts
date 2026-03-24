import type { FlowerPalette } from "./types";
import type { FlowerType } from "@/types/flower";

export const COLOR_PALETTES: Record<FlowerType, FlowerPalette> = {
  rose: {
    primary: "#e53e6b",
    secondary: "#c2185b",
    accent: "#f48fb1",
    center: "#ffcdd2",
    dark: "#880e4f",
  },
  tulip: {
    primary: "#ef5350",
    secondary: "#e53935",
    accent: "#ff8a80",
    center: "#4caf50",
    dark: "#b71c1c",
  },
  sunflower: {
    primary: "#fdd835",
    secondary: "#f9a825",
    accent: "#fff176",
    center: "#795548",
    dark: "#f57f17",
  },
  peony: {
    primary: "#f8bbd0",
    secondary: "#f48fb1",
    accent: "#fce4ec",
    center: "#fff9c4",
    dark: "#e91e63",
  },
  dahlia: {
    primary: "#ce93d8",
    secondary: "#ab47bc",
    accent: "#e1bee7",
    center: "#f3e5f5",
    dark: "#7b1fa2",
  },
  daisy: {
    primary: "#ffffff",
    secondary: "#f5f5f5",
    accent: "#e0e0e0",
    center: "#fdd835",
    dark: "#bdbdbd",
  },
  lily: {
    primary: "#7e57c2",
    secondary: "#5c6bc0",
    accent: "#b39ddb",
    center: "#fff59d",
    dark: "#311b92",
  },
  orchid: {
    primary: "#ce93d8",
    secondary: "#ba68c8",
    accent: "#e1bee7",
    center: "#fff176",
    dark: "#6a1b9a",
  },
  anemone: {
    primary: "#e3f2fd",
    secondary: "#bbdefb",
    accent: "#90caf9",
    center: "#263238",
    dark: "#1565c0",
  },
  carnation: {
    primary: "#ff8a80",
    secondary: "#ff5252",
    accent: "#ffcdd2",
    center: "#fce4ec",
    dark: "#d32f2f",
  },
  ranunculus: {
    primary: "#ffcc80",
    secondary: "#ffa726",
    accent: "#ffe0b2",
    center: "#fff8e1",
    dark: "#e65100",
  },
  zinnia: {
    primary: "#ff80ab",
    secondary: "#ff4081",
    accent: "#f8bbd0",
    center: "#fdd835",
    dark: "#c51162",
  },
};
