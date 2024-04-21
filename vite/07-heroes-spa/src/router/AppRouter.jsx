
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../heroes/HeroesApp";
import { LoginPage } from "../auth/pages";
import { DcPage, ErrorPage, HeroPage, MarvelPage, SearchPage } from "../heroes/pages";

export const AppRouter = () => {


    const router = createBrowserRouter([

        {
            path: '/login',
            element: <LoginPage />,
            errorElement: <ErrorPage />
        },
        {
            path: "/",
            element: <HeroesApp />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Navigate to={'/marvel'}/>,
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
                    path: "hero",
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
