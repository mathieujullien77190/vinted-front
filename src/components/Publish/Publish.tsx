import { useState, type FormEvent } from "react";
import { Field } from "./components/Field";
import type { OfferToAdd } from "./types";
import { Section } from "./Section";
import { Wrapper } from "../Wrapper";
import { cn } from "@/helpers/cn";
import { DropZone } from "./components/DropZone";
import { postOffer } from "@/services/postOffer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants";

export const Publish = () => {
  const navigate = useNavigate();

  const [offer, setOffer] = useState<OfferToAdd>({});
  const [error, setError] = useState<string>("");

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (offer?.pictures) {
      offer.pictures.forEach((picture) => {
        formData.append("picture", picture);
      });
    }

    console.log(Object.fromEntries(formData.entries()));

    setError("");
    postOffer(formData)
      .then((response) => {
        navigate(ROUTES.offer.replace(":id", response._id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="w-full bg-canvas py-10 " onSubmit={handleAdd}>
      <Wrapper className="flex flex-col gap-4">
        <Section>
          <DropZone
            label="Ajouter une ou plusieurs photo(s)"
            name="pictures"
            files={offer?.pictures ?? []}
            onChange={(value) =>
              setOffer((prev) => ({ ...prev, pictures: value }))
            }
          />
        </Section>
        <Section withCssRules>
          <Field
            name="title"
            label="Titre"
            placeholder="ex: Chemise Sézane verte"
            value={offer?.title ?? ""}
            type="text"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, title: value }));
            }}
          />
          <Field
            name="description"
            label="Décris ton article"
            placeholder="ex: porté quelquefois, taille correctement"
            value={offer?.description ?? ""}
            type="textarea"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, description: value }));
            }}
          />
        </Section>
        <Section withCssRules>
          <Field
            name="brand"
            label="Marque"
            placeholder="ex: Zara"
            value={offer?.brand ?? ""}
            type="text"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, brand: value }));
            }}
          />
          <Field
            name="size"
            label="Taille"
            placeholder="ex: L / 40 / 12"
            value={offer?.size?.toString() ?? ""}
            type="number"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, size: parseInt(value, 10) }));
            }}
          />
          <Field
            name="color"
            label="Couleur"
            placeholder="ex: Fushia"
            value={offer?.color ?? ""}
            type="text"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, color: value }));
            }}
          />
          <Field
            name="condition"
            label="Etat"
            placeholder="ex: Neuf avec étiquette"
            value={offer?.condition ?? ""}
            type="text"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, condition: value }));
            }}
          />
          <Field
            name="city"
            label="Lieu"
            placeholder="ex: Paris"
            value={offer?.city ?? ""}
            type="text"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, city: value }));
            }}
          />
        </Section>
        <Section withCssRules>
          <Field
            name="price"
            label="Prix"
            placeholder="10 €"
            value={offer?.price?.toString() ?? ""}
            type="number"
            onChange={(value) => {
              setOffer((prev) => ({ ...prev, price: parseInt(value, 10) }));
            }}
          />
        </Section>

        <div className="w-full flex justify-between">
          <span className="text-error">{error}</span>
          <button className={cn("button", "text-white bg-lagoon-500")}>
            Ajouter
          </button>
        </div>
      </Wrapper>
    </form>
  );
};
