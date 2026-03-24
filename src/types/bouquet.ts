import type { FlowerType, FlowerMode } from "./flower";
import type { ArrangementData } from "./arrangement";

export type OccasionType = "none" | "birthday" | "valentine" | "thankyou" | "getwell" | "congrats";

export type WrapperType = "paper" | "vase" | "basket" | "ribbon";

export interface Bouquet {
  id: string;
  mode: FlowerMode;
  occasion: OccasionType;
  flowers: FlowerType[];
  arrangement: ArrangementData;
  wrapper: WrapperType;
  cardTo: string;
  cardMessage: string;
  cardFrom: string;
  showInGarden: boolean;
  createdAt: string;
}

export interface CreateBouquetPayload {
  mode: FlowerMode;
  occasion: OccasionType;
  flowers: FlowerType[];
  arrangement: ArrangementData;
  wrapper: WrapperType;
  cardTo: string;
  cardMessage: string;
  cardFrom: string;
  showInGarden?: boolean;
}

export interface GardenBouquetResponse {
  creations: Omit<Bouquet, "cardTo" | "cardMessage" | "cardFrom">[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
