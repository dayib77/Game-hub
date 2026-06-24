import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body padding="4">
        <Heading as="h3" size="md">
          {game.name}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Game ID: {game.id}
        </Text>

        <Text fontSize="sm" color="gray.500">
          <PlatformIconsList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
