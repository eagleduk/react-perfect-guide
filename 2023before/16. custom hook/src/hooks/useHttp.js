import { useCallback, useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchService = useCallback(
    async (
      httpUrl,
      httpConfig = { method: "GET", headers: {}, body: null },
      responseFn
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(httpUrl, httpConfig);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        responseFn(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    error,
    isLoading,
    fetchService,
  };
}

export default useHttp;
