
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../heroes/HeroesApp";
import { LoginPage } from "../auth";
import { DcPage, ErrorPage, HeroPage, MarvelPage, SearchPage } from "../heroes/pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {


    const router = createBrowserRouter([

        {
            path: '/login',
            element: <PublicRoute><LoginPage /></PublicRoute>,
            errorElement: <ErrorPage />
        },
        {
            path: "/",
            element: <PrivateRoute><HeroesApp /></PrivateRoute>,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Navigate to={'/marvel'} />,
                },
                {
                    path: "marvel",
                    element: <MarvelPage />,
                },
                {
                    path: "dc",
                    element: <DcPage />,
                },
                {
                    path: "dc/hero/:heroId",
                    element: <HeroPage />,
                },
                {
                    path: "marvel/hero/:heroId",
                    element: <HeroPage />,
                },
                {
                    path: "search",
                    element: <SearchPage />,
                }

            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}
