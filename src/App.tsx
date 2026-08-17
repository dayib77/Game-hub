import { Route, Routes } from "react-router";
import GameDetailPage from "./components/Game/GameDetailPage";
import NotFoundPage from "./Errors/NotFoundPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

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
        <Route path="games/:slug" element={<GameDetailPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
