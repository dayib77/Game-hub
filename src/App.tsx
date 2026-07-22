import { useState } from "react";

import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";
import GenreList from "./components/Genre/GenreList";
import PlatformSelector from "./components/Platform/PlatformSelector";

import SortSelector from "./components/Sort/SortSelector";
import GameHeading from "./components/Heading/GameHeading";

// 'undefined' : absence of a value
// 'null' : intentional absence of a value
export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          handleSearch={text =>
            setGameQuery({ ...gameQuery, searchText: text })
          }
        />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" paddingX="5">
        <GenreList
          onSelectGenre={genre =>
            setGameQuery({ ...gameQuery, genreID: genre?.id })
          }
          selectedGenreID={gameQuery.genreID}
        />
      </GridItem>

      <GridItem area="main">
        <Box paddingX={5} marginBottom={5}>
          <GameHeading gameQuery={gameQuery} />
          <HStack gap={5}>
            <PlatformSelector
              onSelectPlatform={platform =>
                setGameQuery({ ...gameQuery, platformID: platform?.id })
              }
              selectedPlatform={gameQuery.platformID}
            />
            <SortSelector
              onSelectSortOrder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>

        <Game gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
