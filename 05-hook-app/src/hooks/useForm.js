import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const type = e.target.name;
    setValues({ ...values, [type]: e.target.value });
  };

  return [values, handleInputChange, reset];
};
