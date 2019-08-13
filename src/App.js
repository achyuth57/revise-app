import React from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/RenderProps/Counter";
import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import Hook from "./components/hooks/hook";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      childData: ""
    };
  }

  childUpdate = data => {
    this.setState({
      childData: data
    });
  };
  render() {
    return (
      <div className="App">
        <Header />

        {/* <Counter>
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
        </Counter> */}

        <Hook parentCall={this.childUpdate} />
        {this.state.childData}
      </div>
    );
  }
}

export default App;
