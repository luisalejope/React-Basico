import { createBrowserRouter } from "react-router-dom"
import { MainApp } from "./MainApp"
import { ErrorPage } from "./ErrorPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"


export const getRoutes = () => createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      }
    ]
  }
]);
