import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.descript_raw}</Text>
    </>
  );
};

export default GameDetailPage;
