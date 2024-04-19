import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (data) => {
        const newTodo = {
            id: new Date().getTime(),
            desc: data,
            done: false,
        }

        dispatch({
            type: '[TODO] add todo',
            payload: newTodo
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] delete todo',
            payload: id
        })
    }

    const handleUpdateTodo = (todo) => {
        dispatch({
            type: '[TODO] update todo',
            payload: todo
        })
    }

    return {
        todos,
        totalTodos: todos.length,
        pendingTodos: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleUpdateTodo,
    }
}
