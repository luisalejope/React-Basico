import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setCategories((cat) => [...cat, inputValue]);
      setInputValue('')
      console.log("submit hecho", inputValue);
    } else {
        setInputValue('')
      console.warn("Ingresa un dato");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

// Obliga los argumentos y el tipo
AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
};
