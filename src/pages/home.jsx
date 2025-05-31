import ItemListContainer from "../components/ItemListContainer";
import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.service";


    const Home = () => {
    const [products, setProducts,] = useState ([]);
    const [loading, setLoading,] = useState (true);
    const [error, setError,] = useState (false);
    useEffect(() => {
    getAllProducts()
    .then((res) => {
    setProducts(res.data.products);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false))
}, []);

    if (loading) return <>loading...</>;
    if (error) return <>loading...</>;

return <ItemListContainer products={products} />
};

export default Home; 
