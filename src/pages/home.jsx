import ItemListContainer from "../components/ItemListContainer";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/config/firebase";

    const Home = () => {
    const [products, setProducts,] = useState ([]);
    const [loading, setLoading,] = useState (true);
    const [error, setError,] = useState (false);

    useEffect(() => {

   const productsCollection = collection (db, "products")

   getDocs(productsCollection)
   .then( (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log("Productos traídos desde Firebase:", data);
    setProducts(data);
   })
    .catch(() => setError (true))
    .finally( () => setLoading(false));

}, []);

    if (loading) return <>loading...</>;
    if (error) return <>loading...</>;

return <ItemListContainer products={products} />
};

export default Home; 
