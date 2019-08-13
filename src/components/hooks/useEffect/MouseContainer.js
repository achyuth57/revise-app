import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setterDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setterDisplay(!display)}>Toogle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
