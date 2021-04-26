import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import GifGridItem from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const {loading} = useFetchGifs();
  /* useEffect(() => {
    getGifs(category)
        .then(setImages);
  }, [category]); */

  return (
    <>
      <h3>{category}</h3>
        {loading ? 'Cargando...' : 'Data cargada'}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
