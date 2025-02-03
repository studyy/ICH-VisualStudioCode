import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import User from "./pages/User";
import UserProfile from "./pages/UserProfile";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    setIsAuthenticated(true)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <User /> </ProtectedRoute>} />
        <Route path="/users/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <UserProfile /> </ProtectedRoute>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
