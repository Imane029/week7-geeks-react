import React, { useState } from "react";
import { FaPython, FaPhp, FaJava, FaJs } from "react-icons/fa";
import "../App.css";

function VotingApp() {
  const [languages, setLanguages] = useState([
    { name: "Python", votes: 0 },
    { name: "Php", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const addVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    newLanguages.sort((a, b) => b.votes - a.votes); 
    setLanguages(newLanguages);
  };

  const getIcon = (name) => {
    switch (name) {
      case "Python":
        return <FaPython color="#3776AB" size={50} />;
      case "Php":
        return <FaPhp color="#8892BF" size={50} />;
      case "JavaScript":
        return <FaJs color="#F7DF1E" size={50} />;
      case "Java":
        return <FaJava color="#E76F00" size={50} />;
      default:
        return null;
    }
  };

  
  const bestLanguage = languages[0]; 

  return (
    <div className="voting-container">
      <h2 className="title">Vote pour ton langage préféré</h2>

      <div className="languages">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <div className="icon">{getIcon(lang.name)}</div>
            <h2>{lang.name}</h2>
            <p>{lang.votes} votes</p>
            <button onClick={() => addVote(index)}>Vote</button>
          </div>
        ))}
      </div>

      
      <div className="best-score">
        <h3>
          🏆 Meilleur score : <span>{bestLanguage.name}</span> (
          {bestLanguage.votes} votes)
        </h3>
      </div>
    </div>
  );
}

export default VotingApp;
