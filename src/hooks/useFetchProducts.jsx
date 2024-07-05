import { useState, useEffect } from "react";

export const useFetchProducts = (selectedCategoryName) => {
  const [categorisedProducts, setcategorisedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    // console.log(selectedCategoryName);
    const fetchProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/category/${selectedCategoryName}`;
        const response = await fetch(url);
        if (response.ok) {
          const product = await response.json();
          setcategorisedProducts(product);
          setIsLoading(false);
          // console.log(product);
          // setSelectedProducts(product);
        } else {
          throw new Error("Can't fetch products");
        }
      } catch (error) {
        // console.log(error);
        setError("Cant fetch products");
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [selectedCategoryName]);

  return [categorisedProducts, isLoading, error];
};
