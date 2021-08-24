import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../styles/main.css";
import { Small } from "./Small";

export const Memorize = () => {
  const { state: counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />{" "}
      </h2>
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
