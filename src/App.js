import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/RenderProps/Counter";
import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter>
          {(count, incrementCount) => {
            return (
              <ClickCounter count={count} incrementCount={incrementCount} />
            );
          }}
        </Counter>
        <Counter>
          {(count, incrementCount) => {
            return (
              <HoverCounter count={count} incrementCount={incrementCount} />
            );
          }}
        </Counter>
      </div>
    );
  }
}

export default App;
