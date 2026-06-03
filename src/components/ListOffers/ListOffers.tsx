import { LightOffer } from "../Offer";
import type { ListOffersProps } from "./types";
import { Wrapper } from "../Wrapper";

export const ListOffers = ({ offers }: ListOffersProps) => {
  return (
    <Wrapper className="py-5">
      <section>
        <ul className="flex flex-wrap gap-3">
          {offers.map((offer: any) => (
            <li key={crypto.randomUUID()}>
              <LightOffer {...offer} />
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};
