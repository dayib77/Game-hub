import type { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  descript_raw: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[] | undefined;
  metacritic: number | null;
  rating_top: number;
}
