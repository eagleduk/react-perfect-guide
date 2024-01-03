import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let resultModal = useRef();
  const [gameStart, setGameStart] = useState(false);
  const [failChallenge, setFailChallenge] = useState(null);

  function handleGameStartEvent() {
    timer.current = setTimeout(() => {
      setFailChallenge(true);
      resultModal.current.open();
    }, targetTime * 1000);
    setFailChallenge(false);
    setGameStart(true);
  }

  function handleGameStopEvent() {
    clearTimeout(timer.current);
    setGameStart(false);
  }
  return (
    <>
      <ResultModal ref={resultModal} targetTime={targetTime} result={"lose"} />
      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
}
