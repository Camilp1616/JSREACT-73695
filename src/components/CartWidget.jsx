import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {

    const {getTotalCount, cart} = useContext(CartContext);
    const totalCount = getTotalCount();

    const navigate = useNavigate();
      useEffect(() => {
        console.log("Carrito actualizado en CartWidget:", cart);
    }, [cart]);

return ( <Flex alignItems="center" onClick={() => navigate('/cart')}>
         <CiShoppingCart size={30} /> {totalCount}
    </Flex>
);
};

export default CartWidget;