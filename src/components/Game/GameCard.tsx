import type { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body padding="4">
        <Heading as="h3" size="md">
          {game.name}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Game ID: {game.id}
        </Text>

        <HStack justifyContent="space-between" marginTop="4" color="gray.600">
          <PlatformIconsList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
