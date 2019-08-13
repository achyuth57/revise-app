import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { MyContext, YourContext } from "./ComponentC";

function ComponentD() {
  const me = useContext(MyContext);
  const you = useContext(YourContext);
  return (
    <div>
      <h1>
        Its {me} and {you}
      </h1>
    </div>
  );
}

export default ComponentD;
