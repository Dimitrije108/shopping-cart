import { Outlet, useLocation } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useCartContext/useCartContext";
import PopupContext, { useAddToCartPopup } from "./hooks/useCartPopup/useCartPopup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPopups from "./components/CartPopups/CartPopups";
import layout from "./layout.module.css";

// TODO LIST:
// 1. Main/home page
// - testing

export function App() {
  const { pathname } = useLocation();

  const cartFunctionality = useShoppingCart();
  const popupFunctionality = useAddToCartPopup();
  // Check if homepage is the active page
  const isHomepage = pathname === "/";

  return (
    <CartContext.Provider value={cartFunctionality}>
      <PopupContext.Provider value={popupFunctionality}>
        <div 
          className={`
            ${layout.layout} 
            ${isHomepage ? layout.heroImage : ""}
          `}
        >
          <Header isTransparent={isHomepage} />
          <Outlet />
        </div>
        <Footer />
        <CartPopups />
      </PopupContext.Provider>
    </CartContext.Provider>
  )
};
