import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

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
