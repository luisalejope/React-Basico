import React, { useEffect, useReducer } from "react";
import "../styles/main.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
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
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </div>
        <div className="agregarColumn">
          <TodoAdd addTodo={addTodo}/>
        </div>
      </div>
    </>
  );
};
