import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
		<div className={styles.footerCont}>
			<div className={styles.mainFooterWrapper}>
				<div className={styles.contactCont}>
					<div className={styles.locationCont}>
						<div className={styles.iconCont}>
							<img 
								src="/src/assets/location.svg" 
								alt="location icon" 
								width={30}
								title="Location"
							/>
						</div>
						<div className={styles.location}>
							<p className={styles.address}>Orbital Assembly Facility 7</p>
							<p>Corellia, Corellian System</p>
							<p>Corellia Sector, Core Worlds</p>
						</div>
					</div>
					<div className={styles.emailCont}>
						<div className={styles.iconCont}>
							<img 
								src="/src/assets/email.svg" 
								alt="email icon" 
								width={30}
								title="Email"
							/>
						</div>
						<p>sw_shipyard@corellia.cec</p>
					</div>
				</div>
				<div className={styles.companyCont}>
					<button>About Us</button>
					<button>Our Services</button>
					<button>Privacy Policy</button>
					<button>Contact</button>
				</div>
				<div className={styles.partnersCont}>
					<div className={styles.iconWrapper}>
						<div className={styles.partnersTopRow}>
							<Link 
								to={"https://starwars.fandom.com/wiki/Corellian_Engineering_Corporation"}
								className={styles.linkEl}
							>
								<img 
									src="/src/assets/Corellian_Engineering_Corporation.svg" 
									alt="Corellian Engineering Corporation icon" 
									width={55}
									title="Corellian Engineering Corporation"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Confederation"}
								className={styles.linkEl}
							>
								<img 
									src="/src/assets/Corellian_Federation_logo.webp" 
									alt="Corellian Federation icon" 
									width={55}
									title="Corellian Federation"
								/>
							</Link>
						</div>
						<div className={styles.partnersBottomRow}>
							<Link 
								to={"https://starwars.fandom.com/wiki/Kuat_Drive_Yards"}
								className={styles.linkEl}
							>
								<img 
									src="/src/assets/Kuat-Drive-Yards.svg" 
									alt="Kuat Drive Yards icon" 
									width={55}
									title="Kuat Drive Yards"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Fondor_Shipyards"}
								className={styles.linkEl}
							>
								<img 
									src="/src/assets/Fondor-Shipyards.jpg" 
									alt="Fondor Shipyards icon" 
									width={55}
									title="Fondor Shipyards"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.copyrightCont}>
				<div className={styles.copyrightText}>
					<p>Copyright © 2025 Star Wars Shipyard limited. All rights Reserved.</p>
					<p className={styles.disclaimer}>*This is a placeholder. It is a fan project made with no commercial desire in mind.</p>
				</div>
				<Link 
					to="https://github.com/Dimitrije108/shopping-cart"
					className={styles.githubLink}
				>
					<img 
						src="/src/assets/github-mark-white.svg" 
						alt="github icon" 
						width={35}
						title="GitHub"
					/>
				</Link>
			</div>
		</div>
	)
};
