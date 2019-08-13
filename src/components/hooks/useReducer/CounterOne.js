import React, { useReducer } from "react";
import CounterThree from "./CounterThree";
export const MyContext = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      Counter 1 - {count}
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button> */}
      <MyContext.Provider
        value={{ CounterState: count, CounterMeth: dispatch }}
      >
        <CounterThree />
      </MyContext.Provider>
    </div>
  );
}

export default CounterOne;
