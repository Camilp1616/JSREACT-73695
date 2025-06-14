import react from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/components/index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './src/routes/index.jsx';
import { CartProvider } from "./src/context/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </CartProvider>
  </StrictMode>,
)
