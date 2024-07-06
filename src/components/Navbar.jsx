import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search query:", e.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1>SellSphere</h1>
      <div className={`links ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <div className="user-info">
              <p>Welcome, {username}</p> {/* Display username */}
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};
