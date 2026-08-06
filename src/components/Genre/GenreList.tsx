import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import useGameQueryStore from "../Game/store";

// Describes component's input

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenre();
  const selectedGenreID = useGameQueryStore(s => s.game.genreID);
  const setGenreID = useGameQueryStore(s => s.setGenreID);

  if (isLoading)
    return (
      <Spinner
        size="xl"
        borderWidth="4px" // Replaces 'thickness'
        borderStartColor="gray.200" // Replaces 'emptyColor'
        color="blue.500"
        // For 'speed', consider using a custom animation style if needed
      />
    );

  if (error) return <div>Error: {error.message}</div>;

  if (!genres?.results.length) return <div>No genres available.</div>;

  return (
    <>
      <Heading as="h3" fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>

      <List.Root listStyleType="none">
        {genres?.results.map(genre => (
          <List.Item
            key={genre.id}
            padding={2}
            borderBottomWidth="1px"
            borderColor="gray.200"
          >
            <HStack gap={4} alignItems="center">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="32px"
                objectFit="cover"
                borderRadius="md"
              />
              <Button
                fontWeight={selectedGenreID === genre.id ? "bold" : "normal"}
                fontSize="md"
                variant="ghost"
                color={selectedGenreID === genre.id ? "bold" : "gray.500"}
                // colorScheme="blue"
                // whiteSpace="normal"
                onClick={() => setGenreID(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
