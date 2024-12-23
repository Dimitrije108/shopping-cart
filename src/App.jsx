import { useState, createContext, useContext } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

const CartContext = createContext({
  cart: null,
  addToCart: () => {},
});

export function App() {
  const {pathname} = useLocation();
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  }

  return (
    // wrap this up in the cart context
    <CartContext.Provider value={{ cart, addToCart }}>
      <Header />
      {pathname === "/" && <Homepage />}
      <Outlet />
      <Footer />
    </CartContext.Provider>
  )
};

export const useCartContext = () => useContext(CartContext);
