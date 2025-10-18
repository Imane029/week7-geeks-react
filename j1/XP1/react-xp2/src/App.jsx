import React from 'react';

function App() {
  const name = "Imane";
  const message = "Bienvenue dans le monde merveilleux de React 🎉";

  const style = {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
    color: "#333"
  };

  return (
    <div style={style}>
      <h1>🖥️ Bonjour {name} !</h1>
      <h2>{message}</h2>
      <p>✨ Ce composant affiche un message personnalisé à l’aide de variables JSX.</p>
    </div>
  );
}

export default App;
