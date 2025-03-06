import { Outlet } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useCartContext/useCartContext";
import PopupContext, { useAddToCartPopup } from "./hooks/useCartPopup/useCartPopup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPopups from "./components/CartPopups/CartPopups";

export function App() {
  const cartFunctionality = useShoppingCart();
  const popupFunctionality = useAddToCartPopup();

  return (
    <CartContext.Provider value={cartFunctionality}>
      <PopupContext.Provider value={popupFunctionality}>
        <Header />
        <Outlet />
        <Footer />
        <CartPopups />
      </PopupContext.Provider>
    </CartContext.Provider>
  )
};
