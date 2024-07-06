import React from "react";
import { useEffect, useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState([]);

  const getAPI = async () => {
    const response = await fetch(
      `http://localhost:3000/api/products/category/${encodeURIComponent(
        searchTerm
      )}`
    );
    const data = await response.json();
    setText(data.Search);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <input
        placeholder="searching"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
