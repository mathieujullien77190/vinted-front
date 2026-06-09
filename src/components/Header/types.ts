import type { SearchParams } from "@/types";

export type generateSearchParamProps = {
  params: SearchParams;
  pattern: "pricePattern" | "text";
};

export type HeaderProps = {
  showSearch?: boolean;
  onSearchChange?: (value: generateSearchParamProps) => void;
};
