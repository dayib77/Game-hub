const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY;

// services/api-client.ts
export const apiClient = {
  get: async <T>(
    endpoint: string,
    params?: Record<string, string | number>,
    signal?: AbortSignal,
  ): Promise<T> => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append("key", API_KEY);

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, String(value)),
      );
    }

    // Pass the signal here!
    const response = await fetch(url.toString(), { signal });

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
};
