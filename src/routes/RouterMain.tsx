import { Route, Routes } from "react-router-dom";
import { CreateScrapPage } from "../pages/CreateScrapPage";
import { EditScrapPage } from "../pages/EditScrapPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RouterMain = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/user" element={<UserPage />} />
        <Route path="/scraps" element={<CreateScrapPage />} />
        <Route path="/scraps/edit" element={<EditScrapPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
