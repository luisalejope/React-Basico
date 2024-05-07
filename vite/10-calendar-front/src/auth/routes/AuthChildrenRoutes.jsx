import { Navigate } from "react-router-dom";
import { AuthPage } from "../pages";

export const AuthChildrenRoutes = [
  {
    path: "login",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/auth/login"} />,
  },
];
