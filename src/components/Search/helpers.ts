import type { generateSearchParamProps, Pattern } from "./types";

export const generateSearchParam = (
  value: string,
): generateSearchParamProps => {
  const nums = value.match(/^(\d+)(?:\D+(\d+))?$/);

  if (nums?.[1] && nums?.[2]) {
    return {
      params: {
        priceMin: parseInt(nums[1]),
        priceMax: parseInt(nums[2]),
      },
      pattern: "priceMinMax",
    };
  }

  if (nums?.[1]) {
    return {
      params: {
        priceMax: parseInt(nums[1]),
      },
      pattern: "priceMax",
    };
  }

  if (value === "")
    return {
      params: {},
    };

  return {
    params: { title: value },
    pattern: "title",
  };
};

export const getTagText = (pattern: Pattern): string | undefined => {
  if (pattern === "title") return "recherche par titre";
  if (pattern === "priceMinMax") return "recherche par prix min/max";
  if (pattern === "priceMax") return "recherche par prix max";
  return undefined;
};

export const getTagColor = (pattern: Pattern): string | undefined => {
  if (pattern === "title") return "bg-amber-100";
  if (pattern === "priceMinMax") return "bg-fuchsia-100";
  if (pattern === "priceMax") return "bg-pink-100";
  return undefined;
};
