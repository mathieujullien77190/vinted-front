import { cn } from "../../helpers/cn";
import * as CSS from "../UI";

export const Hero = () => {
  return (
    <div
      className={cn(
        "w-full h-113 relative",
        "bg-[url('/tear.svg'),url('/image.png')]",
        "bg-size-[auto,cover]",
        "bg-no-repeat",
      )}
      style={{ backgroundPosition: "bottom right, center" }}
    >
      <div className="absolute top-18.75 left-18.75 h-55 w-90 p-6.25 rounded bg-white shadow-[0_0_2px_#1111113d] flex gap-7 flex-col justify-center">
        <h1 className="text-3xl">Prêts à faire du tri dans vos placards ?</h1>
        <button
          className={cn(
            CSS.Button,
            "w-fit text-white bg-lagoon-500 text-sm py-2 px-4",
          )}
        >
          Commencer à vendre
        </button>
      </div>
    </div>
  );
};
