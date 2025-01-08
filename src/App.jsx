import { Outlet, useLocation } from "react-router-dom";
import CartContext, { useShoppingCart } from "./hooks/useShoppingCart/useShoppingCart";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import styles from "./layout.module.css"

export function App() {
  const {pathname} = useLocation();
  const cartFunctionality = useShoppingCart();

  return (
    <CartContext.Provider value={cartFunctionality}>
      <div className={styles.layoutWrapper}>
        <Header />
        {pathname === "/" && <Homepage />}
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  )
};
