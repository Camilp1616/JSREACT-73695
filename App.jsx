// import './App.css'
import { ChakraProvider, Button } from '@chakra-ui/react';
import NavBar from './src/components/NavBar.jsx';
import ItemListContainer from './src/components/ItemListContainer';
import MainLayout from './src/layouts/MainLayout';
import {getAllProducts } from './src/services/products.service.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './src/routes/index.jsx';
import Home from './src/pages/home.jsx';

const App = () => {

  const updateExistingProduct = () => {
    const data = {
      title: "producto Boheme",
      description: "Producto creado en clase",
      price: "100",
    };

    updateProduct(2, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <ChakraProvider>
      <NavBar />
        {/*<ItemListContainer greeting={"productos nuevos"} >*/}
        <RouterProvider router={router} />
        {/* <Button onClick={addNewProduct}>Agregar Producto</Button> */}
        {/*<Button onClick={updateExistingProduct}>Actualizar Producto</Button>}
        {/* <ItemListContainer greeting="¡Que bueno verte!" /> */}
    </ChakraProvider>
  );
};

export default App;
