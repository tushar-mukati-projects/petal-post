import type { WrapperType } from "@/types/floral";
import { PaperWrap } from "./PaperWrap";
import { GlassVase } from "./GlassVase";
import { WovenBasket } from "./WovenBasket";
import { RibbonTied } from "./RibbonTied";
import { Foliage } from "./Foliage";
import { TissueWrap } from "./TissueWrap";
import { MasonJar } from "./MasonJar";
import { TerraCottaPot } from "./TerraCottaPot";
import { GiftBox } from "./GiftBox";
import { MetalBucket } from "./MetalBucket";
import { Teacup } from "./Teacup";
import { LoveEnvelope } from "./LoveEnvelope";
import { RainBoot } from "./RainBoot";
import { SunHat } from "./SunHat";
import { PaperBag } from "./PaperBag";
import { WoodCrate } from "./WoodCrate";
import { WaffleCone } from "./WaffleCone";
import { CoffeeMug } from "./CoffeeMug";
import { PaperLantern } from "./PaperLantern";
import { BirdNest } from "./BirdNest";
import { Seashell } from "./Seashell";
import { HeartBox } from "./HeartBox";
import { FluffyCloud } from "./FluffyCloud";
import { LittleWagon } from "./LittleWagon";
import { BicycleBasket } from "./BicycleBasket";
import { Macrame } from "./Macrame";
import { KimonoWrap } from "./Kimono";
import { Terrarium } from "./Terrarium";
import { OrigamiWrap } from "./Origami";
import { VintageTin } from "./Vintage";

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
