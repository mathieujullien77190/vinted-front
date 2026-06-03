import logo from "../../assets/logo.svg";
import { cn } from "../../helpers/cn";
import { Wrapper } from "../Wrapper";
import * as CSS from "../UI";
import { FaSearch } from "react-icons/fa";
import { HEIGHT_HEADER } from "../../constants";

export const Header = () => {
  return (
    <Wrapper>
      <header
        className={`flex justify-between items-center p-2.5 h-[${HEIGHT_HEADER}px]`}
      >
        <img src={logo} alt="logo" />
        <div className="w-147 bg-killarney-50 py-1 px-2 rounded-xs flex gap-2 items-center">
          <FaSearch className="text-ink-light" />
          <input
            type="text"
            placeholder="Recherches des articles"
            id="main-search"
            className=" focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex gap-2">
          <button className={cn(CSS.Button, "text-lagoon-500 bg-white")}>
            S'inscrire
          </button>
          <button className={cn(CSS.Button, "text-lagoon-500 bg-white")}>
            Se connecter
          </button>
        </div>

        <button className={cn(CSS.Button, "text-white bg-lagoon-500")}>
          Vends tes articles
        </button>
      </header>
    </Wrapper>
  );
};
