import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ErrorPage } from "../journal/pages";
import { JournalChildrenRoutes, JournalRoute } from "../journal/routes";
import { AuthChildrenRoutes, AuthRoute } from "../auth/routes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../auth/hooks";


const PrivateRoutes = ({ children, status }) => {

  return (status === 'authenticated')
    ? children
    : <Navigate to={'/auth/login'} />
}

const PublicRoutes = ({ children, status }) => {

  return (status === 'not-authenticated')
    ? children
    : <Navigate to={'/'} />
}



export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === 'checking') return <CheckingAuth />


  const router = createBrowserRouter([
    {
      path: "/auth/*",
      element: <PublicRoutes status={status}><AuthRoute /></PublicRoutes>,
      errorElement: <Navigate to={"/auth/login"} />,
      children: AuthChildrenRoutes,
    },
    {
      path: "/",
      element: <PrivateRoutes status={status}><JournalRoute /></PrivateRoutes>,
      errorElement: <ErrorPage />,
      children: JournalChildrenRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
};
