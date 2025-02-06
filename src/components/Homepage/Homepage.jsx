import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import layout from "../../layout.module.css";

export default function Homepage() {

  return (
		<>
			<div className={styles.heroImage}></div>
			<div className={styles.firstPageCont}>
				<div className={styles.headerCont}>
					<h1>
						From Naboo to the Outer Rim — Corellian Engineering Excellence — Now in Your Hands!
					</h1>
					<Link to="/starships">
						<button className={styles.shopBtn}>Shop Here!</button>
					</Link>
				</div>
				<div className={styles.arrowContainer}>
					<Link to="#toscroll">
						<div className={styles.chevron}></div>
						<div className={styles.chevron}></div>
						<div className={styles.chevron}></div>
						<span className={styles.text}>Scroll down</span>
					</Link>
				</div>
			</div>
			<div 
				className={styles.carouselCont}
				id="toscroll"
			>
				<div className={styles.carouselOne}>
					<div className={styles.leftArrow}>
						<img 
							src="/src/assets/carousel-left-arrow.svg" 
							alt="left arrow" 
							width={30}
						/>
					</div>
					<img 
						src="/src/assets/star-destroyer.jpg" 
						alt="Star Destroyer Capital ship"
						className={styles.carouselImg}
					/>
					<div className={styles.rightArrow}>
						<img 
							src="/src/assets/carousel-right-arrow.svg" 
							alt="right arrow" 
							width={30}
						/>
					</div>
					<div className={styles.carouselText}>
						<p>Only a Sith Deals in Full Retail. Shop Our Discounts!</p>
					</div>
				</div>
			</div>
		</>
	)
};

// "Explore the Galaxy—One Starship at a Time."
// "Built for the Stars, Engineered for You."
// "From Naboo to the Outer Rim—We've Got Your Ship."
// "Hyperdrive-Ready. Are You?"
// "The Finest Ships in the Galaxy, Ready for You."

// For Naboo luxury ships:
// "More Than a Ship—A Lifestyle."
// "Own the Stars. Fly in Style."

// Slave I, ...
// "Bounty Hunting Is a Complicated Profession—Get the Right Ship."
// "For Smugglers, Explorers, and Heroes Alike."

// "Unleash Your Inner Pilot."

//  "Lightspeed Deals on Star Wars Ships!"
// "From TIE Fighters to X-Wings—Own a Piece of the Galaxy."
// May the force be with you!

// For discounted prices
// "Only a Sith Deals in Full Retail. Shop Our Discounts!"

// Corellia
// "Straight from the Corellian Shipyards—The Galaxy’s Finest Ships!"
// "Corellian Engineering Excellence—Now in Your Hands!"
//  "Built for Smugglers, Pilots, and Legends—Corellian Quality Guaranteed!"

// For Millenium Falcon
// "The Fastest Hunk of Junk? Not on Our Watch—Corellian Quality Inside!"