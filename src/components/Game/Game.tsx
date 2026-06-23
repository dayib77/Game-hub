import { useEffect, useState } from "react";
import { apiClient } from "../../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const Game = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      setLoading(true);

      try {
        const data = await apiClient.get<GameResponse>("/games");
        setGame(data.results);
      } catch (error: unknown) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!game || game.length === 0) return <div>No game data available.</div>;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Game List ({game.length})
        </h1>
      </div>
      {/* <h1>Game List ({game.length})</h1> */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {game.map(g => (
          <li key={g.id}>
            <h3>{g.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
