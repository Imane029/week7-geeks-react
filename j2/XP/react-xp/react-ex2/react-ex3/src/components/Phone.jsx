import React, { useState } from "react";
import "../App.css";
import { FaMobileAlt } from "react-icons/fa"; 

function Phone() {
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [year] = useState(2020);
  const [color, setColor] = useState("black");

  const colors = ["black", "blue", "red", "green", "orange", "purple"];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="phone-card">
      <h2>
        <FaMobileAlt style={{ marginRight: "8px", color: "#007bff" }} />
        Phone Info
      </h2>
      <h3>Brand: {brand}</h3>
      <h3>Model: {model}</h3>
      <h3>Year: {year}</h3>
      <h3>
        Color: <span style={{ color: color, fontWeight: "bold" }}>{color}</span>
      </h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
