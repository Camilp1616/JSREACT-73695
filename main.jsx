import react from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/components/index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './src/routes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
