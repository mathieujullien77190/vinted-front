import axios from "axios";
import type { OffersResponse } from "../types";

export const getOffers = async (): Promise<OffersResponse> => {
  return axios
    .get("https://lereacteur-vinted-api.herokuapp.com/offers")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
