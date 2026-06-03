import { cn } from "../../helpers/cn";
import { toPrice } from "../../helpers/formatters";
import type { FullOfferProps } from "./types";
import * as CSS from "../UI";
import User from "../User";

export const FullOffer = ({
  name,
  picture,
  price,
  details,
  description,
  user,
}: FullOfferProps) => {
  return (
    <article className="flex justify-between">
      <img src={picture} alt={name} className="h-150 rounded" />
      <div className="flex flex-col bg-white p-8 w-105 gap-8 rounded">
        <div className="text-xl">{toPrice(price)}</div>
        <ul className="flex flex-col w-full">
          {details.map(({ key, value }) => (
            <li key={crypto.randomUUID()} className="flex">
              <span className="flex w-50 text-sm text-ink-light">{key}</span>
              <span className="flex text-sm text-ink font-bold">{value}</span>
            </li>
          ))}
        </ul>
        <hr className="border-gray-300" />
        <div className="text-sm font-bold">{name}</div>
        <div className="text-sm ">{description}</div>
        <User {...user} format="big" />
        <button
          className={cn(
            CSS.Button,
            "w-full text-white bg-lagoon-500 text-sm py-2 px-4",
          )}
        >
          Acheter
        </button>
      </div>
    </article>
  );
};
