import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/Game/Game";

function App() {
  return (
    // Newer version
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" bg="gold" hideBelow="lg">
        Aside
      </GridItem>

      <GridItem area="main">
        <Game />
      </GridItem>
    </Grid>
  );
}

export default App;
