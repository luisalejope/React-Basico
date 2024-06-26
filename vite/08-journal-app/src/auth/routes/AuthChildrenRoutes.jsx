import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthChildrenRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/auth/login"} />,
  },
];
