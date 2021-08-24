import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../styles/main.css";

export const MultipleCustomHooks = () => {
  const { state: counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  console.log(loading);
  return (
    <>
      <h1>breaking bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <br />
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
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
