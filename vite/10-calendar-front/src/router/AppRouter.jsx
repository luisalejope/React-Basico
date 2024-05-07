import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { CalendarChildrenRoutes, ErrorPage } from "../calendar";
import { AuthChildrenRoutes } from "../auth";


export const AppRouter = () => {
    const status = "not-authenticated";
    const router = createBrowserRouter([
      {
        path: "/auth/*",
        element: (
          <PublicRoutes status={status}>
            <Outlet />
          </PublicRoutes>
        ),
        errorElement: <Navigate to={"/auth/login"} />,
        children: AuthChildrenRoutes,
      },
      {
        path: "/",
        element: (
          <PrivateRoutes status={status}>
            <Outlet />
          </PrivateRoutes>
        ),
        errorElement: <ErrorPage />,
        children: CalendarChildrenRoutes,
      },
    ]);

    return <RouterProvider router={router} />;
}
