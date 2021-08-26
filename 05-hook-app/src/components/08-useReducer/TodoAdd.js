import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({addTodo}) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: "",
      });
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
        addTodo(newTodo)
        reset();
      };
  return (
    <>
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
    </>
  );
};

TodoAdd.propTypes = {};

export default TodoAdd;
