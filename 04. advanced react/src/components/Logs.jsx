export default function Logs({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li
          key={index}
          className={index === 0 ? "highlighted" : ""}
        >{`${turn.player} is Selected [${turn.game.rowIndex}, ${turn.game.colIndex}]`}</li>
      ))}
    </ol>
  );
}
