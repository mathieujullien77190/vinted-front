export type FileWithPreview = File & {
  preview: string;
};

export type OfferToAdd = {
  title?: string;
  description?: string;
  price?: number;
  condition?: string;
  city?: string;
  brand?: string;
  size?: number;
  color?: string;
  pictures?: FileWithPreview[];
};

export type OfferToAddRequest = Omit<OfferToAdd, "pictures"> & {
  picture: File;
};

export type FieldProps = {
  label: string;
  name: string;
  value: string;
  type: "text" | "number" | "textarea";
  placeholder: string;
  onChange: (value: string) => void;
};

export type DropZoneProps = {
  label: string;
  name: string;
  files: FileWithPreview[];
  onChange: (value: FileWithPreview[]) => void;
};
