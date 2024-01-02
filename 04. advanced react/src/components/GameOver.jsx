export default function GameOver({onRestart, isDraw, winner}) {
    return <div id="game-over">
        <h2>Game Over</h2>
        {(!winner && isDraw) && <p>Draw a Game!</p>}
        {winner && <p>{winner} is Winner!</p>}
        <button onClick={onRestart}>ReStart</button>
    </div>
}