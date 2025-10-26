import "./App.css";
import Car from "./components/Car";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="container">
      <h1>Exercise 1: Car</h1>
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;
