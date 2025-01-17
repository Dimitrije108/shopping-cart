import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext/useCartContext";

export default function Header() {
	const { cart } = useCartContext();

  return (
		<nav>
			<ul>
				<li>
					<Link to="/">Star Wars Shipyard</Link>
				</li>
				<li>
					<Link to="starships">Starships</Link>
					<ul>
						<li>
							<Link to="starships/capital">Capital</Link>
						</li>
						<li>
							<Link to="starships/transport">Transport</Link>
						</li>
						<li>
							<Link to="starships/starfighter">Starfighter</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to="contact">Contact</Link>
				</li>
				<li>
					<Link to="shopping-cart">Cart{`(${cart.length})`}</Link>
				</li>
			</ul>
		</nav>
	)
};