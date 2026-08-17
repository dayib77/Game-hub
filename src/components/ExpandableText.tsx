import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "... ";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          fontWeight="bolder"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
