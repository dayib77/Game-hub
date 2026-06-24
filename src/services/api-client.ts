const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY;

// services/api-client.ts
export const apiClient = {
  get: async <T>(
    endpoint: string,
    params?: Record<string, string | number>,
    signal?: AbortSignal,
  ): Promise<T> => {
    const url = new URL(`${BASE_URL}${endpoint}`); // Create the URL with the base URL and endpoint - https://api.rawg.io/api/games

    url.searchParams.append("key", API_KEY); // Append the API key to the URL as a query parameter

    if (params) {
      Object.entries(params).forEach(
        ([key, value]) => url.searchParams.append(key, String(value)), // Append any additional query parameters to the URL
      );
    }

    const response = await fetch(url.toString(), { signal });

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    return response.json();
  },
};
