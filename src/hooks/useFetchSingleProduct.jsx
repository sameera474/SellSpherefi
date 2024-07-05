import { useState, useEffect } from "react";

export const useFetchSingleProduct = (productId) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    // console.log(selectedCategoryName);
    const fetchProduct = async () => {
      try {
        const url = `https://fakestoreapi.com/products/${productId}`;
        const response = await fetch(url);
        if (response.ok) {
          const product = await response.json();
          setProduct(product);
          setIsLoading(false);
          // console.log(product);
          // setSelectedProducts(product);
        } else {
          setIsLoading(false);
          throw new Error(`Can't fetch product with id {id}`);
        }
      } catch (error) {
        // console.log(error);
        setError(`Cant fetch product`);
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return [product, isLoading, error];
};
