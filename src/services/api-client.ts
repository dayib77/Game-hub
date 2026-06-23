const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY;

export const apiClient = {
  // A helper method to perform GET requests with the key automatically
  get: async <T>(
    endpoint: string,
    params?: Record<string, string | number>,
  ): Promise<T> => {
    const url = new URL(`${BASE_URL}${endpoint}`);

    // Add the key
    url.searchParams.append("key", API_KEY);

    // Add any additional parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const response = await fetch(url.toString()); // pattern of the url: https://api.rawg.io/api/dgames?key=<API_KEY>

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  },
};
