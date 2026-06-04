import { cn } from "@/helpers/cn";
import type { UserProps } from "./types";

export const User = ({ name, avatar, format }: UserProps) => {
  return (
    <div className="flex gap-3 items-center px-2 py-1">
      {avatar && (
        <img
          src={avatar}
          alt={`avatar de ${name}`}
          className={cn(
            "rounded-full ",
            format === "small" ? "w-6.25 h-6.25" : "w-12.5 h-12.5",
          )}
        />
      )}
      <span
        className={cn(
          "text-ink-light",
          format === "small" ? "text-xs" : "text",
        )}
      >
        {name}
      </span>
    </div>
  );
};
