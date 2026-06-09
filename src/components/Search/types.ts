import type { SearchParams } from "@/types";

export type Pattern = "title" | "priceMax" | "priceMinMax";

export type generateSearchParamProps = {
  params: SearchParams;
  pattern?: Pattern;
};

export type SearchProps = { onChange: (value: SearchParams) => void };
