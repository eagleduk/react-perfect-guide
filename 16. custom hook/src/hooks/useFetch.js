import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState(initialValue);
  const [error, setError] = useState();

  useEffect(() => {
    async function getFetchDatas() {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch datas." });
      }
      setIsLoading(false);
    }

    getFetchDatas();
  }, [fetchFn]);

  return {
    isLoading,
    error,
    fetchData,
    setFetchData,
  };
}
