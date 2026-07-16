import genres from "@/components/Genre/genres";
import { apiClient, type fetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");

const useGenre = () =>
  useQuery<fetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres"),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
