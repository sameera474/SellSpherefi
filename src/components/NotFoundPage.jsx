import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="content">
      <h1>404 Not Found</h1>
      <p> The Page you are looking for doesn't exist</p>
      <button>
        <Link to={"/"}>Retun to Home</Link>
      </button>
    </div>
  );
};
