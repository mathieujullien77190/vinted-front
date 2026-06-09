import type { ChangeEvent } from "react";
import type { FieldProps } from "../types";

export const Field = ({
  label,
  value,
  name,
  type,
  placeholder,
  onChange,
}: FieldProps) => {
  if (type === "file") return <></>;

  return (
    <div className="flex border-b border-b-ink-light py-6 focus:border-0">
      <label htmlFor={name} className="w-1/2 px-4">
        {label}
      </label>

      {(() => {
        switch (type) {
          case "text":
          case "number":
            return (
              <input
                className="publish-input"
                type={type}
                value={value}
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onChange(event.target.value);
                }}
              />
            );

          case "textarea":
            return (
              <textarea
                className="publish-input"
                placeholder={placeholder}
                id={name}
                rows={4}
                name={name}
                value={value}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                  onChange(event.target.value);
                }}
              />
            );

          default:
            return <>Use dropZone component</>;
        }
      })()}
    </div>
  );
};
