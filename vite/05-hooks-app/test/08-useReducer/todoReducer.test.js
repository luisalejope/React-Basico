import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [
        {
            id: 1,
            description: 'Demo Todo',
            done: false
        }
    ]

    test('debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => {
        const newTodo = {
            id: 2,
            description: 'Demo Todo 2',
            done: false
        }
        const action = {
            type: '[TODO] add todo',
            payload: newTodo
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(newTodo)
    })

    test('debe de eliminar un todo', () => {
        const idOfTodo = 1;

        const action = {
            type: '[TODO] delete todo',
            payload: idOfTodo
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        expect(newState).not.toContain(initialState);
    })

    test('debe de actualizar un todo', () => {
        const updatedTodo = {
            id: 1,
            description: 'Demo Todo',
            done: true,
        };

        const action = {
            type: '[TODO] update todo',
            payload: updatedTodo
        };

        const newState = todoReducer(initialState, action);
        
        expect(newState.length).toBe(1);
        expect(newState).toContain(updatedTodo);
    })
})