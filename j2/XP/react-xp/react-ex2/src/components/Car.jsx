import React from "react";

function Car({ brand, model, color }) {
  return (
    <div className="car-card" style={{ borderColor: color }}>
      <h3>{brand}</h3>
      <p>Model: {model}</p>
      <p style={{ color }}>Color: {color}</p>
    </div>
  );
}

export default Car;
