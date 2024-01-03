import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  const [gameStart, setGameStart] = useState(false);
  const [failChallenge, setFailChallenge] = useState(null);

  function handleGameStartEvent() {
    timer.current = setTimeout(() => {
      setFailChallenge(true);
    }, targetTime * 1000);
    setGameStart(true);
  }

  function handleGameStopEvent() {
    clearTimeout(timer.current);
    setGameStart(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {failChallenge && <p>Fail Challenge...</p>}
      <p className="challenge-time">{targetTime} second</p>
      <p>
        <button
          onClick={gameStart ? handleGameStopEvent : handleGameStartEvent}
        >
          {gameStart ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p>{gameStart ? "Timer is running..." : "Timer inactive"}</p>
    </section>
  );
}
