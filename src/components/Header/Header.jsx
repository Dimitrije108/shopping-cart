import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.css";
import layout from "../../layout.module.css";
// assets
import githubIcon from "/src/assets/icons/github-mark-white.svg";
import swLogo from "/src/assets/icons/sw-logo.png";

export default function Header() {
	const [isSticky, setIsSticky] = useState(false);
	const { pathname } = useLocation();
	const { cart } = useCartContext();
	const isMobile = useMediaQuery({
		query: '(max-width: 768px), (pointer: coarse)',
	});

	// Check active path so custom backdrop image can be applied
  const isHomepage = pathname === "/";
  const isContact = pathname === "/contact";

	const handleSticky = (bool) => {
		setIsSticky(bool);
	};

  return (
		<div 
			className={`
				${styles.headerCont}
				${isSticky ? styles.sticky : ""} 
				${isHomepage && !isSticky ? styles.transparentHeader : ""}
				${isContact && !isSticky ? styles.contactHeader : ""}
			`}
			data-testid="headerCont"
		>
			<div 
				className={`
					${styles.headerWrapper}
					${layout.layoutWrapper}
					${isSticky ? styles.sticky : ""}
					${isMobile ? styles.mobile : ""} 
				`}
			>
				<Link 
					to="https://github.com/Dimitrije108/shopping-cart"
					className={`
						${styles.githubLink}
						${isSticky ? styles.sticky : ""}
					`}
				>
					<img 
						src={githubIcon}
						alt="github icon" 
						title="GitHub"
					/>
				</Link>
				<h1 className={styles.logoHeading}  data-testid="headingLogo">
					<Link 
						to="/" 
						className={styles.logoLink} 
					>
						<img 
							src={swLogo}
							alt="star wars logo" 
						/>
					</Link>
					<Link 
						to="/" 
						className={styles.shipyardLink} 
						title="Shipyard"
					>
						<div className={styles.shipyardLogo}>
							Shipyard
						</div>
					</Link>
				</h1>
				<Link 
					to="shopping-cart"
					className={`
						${styles.cartIconLink}
						${isSticky ? styles.sticky : ""}
					`}
					data-testid="cartLink"
				>
					<img 
						src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png" 
						title="Shopping Cart"
					/>
					<div className={styles.cartQuantity}>
						<div className={styles.quantityWrapper}>
							{`${cart.length}`}
						</div>
					</div>
				</Link>
				<Navbar
					handleSticky={handleSticky}
					isSticky={isSticky}
					isMobile={isMobile}
				/>
			</div>
		</div>
	)
};
