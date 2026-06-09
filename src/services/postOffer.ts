import { api } from "./fetch";

export type ResponsePostOffer = {
  _id: string;
};

export const postOffer = (formData: FormData): Promise<ResponsePostOffer> =>
  api.post(`/offer/publish`, formData);
