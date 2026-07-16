import { apiClient, type fetchResponse } from "@/services/api-client";
import { useEffect, useState } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to handle request cancellation

    const fetchData = async () => {
      setLoading(true);

      try {
        const data: fetchResponse<T> = await apiClient.get<fetchResponse<T>>(
          endpoint,
          undefined, // No additional query parameters
          controller.signal,
        );
        setLoading(false);
        setData(data.results);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(
            err.message || "Une erreur se produite, merci de reessayer.",
          );
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
};

export default useData;
