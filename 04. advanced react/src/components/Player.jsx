import { useState } from "react";

export default function Player({ name, symbol, isTurn, onUpdatePlayer }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeEvent(event) {
    setPlayerName(event.target.value);
  }

  function handleButtonToggle() {
    if(isEditing) onUpdatePlayer(symbol, playerName);
    setIsEditing(current => !current);
  }

  return (
    <li className={isTurn ? "active" : ""}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input value={playerName} onChange={handleChangeEvent} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={handleButtonToggle}>Edit</button>}
      {isEditing && <button onClick={handleButtonToggle}>Save</button>}
    </li>
  );
}
