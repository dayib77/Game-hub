import useGenreLookUp from "@/hooks/lookUpHooks/useGenreLookUp";
import usePlatformLookUp from "@/hooks/lookUpHooks/usePlatformLookUp";

import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../Game/store";

const GameHeading = () => {
  const genreID = useGameQueryStore(s => s.game.genreID);
  const platformID = useGameQueryStore(s => s.game.platformID);

  const genre = useGenreLookUp(genreID);
  const platform = usePlatformLookUp(platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`.trim();

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
