import Header, { type generateSearchParamProps } from "@/components/Header";

import Hero from "@/components/Hero";
import ListOffers from "@/components/ListOffers";
import { formatLightOffer } from "@/helpers/formatters";
import { useFetch } from "@/hooks/useFetch";
import { getOffers } from "@/services/getOffers";
import type { OffersResponse, SearchParams } from "@/types";
import { useCallback, useState } from "react";

export const Home = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const { title, priceMin, priceMax } = searchParams;

  const cb = useCallback(
    () => getOffers({ title, priceMin, priceMax }),
    [title, priceMin, priceMax],
  );

  const { data } = useFetch<OffersResponse>(cb);

  const offers = data?.offers
    ? data.offers.map((item) => formatLightOffer(item))
    : [];

  return (
    <>
      <Header
        showSearch={true}
        onSearchChange={(value: generateSearchParamProps) => {
          setSearchParams(value.params);
        }}
      />
      <Hero />
      <ListOffers offers={offers} />
    </>
  );
};
