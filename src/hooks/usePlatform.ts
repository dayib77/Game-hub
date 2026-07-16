import { apiClient, type fetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

import platform from "@/components/Platform/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// useData<Platform>("/platforms/lists/parents");
// ({ data: platform, isLoading: false, error: null });
const usePlatform = () =>
  useQuery<fetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
