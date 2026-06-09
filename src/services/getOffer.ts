import type { Offer } from "@/types";
import { api } from "./fetch";

export const getOffer = (id: string): Promise<Offer> => api.get(`/offer/${id}`);
