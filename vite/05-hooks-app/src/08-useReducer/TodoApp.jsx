
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {

    const {todos, totalTodos, pendingTodos, handleDeleteTodo, handleNewTodo, handleUpdateTodo} = useTodos()

    return (
        <>
            <h1>Todo App: {totalTodos}, <small>Pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    <TodoAdd handleSubmit={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
