import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../styles/main.css";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);

  
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>MemoHook</h1>
      <hr />
      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <p>{memoProcesoPesado}</p>
      <div className="containerButtons">
        <button className="btn btn-primary" onClick={increment}>
          {" "}
          + 1{" "}
        </button>
        <button className="btn btn-outline-primary ml-4" onClick={handleShow}>
          {" "}
          Show/Hide {JSON.stringify(show)}{" "}
        </button>
      </div>
    </>
  );
};
