import classes from "./Counter.module.css";

import { counterActions } from "../store";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const handleIncrementButtonEvent = () => {
    dispatch(counterActions.increment());
  };
  const handleIncrementByAmountButtonEvent = () => {
    dispatch(counterActions.incrementByAmount(10));
  };
  const handleDecrementButtonEvent = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrementButtonEvent}>Increment</button>
        <button onClick={handleIncrementByAmountButtonEvent}>
          Increse By 10
        </button>
        <button onClick={handleDecrementButtonEvent}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   handleIncrementButtonEvent() {
//     this.props.increment();
//   }
//   handleDecrementButtonEvent() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrementButtonEvent.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.handleDecrementButtonEvent.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const storeMap = (store) => {
//   return { counter: store.counter };
// };
// const dispatchMap = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(storeMap, dispatchMap)(Counter);
