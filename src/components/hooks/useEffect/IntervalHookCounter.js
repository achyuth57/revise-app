import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(preCounter => preCounter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>Counter: {counter}</div>;
}

export default IntervalHookCounter;
