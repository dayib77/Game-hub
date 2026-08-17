import type { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGameScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["games", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGameScreenshot;
