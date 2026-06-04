import logo from "@/assets/logo.svg";
import { cn } from "@/helpers/cn";
import { Wrapper } from "../Wrapper";
import { FaSearch } from "react-icons/fa";
import { HEIGHT_HEADER, ROUTES } from "@/constants";
import { Link, useNavigate } from "react-router-dom";
import { getUsername, logout } from "@/helpers/user";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | undefined>(getUsername());

  const handleSignup = () => {
    navigate(ROUTES.signup);
  };

  const handleSignin = () => {
    navigate(ROUTES.signin);
  };

  const handleLogout = () => {
    logout();
    setUsername(undefined);
  };

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
            className="focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex gap-2">
          {username ? (
            <button
              className={cn("button", "text-white bg-rose")}
              onClick={handleLogout}
            >
              Se deconnecter
            </button>
          ) : (
            <>
              <button
                className={cn("button", "text-lagoon-500 bg-white")}
                onClick={handleSignup}
              >
                S'inscrire
              </button>
              <button
                className={cn("button", "text-lagoon-500 bg-white")}
                onClick={handleSignin}
              >
                Se connecter
              </button>
            </>
          )}
        </div>

        <button className={cn("button", "text-white bg-lagoon-500")}>
          Vends tes articles
        </button>
      </header>
    </Wrapper>
  );
};
