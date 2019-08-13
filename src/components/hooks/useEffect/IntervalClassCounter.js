import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>Counter : {this.state.counter}</div>;
  }
}

export default IntervalClassCounter;
