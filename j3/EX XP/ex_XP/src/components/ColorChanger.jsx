import React, { Component } from "react";

class ColorChanger extends Component {
  state = { favoriteColor: "red" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h3>My favorite color is {this.state.favoriteColor}</h3>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default ColorChanger;
