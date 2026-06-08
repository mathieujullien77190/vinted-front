import { cn } from "@/helpers/cn";
import { useDropzone } from "react-dropzone";
import type { DropZoneProps } from "../types";

export const DropZone = ({ label, name, files, onChange }: DropZoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const newFiles = acceptedFiles
        .filter(
          (file) =>
            !files.some(
              (f) =>
                f.name === file.name &&
                f.size === file.size &&
                f.lastModified === file.lastModified,
            ),
        )
        .map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );

      onChange([...files, ...newFiles]);
    },
  });

  console.log(files);

  const thumbs = files.map((file) => (
    <div key={file.name} className="shrink-0">
      <div
        className="relative flex justify-center items-center cursor-pointer show-over"
        onClick={() => {
          onChange(files.filter((f) => f.name !== file.name));
        }}
      >
        <img
          className="h-25 rounded-sm border border-solid border-black"
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
        <p className="text-white absolute show">Supprimer</p>
      </div>
    </div>
  ));

  return (
    <div className="p-4 flex flex-col gap-2">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="w-full flex justify-center items-center h-50 border-2 border-dashed border-ink-light cursor-pointer hover:border-ink-muted"
      >
        <input {...getInputProps()} name={name} id={name} />
        <button className={cn("button", "text-lagoon-500 bg-white")}>
          {label}
        </button>
      </div>
      <div className="overflow-x-scroll">
        <div className="flex gap-2">{thumbs}</div>
      </div>
    </div>
  );
};
