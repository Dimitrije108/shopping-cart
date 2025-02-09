import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext/useCartContext";
import styles from "./Header.module.css";
import layout from "../../layout.module.css";

export default function Header({ isHomepage }) {
	const [starshipsDropdown, setStarshipsDropdown] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const { pathname } = useLocation();
	const { cart } = useCartContext();
	const navbarRef = useRef(null);
	// Set navbar's isSticky for sticky customization
	useEffect(() => {
		const handleScroll = () => {
			// Selects the navbar by reference
			const navbar = navbarRef.current;
			// Gets the navbar's offset top value
			const offset = navbar.offsetTop;
			// Check if page has scrolled past navbar
			window.scrollY > offset 
			? setIsSticky(true)
			: setIsSticky(false);
		}
		// Scroll event added
		window.addEventListener("scroll", handleScroll);
		// Scroll event cleanup
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	const handleMouseEnter = () => {
		setStarshipsDropdown(true);
	};

	const handleMouseLeave = () => {
		setStarshipsDropdown(false);
	};
	// Scroll to the top when the link is clicked
	const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

	const header = (
		<>
			<div className={`${styles.logoCont} ${layout.layoutWrapper}`}>
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
				<h1 className={styles.logoHeading}  data-testid="headingLogo">
					<Link 
							to="/" 
							className={styles.logoLink} 
							onClick={handleLinkClick}
						>
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
						onClick={handleLinkClick}
					>
						<div className={styles.shipyardLogo}>Shipyard</div>
					</Link>
				</h1>
				<Link 
					to="shopping-cart"
					className={styles.cartIconLink}
					data-testid="cartLink"
					onClick={handleLinkClick}
				>
					<img 
						src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png" 
						width="55" 
						height="55"
						title="Shopping Cart"
					/>
					<div className={styles.cartQuantity}>
						<div className={styles.quantityWrapper}>{`${cart.length}`}</div>
					</div>
				</Link>
			</div>
			<nav 
				className={styles.navbarCont}
				ref={navbarRef}
			>
				<div></div>
				<ul className={styles.navbar}>
					<li 
						className={`${styles.homeNav} ${pathname==="/" ? styles.active : ""} `}
						data-testid="home"
					>
						<Link to="/" onClick={handleLinkClick}>Home</Link>
					</li>
					<li 
						className={`${styles.starshipsNav} ${pathname.startsWith("/starships") ? styles.active : ""} `}
						onMouseEnter={() => handleMouseEnter()}
						onMouseLeave={() => handleMouseLeave()}
						data-testid="starships"
					>
						<Link to="starships" onClick={handleLinkClick}>Starships</Link>
						<ul 
							className={`${styles.dropdown} ${starshipsDropdown ? styles.visible : ""}`}
							data-testid="starshipsDropdown"
						>
							<li>
								<Link 
									to="starships/capital" 
									onClick={handleLinkClick}
								>
									Capital
								</Link>
							</li>
							<li>
								<Link 
									to="starships/transport" 
									onClick={handleLinkClick}
								>
									Transport
								</Link>
							</li>
							<li>
								<Link 
									to="starships/starfighter" 
									onClick={handleLinkClick}
								>
									Starfighter
								</Link>
							</li>
						</ul>
					</li>
					<li 
						className={`${styles.contactNav} ${pathname.startsWith("/contact") ? styles.active : ""} `}
						data-testid="contact"
					>
						<Link 
							to="contact" 
							onClick={handleLinkClick}
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);

	const stickyHeader = (
		<nav 
			className={`${styles.navbarCont} ${isSticky ? styles.sticky : ""}`}
			ref={navbarRef}
			data-testid="stickyNavbar"
		>
			<Link 
				to="https://github.com/Dimitrije108/shopping-cart"
				className={`${styles.githubLink} ${styles.sticky}`}
			>
				<img 
					src="/src/assets/github-mark-white.svg" 
					alt="github icon" 
					width={28}
					title="GitHub"
				/>
			</Link>
			<ul className={styles.navbar}>
				<li 
					className={`${styles.homeNav} ${pathname==="/" ? styles.active : ""} `}
					data-testid="home"
				>
					<Link to="/" onClick={handleLinkClick}>Home</Link>
				</li>
				<li 
					className={`${styles.starshipsNav} ${pathname.startsWith("/starships") ? styles.active : ""} `}
					onMouseEnter={() => handleMouseEnter()}
					onMouseLeave={() => handleMouseLeave()}
					data-testid="starships"
				>
					<Link to="starships" onClick={handleLinkClick}>Starships</Link>
					<ul 
						className=
							{`
							${styles.dropdown} 
							${isSticky ? styles.sticky : ""} 
							${starshipsDropdown ? styles.visible : ""}
							`}
						data-testid="starshipsDropdown"
					>
						<li>
							<Link 
								to="starships/capital" 
								onClick={handleLinkClick}
							>
								Capital
							</Link>
						</li>
						<li>
							<Link 
								to="starships/transport" 
								onClick={handleLinkClick}
							>
								Transport
							</Link>
						</li>
						<li>
							<Link 
								to="starships/starfighter" 
								onClick={handleLinkClick}
							>
								Starfighter
							</Link>
						</li>
					</ul>
				</li>
				<li 
					className={`${styles.contactNav} ${pathname.startsWith("/contact") ? styles.active : ""} `}
					data-testid="contact"
				>
					<Link 
						to="contact" 
						onClick={handleLinkClick}
					>
						Contact
					</Link>
				</li>
			</ul>
			<Link 
				to="shopping-cart"
				className={`${styles.cartIconLink} ${styles.sticky}`}
				data-testid="cartLink"
				onClick={handleLinkClick}
			>
				<img 
					src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Death-Star-2nd-icon.png" 
					width="35" 
					title="Shopping Cart"
				/>
				<div className={styles.cartQuantity}>
					<div className={styles.quantityWrapper}>{`${cart.length}`}</div>
				</div>
			</Link>
		</nav>
	)

  return (
		<div 
			className={`
				${styles.headerCont} 
				${isHomepage ? styles.transparentHeader : ""}
			`}
		>
			{isSticky ? stickyHeader : header}
		</div>
	)
};
