import ms from "ms";

import genres from "@/components/Genre/genres";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres"); // endpoint

// const useGenre = () => useData<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: { count: genres.length, next: null, results: genres },
  });

export default useGenre;
