import { cn } from "@/helpers/cn";
import type { ModalProps } from "./types";
import { RiCloseFill } from "react-icons/ri";

export const Modal = ({
  title,
  show,
  onClose,
  buttons,
  error,
  children,
}: ModalProps) => {
  return (
    <>
      {show && (
        <div className="fixed w-screen h-screen bg-black/50 flex justify-center items-center top-0 left-0">
          <div className="w-1/2 bg-white rounded border border-solid border-ink-light shadow-lg ">
            <div className="flex p-4 justify-between border-b border-solid border-ink-light">
              <h1 className="text-xl font-bold">{title}</h1>
              <span
                className="flex justify-center items-center text-xl cursor-pointer hover:text-lagoon-500"
                onClick={onClose}
              >
                <RiCloseFill />
              </span>
            </div>
            <div className="flex p-4 overflow-auto h-[calc(100vh-200px)] ">
              <div className="p-4 flex justify-center w-full">{children}</div>
            </div>
            {buttons && (
              <div className="flex p-4 justify-between border-t border-solid border-ink-light items-center gap-4">
                {
                  <p className="text-error text-sm h-10 overflow-y-auto">
                    {error ? `⚠️ ${error}` : ""}
                  </p>
                }
                {!!buttons.validate && (
                  <button
                    className="button text-white p-3 hover:bg-lagoon-400 disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={buttons.validate.cb}
                    disabled={buttons.validate.isDisabled}
                  >
                    Valider
                  </button>
                )}
                {!!buttons.leave && (
                  <button
                    className={cn(
                      "button",
                      "text-white bg-rose",
                      "disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60",
                    )}
                    onClick={onClose}
                    disabled={buttons.leave.isDisabled}
                  >
                    Quitter
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
