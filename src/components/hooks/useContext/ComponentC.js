import React from "react";
import ComponentD from "./ComponentD";
export const MyContext = React.createContext();
export const YourContext = React.createContext();
function ComponentC() {
  return (
    <MyContext.Provider value="Achyuth">
      <YourContext.Provider value="Raji">
        <ComponentD />
      </YourContext.Provider>
    </MyContext.Provider>
  );
}

export default ComponentC;
