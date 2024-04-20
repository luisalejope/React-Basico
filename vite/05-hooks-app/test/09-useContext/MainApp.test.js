import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { ErrorPage } from "../../src/09-useContext/ErrorPage";
import { HomePage } from "../../src/09-useContext/HomePage";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { AboutPage } from "../../src/09-useContext/AboutPage";

describe('Pruebas en <MainApp />', () => {
    const routes = [
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
    ];

    test('debe de mostrar el <MainApp />', () => {
        //especificando ruta a activar
        const router = createMemoryRouter(routes, {initialEntries: ['/'],});
 
        //renderizando Provider
        render(<RouterProvider router={router} />);
 
        //ubicando elemento h1
        const head = screen.getByRole('heading',{name: 'HomePage'});
 
        expect(head).toBeTruthy();
    })

    test('debe de mostrar el <MainApp />', () => {
        //especificando ruta a activar
        const router = createMemoryRouter(routes, {initialEntries: ['/login'],});
 
        //renderizando Provider
        render(<RouterProvider router={router} />);
 
        //ubicando elemento h1
        const head = screen.getByRole('heading',{name: 'LoginPage'});
 
        expect(head).toBeTruthy();
    })
});