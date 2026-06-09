import { BASE_PATH_API } from "@/constants";
import axios from "axios";

export const postPayment = async ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}): Promise<{ client_secret: string }> =>
  axios
    .post(`${BASE_PATH_API}/v2/payment`, { title, amount })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
