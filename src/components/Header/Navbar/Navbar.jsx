import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({
	handleSticky,
	isSticky = false, 
	isMobile = false,
}) {
	const [starshipsDropdown, setStarshipsDropdown] = useState(false);
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

	const widescreen = (
		<nav
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
		<div>This is mobile... (not really)</div>
	)

	return (
		<>{isMobile ? mobile : widescreen}</>
	)
};
