import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  // usa el useref para revisar si se desmonta o no el componente y evitar errores de peticion
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetchQuote(url);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const fetchQuote = async (ur) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({ loading: false, error: null, data });
        }
      });
  };
  return state;
};
