import type { GameQuery } from "@/App";

import APIClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
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
      if (pageParam) {
        requestParams["page"] = pageParam;
      }

      return apiClient.get(requestParams);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
