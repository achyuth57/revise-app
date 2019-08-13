import React, { useContext } from "react";
import { MyContext } from "./CounterOne";

function CounterThree() {
  const contextType = useContext(MyContext);
  return (
    <div>
      Counter 3 - {contextType.CounterState}
      <button onClick={() => contextType.CounterMeth("increment")}>
        Increment
      </button>
      <button onClick={() => contextType.CounterMeth("decrement")}>
        Decrement
      </button>
      <button onClick={() => contextType.CounterMeth("reset")}>Reset</button>
    </div>
  );
}

export default CounterThree;
