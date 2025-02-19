import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import layout from "../../layout.module.css";
// assets
import locationIcon from "/src/assets/icons/location.svg";
import emailIcon from "/src/assets/icons/email.svg";
// import websiteIcon from "/src/assets/icons/website.svg";
import CEC from "/src/assets/icons/Corellian_Engineering_Corporation.svg";
import federationLogo from "/src/assets/icons/Corellian_Federation_logo.webp";
import kuatDriveYardsLogo from "/src/assets/icons/Kuat-Drive-Yards.svg";
import fondorShipyardsLogo from "/src/assets/icons/Fondor-Shipyards.jpg";
import githubIcon from "/src/assets/icons/github-mark-white.svg";

export default function Footer() {
  return (
		<div className={styles.footerCont}>
			<div className={`${styles.mainFooterWrapper} ${layout.layoutWrapper}`}>
				<div className={styles.contactCont}>
					<div className={styles.locationCont}>
						<div className={styles.iconCont}>
							<img 
								src={locationIcon}
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
								src={emailIcon} 
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
								data-testid="cecLink"
							>
								<img 
									src={CEC}
									alt="Corellian Engineering Corporation icon" 
									width={55}
									title="Corellian Engineering Corporation"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Confederation"}
								className={styles.linkEl}
								data-testid="cfLink"
							>
								<img 
									src={federationLogo}
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
								data-testid="kdyLink"
							>
								<img 
									src={kuatDriveYardsLogo}
									alt="Kuat Drive Yards icon" 
									width={55}
									title="Kuat Drive Yards"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Fondor_Shipyards"}
								className={styles.linkEl}
								data-testid="fondorLink"
							>
								<img 
									src={fondorShipyardsLogo}
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
					data-testid="githubLink"
				>
					<img 
						src={githubIcon}
						alt="github icon" 
						title="GitHub"
					/>
				</Link>
			</div>
		</div>
	)
};
