import type { WrapperType } from "@/types/floral";
// Freehand wrappers
import { FreehandPaper } from "./FreehandPaper";
import { FreehandVase } from "./FreehandVase";
import { FreehandBasket } from "./FreehandBasket";
import { FreehandTissue } from "./FreehandTissue";
import { FreehandPot } from "./FreehandPot";
import { FreehandJar } from "./FreehandJar";
import { FreehandRibbon } from "./FreehandRibbon";
import { FreehandEnvelope } from "./FreehandEnvelope";
import { FreehandTeacup } from "./FreehandTeacup";
import { FreehandBoot } from "./FreehandBoot";
import { FreehandGiftbox } from "./FreehandGiftbox";
import { FreehandCloud } from "./FreehandCloud";
import { FreehandBucket } from "./FreehandBucket";
import { FreehandMacrame } from "./FreehandMacrame";
import { FreehandKimono } from "./FreehandKimono";
import { FreehandTerrarium } from "./FreehandTerrarium";
import { FreehandOrigami } from "./FreehandOrigami";
import { FreehandVintage } from "./FreehandVintage";
import { FreehandFoliage } from "./FreehandFoliage";
import { FreehandSunhat } from "./FreehandSunhat";
import { FreehandPaperbag } from "./FreehandPaperbag";
import { FreehandCrate } from "./FreehandCrate";
import { FreehandCone } from "./FreehandCone";
import { FreehandMug } from "./FreehandMug";
import { FreehandLantern } from "./FreehandLantern";
import { FreehandNest } from "./FreehandNest";
import { FreehandShell } from "./FreehandShell";
import { FreehandHeartbox } from "./FreehandHeartbox";
import { FreehandWagon } from "./FreehandWagon";
import { FreehandBicycle } from "./FreehandBicycle";
import { PaperWrap } from "./RoughPaperWrap";
import { GlassVase } from "./RoughGlassVase";
import { WovenBasket } from "./RoughWovenBasket";
import { RibbonTied } from "./RoughRibbonTied";
import { Foliage } from "./RoughFoliage";
import { TissueWrap } from "./RoughTissueWrap";
import { MasonJar } from "./RoughMasonJar";
import { TerraCottaPot } from "./RoughTerraCottaPot";
import { GiftBox } from "./RoughGiftBox";
import { MetalBucket } from "./RoughMetalBucket";
import { Teacup } from "./RoughTeacup";
import { LoveEnvelope } from "./RoughLoveEnvelope";
import { RainBoot } from "./RoughRainBoot";
import { SunHat } from "./RoughSunHat";
import { PaperBag } from "./RoughPaperBag";
import { WoodCrate } from "./RoughWoodCrate";
import { WaffleCone } from "./RoughWaffleCone";
import { CoffeeMug } from "./RoughCoffeeMug";
import { PaperLantern } from "./RoughPaperLantern";
import { BirdNest } from "./RoughBirdNest";
import { Seashell } from "./RoughSeashell";
import { HeartBox } from "./RoughHeartBox";
import { FluffyCloud } from "./RoughFluffyCloud";
import { LittleWagon } from "./RoughLittleWagon";
import { BicycleBasket } from "./RoughBicycleBasket";
import { Macrame } from "./RoughMacrame";
import { KimonoWrap } from "./RoughKimono";
import { Terrarium } from "./RoughTerrarium";
import { OrigamiWrap } from "./RoughOrigami";
import { VintageTin } from "./RoughVintage";

export const WRAPPER_COMPONENTS: Record<
  WrapperType,
  React.ComponentType<{ className?: string }>
> = {
  paper: PaperWrap,
  vase: GlassVase,
  basket: WovenBasket,
  ribbon: RibbonTied,
  foliage: Foliage,
  tissue: TissueWrap,
  jar: MasonJar,
  pot: TerraCottaPot,
  giftbox: GiftBox,
  bucket: MetalBucket,
  teacup: Teacup,
  envelope: LoveEnvelope,
  boot: RainBoot,
  sunhat: SunHat,
  paperbag: PaperBag,
  crate: WoodCrate,
  cone: WaffleCone,
  mug: CoffeeMug,
  lantern: PaperLantern,
  nest: BirdNest,
  shell: Seashell,
  heartbox: HeartBox,
  cloud: FluffyCloud,
  wagon: LittleWagon,
  bicycle: BicycleBasket,
  macrame: Macrame,
  kimono: KimonoWrap,
  terrarium: Terrarium,
  origami: OrigamiWrap,
  vintage: VintageTin,
};

// Freehand versions (partial — falls back to rough when not available)
export const FREEHAND_WRAPPER_COMPONENTS: Partial<
  Record<WrapperType, React.ComponentType<{ className?: string }>>
> = {
  paper: FreehandPaper,
  vase: FreehandVase,
  basket: FreehandBasket,
  tissue: FreehandTissue,
  pot: FreehandPot,
  jar: FreehandJar,
  ribbon: FreehandRibbon,
  envelope: FreehandEnvelope,
  teacup: FreehandTeacup,
  boot: FreehandBoot,
  giftbox: FreehandGiftbox,
  cloud: FreehandCloud,
  bucket: FreehandBucket,
  macrame: FreehandMacrame,
  kimono: FreehandKimono,
  terrarium: FreehandTerrarium,
  origami: FreehandOrigami,
  vintage: FreehandVintage,
  foliage: FreehandFoliage,
  sunhat: FreehandSunhat,
  paperbag: FreehandPaperbag,
  crate: FreehandCrate,
  cone: FreehandCone,
  mug: FreehandMug,
  lantern: FreehandLantern,
  nest: FreehandNest,
  shell: FreehandShell,
  heartbox: FreehandHeartbox,
  wagon: FreehandWagon,
  bicycle: FreehandBicycle,
};

export const WRAPPER_LABELS: Record<WrapperType, string> = {
  paper: "Paper Wrap",
  vase: "Glass Vase",
  basket: "Woven Basket",
  ribbon: "Ribbon Tied",
  foliage: "Foliage",
  tissue: "Tissue Wrap",
  jar: "Mason Jar",
  pot: "Terracotta Pot",
  giftbox: "Gift Box",
  bucket: "Metal Bucket",
  teacup: "Teacup",
  envelope: "Love Envelope",
  boot: "Rain Boot",
  sunhat: "Sun Hat",
  paperbag: "Paper Bag",
  crate: "Wood Crate",
  cone: "Waffle Cone",
  mug: "Coffee Mug",
  lantern: "Paper Lantern",
  nest: "Bird Nest",
  shell: "Seashell",
  heartbox: "Heart Box",
  cloud: "Fluffy Cloud",
  wagon: "Little Wagon",
  bicycle: "Bicycle Basket",
  macrame: "Macrame Hanger",
  kimono: "Kimono Wrap",
  terrarium: "Terrarium",
  origami: "Origami Wrap",
  vintage: "Vintage Tin",
};
