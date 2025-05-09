//import './App.css'
import { Box, ChakraProvider, Flex,Button,} from '@chakra-ui/react';
import NavBar from './src/components/NavBar.jsx'
import ItemListContainer from './src/components/ItemListContainer';
import MainLayout from './src/layouts/MainLayout';
import { createNewProduct } from './services/products.service.js';

const App = () => {

const addNewProduct =() => {
  const data = {
    title: "producto Boheme",
    description:"Producto creado en clase",
    price: "100",
  }

createNewProduct(data).then((res) => {
  console.log (res);
});
  

};

return (
  <ChakraProvider>
    <MainLayout>
  <Button onClick ={addNewProduct}>Crear Producto </Button>
  <ItemListContainer greeting="¡Que bueno verte!" />
  </MainLayout>
</ChakraProvider>
  )
};

export default App
