import type { Stripe, StripeElements } from "@stripe/stripe-js";
import type { PropsWithChildren } from "react";

export type StripProviderProps = PropsWithChildren;

export type CheckoutFormProps = {
  title: string;
  amount: number;
  show: boolean;
  onClose: () => void;
};

export type ConfirmPayementProps = {
  stripe: Stripe;
  elements: StripeElements;
  clientSecret: string;
};

export type CheckFormProps = {
  elements: StripeElements;
};
