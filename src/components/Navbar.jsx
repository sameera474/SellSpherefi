import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ecom</h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link
          to={"/signup"}
          style={{ color: "white", backgroundColor: "#f1356d" }}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
