import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({todo, i, deleteTodo, toggleTodo}) => {
  return (
    <>
      <li key={todo.id} className="list-group-item simpleFlex">
        <p
          className={`${todo.done ? "todo completed" : "todo"}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {i + 1}. {todo.desc}
        </p>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Borrar
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
