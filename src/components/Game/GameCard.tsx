import type { Game } from "@/hooks/useGames";
import { Box, Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "../Emoji/Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body padding="4">
        <HStack justifyContent="space-between" color="gray.600">
          <PlatformIconsList
            platforms={(game.parent_platforms ?? []).map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Box marginTop="4">
          <Heading as="h3" size="md">
            {game.name}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Game ID: {game.id}
          </Text>
          <Emoji rating_top={game.rating_top} />
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
