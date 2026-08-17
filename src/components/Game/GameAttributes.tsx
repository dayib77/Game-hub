import type Game from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" column={2}>
      {/* Platform */}
      <DefinitionItem term="Platform">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      {/* Metacritic */}
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      {/* Genres */}
      <DefinitionItem term="Genres">
        {game.genres.map(g => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>

      {/* Publishers */}
      <DefinitionItem term="Genres">
        {game.publishers.map(p => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
