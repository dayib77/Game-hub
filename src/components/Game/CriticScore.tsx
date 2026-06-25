import { Badge, Box } from "@chakra-ui/react";

interface Props {
  score: number | null;
}

const CriticScore = ({ score }: Props) => {
  const colorPalette =
    score && score > 85 ? "green" : score && score > 50 ? "yellow" : "red";

  return (
    // Use fit-content so the container doesn't stretch to the card's width
    <Box w="fit-content">
      <Badge
        colorPalette={colorPalette}
        variant="surface"
        // fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {score ?? "N/A"}
      </Badge>
    </Box>
  );
};

export default CriticScore;
