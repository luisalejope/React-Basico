import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleSubmit }) => {
    const { todoInput, onInputChange, onResetForm } = useForm({
        todoInput: '',
    })

    const onAddTodo = (e) => {
        e.preventDefault()

        if (todoInput === '') return;

        handleSubmit(todoInput)
        onResetForm();
    }

    return (
        <form>
            <input type="text" className="form-control" name='todoInput' onChange={onInputChange} value={todoInput} />
            <button type="submit" className="btn btn-primary mt-2" onClick={onAddTodo}>Agregar</button>
        </form>
    )
}

TodoAdd.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}