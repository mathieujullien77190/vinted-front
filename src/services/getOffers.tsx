import axios from "axios";
import type { OffersResponse } from "@/types";
import { BASE_PATH_API } from "@/constants";

export const getOffers = async (): Promise<OffersResponse> =>
  axios
    .get(`${BASE_PATH_API}/offers`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
