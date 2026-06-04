import axios from "axios";
import type { Offer } from "@/types";
import { BASE_PATH_API } from "@/constants";

export const getOffer = async (id: string): Promise<Offer> =>
  axios
    .get(`${BASE_PATH_API}/offer/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
