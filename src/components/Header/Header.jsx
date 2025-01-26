import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import styles from "./Header.module.css";

export default function Header() {
	const [starshipsDropdown, setStarshipsDropdown] = useState(false);
	const { pathname } = useLocation();
	const { cart } = useCartContext();

	const togglestarshipsDropdown = () => {
		setStarshipsDropdown((prev) => !prev);
	};

  return (
		<div className={styles.headerCont}>
			<div className={styles.logoCont}>
				<Link 
					to="https://github.com/Dimitrije108/shopping-cart"
					className={styles.githubLink}
				>
					<img 
						src="/src/assets/github-mark-white.svg" 
						alt="github icon" 
						width={30}
						title="GitHub"
					/>
				</Link>
				<h1 className={styles.logoHeading}>
					<Link to="/" className={styles.logoLink}>
						<img 
							src="/src/assets/sw-logo.png"  
							alt="star wars logo" 
							width={150}
						/>
					</Link>
					<Link 
						to="/" 
						className={styles.shipyardLink} 
						title="Shipyard"
					>
						<div className={styles.shipyardLogo}>Shipyard</div>
					</Link>
				</h1>
				<Link 
					to="shopping-cart"
					className={styles.cartIconLink}
				>
					<img 
						src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png" 
						width="55" 
						height="55"
					/>
					<div className={styles.cartQuantity}>
						<div className={styles.quantityWrapper}>{`${cart.length}`}</div>
					</div>
				</Link>
			</div>
			<nav className={styles.navbarCont}>
				<div></div>
				<ul className={styles.navbar}>
					<li 
						className={`${styles.homeNav} ${pathname==="/" ? styles.active : ""} `}
					>
						<Link to="/">Home</Link>
					</li>
					<li 
						className={`${styles.starshipsNav} ${pathname.startsWith("/starships") ? styles.active : ""} `}
						onMouseEnter={() => togglestarshipsDropdown()}
						onMouseLeave={() => togglestarshipsDropdown()}
					>
						<Link to="starships">Starships</Link>
						<ul className={`${styles.dropdown} ${starshipsDropdown ? styles.visible : ""}`}>
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
					<li 
						className={`${styles.contactNav} ${pathname.startsWith("/contact") ? styles.active : ""} `}
					>
						<Link to="contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
};
