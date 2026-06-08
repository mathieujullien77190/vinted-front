import { ROUTES } from "@/constants";
import { isAuth } from "@/helpers/user";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const NoAuth = ({ children }: PropsWithChildren) => (
  <>{isAuth() ? <Navigate to={ROUTES.home} replace /> : <>{children}</>}</>
);

export const Auth = ({ children }: PropsWithChildren) => (
  <>{!isAuth() ? <Navigate to={ROUTES.signin} replace /> : <>{children}</>}</>
);
