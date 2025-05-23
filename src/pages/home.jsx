import ItemListContainer from "../components/ItemListContainer";
import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.service";


const Home = () => {
const [products, setProducts,] = useState ([]);

    useEffect ( () => {
        getAllProducts().then ((res) => {
        console.log("Productos recibidos:", res.data.products);
        setProducts (res.data.products);
        });
        },[]);



return <ItemListContainer products={products} />
};

export default Home; 
