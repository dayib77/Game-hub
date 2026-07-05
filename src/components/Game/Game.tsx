import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const Game = () => {
  const { game, loading, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {/* Error message */}
      {error && <div>Error: {error}</div>}

      {/* No game data available */}
      {!loading && !error && game.length === 0 && (
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
            <GameCardContainer>
              <GameSkeleton key={s} />
            </GameCardContainer>
          ))}

        {/* Game cards */}
        {!loading &&
          !error &&
          game.map(g => (
            <GameCardContainer>
              <GameCard key={g.id} game={g} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Game;
