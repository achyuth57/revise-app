import React, { Component } from "react";
import ClassCounter from "./ClassCounter";

import HookCounter from "./HookCounter";
import HookCounter3 from "./HookCounter3";
import HookCounter4 from "./HookCounter4";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import HookCounterOne from "./useEffect/HookCounterOne";

export class Hook extends Component {
  render() {
    return (
      <>
        {/* <ClassCounter /> */}
        {/* <HookCounter />

        <HookCounter3 /> */}
        {/* <HookCounter4 /> */}
        <ClassCounterOne />
        <HookCounterOne />
      </>
    );
  }
}

export default Hook;
