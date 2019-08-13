import React, { Component } from "react";
import ClassCounter from "./ClassCounter";

import HookCounter from "./HookCounter";
import HookCounter3 from "./HookCounter3";
import HookCounter4 from "./HookCounter4";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import HookCounterOne from "./useEffect/HookCounterOne";
import ClassMouse from "./useEffect/ClassMouse";
import HookMouse from "./useEffect/HookMouse";
import MouseContainer from "./useEffect/MouseContainer";
import IntervalClassCounter from "./useEffect/IntervalClassCounter";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import DataFetching from "./useEffect/DataFetching";
import ComponentC from "./useContext/ComponentC";
import CounterOne from "./useReducer/CounterOne";
import CounterTwo from "./useReducer/CounterTwo";
import ReducerFetch2 from "./useReducer/ReducerFetch2";
import Parent from "./useCallback/Parent";
import Counter from "./useMemo/counter";
import FocusInput from "./useRefs/FocusInput";
import ClassTimer from "./useRefs/ClassTimer";
import RefTimer from "./useRefs/RefTimer";
import DocTitle1 from "./CustomHooks/DocTitle1";
import DocTitle2 from "./CustomHooks/DocTitle2";
import Counterone from "./CustomHooks/Counterone";
import Countertwo from "./CustomHooks/Countertwo";
import UserForm from "./CustomHooks/UserForm";

export class Hook extends Component {
  constructor(props) {
    super(props);
    // this.props.parentCall("Hello");
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <ClassCounter /> */}
        {/* <HookCounter />

        <HookCounter3 /> */}
        {/* <HookCounter4 /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <DataFetching /> */}
        {/* <ComponentC /> */}
        {/* <CounterOne /> */}
        {/* <CounterOne /> */}
        {/* <ReducerFetch2 /> */}
        {/* <Parent /> */}
        {/* <Counter /> */}
        {/* <FocusInput /> */}
        {/* <ClassTimer />
        <RefTimer /> */}
        {/* <DocTitle1 />
        <DocTitle2 /> */}
        {/* <Counterone />
        <Countertwo /> */}
        {/* <UserForm /> */}
      </>
    );
  }
}

export default Hook;
