import axios from "axios";
import { BASE_PATH_API } from "@/constants";

export type postSignupProps = {
  email: string;
  username: string;
  password: string;
  newsletter: boolean;
};

export type ResponseSignup = {
  account: { username: string };
  email: string;
  token: string;
  _id: string;
};

export const postSignup = async (
  params: postSignupProps,
): Promise<ResponseSignup> =>
  axios
    .post(`${BASE_PATH_API}/user/signup`, params)
    .then((response) => response.data)
    .catch((error) => {
      const message = error?.response?.data?.message ?? error.message;
      console.log("error", message);
      throw new Error(message);
    });
