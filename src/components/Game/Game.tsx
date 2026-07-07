import { SimpleGrid } from "@chakra-ui/react";
import useGames, { type Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/useGenre";

interface Props {
  selectedGenre?: Genre | null;
  selectedPlatform?: Platform | null;
}

const Game = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    loading,
    error,
  } = useGames(selectedGenre?.id || null, selectedPlatform?.id || null);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {/* Error message */}
      {error && <div>Error: {error}</div>}

      {/* No game data available */}
      {!loading && !error && games.length === 0 && (
        <div>No game data available.</div>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={4}
        padding={4}
        // alignItems="start"
      >
        {/* Loading skeletons */}
        {loading &&
          skeletons.map(s => (
            <GameCardContainer key={s}>
              <GameSkeleton />
            </GameCardContainer>
          ))}

        {/* Game cards */}
        {!loading &&
          !error &&
          games.map(g => (
            <GameCardContainer key={g.id}>
              <GameCard game={g} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Game;
