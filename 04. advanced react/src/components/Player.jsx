import { useState } from "react";

export default function Player({ name, symbol, isTurn }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeEvent(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isTurn ? "active" : ""}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input value={playerName} onChange={handleChangeEvent} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
      {isEditing && <button onClick={() => setIsEditing(false)}>Save</button>}
    </li>
  );
}
