import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../ExpandableText";
import GameAttributes from "./GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!); // slug! -> never undefined

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.descript_raw}</ExpandableText>
      <GameAttributes />
    </>
  );
};

export default GameDetailPage;
