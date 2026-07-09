import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Heading logic to determine what to display based on the gameQuery props
  // Game
  // Genre Game
  // Genre Platform Game
  const heading =
    `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}  ${gameQuery.searchText || ""} Games`.trim();

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
