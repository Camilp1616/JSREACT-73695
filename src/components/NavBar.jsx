import { Flex, Menu, MenuButton, MenuList,MenuItem,Button,} from "@chakra-ui/react";
import CardWidget from "./CartWidget";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

const navigate = useNavigate();

return <Flex alignItems="center" 
        justifyContent="space-between"
        width="100vw"
        padding="0 20px"
        height='7vh'
        border='2px solid rgb(232, 41, 41)'>
        

    <div className="test" onClick={() => navigate("/")} cursor={'pointer'} >Bohème</div>
    {/*<div>hola</div>*/} 
    <Menu>
    <MenuButton as={Button}>Merch</MenuButton>
    <MenuList>
    <MenuItem>Totebags</MenuItem>
    <MenuItem>Remeras</MenuItem>
    <MenuItem>Gorras</MenuItem>
    <MenuItem>Cuadernos</MenuItem>
    </MenuList>
</Menu>
< CardWidget />
</Flex>

};

export default NavBar;