import useGameDetail from "@/hooks/useGameDetail";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

import ExpandableText from "../ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshot from "./GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!); // slug! -> never undefined

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.descript_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
