import React, { useState, useEffect } from "react";
import "../App.css";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");


  useEffect(() => {
    alert("useEffect reached");
  }, []); 


  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div className="color-card">
      <h2>
        My favorite color is:{" "}
        <span style={{ color: favoriteColor, fontWeight: "bold" }}>
          {favoriteColor}
        </span>
      </h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;
