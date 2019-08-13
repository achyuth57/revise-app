import React from "react";
import { MyContext, YourContext } from "./ComponentC";
function ComponentE() {
  return (
    <MyContext.Consumer>
      {name => {
        return (
          <YourContext.Consumer>
            {uname => {
              return (
                <div>
                  Hello {uname} from {name}
                </div>
              );
            }}
          </YourContext.Consumer>
        );
      }}
    </MyContext.Consumer>
  );
}

export default ComponentE;
