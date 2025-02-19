import styles from "./AboutUsSection.module.css";
import CEC from "/src/assets/icons/Corellian_Engineering_Corporation.svg";

export default function AboutUsSection() {
	return (
		<section className={styles.aboutUsSection}>
			<div className={styles.aboutUsWrapper}>
				<h2>About Us</h2>
				<div className={styles.aboutUsText}>
					<p>At <span className={styles.bold}>Shipyard</span>, as part of the <span className={styles.bold}>Corellian Engineering Corporation (CEC)</span>, we’ve been at the forefront of starship innovation for generations. Known across the galaxy for producing some of the most reliable and customizable vessels, our ships are designed for traders, adventurers, and defense forces alike.</p>
					<p>Whether you're smuggling spice through Hutt space, running high-priority cargo for the Republic, or just looking to outrun Imperial entanglements, we’ve got the perfect ship for you.
						From the legendary <span className={styles.bold}>YT-series freighters</span>, including the YT-1300, to the battle-tested <span className={styles.bold}>CR90 corvettes</span>, our catalog features ships engineered for performance, endurance, and adaptability. Whether you’re a privateer in need of a durable transport or a fleet commander seeking tactical superiority, CEC offers unparalleled craftsmanship and modularity to suit every need.</p>
					<p>Every ship we build carries the spirit of <span className={styles.bold}>Corellian ingenuity</span>—fast, tough, and endlessly upgradeable. Explore our selection today and see why <span className={styles.bold}>Shipyard</span> is the top choice for independent pilots and galactic fleets alike.</p>
				</div>
				<div className={styles.aboutUsLogo}>
					<h3 title="Shipyard">Shipyard</h3>
					<img 
						src={CEC}
						alt="Corellia Engineering Corporation logo" 
						width={120}
						title="Corellia Engineering Corporation"
						className={styles.cecLogo}
					/>
				</div>
			</div>
		</section>
	)
};
