import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Layout/Home";
import GameDetailPage from "./components/Game/GameDetailPage";
import NotFoundPage from "./Errors/NotFoundPage";
import { Box } from "@chakra-ui/react";

// 'undefined' : absence of a value
// 'null' : intentional absence of a value

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const { game, setSearchText, setGenreID, setPlatformID, setSortOrder } =
  //   useGameQueryStore();

  return (
    // Newer version
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games/:id" element={<GameDetailPage />} />

        <Route
          path="*"
          element={
            <Box padding={5}>
              <NotFoundPage />
            </Box>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
