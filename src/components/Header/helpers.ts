import type { generateSearchParamProps } from "./types";

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
      pattern: "pricePattern",
    };
  }

  if (nums?.[1]) {
    return {
      params: {
        priceMax: parseInt(nums[1]),
      },
      pattern: "pricePattern",
    };
  }

  return {
    params: { title: value },
    pattern: "text",
  };
};
