import type { Dispatch, SetStateAction } from "react";
import { CONFIG } from "./constants";
import type { OfferToAdd } from "./types";

type ConfigKey = keyof typeof CONFIG;

export const extractProps = (
  key: ConfigKey,
  state: [OfferToAdd, Dispatch<SetStateAction<OfferToAdd>>],
) => {
  const [offer, setOffer] = state;

  return {
    name: key,
    label: CONFIG[key].label,
    placeholder: CONFIG[key].placeholder,
    type: CONFIG[key].type,
    value: offer[key] ? offer[key].toString() : "",
    onChange: (value: string) => {
      setOffer((prev) => ({
        ...prev,
        [key]: CONFIG[key].type === "number" ? parseInt(value, 10) : value,
      }));
    },
  };
};
