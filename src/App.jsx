//import './App.css'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import NavBar from "./NavBar.jsx"
import ItemListContainer from './ItemListContainer.jsx'

function App() {
return (
  <ChakraProvider>
  <Box minheight='100vh'/>
  <NavBar />
  <ItemListContainer greeting="¡Que bueno verte!" />
</ChakraProvider>
  )
};

export default App
