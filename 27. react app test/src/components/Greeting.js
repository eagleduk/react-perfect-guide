import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [change, setChange] = useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      {!change && <Output>Nice to meet you</Output>}
      {change && <Output>Good Bye</Output>}

      <button onClick={() => setChange(true)}>Change</button>
    </div>
  );
}
