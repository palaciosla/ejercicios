import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async (signal) => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let error = new Error("Error en la petición fetch");
          error.status = res.status || "00";
          error.statusText = res.statusText || "¡Ocurrió un error!";

          throw error;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
            setLoading(false);
          }
      }
    };

    fetchData(signal);

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
