import type { GameQuery } from "@/App";
import { apiClient, type fetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[] | undefined;
  metacritic: number | null;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = gameQuery;

  const params = new URLSearchParams();

  if (genre?.id) params.append("genres", String(genre.id));
  if (platform?.id) params.append("parent_platforms", String(platform.id));
  if (sortOrder) params.append("ordering", sortOrder);
  if (searchText) params.append("search", searchText);

  const query = params.toString(); // example: "genres=4&parent_platforms=1"
  const endpoint = query ? `/games?${query}` : "/games";

  // return useData<Game>(endpoint);

  return useQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get(endpoint),
  });
};

export default useGames;
