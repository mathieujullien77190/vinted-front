import axios from "axios";
import type { Offer } from "../types";

export const getOffer = async (id: string): Promise<Offer> => {
  return axios
    .get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
