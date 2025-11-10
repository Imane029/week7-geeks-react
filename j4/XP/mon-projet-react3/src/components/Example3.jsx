import React from "react";
import data from "../data.json";

class Example3 extends React.Component {
  render() {
    return (
      <div>
        <h2>Expériences professionnelles :</h2>
        {data.Experiences.map((exp) => (
          <div key={exp.id}>
            <strong>{exp.company}</strong> — {exp.years}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
