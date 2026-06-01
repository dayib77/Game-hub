import { Box, Button, Heading, HStack } from "@chakra-ui/react";

function App() {
  return (
    <Box p="10" textAlign="center">
      <Heading mb="6">Chakra UI is successfully installed! 🚀</Heading>
      <HStack justify="center" gap="4">
        <Button colorPalette="blue" variant="solid">
          Click Me
        </Button>
        <Button colorPalette="teal" variant="outline">
          Secondary Action
        </Button>
      </HStack>
    </Box>
  );
}

export default App;
