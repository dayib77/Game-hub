import { apiClient } from "@/services/api-client";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to handle request cancellation

    const fetchGenre = async () => {
      setLoading(true);

      try {
        const data: GenreResponse = await apiClient.get<GenreResponse>(
          "/genres",
          undefined, // No additional query parameters
          controller.signal,
        );
        setLoading(false);
        setGenre(data.results);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(
            err.message || "Une erreur se produite, merci de reessayer.",
          );
          setLoading(false);
        }
      }
    };

    fetchGenre();

    return () => controller.abort();
  }, []);

  return { genre, loading, error };
};

export default useGenre;
