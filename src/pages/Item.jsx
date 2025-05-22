import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/itemDetailContainer";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products.service";


const Item = () => {
    const {id} = useParams ();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProductById(id).then((res) => setProduct(res.data))
        .catch((error) => console.error(error)).finally(() => setLoading(false))
    },[])
    return loading ? <>loading...</> : <ItemDetailContainer product={product} />
}

export default Item;