import React, { Component } from "react";

class BuggyCounter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => {
      if (counter + 1 === 5) {
        throw new Error("I crashed!");
      }
      return { counter: counter + 1 };
    });
  };

  render() {
    return (
      <h3 onClick={this.handleClick} style={{ cursor: "pointer" }}>
        Counter: {this.state.counter} (Click me)
      </h3>
    );
  }
}

export default BuggyCounter;
