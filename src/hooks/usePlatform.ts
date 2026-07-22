import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import platform from "@/components/Platform/platform";
import APIClient from "@/services/api-client";

// Domain entity
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// useData<Platform>("/platforms/lists/parents");
// ({ data: platform, isLoading: false, error: null });

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get(),
    staleTime: ms("24h"),
    initialData: { count: platform.length, next: null, results: platform }, // cached data — no loading spinner, no skeleton, no empty state
  });

export default usePlatform;
