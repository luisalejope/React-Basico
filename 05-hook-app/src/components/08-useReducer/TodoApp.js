import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "../styles/main.css";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    // nuevo cambio en el estado
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // action
    const añadirTodo = {
      type: "add",
      payload: newTodo,
    };

    dispatch(añadirTodo);
    reset();
  };

  const deleteTodo = (todoId) => {
    const deleteTs = {
      type: "delete",
      payload: todoId,
    };
    dispatch(deleteTs);
  };

  const toggleTodo = (todoId) => {
    const toggleT = {
      type: "toggle",
      payload: todoId,
    };

    dispatch(toggleT);
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="todosMain">
        <div className="todosFlex">
          <ul className="list-group list-group-flush fullWidth">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item simpleFlex">
                
                <p className={`${todo.done ? 'todo completed': 'todo'}`} onClick={() => toggleTodo(todo.id)}>
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="agregarColumn">
          <h4>Agregar</h4>
          <br />
          <form className="agregarForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Nuevo Todo"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
