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
  return (
    <div className="flex border-b border-b-ink-light py-6 focus:border-0">
      <label htmlFor={name} className="w-1/2 px-4">
        {label}
      </label>
      {type === "text" || type === "number" ? (
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
      ) : (
        <textarea
          className="publish-input"
          placeholder={placeholder}
          id={name}
          rows={4}
          name={name}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            onChange(event.target.value);
          }}
        >
          {value}
        </textarea>
      )}
    </div>
  );
};
