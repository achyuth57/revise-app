import React, { Component } from "react";
import ChildComp2 from "./ChildComp1";
const MyContext = React.createContext();
class ParentComp extends Component {
  render() {
    return (
      <div>
        <MyContext.Provider value="Achyuth">
          <ChildComp2 />
        </MyContext.Provider>
      </div>
    );
  }
}
export { MyContext };
export default ParentComp;
