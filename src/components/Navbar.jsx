import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <h1>Ecom</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        {isAuthenticated ? (
          <>
            <p>Welcome, User</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link
              to={"/signup"}
              style={{
                color: "white",
                backgroundColor: "#f1356d",
              }}
            >
              Sign Up
            </Link>

            <Link
              to={"/login"}
              style={{
                color: "white",
                backgroundColor: "#f1356d",
              }}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
