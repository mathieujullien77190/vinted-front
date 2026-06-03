export type LightOffer = {
  id: string;
  name: string;
  user: {
    name: string;
    avatar?: string;
  };
  picture?: string;
  price: number;
  details: { key: string; value: string }[];
};

export type FullOffer = LightOffer & {
  description?: string;
};

export type RawDetailType = {
  [key: string]: string;
}[];

export type LightOfferProps = LightOffer & {
  onClick?: () => void;
};

export type FullOfferProps = FullOffer;
