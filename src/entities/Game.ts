import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  descript_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string | null;
  parent_platforms: { platform: Platform }[] | undefined;
  metacritic: number | null;
  rating_top: number;
}
