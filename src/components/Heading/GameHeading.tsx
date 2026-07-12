import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Heading logic to determine what to display based on the gameQuery props
  // Game
  // Genre Game
  // Platform Genre Game
  const { genre, platform } = gameQuery;
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`.trim();

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
