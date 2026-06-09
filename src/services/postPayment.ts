import { api } from "./fetch";

type postPaymentProps = {
  title: string;
  amount: number;
};

type postPaymentResponse = { client_secret: string };

export const postPayment = ({
  title,
  amount,
}: postPaymentProps): Promise<postPaymentResponse> =>
  api.post(`/v2/payment`, { title, amount });
