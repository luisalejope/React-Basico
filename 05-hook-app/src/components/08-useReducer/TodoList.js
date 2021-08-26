import React from 'react'
import PropTypes from 'prop-types'
import "../styles/main.css";
import TodoItem from './TodoItem';
const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <>
            <ul className="list-group list-group-flush fullWidth">
            {todos.map((todo, i) => (
              <TodoItem key={todo.id} todo={todo} i={i} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            ))}
          </ul>
        </>
    )
}

TodoList.propTypes = {

}

export default TodoList
