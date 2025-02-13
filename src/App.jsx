import { Outlet, useLocation } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useCartContext/useCartContext";
import PopupContext, { useAddToCartPopup } from "./hooks/useCartPopup/useCartPopup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPopups from "./components/CartPopups/CartPopups";
import layout from "./layout.module.css";

export function App() {
  const { pathname } = useLocation();

  const cartFunctionality = useShoppingCart();
  const popupFunctionality = useAddToCartPopup();
  // Check if homepage is the active page
  const isHomepage = pathname === "/";

  return (
    <CartContext.Provider value={cartFunctionality}>
      <PopupContext.Provider value={popupFunctionality}>
        <Header isHomepage={isHomepage} />
        <div className={layout.layout}>
          <Outlet />
        </div>
        <Footer />
        <CartPopups />
      </PopupContext.Provider>
    </CartContext.Provider>
  )
};
