import { create } from "zustand";

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStore {
  game: GameQuery;
  setGenreID: (genreID?: number) => void;
  setPlatformID: (platformID?: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  game: {} as GameQuery,
  setSearchText: searchText =>
    set(state => ({ game: { ...state.game, searchText } })),
  setGenreID: genreID => set(state => ({ game: { ...state.game, genreID } })),
  setPlatformID: platformID =>
    set(state => ({ game: { ...state.game, platformID } })),
  setSortOrder: sortOrder =>
    set(state => ({ game: { ...state.game, sortOrder } })),
}));

export default useGameQueryStore;
