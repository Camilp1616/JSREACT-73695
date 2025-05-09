import { Flex, Menu, MenuButton, MenuList,MenuItem,Button,} from "@chakra-ui/react";
import CardWidget from "./CartWidget";

const NavBar = () => {
return <Flex alignItems="center" 
        justifyContent="space-between"
        width="100vw"
        padding="0 20px"
        height='10%'
        border='1px solid rgb(241, 158, 158)'>
        

    <text className="test">Bohème</text>
    {/*<div>hola</div>*/} 
    <Menu>
    <MenuButton as={Button}>
    Merch 
    </MenuButton>
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