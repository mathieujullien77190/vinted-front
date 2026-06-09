import type { StripeElementsOptions } from "@stripe/stripe-js";

export const STRIP_PUBLIC_KEY =
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP";

export const STRIP_OPTIONS: StripeElementsOptions = {
  mode: "payment",
  amount: 5000,
  currency: "eur",
  appearance: { theme: "flat" },
};
