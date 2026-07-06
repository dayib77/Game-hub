import useGenre, { type Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, loading, error } = useGenre();

  if (loading)
    return (
      <Spinner
        size="xl"
        borderWidth="4px" // Replaces 'thickness'
        borderStartColor="gray.200" // Replaces 'emptyColor'
        color="blue.500"
        // For 'speed', consider using a custom animation style if needed
      />
    );
  if (error) return <div>Error: {error}</div>;
  if (!genres.length) return <div>No genres available.</div>;

  return (
    <List.Root listStyleType="none">
      {genres.map(genre => (
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
              fontSize="md"
              variant="ghost"
              colorScheme="blue"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
