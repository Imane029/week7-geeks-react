import React, { Component } from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import ColorChanger from "./components/ColorChanger";
import Child from "./components/Child";

class App extends Component {
  state = { showChild: true };

  deleteChild = () => {
    this.setState({ showChild: false });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Exercise 1: Error Boundary Simulation</h1>

        <h2>Simulation 1: Both counters in one ErrorBoundary</h2>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <h2>Simulation 2: Each counter in its own ErrorBoundary</h2>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <h2>Simulation 3: No ErrorBoundary</h2>
        <BuggyCounter />

        <hr />

        <h1>Exercise 2: Lifecycle (Updating Phase)</h1>
        <ColorChanger />

        <hr />

        <h1>Exercise 3: Lifecycle (Unmounting Phase)</h1>
        {this.state.showChild && <Child />}
        <button onClick={this.deleteChild}>Delete Child</button>
      </div>
    );
  }
}

export default App;
