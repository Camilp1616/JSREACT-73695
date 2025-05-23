import { Flex, Menu, MenuButton, MenuList,MenuItem,Button,} from "@chakra-ui/react";
import CardWidget from "./CartWidget";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { getAllCategories } from "../services/products.service";

const NavBar = () => {

const navigate = useNavigate();
const [categories, setCategories] = useState([])
useEffect(() => {
    getAllCategories().then((res) => setCategories(res.data)).catch((error) => console.error(error)) 
},[])

return <Flex alignItems="center" 
        justifyContent="space-between"
        width="100vw"
        padding="0 20px"
        height='7vh'
        border='2px solid rgb(232, 41, 41)'>
        

    <div className="test" onClick={() => navigate("/")} cursor="pointer" >Bohème</div>
    {/*<div>hola</div>*/} 
    <Menu>
    <MenuButton as={Button}>Merch</MenuButton>
    <MenuList>
    {
    categories.map(item => {
    return <MenuItem key={item.slug} onClick={() => navigate (`/category/${item.slug}`)} >{item.name}</MenuItem>
    })
    }
    </MenuList>
</Menu>
< CardWidget />
</Flex>

};

export default NavBar;