import { useEffect, useState } from "react";

const usePackages = () => {
  const [packages, setPackages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://travelerz-server.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.packages);
        setIsLoading(false);
      });
  }, []);
  return [packages, isLoading];
};

export default usePackages;
