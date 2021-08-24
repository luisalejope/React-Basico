import React, { useCallback, useState } from "react";
import "../styles/main.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);

  return (
    <>
      <h1>UseCallback hook</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <ShowIncrement increment={increment} />
    </>
  );
};
