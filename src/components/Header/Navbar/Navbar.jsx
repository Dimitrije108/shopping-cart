import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
// assets
import hamburgerIcon from "/src/assets/icons/hamburger.svg";
import arrowDown from "/src/assets/icons/arrow-down.svg";
import closeIcon from "/src/assets/icons/close.svg";

export default function Navbar({
	handleSticky,
	isSticky = false, 
	isMobile = false, 
}) {
	const [starshipsDropdown, setStarshipsDropdown] = useState(false);
	const [sideMenuOpen, setSideMenuOpen] = useState(false);
	const { pathname } = useLocation();
	const navbarRef = useRef(null);

	// Set navbar's isSticky for sticky styling
	useEffect(() => {
		const handleScroll = () => {
			// Selects the navbar by reference
			const navbar = navbarRef.current;
			// Gets the navbar's offset top value
			const offset = navbar.offsetTop;
			// Check if page has scrolled past navbar
			window.scrollY > offset 
			? handleSticky(true)
			: handleSticky(false);
		}
		// Scroll event added
		window.addEventListener("scroll", handleScroll);
		// Scroll event cleanup
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	// Check active path for cart due to different dropdown positioning
	const isCart = pathname === "/shopping-cart";

	// Starships dropdown control
	const handleMouseEnter = () => {
		setStarshipsDropdown(true);
	};

	const handleMouseLeave = () => {
		setStarshipsDropdown(false);
	};
	// Navbar hamburger control open/close
	const openSideMenu = () => {
		setSideMenuOpen(true);
	};

	const closeSideMenu = () => {
		setSideMenuOpen(false);
		setStarshipsDropdown(false);
	};

	const toggleStarshipsDropdown = () => {
		setStarshipsDropdown(prev => !prev);
	}

	const widescreen = (
		<nav
			className={styles.navbarCont}
			ref={navbarRef}
			data-testid="stickyNavbar"
		>
			<ul 
				className={`
					${styles.navbar} 
					${isSticky ? styles.sticky : ""}
				`}
			>
				<li 
					className={`
						${styles.homeNav} 
						${pathname==="/" ? styles.active : ""} 
					`}
					data-testid="home"
				>
					<Link to="/">Home</Link>
				</li>
				<li 
					className={`
						${styles.starshipsNav} 
						${pathname.startsWith("/starships") ? styles.active : ""} 
					`}
					onMouseEnter={() => handleMouseEnter()}
					onMouseLeave={() => handleMouseLeave()}
					data-testid="starships"
				>
					<Link to="starships">Starships</Link>
					<ul 
						className={`
							${styles.dropdown} 
							${starshipsDropdown ? styles.visible : ""}
							${isSticky ? styles.sticky : ""} 
							${isCart ? styles.cart : ""}
						`}
						data-testid="starshipsDropdown"
					>
						<li>
							<Link 
								to="starships/capital" 
							>
								Capital
							</Link>
						</li>
						<li>
							<Link 
								to="starships/transport" 
							>
								Transport
							</Link>
						</li>
						<li>
							<Link 
								to="starships/starfighter" 
							>
								Starfighter
							</Link>
						</li>
					</ul>
				</li>
				<li 
					className={`
						${styles.contactNav} 
						${pathname.startsWith("/contact") ? styles.active : ""} 
					`}
					data-testid="contact"
				>
					<Link 
						to="contact" 
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);

	const mobile = (
		<div className={styles.mobileNavbarCont}>
			<button 
				className={styles.menuBtn}
				onClick={openSideMenu}
			>
				<img 
					src={hamburgerIcon}
					alt="open menu" 
					title="Open menu"
					width={40}
				/>
			</button>
			<div 
				className={`
					${styles.sideMenu} 
					${sideMenuOpen ? styles.open : ""}
				`}
			>
				<div className={styles.sideMenuWrapper}>
					<h2 
						className={styles.sideMenuLogo}
						title="Shipyard"
					>
						Shipyard
					</h2>
					<button 
						className={styles.closeBtn}
						onClick={closeSideMenu}
					>
						<img 
							src={closeIcon}
							alt="close menu" 
							title="Close menu"
							width={25}
						/>
					</button>
				</div>
				<nav
					className={styles.navbarCont}
					ref={navbarRef}
					data-testid="stickyNavbar"
				>
					<ul className={styles.navbar}>
						<li 
							className={`
								${styles.homeNav} 
								${pathname==="/" ? styles.active : ""} 
							`}
							onClick={closeSideMenu}
							data-testid="home"
						>
							<Link to="/">Home</Link>
						</li>
						<li 
							className={`
								${styles.starshipsNav} 
								${pathname.startsWith("/starships") ? styles.active : ""} 
							`}
							onClick={toggleStarshipsDropdown}
							data-testid="starships"
						>
							<div className={styles.starshipsWrapper}>
								<div>Starships</div>
								<button 
									className={`
										${styles.toggleDropdownBtn}
										${starshipsDropdown ? styles.rotate : ""}
									`}
								>
									<img 
										src={arrowDown}
										alt="open dropdown"
										width={20}
									/>
								</button>
							</div>
							<ul 
								className={`
									${styles.mobileDropdown} 
									${starshipsDropdown ? styles.show : ""}
								`}
								data-testid="starshipsDropdown"
							>
								<li
									className={
										pathname === "/starships"
										? styles.active 
										: ""
									}
									onClick={closeSideMenu}
								>
									<Link 
										to="starships" 
									>
										All
									</Link>
								</li>
								<li
									className={
										pathname.startsWith("/starships/capital") 
										? styles.active 
										: ""
									}
									onClick={closeSideMenu}
								>
									<Link 
										to="starships/capital" 
									>
										Capital
									</Link>
								</li>
								<li
									className={
										pathname.startsWith("/starships/transport") 
										? styles.active 
										: ""
									}
									onClick={closeSideMenu}
								>
									<Link 
										to="starships/transport" 
									>
										Transport
									</Link>
								</li>
								<li 
									className={
										pathname.startsWith("/starships/starfighter") 
										? styles.active 
										: ""
									}
									onClick={closeSideMenu}
								>
									<Link 
										to="starships/starfighter" 
									>
										Starfighter
									</Link>
								</li>
							</ul>
						</li>
						<li 
							className={`
								${styles.contactNav} 
								${pathname.startsWith("/contact") ? styles.active : ""} 
							`}
							onClick={closeSideMenu}
							data-testid="contact"
						>
							<Link 
								to="contact" 
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)

	return (
		<>{isMobile ? mobile : widescreen}</>
	)
};
