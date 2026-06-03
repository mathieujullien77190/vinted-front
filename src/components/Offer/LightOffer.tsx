import { Link } from "react-router-dom";
import type { LightOfferProps } from "./types";
import { ROUTES } from "../../constants";
import { toPrice } from "../../helpers/formatters";
import User from "../User";

export const LightOffer = ({
  id,
  name,
  user,
  picture,
  details,
  price,
}: LightOfferProps) => {
  return (
    <Link to={ROUTES.offer.replace(":id", id)}>
      <div className="flex flex-col w-58 gap-2">
        <User {...user} format="small" />

        <div className="flex flex-col">
          <img
            src={picture}
            alt={name}
            className="w-full h-90 rounded object-cover"
          />
          <span>{toPrice(price)}</span>
          {details.map(({ value }) => (
            <span key={crypto.randomUUID()} className="text-xs text-ink-light">
              {value}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
