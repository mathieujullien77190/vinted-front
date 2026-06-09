import { useState } from "react";
import { postPayment } from "@/services/postPayment";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import type { CheckoutFormProps } from "./types";
import Modal from "@/components/Modal";
import { checkForm, confirmPayement } from "./helpers";

export const CheckoutForm = ({
  title,
  amount,
  show,
  onClose,
}: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayement = async () => {
    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      await checkForm({ elements });

      await confirmPayement({
        stripe,
        elements,
        clientSecret: (await postPayment({ title, amount })).client_secret,
      });

      setIsComplete(true);
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : "unknown error");
    }

    setIsLoading(false);
  };

  const buttons = !isComplete
    ? {
        validate: {
          cb: () => {
            handlePayement();
          },
          isDisabled: !stripe || isLoading,
        },
      }
    : {
        leave: {
          isDisabled: false,
        },
      };

  return (
    <Modal
      show={show}
      title="Acheter"
      onClose={() => {
        setErrorMessage("");
        setIsLoading(false);
        setIsComplete(false);
        onClose();
      }}
      buttons={buttons}
      error={errorMessage ? errorMessage : ""}
    >
      {isComplete ? (
        <p>Paiement effectué ! Félicitations !</p>
      ) : (
        <PaymentElement />
      )}
    </Modal>
  );
};

export default CheckoutForm;
