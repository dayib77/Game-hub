import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, loading, error } = useGenre();

  if (loading) return <div>Loading genres...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!genres.length) return <div>No genres available.</div>;

  return (
    <List.Root listStyleType="none">
      {genres.map(genre => (
        <List.Item
          key={genre.id}
          padding={2}
          // borderBottomWidth="1px"
          // borderColor="gray.200"
        >
          <HStack gap={4} alignItems="center">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="50px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
