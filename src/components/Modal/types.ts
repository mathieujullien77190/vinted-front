import type { PropsWithChildren } from "react";

export type Button = { cb?: () => void; isDisabled: boolean };

export type ModalProps = {
  show: boolean;
  title: string;
  onClose: () => void;
  buttons?: {
    validate?: Button;
    leave?: Button;
  };
  error?: string;
} & PropsWithChildren;
