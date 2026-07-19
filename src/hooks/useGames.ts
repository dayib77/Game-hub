import type { GameQuery } from "@/App";

import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[] | undefined;
  metacritic: number | null;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  // const { genre, platform, sortOrder, searchText } = gameQuery;

  // const params = new URLSearchParams();

  // if (genre?.id) params.append("genres", String(genre.id));
  // if (platform?.id) params.append("parent_platforms", String(platform.id));
  // if (sortOrder) params.append("ordering", sortOrder);
  // if (searchText) params.append("search", searchText);

  // const query = params.toString(); // example: "genres=4&parent_platforms=1"
  // const endpoint = query ? `/games?${query}` : "/games";

  // return useData<Game>(endpoint);

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      const requestParams: Record<string, string | number> = {};

      if (gameQuery.genre?.id) {
        requestParams["genres"] = gameQuery.genre.id;
      }
      if (gameQuery.platform?.id) {
        requestParams["parent_platforms"] = gameQuery.platform.id;
      }
      if (gameQuery.sortOrder) {
        requestParams["ordering"] = gameQuery.sortOrder;
      }
      if (gameQuery.searchText) {
        requestParams["search"] = gameQuery.searchText;
      }

      return apiClient.get(requestParams);
    },
  });
};

export default useGames;
