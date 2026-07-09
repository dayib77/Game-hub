import type { GameQuery } from "@/App";
import useData from "./useData";

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
  metacritic: number | null;
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

  return useData<Game>(endpoint);
};

export default useGames;
