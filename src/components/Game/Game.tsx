import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";

const Game = () => {
  const { game, loading, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <div>Error: {error}</div>}
      {!loading && !error && game.length === 0 && (
        <div>No game data available.</div>
      )}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={4}
        padding={4}
        // alignItems="start"
      >
        {loading && skeletons.map(s => <GameSkeleton key={s} />)}
        {!loading && !error && game.map(g => <GameCard key={g.id} game={g} />)}
      </SimpleGrid>
    </>
  );
};

export default Game;
