import {Box,chakra,Container,Stack,Text,Image,Flex,VStack,Button,Heading,SimpleGrid,
    StackDivider,useColorModeValue,VisuallyHidden,List,ListItem,} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import ItemCount from "./ItemCount";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = ({product}) => {
    console.log("Producto recibido:", product);
const { setCart } = useContext (CartContext)

    return (
    <Container maxW={'7xl'}>
    <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={product.thumbnail}
            fit={'cover'}
            align={'center'}
            w={'500px'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
            <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {product.title}
            </Heading>
            <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            {product.price}
            </Text>
        </Box>

        <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {product.description}
        </Text>
            </VStack>
        </Stack>
        <ItemCount product= {product} />

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
        </Stack>
        </Stack>
    </SimpleGrid>
    </Container>
    )
}

export default ItemDetailContainer;