import axios from "axios";
import { BASE_PATH_API } from "@/constants";

export type postSigninProps = {
  email: string;
  password: string;
};

export type ResponseSignin = {
  account: { username: string };
  email: string;
  token: string;
  _id: string;
};

export const postSignin = async (
  params: postSigninProps,
): Promise<ResponseSignin> =>
  axios
    .post(`${BASE_PATH_API}/user/login`, params)
    .then((response) => response.data)
    .catch((error) => {
      const message = error?.response?.data?.message ?? error.message;
      console.log("error", message);
      throw new Error(message);
    });
