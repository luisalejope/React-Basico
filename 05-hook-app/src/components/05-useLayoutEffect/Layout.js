import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../styles/main.css";

export const Layout = () => {
  const { state: counter, increment, decrement } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const [boxSize, setBoxSize] = useState({})
  const { quote } = !!data && data[0];

  const pTag = useRef()
    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0"> {quote} </p>
        <br />
      </blockquote>

      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <div className="containerButtons">
        {counter > 1 && (
          <button className="btn btn-primary" onClick={decrement}>
            Anterior quote
          </button>
        )}
        <button className="btn btn-primary" onClick={increment}>
          Siguiente quote
        </button>
      </div>
    </>
  );
};
