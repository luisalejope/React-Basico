import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  console.log(defaultCategories);
  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
