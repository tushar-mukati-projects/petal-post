import type { WrapperType } from "@/types/bouquet";
import { PaperWrap } from "./PaperWrap";
import { GlassVase } from "./GlassVase";
import { WovenBasket } from "./WovenBasket";
import { RibbonTied } from "./RibbonTied";

export const WRAPPER_COMPONENTS: Record<
  WrapperType,
  React.ComponentType<{ className?: string }>
> = {
  paper: PaperWrap,
  vase: GlassVase,
  basket: WovenBasket,
  ribbon: RibbonTied,
};

export const WRAPPER_LABELS: Record<WrapperType, string> = {
  paper: "Paper Wrap",
  vase: "Glass Vase",
  basket: "Woven Basket",
  ribbon: "Ribbon Tied",
};
