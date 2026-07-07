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

const useGames = (
  selectedGenreId?: number | null,
  selectedPlatformId?: number | null,
) => {
  const params = new URLSearchParams();
  if (selectedGenreId) params.append("genres", String(selectedGenreId));
  if (selectedPlatformId)
    params.append("parent_platforms", String(selectedPlatformId));

  const query = params.toString(); // example: "genres=4&parent_platforms=1"
  const endpoint = query ? `/games?${query}` : "/games";

  return useData<Game>(endpoint);
};

export default useGames;
