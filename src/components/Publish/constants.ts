import type { FieldType, OfferToAdd } from "./types";

export type OfferKeys = keyof OfferToAdd;

export const CONFIG: Record<
  OfferKeys,
  {
    label: string;
    placeholder: string;
    type: FieldType;
  }
> = {
  pictures: {
    label: "Ajouter une ou plusieurs photo(s)",
    placeholder: "",
    type: "file",
  },

  title: {
    label: "Titre",
    placeholder: "ex: Chemise Sézane verte",
    type: "text",
  },

  description: {
    label: "Décris ton article",
    placeholder: "ex: porté quelquefois, taille correctement",
    type: "textarea",
  },

  brand: {
    label: "Marque",
    placeholder: "ex: Zara",
    type: "text",
  },

  size: {
    label: "Taille",
    placeholder: "ex: L / 40 / 12",
    type: "number",
  },

  color: {
    label: "Couleur",
    placeholder: "ex: Fushia",
    type: "text",
  },

  condition: {
    label: "État",
    placeholder: "ex: Neuf avec étiquette",
    type: "text",
  },

  city: {
    label: "Lieu",
    placeholder: "ex: Paris",
    type: "text",
  },

  price: {
    label: "Prix",
    placeholder: "10 €",
    type: "number",
  },
};
