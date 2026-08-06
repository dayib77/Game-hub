import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

import Game from "./components/Game/Game";
import GenreList from "./components/Genre/GenreList";
import NavBar from "./components/NavBar/NavBar";
import PlatformSelector from "./components/Platform/PlatformSelector";

import GameHeading from "./components/Heading/GameHeading";
import SortSelector from "./components/Sort/SortSelector";

// 'undefined' : absence of a value
// 'null' : intentional absence of a value

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const { game, setSearchText, setGenreID, setPlatformID, setSortOrder } =
  //   useGameQueryStore();

  return (
    // Newer version
    <Grid
      // The Blueprint for the layout of the application
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // The Widths of the columns in the grid
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      alignItems="start"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
}

export default App;
