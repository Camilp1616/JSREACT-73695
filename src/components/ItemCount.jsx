import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";

const ItemCount = () => {

    const {addProductToCart, removeProductFromCart} = useContext(cartContext)

    return ( 
        <Box> 
        <Button onClick={ ()=> addProductToCart(product )}>Agregar Item</Button>
        <Input />
        <Button onClick={ ()=> removeProductFromCart (product)}>Quitar Item</Button>
        </Box>
    );
};

export default ItemCount;