import React from "react";

function PostData() {
  
  const webhookUrl = "https://webhook.site/576e3ac2-0147-476b-aa9e-5fb4d3da00fd";

  const handlePost = async () => {
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.text(); 
      console.log("Réponse du webhook :", result);
      alert("Données envoyées ! Vérifie la console et le site du webhook.");
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Erreur lors de l'envoi, regarde la console.");
    }
  };

  return (
    <div>
      <h2>Exercice 4 : Envoyer un JSON</h2>
      <button onClick={handlePost}>Envoyer les données au webhook</button>
    </div>
  );
}

export default PostData;
