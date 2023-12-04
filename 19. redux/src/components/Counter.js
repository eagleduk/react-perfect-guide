import { useState } from "react";
import classes from "./Counter.module.css";

import store from "../store/index";

const Counter = () => {
  const [isIncrement, setIsIncrement] = useState(true);
  const { counter } = store.getState();
  const toggleCounterHandler = () => {
    if (isIncrement) store.dispatch({ type: "increment" });
    else store.dispatch({ type: "decrement" });

    setIsIncrement((prev) => !prev);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
