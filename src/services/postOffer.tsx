import axios from "axios";
import { BASE_PATH_API } from "@/constants";
import { getToken } from "@/helpers/user";

export type ResponsePostOffer = {
  _id: string;
};

export const postOffer = async (
  formData: FormData,
): Promise<ResponsePostOffer> =>
  axios
    .post(`${BASE_PATH_API}/offer/publish`, formData, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
