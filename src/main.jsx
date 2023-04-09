import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import cartProductLoader from './loader/cartProductLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        loader: cartProductLoader
      },
      {
        path:'checkout',
        element: <Checkout></Checkout>,
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
