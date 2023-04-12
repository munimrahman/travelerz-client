import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://travelerz-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.users);
        setIsLoading(false);
      });
  }, []);
  return [products, isLoading];
};

export default useProducts;
