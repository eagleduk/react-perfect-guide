import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getCurrentPlayer(turns) {
  return turns.length > 0 && turns[0].player === "X" ? "O" : "X";
}

function getWinner(board, players) {
  for (const rows of WINNING_COMBINATIONS) {
    const a = board[rows[0].row][rows[0].column];
    const b = board[rows[1].row][rows[1].column];
    const c = board[rows[2].row][rows[2].column];
    if (a && a === b && a === c) return players[a];
  }
  return null;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([]);

  const currentPlayer = getCurrentPlayer(gameTurn);
  function addTurn(rowIndex, colIndex) {
    setGameTurn((current) => [
      { game: { rowIndex, colIndex }, player: getCurrentPlayer(current) },
      ...current,
    ]);
  }

  const board = [...INITIAL_BOARD.map((row) => [...row])];

  for (const { game: { rowIndex, colIndex }, player } of gameTurn) {
    board[rowIndex][colIndex] = player;
  }

  const winner = getWinner(board, players);

  const isDraw = gameTurn.length === 9 && !winner;

  function handleRestartEvent() {
    setGameTurn([]);
  }

  function handleUpdatePlayer(symbol, name) {
    setPlayers((currentPlayers) => ({ ...currentPlayers, [symbol]: name }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {Object.entries(players).map(([key, value]) => {
            return (
              <Player
              key={key}
                name={value}
                symbol={key}
                isTurn={currentPlayer === key}
                onUpdatePlayer={handleUpdatePlayer}
              />
            );
          })}
        </ol>
        {(winner || isDraw) && (
          <GameOver
            winner={winner}
            isDraw={isDraw}
            onRestart={handleRestartEvent}
          />
        )}
        <GameBoard addTurn={addTurn} board={board} />
      </div>
      <Logs turns={gameTurn} />
    </main>
  );
}

export default App;
