import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../styles/main.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>Real Example Ref</h1>
      <hr />
      {show ? (
        <>
          <MultipleCustomHooks />
          <button className="btn btn-primary mt-5" onClick={handleShow}>
            Hide
          </button>
        </>
      ) : (
        <button className="btn btn-outline-primary mt-5" onClick={handleShow}>
          Show
        </button>
      )}
    </>
  );
};
