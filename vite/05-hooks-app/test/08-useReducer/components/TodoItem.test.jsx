import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const initialTodo = {
        id: 1,
        desc: 'Demo Todo',
        done: false
    }
    const handleDeleteTodo = jest.fn();
    const handleUpdateTodo = jest.fn();

    beforeEach(()=>jest.clearAllMocks());


    test('debe de mostrar el estado default', () => {
        render(<TodoItem todo={initialTodo} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />);
        const todoDescription = screen.getByText(initialTodo.desc);
        expect(todoDescription).toBeTruthy();
        expect(todoDescription.className).not.toBe('text-decoration-line-through');
        
    })

    test('debe de mostrar el Todo completado', () => {
        initialTodo.done = true;

        render(<TodoItem todo={initialTodo} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />);
        const todoDescription = screen.getByText(initialTodo.desc);
        expect(todoDescription.className).toBe('text-decoration-line-through');
        
    })

    test('debe de llamar al handleDeleteTodo', () => {
        render(<TodoItem todo={initialTodo} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />)
        const deleteButton = screen.getByRole('button', {name: 'Eliminar'})
        fireEvent.click(deleteButton)
        // para revisar que argumentos envio
        expect(handleDeleteTodo).toHaveBeenCalledWith(initialTodo.id);
    })

    test('debe de llamar al handleUpdateTodo', () => {

        const updatedTodo = {
            ...initialTodo,
            done: !initialTodo.done,
        }
        render(<TodoItem todo={initialTodo} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />)
        const updateEvent = screen.getByRole('listitem')
        fireEvent.click(updateEvent);
        // para revisar que argumentos envio
        expect(handleUpdateTodo).toHaveBeenCalledWith(updatedTodo)
    })
})