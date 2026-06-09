import axios from "axios";
import type { OffersResponse } from "@/types";
import { BASE_PATH_API } from "@/constants";

export type SearchParams = {
  title?: string;
  priceMin?: number;
  priceMax?: number;
};

export const getOffers = async (
  searchParams: SearchParams,
): Promise<OffersResponse> =>
  axios
    .get(`${BASE_PATH_API}/offers`, { params: searchParams })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
