import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import Player from "./components/Player";

function getCurrentPlayer(turns) {
  return turns.length > 0 && turns[0].player === "X" ? "O" : "X";
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  let currentPlayer = getCurrentPlayer(gameTurn);
  function addTurn(rowIndex, colIndex) {
    setGameTurn((current) => [
      { game: { rowIndex, colIndex }, player: getCurrentPlayer(current) },
      ...current,
    ]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isTurn={currentPlayer === "X"} />
          <Player name="Player 2" symbol="O" isTurn={currentPlayer === "O"} />
        </ol>
        <GameBoard addTurn={addTurn} turns={gameTurn} />
      </div>
      <Logs turns={gameTurn} />
    </main>
  );
}

export default App;
