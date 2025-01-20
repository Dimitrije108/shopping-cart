import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useCartContext/useCartContext";
import PopupContext, { useAddToCartPopup } from "./hooks/useCartPopup/useCartPopup";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import CartPopups from "./components/CartPopups/CartPopups";
import styles from "./layout.module.css"

export function App() {
  const {pathname} = useLocation();

  const cartFunctionality = useShoppingCart();
  const popupFunctionality = useAddToCartPopup();

  const cartFunctionalityMemo = useMemo(() => cartFunctionality, [cartFunctionality.cart]);
  const popupFunctionalityMemo = useMemo(() => popupFunctionality, [popupFunctionality.popups]);

  return (
    <CartContext.Provider value={cartFunctionalityMemo}>
      <PopupContext.Provider value={popupFunctionalityMemo}>
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
