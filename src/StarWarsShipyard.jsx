import { useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";

export default function StarWarsShipyard() {
  const {pathname} = useLocation();
  const [cart, setCart] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Star Wars Shipyard</Link>
          </li>
          <li>
            <Link to="ship-store">Starships</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="shopping-cart">Cart{`(${cart})`}</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {pathname === "/" && <Homepage />}
      {/* TODO: Footer */}
    </>
  )
};
