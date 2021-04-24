import React, { useState } from "react";

export const GifExpertApp = () => {
  /* const categories = ["One punch", "Naruto", "Dragon Ball"]; */

  const [categories, setCategories] = useState(["One punch", "Naruto", "Dragon Ball"])

  const handleAdd = ()=>{

        setCategories([...categories, 'Attack on Titan']);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
