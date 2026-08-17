import useGameTrailer from "@/hooks/useGameTrailer";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const trailer = data?.results[0];

  return trailer ? (
    <video src={trailer.data[480]} poster={trailer.preview} />
  ) : null;
};

export default GameTrailer;
