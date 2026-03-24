import type { FlowerType } from "./flower";
import type { ArrangementData } from "./arrangement";

export type OccasionType = "none" | "birthday" | "valentine" | "thankyou" | "getwell" | "congrats";

export type WrapperType =
  | "paper"
  | "vase"
  | "basket"
  | "ribbon"
  | "foliage"
  | "tissue"
  | "jar"
  | "pot"
  | "giftbox"
  | "bucket"
  | "teacup"
  | "envelope"
  | "boot"
  | "sunhat"
  | "paperbag"
  | "crate"
  | "cone"
  | "mug"
  | "lantern"
  | "nest"
  | "shell"
  | "heartbox"
  | "cloud"
  | "wagon"
  | "bicycle"
  | "macrame"
  | "kimono"
  | "terrarium"
  | "origami"
  | "vintage";

export interface Floral {
  id: string;
  occasion: OccasionType;
  flowers: FlowerType[];
  arrangement: ArrangementData;
  wrapper: WrapperType;
  cardTo: string;
  cardMessage: string;
  cardFrom: string;
  createdAt: string;
}

export interface CreateFloralPayload {
  occasion: OccasionType;
  flowers: FlowerType[];
  arrangement: ArrangementData;
  wrapper: WrapperType;
  cardTo: string;
  cardMessage: string;
  cardFrom: string;
}
