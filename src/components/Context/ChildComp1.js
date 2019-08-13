import React, { Component } from "react";

import ChildComp2 from "./ChildComp2";
class ChildComp1 extends Component {
  render() {
    return (
      <h1>
        <h1>This is from Context</h1>
        <ChildComp2 />
      </h1>
    );
  }
}

export default ChildComp1;
