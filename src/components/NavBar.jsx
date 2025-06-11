import { Flex, Menu, MenuButton, MenuList,MenuItem,Button,} from "@chakra-ui/react";
import CardWidget from "./CartWidget";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/config/firebase";

const NavBar = () => {
const [categories, setCategories] = useState([])
const navigate = useNavigate();

useEffect(() => {
const categoriesCollection = collection (db, "categories")

   getDocs(categoriesCollection)
   .then( (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    setCategories(data);
   })
    .catch(() => setError (true));
},[])

return <Flex alignItems="center" 
        justifyContent="space-between"
        width="100vw"
        padding="0 20px"
        height='7vh'
        border='2px solid rgb(232, 41, 41)'>
        

    <div className="test" onClick={() => navigate("/")} cursor="pointer" >Bohèmee</div>
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