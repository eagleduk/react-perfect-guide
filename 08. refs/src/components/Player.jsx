import { useRef, useState } from "react";

export default function Player() {
  const inputRef = useRef();

  const [playerName, setPlayerName] = useState(null);

  function handleButtonClickEvent() {
    setPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleButtonClickEvent}>Set Name</button>
      </p>
    </section>
  );
}
