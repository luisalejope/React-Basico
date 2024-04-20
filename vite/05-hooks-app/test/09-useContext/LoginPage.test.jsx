import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('Pruebas en <LoginPage />', () => {

    const userMock = {id: 2, name: 'Luis', email: 'luis@mail.com'};
    const setStateMock = jest.fn();

    beforeEach(()=> jest.clearAllMocks())
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null, setUser: setStateMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('Debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{user: userMock, setUser: setStateMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(userMock.id.toString())
        expect(preTag.innerHTML).toContain(userMock.name)
        expect(preTag.innerHTML).toContain(userMock.email)
    })

    test('Debe de ejecutar la accion del boton enviando el usuario', () => {
        
        render(
            <UserContext.Provider value={{user: null, setUser: setStateMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const buttonSet = screen.getByRole('button')
        fireEvent.click(buttonSet)
        expect(setStateMock).toHaveBeenCalledWith(userMock)
        
    })

})