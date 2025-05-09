//import './App.css'
import { Box, ChakraProvider, Flex, Buttom,} from '@chakra-ui/react'
import NavBar from "./NavBar.jsx"
import ItemListContainer from './ItemListContainer.jsx'
import MainLayout from './Layouts'
import { createNewProduct } from '../../services/products.service.js';

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
  <Buttom onClick ={addNewProduct}>Crear Producto </Buttom>
  <ItemListContainer greeting="¡Que bueno verte!" />
  </MainLayout>
</ChakraProvider>
  )
};

export default App
