import useGames from "../../hooks/useGames";

const Game = () => {
  const { game, loading, error } = useGames();

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
