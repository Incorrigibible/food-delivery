import { CartPage } from "./screens/cartPage/cartPage";

import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./MenuContext";
import { Home } from './screens/home/home';

export const App = () =>{

  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    console.log(currentCart)
  },[currentCart])

  const handleAddToCart = (item) => {
    setCurrentCart(prevCart => [...prevCart, item]);
  }

  return (
    <div style={{
      fontFamily:'ProximaNova',
      fontWeight: '400',
      }}>
        <BrowserRouter>
        <MenuProvider>
        <Routes>
            <Route path="/" element={<Home handleAddToCart={handleAddToCart} currentCart={currentCart}/>} />
            <Route path="/cart" element={<CartPage currentCart={currentCart}/>} />
          </Routes>
      
          </MenuProvider>
        </BrowserRouter>
    </div>
  )
}