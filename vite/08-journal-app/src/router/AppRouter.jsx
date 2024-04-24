import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ErrorPage } from "../journal/pages";
import { JournalChildrenRoutes, JournalRoute } from "../journal/routes";
import { AuthChildrenRoutes, AuthRoute } from "../auth/routes";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/auth/*",
      element: <AuthRoute />,
      errorElement: <Navigate to={"/auth/login"} />,
      children: AuthChildrenRoutes,
    },
    {
      path: "/",
      element: <JournalRoute />,
      errorElement: <ErrorPage />,
      children: JournalChildrenRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
};
