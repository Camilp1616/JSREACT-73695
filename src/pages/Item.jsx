import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { db } from "../services/config/firebase";
import { doc, getDoc} from "firebase/firestore"


const Item = () => {
    const {id} = useParams ();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productDoc = doc(db, "products", id);

    getDoc(productDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } 
      })
      .catch((e) => console.error("Error al obtener el producto:", e))
      .finally(() => setLoading(false));
  }, [id]);

    return loading ? <>loading...</> : <ItemDetailContainer product={product} />
};

export default Item;