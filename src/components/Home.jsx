import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const categories = [
    { id: 1, name: "Men's Clothing" },
    { id: 2, name: "Women's Clothing" },
    { id: 3, name: "Jewelry" },
    { id: 4, name: "Electronics" },
    { id: 5, name: "Home & Kitchen" },
    { id: 6, name: "Books" },
    { id: 7, name: "Toys" },
    { id: 8, name: "Sports & Outdoors" },
    { id: 9, name: "Beauty & Personal Care" },
    { id: 10, name: "Health & Household" },
  ];

  const [selectedCategoryName, setSelectedCategoryName] =
    useState("electronics");
  const [categorisedProducts, isLoading, error] =
    useFetchProducts(selectedCategoryName);
  const navigate = useNavigate();

  const onSelectCategory = (clickedCategoryName) => {
    setSelectedCategoryName(clickedCategoryName);
  };

  return (
    <div className="home content">
      {error && <div className="error-message">{error}</div>}
      <div className="category-section">
        <CategoryList
          categories={categories}
          title="All Categories"
          onSelectCategory={onSelectCategory}
        />
      </div>
      <div className="products-section">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="products-container">
            {categorisedProducts.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="category">Category: {product.category}</p>
                <p className="price">Price: ${product.price.toFixed(2)}</p>
                <p className="rating">
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </p>
                <button onClick={() => navigate(`/products/${product.id}`)}>
                  See Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
