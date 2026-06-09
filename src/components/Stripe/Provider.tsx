import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { STRIP_OPTIONS, STRIP_PUBLIC_KEY } from "./constants";
import type { StripProviderProps } from "./types";

const stripePromise = loadStripe(STRIP_PUBLIC_KEY);

export const StripProvider = ({ children }: StripProviderProps) => {
  return (
    <Elements stripe={stripePromise} options={STRIP_OPTIONS}>
      {children}
    </Elements>
  );
};
