import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeleton from "./GameSkeleton";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Game = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    // isFetchingNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {/* Error message */}
      {error && <div>Error: {error.message}</div>}

      {/* No game data available */}
      {!isLoading && !error && data?.pages.length === 0 && (
        <div>No game data available.</div>
      )}

      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner justifyItems="center" />}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={4}
          padding={4}
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
      </InfiniteScroll>

      {/* Infinite queries button */}
      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default Game;
