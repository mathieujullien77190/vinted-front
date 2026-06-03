import { CLOUDINARY_BASE_PATH } from "../constants";
import type { FullOffer, LightOffer } from "../components/Offer/types";
import type { Offer } from "../types";

export const formatLightOffer = (data: Offer): LightOffer => {
  return {
    id: data._id,
    name: data.product_name,
    user: {
      name: data.owner.account.username,
      avatar: data.owner.account.avatar?.public_id
        ? `${CLOUDINARY_BASE_PATH}${data.owner.account.avatar.public_id}`
        : undefined,
    },
    picture: data?.product_pictures[0]?.public_id
      ? `${CLOUDINARY_BASE_PATH}${data.product_pictures[0].public_id}`
      : undefined,
    price: data.product_price,
    details: data.product_details
      .map((item) => {
        const extract = Object.entries(item);
        return {
          key: extract[0][0],
          value: extract[0][1],
        };
      })
      .filter((item) => item.key === "MARQUE" || item.key === "TAILLE"),
  };
};

export const formatFullOffer = (data: Offer): FullOffer => {
  return {
    ...formatLightOffer(data),
    description: data.product_description,
    details: data.product_details
      .map((item) => {
        const extract = Object.entries(item);
        return {
          key: extract[0][0],
          value: extract[0][1],
        };
      })
      .filter((item) => item.key !== "MODES DE PAIEMENT"),
  };
};

export const toPrice = (n: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(n);
};
