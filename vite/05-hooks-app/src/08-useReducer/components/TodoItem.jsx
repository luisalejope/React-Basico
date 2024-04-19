
import PropTypes from 'prop-types'

export const TodoItem = ({todo, handleDeleteTodo, handleUpdateTodo}) => {

    const onUpdateStatus = () => {
        handleUpdateTodo({
            ...todo,
            done: !todo.done
        })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" onClick={onUpdateStatus}>
            <span className={todo.done ? 'text-decoration-line-through': ''}>{todo.desc}</span>
            <button className="btn btn-danger" onClick={()=>handleDeleteTodo(todo.id)} >Eliminar</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    handleUpdateTodo: PropTypes.func.isRequired,
}

