import logo from "../../assets/logo.svg";
import { cn } from "../../helpers/cn";
import { Wrapper } from "../Wrapper";
import { FaSearch } from "react-icons/fa";
import { HEIGHT_HEADER, ROUTES } from "../../constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <header
        className={`flex justify-between items-center p-2.5 h-[${HEIGHT_HEADER}px]`}
      >
        <Link to={ROUTES.home}>
          <img src={logo} alt="logo" />
        </Link>
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
          <button className={cn("Button", "text-lagoon-500 bg-white")}>
            S'inscrire
          </button>
          <button className={cn("button", "text-lagoon-500 bg-white")}>
            Se connecter
          </button>
        </div>

        <button className={cn("button", "text-white bg-lagoon-500")}>
          Vends tes articles
        </button>
      </header>
    </Wrapper>
  );
};
