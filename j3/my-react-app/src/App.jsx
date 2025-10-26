import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
  });

 
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        params.append(key, formData[key]);
      }
    });

    const url = `http://localhost:3000/?${params.toString()}`;
    alert(`Form data will be sent to:\n${url}`);
    console.log(url);
  };

  return (
    <div className="App">
      <h1>React Form Container</h1>
      <FormComponent
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <hr />
      <h2>Form Data Preview:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default App;
