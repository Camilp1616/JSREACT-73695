import { Box, Button, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({product}) => {

    const {addProductToCart, removeProductFromCart} = useContext(CartContext)

    return ( 
        <Box> 
        <Button onClick={ ()=> addProductToCart(product )}>Agregar Item</Button>
        <Input />
        <Button onClick={ ()=> removeProductFromCart (product)}>Quitar Item</Button>
        </Box>
    );
};

export default ItemCount;