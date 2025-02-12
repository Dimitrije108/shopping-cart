import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import layout from "../../layout.module.css";

const slides = [
	{
		src: "/src/assets/star-destroyer.jpg",
		alt: "Star Destroyer Capital ship",
		marketingText: "Only a Sith Deals in Full Retail. Shop Our Discounts!",
		linkTo: "/starships/capital",
		buttonText: "Best Capital Ships in the Galaxy - Shop Now!",
	},
	{
		src: "/src/assets/slave-i.jpg",
		alt: "Slave I starship",
		marketingText: "Bounty Hunting Is a Complicated Profession — Get the Right Ship!",
		linkTo: "/starships/starfighter",
		buttonText: "Unleash Your Inner Pilot — Buy a Starfighter!",
	},
	{
		src: "/src/assets/imperial-shuttle.jpg",
		alt: "Imperial Shuttle Transport ship",
		marketingText: "More Than a Ship — A Lifestyle.",
		linkTo: "/starships/transport",
		buttonText: "Shop Elegance — Shop Our Transport Starships!",
	},
];

// TODO: Separate secitons into different components like top page, carousel page,
// etc. or better readability

export default function Homepage() {
	const [index, setIndex] = useState(0);
	// Change to the next carousel slide
	const prevSlide = () => {
		setIndex((prev) => Math.max(prev - 1, 0));
	};
	// Change to the previous carousel slide
	const nextSlide = () => {
		setIndex((prev) => Math.min(prev + 1, slides.length - 1));
	};
	// Change carousel slide to the cliked one
	const changeSlide = (index) => {
		setIndex(index);
	};
	
  return (
		<>
			<section className={styles.mainHomepageSection}>
				<div className={styles.heroImage}></div>
				<div className={styles.mainContent}>
					<h1>
						From Naboo to the Outer Rim — Corellian Engineering Excellence — Now in Your Hands!
					</h1>
					<Link to="/starships">
						<button className={styles.shopBtn}>
							Explore the Galaxy — Shop Here!
						</button>
					</Link>
				</div>
			</section>
			<section 
				className={styles.carouselSection}
				id="toscroll"
			>
				<div className={styles.carouselCont}>
					<div 
						className={styles.carouselTrack} 
						style={{ transform: `translateX(-${index * 100}vw)` }}
					>
						{slides.map((slide, i) => (
							<div key={i} className={styles.slideCont}>
								<img src={slide.src} alt={slide.alt} />
								<div className={styles.carouselMarketingText}>
									<h2 className={styles.standardText}>
										{slide.marketingText}
									</h2>
									<div className={styles.marketingPositioningCont}>
										<div>
											<p 
												className={styles.imperial}
												title="Imperial"
											>
												{slide.marketingText}
											</p>
											<p 
												className={styles.naboo} 
												title="Naboo"
											>
												{slide.marketingText}
											</p>
										</div>
										<Link to={slide.linkTo}>
											<button className={styles.shopCapitalBtn}>
												{slide.buttonText}
											</button>
										</Link>
									</div>
								</div>
							</div>	
						))}
					</div>
					<div className={styles.carouselQuickNav}>
						<button 
							className={styles.carouselQuickNavBtn} 
							onClick={() => changeSlide(0)}
						>
							<div 
								className={`
									${styles.navSquare} 
									${index === 0 ? styles.active : ""}
								`}
							></div>
						</button>
						<button 
							className={styles.carouselQuickNavBtn} 
							onClick={() => changeSlide(1)}
						>
							<div
								className={`
									${styles.navSquare} 
									${index === 1 ? styles.active : ""}
								`}
							></div>
						</button>
						<button 
							className={styles.carouselQuickNavBtn} 
							onClick={() => changeSlide(2)}
						>
							<div
								className={`
									${styles.navSquare} 
									${index === 2 ? styles.active : ""}
								`}
							></div>
						</button>
					</div>
				</div>
				<button 
					className={styles.leftArrow}
					onClick={prevSlide}
				>
					<img 
						src="/src/assets/carousel-left-arrow.svg" 
						alt="left arrow" 
						width={30}
					/>
				</button>
				<button 
					className={styles.rightArrow}
					onClick={nextSlide}
				>
					<img 
						src="/src/assets/carousel-right-arrow.svg" 
						alt="right arrow" 
						width={30}
					/>
				</button>
			</section>
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
							src="/src/assets/Corellian_Engineering_Corporation.svg" 
							alt="Corellia Engineering Corporation logo" 
							width={120}
							title="Corellia Engineering Corporation"
							className={styles.cecLogo}
						/>
					</div>
				</div>
			</section>
		</>
	)
};
