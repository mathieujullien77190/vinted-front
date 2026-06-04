import Hero from "@/components/Hero";
import ListOffers from "@/components/ListOffers";
import { formatLightOffer } from "@/helpers/formatters";
import { useFetch } from "@/hooks/useFetch";
import { getOffers } from "@/services/getOffers";
import type { OffersResponse } from "@/types";

export const Home = () => {
  const { data } = useFetch<OffersResponse>(getOffers);

  const offers = data?.offers
    ? data.offers.map((item) => formatLightOffer(item))
    : [];

  return (
    <>
      <Hero />
      <ListOffers offers={offers} />
    </>
  );
};
