import type { FlowerType, FlowerMode } from "@/types/flower";
import type { FlowerPalette } from "./types";
import { COLOR_PALETTES, MONO_PALETTES } from "./palettes";

// Import all bases
import { RoseBase } from "./bases/RoseBase";
import { TulipBase } from "./bases/TulipBase";
import { SunflowerBase } from "./bases/SunflowerBase";
import { PeonyBase } from "./bases/PeonyBase";
import { DahliaBase } from "./bases/DahliaBase";
import { DaisyBase } from "./bases/DaisyBase";
import { LilyBase } from "./bases/LilyBase";
import { OrchidBase } from "./bases/OrchidBase";
import { AnemoneBase } from "./bases/AnemoneBase";
import { CarnationBase } from "./bases/CarnationBase";
import { RanunculusBase } from "./bases/RanunculusBase";
import { ZinniaBase } from "./bases/ZinniaBase";

const FLOWER_COMPONENTS: Record<
  FlowerType,
  React.ComponentType<{ palette: FlowerPalette; className?: string; size?: number }>
> = {
  rose: RoseBase,
  tulip: TulipBase,
  sunflower: SunflowerBase,
  peony: PeonyBase,
  dahlia: DahliaBase,
  daisy: DaisyBase,
  lily: LilyBase,
  orchid: OrchidBase,
  anemone: AnemoneBase,
  carnation: CarnationBase,
  ranunculus: RanunculusBase,
  zinnia: ZinniaBase,
};

export function getFlowerComponent(id: FlowerType, mode: FlowerMode) {
  const Component = FLOWER_COMPONENTS[id];
  const palette = mode === "color" ? COLOR_PALETTES[id] : MONO_PALETTES[id];
  return { Component, palette };
}

export function FlowerIcon({
  id,
  mode,
  size,
  className,
}: {
  id: FlowerType;
  mode: FlowerMode;
  size?: number;
  className?: string;
}) {
  const { Component, palette } = getFlowerComponent(id, mode);
  return <Component palette={palette} size={size} className={className} />;
}
