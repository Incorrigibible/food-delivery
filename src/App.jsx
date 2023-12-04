
// import { Cart } from './assets/screens/cart/Cart';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./MenuContext";
import { Home } from './screens/home/home';

export const App = () =>{
  return (
    <div style={{
      fontFamily:'ProximaNova',
      fontWeight: '400',
      }}>
        <BrowserRouter>
        <MenuProvider>
        <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/cart" element={<Cart isEmpty={true} />} /> */}
          </Routes>
      
          </MenuProvider>
        </BrowserRouter>
    </div>
  )
}