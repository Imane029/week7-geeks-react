import { useState } from "react";
import Garage from "./Garage";

function Car({ carInfo }) {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>
        This car is a {color} {carInfo.model}
      </h2>
      <Garage size="small" />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Car;
