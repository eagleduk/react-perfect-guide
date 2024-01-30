import { useState } from "react";

export default function Greeting() {
  const [change, setChange] = useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      {<p>Nice to meet you</p>}
      {change && <p>Good Bye</p>}

      <button onClick={() => setChange(true)}>Change</button>
    </div>
  );
}
