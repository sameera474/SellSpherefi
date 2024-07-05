import { useState, useEffect } from "react";

export const useFetchProducts = (selectedCategoryName) => {
  const [categorisedProducts, setCategorisedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token");
          setIsLoading(false);
          return;
        }
        const url = `http://localhost:3000/api/products/category/${encodeURIComponent(
          selectedCategoryName
        )}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const product = await response.json();
          setCategorisedProducts(product);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          throw new Error("Can't fetch the products");
        }
      } catch (error) {
        setError("Can't fetch the products");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [selectedCategoryName]);

  return [categorisedProducts, isLoading, error];
};
