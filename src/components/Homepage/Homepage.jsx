import { useState } from "react";
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
	}
	
  return (
		<>
			<div className={styles.heroImage}></div>
			<div className={styles.firstPageCont}>
				<div className={styles.headerCont}>
					<h1>
						From Naboo to the Outer Rim — Corellian Engineering Excellence — Now in Your Hands!
					</h1>
					<Link to="/starships">
						<button className={styles.shopBtn}>
							Shop Here!
						</button>
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
				className={styles.carousel}
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

// "Lightspeed Deals on Star Wars Ships!"
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