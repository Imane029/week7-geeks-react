import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";


function HomeScreen() {
  return <h1>Bienvenue sur la page d'accueil 🏠</h1>;
}

function ProfileScreen() {
  return <h1>Page Profil 👤</h1>;
}

function ShopScreen() {
  
  throw new Error("Erreur dans le Shop !");
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
        <NavLink to="/" className="nav-link text-white mx-3">Home</NavLink>
        <NavLink to="/profile" className="nav-link text-white mx-3">Profile</NavLink>
        <NavLink to="/shop" className="nav-link text-white mx-3">Shop</NavLink>
      </nav>

      {/* Contenu des pages */}
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
