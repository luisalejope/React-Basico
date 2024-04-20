import { render } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodos } from "../../src/hooks/useTodos"

jest.mock('../../src/hooks/useTodos')

beforeEach(()=> jest.clearAllMocks())

const todosMock = [
    {
        id: 1,
        desc: 'Correr',
        done: false
    }
]

describe('Pruebas en <TodoApp />', () => {
    useTodos.mockReturnValue({
        todos: todosMock,
        totalTodos: 1,
        pendingTodos: 1, 
        handleDeleteTodo: jest.fn(), 
        handleNewTodo: jest.fn(), 
        handleUpdateTodo: jest.fn()
    });

    test('Debe de corresponder con el snapshot', () => {
        const {container} = render(<TodoApp />)
        expect(container).toMatchSnapshot();
    })


})