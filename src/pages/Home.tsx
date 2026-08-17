import Game from "@/components/Game/Game";
import GenreList from "@/components/Genre/GenreList";
import GameHeading from "@/components/Heading/GameHeading";
import PlatformSelector from "@/components/Platform/PlatformSelector";
import SortSelector from "@/components/Sort/SortSelector";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

const Home = () => {
  // throw new Error("Something went wrong !");
  return (
    <Grid
      // The Blueprint for the layout of the application
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      // The Widths of the columns in the grid
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      alignItems="start"
    >
      {/* <GridItem area="nav">
        <NavBar />
      </GridItem> */}

      <GridItem area="aside" hideBelow="lg" paddingX="5">
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Box paddingX={5} marginBottom={5}>
          <GameHeading />
          <HStack gap={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <Game />
      </GridItem>
    </Grid>
  );
};

export default Home;
