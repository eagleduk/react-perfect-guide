const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ addTurn, turns }) {
  const board = [...initialBoard.map((row) => [...row])];

  for (const { game: { rowIndex, colIndex }, player } of turns) {
    board[rowIndex][colIndex] = player;
  }

  return (
    <div id="game-board">
      <ol>
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => addTurn(rowIndex, colIndex)}
                    disabled={col !== null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
