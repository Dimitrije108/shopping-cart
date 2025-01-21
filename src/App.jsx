import { Outlet, useLocation } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useCartContext/useCartContext";
import PopupContext, { useAddToCartPopup } from "./hooks/useCartPopup/useCartPopup";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import CartPopups from "./components/CartPopups/CartPopups";
import styles from "./layout.module.css";

// TODO LIST:
// - Testing all Shopping cart components
// 1. Main/home page
// - testing
// 2. Contact page
// - testing
// 3. Header navbar
// - testing
// 4. Footer
// - testing

export function App() {
  const {pathname} = useLocation();

  const cartFunctionality = useShoppingCart();
  const popupFunctionality = useAddToCartPopup();

  return (
    <CartContext.Provider value={cartFunctionality}>
      <PopupContext.Provider value={popupFunctionality}>
        <div className={styles.layoutWrapper}>
          <Header />
          {pathname === "/" && <Homepage />}
          <Outlet />
          <Footer />
          <CartPopups />
        </div>
      </PopupContext.Provider>
    </CartContext.Provider>
  )
};
