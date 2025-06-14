import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/item";
import Category from "../pages/category";
import Memo from "../pages/memo";
import AddDoc from "../pages/AddDoc";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout"

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
{
path: "/cart",
element: <Cart/> ,
},
{
path: "/checkout",
element: <Checkout/> ,
},
{
path: "/add-Doc",
element: <AddDoc/> ,
},
{
path: "memo",
element: <Memo/> ,
},
]
},

];

export const router = createBrowserRouter(routes);