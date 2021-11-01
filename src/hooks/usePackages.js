import { useEffect, useState } from "react";

const usePackages = () => {
    const [packages, setPackages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://wicked-wizard-56509.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => {
                setPackages(data.packages)
                setIsLoading(false);
            })
    }, [])
    return [packages, isLoading];
}

export default usePackages;