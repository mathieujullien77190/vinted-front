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
import { CONFIG } from "./constants";
import { extractFieldProps } from "./helpers";

export const Publish = () => {
  const navigate = useNavigate();

  const offerState = useState<OfferToAdd>({});
  const [offer, setOffer] = offerState;
  const [error, setError] = useState<string>("");

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (offer?.pictures) {
      offer.pictures.forEach((picture) => {
        formData.append("picture", picture);
      });
    }

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
            label={CONFIG.pictures.label}
            name="pictures"
            files={offer?.pictures ?? []}
            onChange={(value) =>
              setOffer((prev) => ({ ...prev, pictures: value }))
            }
          />
        </Section>
        <Section withCssRules>
          <Field {...extractFieldProps("title", offerState)} />
          <Field {...extractFieldProps("description", offerState)} />
        </Section>
        <Section withCssRules>
          <Field {...extractFieldProps("brand", offerState)} />
          <Field {...extractFieldProps("size", offerState)} />
          <Field {...extractFieldProps("color", offerState)} />
          <Field {...extractFieldProps("condition", offerState)} />
          <Field {...extractFieldProps("city", offerState)} />
        </Section>
        <Section withCssRules>
          <Field {...extractFieldProps("price", offerState)} />
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
