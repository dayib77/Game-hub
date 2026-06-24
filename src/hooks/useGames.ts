import { useEffect, useState } from "react";
import { apiClient } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to handle request cancellation

    const fetchGame = async () => {
      setLoading(true);

      try {
        const data: GameResponse = await apiClient.get<GameResponse>(
          "/games",
          undefined, // No additional query parameters
          controller.signal,
        );
        setLoading(false);
        setGame(data.results);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(
            err.message || "Une erreur se produite, merci de reessayer.",
          );
          setLoading(false);
        }
      }
    };

    fetchGame();

    return () => controller.abort();
  }, []);

  return { game, loading, error };
};

export default useGames;
