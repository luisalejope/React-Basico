import React, { useState } from "react";
import "../styles/main.css";
export const CounterApp = () => {
  const [initialState, setInitial] = useState({
      counter1: 10,
      counter2: 20
  });

  const {counter1, counter2}=initialState

  const plusOne = () => {
    setInitial({...initialState, counter1: counter1 + 1});
  };
  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button className="btn btn-primary" onClick={plusOne}>
        +1
      </button>
    </>
  );
};
