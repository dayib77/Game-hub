import { useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";
import GenreList from "./components/Genre/GenreList";
import PlatformSelector from "./components/Platform/PlatformSelector";

import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" paddingX="5">
        <GenreList
          onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={platform =>
            setGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <Game gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
