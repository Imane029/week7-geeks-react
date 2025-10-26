import React from "react";
import "./App.css";
import Car from "./components/Car";

function App() {
  return (
    <div className="container">
      <h1>Garage</h1>
      <Car brand="Ford" model="Mustang" color="red" />
      <Car brand="BMW" model="X5" color="blue" />
      <Car brand="Audi" model="A4" color="green" />
    </div>
  );
}

export default App;
