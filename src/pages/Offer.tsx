import { FullOffer } from "../components/Offer/FullOffer";
import { Wrapper } from "../components/Wrapper";
import { HEIGHT_HEADER } from "../constants";
import { formatFullOffer } from "../helpers/formatters";
import { useFetch } from "../hooks/useFetch";
import { getOffer } from "../services/getOffer";
import type { Offer as OfferType } from "../types";
import { useParams } from "react-router-dom";

export const Offer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useFetch<OfferType>(() => getOffer(id!));

  return (
    <div className={`bg-canvas h-[calc(100vh-${HEIGHT_HEADER}px)]`}>
      <Wrapper className="p-10">
        {data ? <FullOffer {...formatFullOffer(data)} /> : <></>}
      </Wrapper>
    </div>
  );
};
