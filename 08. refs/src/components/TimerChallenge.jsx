import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  let timer = useRef();
  let resultModal = useRef();

  const [resultTime, setResultTime] = useState(targetTime * 1000);
  const gameStart = resultTime > 0 && resultTime < targetTime * 1000;

  if (resultTime <= 0) {
    resultModal.current.open();
    clearInterval(timer.current);
  }

  function handleGameReset() {
    setResultTime(targetTime * 1000);
  }

  function handleGameStartEvent() {
    timer.current = setInterval(() => {
      setResultTime((prev) => prev - 10);
    }, 10);
  }

  function handleGameStopEvent() {
    resultModal.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={resultModal}
        targetTime={targetTime}
        resultTime={resultTime}
        onReset={handleGameReset}
      />
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
