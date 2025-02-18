import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CarouselSection.module.css";

const slides = [
	{
		src: "/src/assets/star-destroyer.jpg",
		srcMedium: "/src/assets/star-destroyer-medium.jpg",
		srcSmall: "/src/assets/star-destroyer-small.jpg",
		srcExtraSmall: "/src/assets/star-destroyer-extra-small.jpg",
		alt: "Star Destroyer Capital ship",
		marketingText: "Only a Sith Deals in Full Retail. Shop Our Discounts!",
		linkTo: "/starships/capital",
		buttonText: "Best Capital Ships in the Galaxy - Shop Now!",
	},
	{
		src: "/src/assets/slave-i.jpg",
		srcMedium: "/src/assets/slave-i-medium.jpg",
		srcSmall: "/src/assets/slave-i-small.jpg",
		srcExtraSmall: "/src/assets/slave-i-extra-small.jpg",
		alt: "Slave I starship",
		marketingText: "Bounty Hunting Is a Complicated Profession — Get the Right Ship!",
		linkTo: "/starships/starfighter",
		buttonText: "Unleash Your Inner Pilot — Buy a Starfighter!",
	},
	{
		src: "/src/assets/imperial-shuttle.jpg",
		srcMedium: "/src/assets/imperial-shuttle-medium.jpg",
		srcSmall: "/src/assets/imperial-shuttle-small.jpg",
		srcExtraSmall: "/src/assets/imperial-shuttle-extra-small.jpg",
		alt: "Imperial Shuttle Transport ship",
		marketingText: "More Than a Ship — A Lifestyle.",
		linkTo: "/starships/transport",
		buttonText: "Shop Elegance — Shop Our Transport Starships!",
	},
];

export default function CarouselSection() {
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
						<div 
							key={i} 
							className={styles.slideCont} 
							aria-hidden={index !== i}
							data-testid="carouselSlide"
						>
							<picture>
								<source 
									srcset={slide.srcExtraSmall}
									media="(max-width: 700px)"
								/>
								<source 
									srcset={slide.srcSmall}
									media="(max-width: 900px)"
								/>
								<source 
									srcset={slide.srcMedium}
									media="(max-width: 1250px)"
								/>
								<img 
									src={slide.src}
									alt={slide.alt}
								/>
							</picture>
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
									<Link to={slide.linkTo} data-testid="storeLink">
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
						data-testid="quickNavBtn"
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
						data-testid="quickNavBtn"
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
						data-testid="quickNavBtn"
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
				data-testid="leftBtn"
			>
				<img 
					src="/src/assets/carousel-left-arrow.svg" 
					alt="left arrow" 
				/>
			</button>
			<button 
				className={styles.rightArrow}
				onClick={nextSlide}
				data-testid="rightBtn"
			>
				<img 
					src="/src/assets/carousel-right-arrow.svg" 
					alt="right arrow" 
				/>
			</button>
		</section>
	)
};
