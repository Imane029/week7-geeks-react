import React, { Component } from "react";
import "./Exercise.css";

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "#007BFF",
      padding: "15px",
      fontFamily: "Arial",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    };

    return (
      <div className="exercise-container">
        <h1 style={style_header}>HELLO REACT </h1>

        <p className="para">
          THIS IS A FORM
        </p>

        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Visit React Website
        </a>

        <form className="form">
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <button type="submit">Submit</button>
        </form>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="image"
        />

        <ul className="list">
          <li>Learn React</li>
          <li>Build Components</li>
          <li>Enjoy Coding</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
