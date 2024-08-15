import { RouteObject } from "react-router";
import LoginPage from "../pages/LoginPage";

export const LoginRouter: RouteObject = {
  path: "/login",
  element: <LoginPage />,
};
