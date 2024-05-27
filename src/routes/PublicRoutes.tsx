import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export const PublicRoutes = (): JSX.Element => {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" /> : <Outlet />;
};
