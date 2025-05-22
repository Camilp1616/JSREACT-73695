import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
import {getAllProducts} from "../services/products.service"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ id, image,title,description, price, onClick}) => {

    const navigate = useNavigate()
    return (
        <Box width={'300px'} borderWidth={'1px'} borderRadius={'lg'} color={"withe"}
        transition='transform 0.3s, box-shadow:0.3s'_hover={{transform: 'translateY(-5px)', boxShadow: 'lg'}}
        onClick={() => navigate(`/item/${id}`)}
        > 

        <Image alt={title} src= {image} height={'200px'} width={'100%'} objectFit={'contain'} />

        <Box padding={'4px'}>

        <Heading size={'md'} marginBottom={'2px'}>{title}</Heading>
        <Text noOfLines={2} marginBottom={'4'} color='black' style={{ overflow: 'hidden' }}>
    {description}
    </Text>
        

        </Box>

        </Box>
    )
};

const ItemListContainer = () => {
console.log("Componente ItemListContainer montado")

const [products, setProducts,] = useState ([]);

    useEffect ( () => {
        getAllProducts().then ((res) => {
        console.log("Productos recibidos:", res.data.products);
        setProducts (res.data.products);
        });
        },[])
    const navigate = useNavigate()

    return (
    <Box width={'100%'} overflowX={'hidden'} p={4} bg color="white">  
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacingX='10px' spacingY='20px' width={"100%"}>
        {products.map ((product) => {
        return (
        <ItemCard 
        key={product.id}
        id= {product.id}
        image={product.thumbnail} 
        title={product.title} 
        description={product.description} 
        price={product.price} 
        >
        
        </ItemCard>
        );
    })}
    </SimpleGrid>
    </Box>

);
};

export default ItemListContainer;

