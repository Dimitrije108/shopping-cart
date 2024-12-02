import { useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  const {pathname} = useLocation();

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
        </ul>
      </nav>
      <Outlet />
      {pathname === "/" && <Homepage />}
      {/* TODO: Footer */}
    </>
  )
}

export default App;
