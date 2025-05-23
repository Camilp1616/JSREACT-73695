import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/MainLayout";
import { Outlet } from "react-router-dom";
import Item from "../pages/item";
import Category from "../pages/category";

// URL Params: son parametros de URL, es decir informacion adicional que viaja en la URL que podemos utilizar
// Cuando especificamos una ruta de la siguiente forma: /item/:id --> todo lo que esta luego del ':'
// le dice al router que es un parametro dinamico

const routes = [
{
    path: "/",
    element: <MainLayout />,
    children: [{
//path --> camino/la ruta
//elemento --> el componente que se renderiza

path: "/",
element: <Home/>, //JSX.Element / React.ReactNode
},
{
path: "item/:id",
element: <Item/> ,
},
{
path: "category/:id",
element: <Category/> ,
},
]
},



];

export const router = createBrowserRouter(routes);