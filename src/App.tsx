import { useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";
import GenreList from "./components/Genre/GenreList";
import type { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GenreList onSelectGenre={genre => setSelectedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <Game selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
