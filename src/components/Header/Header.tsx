import logo from "@/assets/logo.svg";
import { cn } from "@/helpers/cn";
import { Wrapper } from "@/components/Wrapper";

import { HEIGHT_HEADER, ROUTES } from "@/constants";
import { Link, useNavigate } from "react-router-dom";
import { getUsername, logout } from "@/helpers/user";
import { useState } from "react";
import type { HeaderProps } from "./types";

export const Header = ({ children }: HeaderProps) => {
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
    window.setTimeout(() => {
      navigate(ROUTES.home);
    }, 1000);
  };

  const handlePublish = () => {
    navigate(ROUTES.publish);
  };

  return (
    <Wrapper>
      <header
        className={`flex justify-between items-center p-2.5 h-[${HEIGHT_HEADER}px]`}
      >
        <Link to={ROUTES.home}>
          <img src={logo} alt="logo" />
        </Link>

        <div className="w-147 py-1 px-2 rounded-xs flex gap-2 items-center">
          {children}
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

        <button
          className={cn("button", "text-white bg-lagoon-500")}
          onClick={handlePublish}
        >
          Vends tes articles
        </button>
      </header>
    </Wrapper>
  );
};
