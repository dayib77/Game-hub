const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY || "";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// services/api-client.ts
class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // Generic GET method to fetch data from the API
  getAll = async (
    params?: Record<string, string | number>,
  ): Promise<fetchResponse<T>> => {
    const url = new URL(`${BASE_URL}${this.endpoint}`);

    url.searchParams.append("key", API_KEY);

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, String(value)),
      );
    }

    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    return response.json();
  };

  // Get detail of a Game
  get = async (id: number | string): Promise<T> => {
    const url = new URL(`${BASE_URL}${this.endpoint}/${id}`);
    url.searchParams.append("key", API_KEY);

    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    return response.json();
  };

  // Generic POST method to send data to the API
}

export default APIClient;
