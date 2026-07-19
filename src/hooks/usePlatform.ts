import { useQuery } from "@tanstack/react-query";

import platform from "@/components/Platform/platform";
import APIClient from "@/services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
