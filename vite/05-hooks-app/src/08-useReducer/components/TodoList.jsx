
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDeleteTodo, handleUpdateTodo}) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo}/>
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    handleUpdateTodo: PropTypes.func.isRequired,
}

