import React, { Component } from "react";
import { MyContext } from "./ParentComp";
class ChildComp2 extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {user => {
          return <h1>Hello User {user}</h1>;
        }}
      </MyContext.Consumer>
    );
  }
}

export default ChildComp2;
