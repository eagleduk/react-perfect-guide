import { useState } from "react"

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    return (<li>
        <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input value={name} />}
          <span className="player-symbol">{symbol}</span>
        </span>
        {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
        {isEditing && <button onClick={() => setIsEditing(false)}>Save</button>}
      </li>)
}