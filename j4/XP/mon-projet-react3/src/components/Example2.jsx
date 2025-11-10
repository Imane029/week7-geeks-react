import React from "react";
import data from "../data.json";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Compétences :</h2>
        <ul>
          {data.Skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
