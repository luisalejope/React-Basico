import { fireEvent, render, screen } from "@testing-library/react"
import { TodoAdd } from "../../../src/08-useReducer/components/TodoAdd"

describe('Pruebas en <TodoAdd /> ', () => {

    const submitMock = jest.fn();

    beforeEach(()=>jest.clearAllMocks())

    test('debe de mostrar el formulario por defecto', () => {
        render(<TodoAdd handleSubmit={submitMock} />)
        const inputTodo = screen.getByRole('textbox')
        expect(inputTodo.value).toBe('')
    })

    test('debe de cambiar el valor del input a "Correr"', () => {
        render(<TodoAdd handleSubmit={submitMock} />)
        const inputTodo = screen.getByRole('textbox')
        fireEvent.input(inputTodo, {target: {value: 'Correr'}})
        expect(inputTodo.value).toBe('Correr')
    })

    test('debe de llamar al handleSubmit y enviando el valor suministrado', () => {
        render(<TodoAdd handleSubmit={submitMock} />)
        const inputTodo = screen.getByRole('textbox')
        const submitButton = screen.getByRole('button')
        
        fireEvent.input(inputTodo, {target: {value: 'Correr'}})
        fireEvent.click(submitButton)

        expect(submitMock).toHaveBeenCalledWith('Correr')
        expect(inputTodo.value).toBe('')
    })
})