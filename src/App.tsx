import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";
import GenreList from "./components/Genre/GenreList";

function App() {
  return (
    // Newer version
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
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
        <Game />
      </GridItem>
    </Grid>
  );
}

export default App;
