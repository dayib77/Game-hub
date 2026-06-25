import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameSkeleton = () => {
  return (
    <Card.Root maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body padding="4">
        <SkeletonText noOfLines={3} gap="2" />
      </Card.Body>
    </Card.Root>
  );
};

export default GameSkeleton;
