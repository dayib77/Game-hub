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

const useGames = (selectedGenreId?: number | null) => {
  const endpoint = selectedGenreId
    ? `/games?genres=${selectedGenreId}`
    : "/games";
  return useData<Game>(endpoint);
};

export default useGames;
