import type { PaymentIntentResult } from "@stripe/stripe-js";
import type { CheckFormProps, ConfirmPayementProps } from "./types";

export const checkForm = ({ elements }: CheckFormProps): Promise<void> =>
  elements.submit().then((response) => {
    if (response.error) throw new Error(response.error.message);
  });

export const confirmPayement = ({
  stripe,
  elements,
  clientSecret,
}: ConfirmPayementProps): Promise<void> =>
  stripe
    .confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.origin + location.pathname,
      },
      redirect: "if_required",
    })
    .then((response: PaymentIntentResult) => {
      if (response.error)
        throw new Error(response.error?.message ?? "Unknonw error");
    });
