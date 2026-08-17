import type Trailer from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGameTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["games", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGameTrailer;
