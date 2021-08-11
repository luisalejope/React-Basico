import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  //el useState retorna un arreglo de dos valores [parametro, funcion]
  const [counter, setCounter] = useState(value);

  //handle add
  const handleAdd = (e) => {
    // se pueden usar estas dos formas
    setCounter(counter + 1);
    // setCounter((c)=>c+1)
  };

  //handle add
  const handleReset = (e) => {
    // se pueden usar estas dos formas
    setCounter(value);
    // setCounter((c)=>c+1)
  };

  //handle add
  const handleSubstract = (e) => {
    // se pueden usar estas dos formas
    setCounter(counter - 1);
    // setCounter((c)=>c+1)
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

// Obliga los argumentos y el tipo
CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};
// Define las propiedades por defecto
CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
