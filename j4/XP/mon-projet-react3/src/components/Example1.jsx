import React from "react";
import data from "../data.json";

class Example1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Réseaux sociaux :</h2>
        <ul>
          {data.SocialMedias.map((sm, index) => (
            <li key={index}>{sm}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
