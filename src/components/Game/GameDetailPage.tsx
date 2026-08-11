import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.descript_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
