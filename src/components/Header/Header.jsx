import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import styles from "./Header.module.css";

export default function Header() {
	const [starshipsDropdown, setStarshipsDropdown] = useState(false);
	const { cart } = useCartContext();

	const togglestarshipsDropdown = () => {
		setStarshipsDropdown((prev) => !prev);
	};

	const starshipLinks = (
		<ul className={styles.starshipsList}>
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
	);

  return (
		<div className={styles.headerCont}>
			<h1  className={styles.logoHeading}>
				<Link to="/" className={styles.logoLink}  title="Star Wars Shipyard">
					<img 
						src="/src/assets/sw-logo.png"  
						alt="star wars logo" 
						width={150}
					/>
				</Link>
				<Link to="/" className={styles.shipyardLink} title="Star Wars Shipyard">
					<div className={styles.shipyardLogo}>Shipyard</div>
				</Link>
			</h1>
			<nav className={styles.navbarCont}>
				<ul className={styles.navbar}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li 
						className={styles.starshipsCont}
						onMouseEnter={() => togglestarshipsDropdown()}
						onMouseLeave={() => togglestarshipsDropdown()}
					>
						<Link to="starships">Starships</Link>
						{starshipsDropdown && starshipLinks}
					</li>
					<li>
						<Link to="contact">Contact</Link>
					</li>
					<li>
						<Link to="shopping-cart">Cart{`(${cart.length})`}</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
};
