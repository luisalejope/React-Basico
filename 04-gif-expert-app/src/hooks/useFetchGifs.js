import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetch(category);
  }, [category]);

  const fetch = async (cat) => {
    const img = await getGifs(cat);
    setState({ data: img, loading: false });
  };

  return state; // {data:[], loading: true}
};
