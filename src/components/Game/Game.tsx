import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

const Game = () => {
  const { game, loading, error } = useGames();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!game || game.length === 0) return <div>No game data available.</div>;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={4} padding={4}>
        {game.map(g => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Game;
