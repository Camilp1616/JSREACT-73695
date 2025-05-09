import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import {getAllProducts} from "../services/products.service"
import { useEffect, useState } from "react";
import { image } from "framer-motion/client";


const ItemCard = ({image,title,}) => {
    return (
        <Box Width={'300px'} borderRadius={'lg'} color={"white"}
        transition='transform 0.3s, box-shadow:0.3s'_hover={{transform: 'translateY(-5px) scale(1.1)', boxShadow: 'lg'}}> 

        <Image alt={'title'} src= {image} width={'100%'} objetfit={'contain'} />

        <Box padding={'4px'}>

        <Heading size={'md'} marginBottom={'2px'}>{title}</Heading>
        <Text no0fLines={'2'} heigth={'40px'} marginBottom={'4'} color='grey.400'> {description} </Text>
        <Text fontSize={'21px'}> {price} </Text>
            

        </Box>

        </Box>
    )
}

const ItemListContainer = () => {

const [products, setProducts,] = useState ([]);

    useEffect ( () => {
        getAllProducts().then ((res) => {
            setProducts (res.data.products);
        });
        },[])

    return (
    <Box width={'100%'} overflow={'hidden'}>  
        <SimpleGrid columns={{lg:6}} spacing={'4'}> 
        { products.map ( (product) => {
        return (
        <ItemCard 
        image={product.thumbnail} 
        title={product.title} 
        description={product.description} 
        price={product.price} >
        </ItemCard>
        );
    })}
    </SimpleGrid>
    </Box>

);
};

export default ItemListContainer;

