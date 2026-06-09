import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import type { Pattern, SearchProps } from "./types";
import { DEBOUNCE_TIME } from "./constants";
import { generateSearchParam, getTagColor, getTagText } from "./helpers";
import { cn } from "@/helpers/cn";

export const Search = ({ onChange }: SearchProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [pattern, setPattern] = useState<Pattern | undefined>();

  return (
    <div className="flex gap-2 items-center w-full relative">
      <FaSearch className="text-ink-light" />
      <input
        type="text"
        placeholder="Texte (titre) ou 1 / 2 nombres (prix)"
        id="main-search"
        className="focus:outline-none focus:ring-0 bg-killarney-50 w-full p-1 rounded-sm"
        onChange={(e) => {
          if (timerRef.current) clearTimeout(timerRef.current);

          timerRef.current = setTimeout(() => {
            const result = generateSearchParam(e.target.value);
            setPattern(result.pattern);
            onChange(result.params);
          }, DEBOUNCE_TIME);
        }}
      />
      {pattern && (
        <div className="bg-white absolute right-1  text-xs rounded-sm">
          <span
            className={cn(
              getTagColor(pattern),
              "p-1 border border-solid border-ink-muted rounded-sm",
            )}
          >
            {getTagText(pattern)}
          </span>
        </div>
      )}
    </div>
  );
};
