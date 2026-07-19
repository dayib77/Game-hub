import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeleton from "./GameSkeleton";

import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const Game = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box padding={4}>
      {/* Error message */}
      {error && <div>Error: {error.message}</div>}

      {/* No game data available */}
      {!isLoading && !error && data?.pages.length === 0 && (
        <div>No game data available.</div>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={4}

        // alignItems="start"
      >
        {/* Loading skeletons */}
        {isLoading &&
          skeletons.map(s => (
            <GameCardContainer key={s}>
              <GameSkeleton />
            </GameCardContainer>
          ))}

        {/* Game cards */}
        {!isLoading &&
          !error &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map(game => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default Game;
