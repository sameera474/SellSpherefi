import React from "react";
import { useState, useEffect } from "react";
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

  // const products = [
  //   { id: 1, name: "Iphone 15 Pro Max", categoryId: 1 },
  //   { id: 2, name: "Lenovo Laptop", categoryId: 1 },
  //   { id: 3, name: "White Gold", categoryId: 2 },
  //   { id: 4, name: "Bracelet", categoryId: 2 },
  //   { id: 5, name: "Nike", categoryId: 3 },
  //   { id: 6, name: "Addidas", categoryId: 3 },
  //   { id: 7, name: "Mango", categoryId: 4 },
  //   { id: 8, name: "Zara", categoryId: 4 },
  // ];
  // const featuredCategories = [
  //   { id: 1, name: "Shoes" },
  //   { id: 2, name: "Sport" },
  //   { id: 3, name: "Child" },
  //   { id: 4, name: "Caps" },
  // ];

  const [selectedCategoryName, setSelectedCategoryName] =
    useState("electronics");

  const [categorisedProducts, isLoading, error] =
    useFetchProducts(selectedCategoryName);

  const onSelectCategory = (clickedCategoryName) => {
    // console.log(products);
    // const filteredProducts = products.filter(
    //   (product) => product.categoryId === clickedCategoryId
    // );
    // console.log(filteredProducts);
    // console.log(clickedCategoryName);
    // setSelectedProducts(filteredProducts);

    setSelectedCategoryName(clickedCategoryName);
    //
  };

  const navigate = useNavigate();

  // console.log(selectedProducts);

  return (
    <div className="home content">
      {error && <div> {error} </div>}
      <div>
        <CategoryList
          categories={categories} // Replace with your actual categories array
          title="All Categories"
          onSelectCategory={onSelectCategory}
        />
        <div className="products-container">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            categorisedProducts.map((product) => (
              <div key={product.id} className="product-box">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p className="price">Price: ${product.price.toFixed(2)}</p>
                <p>
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </p>
                <button onClick={() => navigate(`/products/${product.id}`)}>
                  See Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
