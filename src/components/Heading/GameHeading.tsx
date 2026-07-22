import type { GameQuery } from "@/App";
import useGenreLookUp from "@/hooks/lookUpHooks/useGenreLookUp";
import usePlatformLookUp from "@/hooks/lookUpHooks/usePlatformLookUp";

import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreLookUp(gameQuery.genreID);
  const platform = usePlatformLookUp(gameQuery.platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`.trim();

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
