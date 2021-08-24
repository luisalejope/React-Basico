import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "../styles/main.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("hey");
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const type = e.target.name;
    setFormState({ ...formState, [type]: e.target.value });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "1234" && <Message />}
    </>
  );
};
