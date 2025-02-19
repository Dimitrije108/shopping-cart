import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import layout from "../../layout.module.css";
// assets
import galaxyMap from "/src/assets/images/galaxy_map.jpg";
import corelliaPlanet from "/src/assets/images/corellia_planet.webp";
import CEC from "/src/assets/icons/Corellian_Engineering_Corporation.svg";
import locationIcon from "/src/assets/icons/location.svg";
import emailIcon from "/src/assets/icons/email.svg";
import websiteIcon from "/src/assets/icons/website.svg";
import federationLogo from "/src/assets/icons/Corellian_Federation_logo.webp";
import kuatDriveYardsLogo from "/src/assets/icons/Kuat-Drive-Yards.svg";
import fondorShipyardsLogo from "/src/assets/icons/Fondor-Shipyards.jpg";

// TODO: Free Email Newsletter subscription form/field
// Stay up to date with all things Shipyard...

export default function Contact() {
	// Scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<>
			<div 
				className={`
					${layout.layoutWrapper} 
					${layout.footerMargin} 
					${styles.wrapper}
				`}
			>
				<h1 className={styles.findUsHeading}>
					Find Us
				</h1>
				<div className={styles.locationCont}>
					<img 
						src={galaxyMap} 
						alt="Galaxy map" 
						width={500}
						title="Galaxy map"
						className={styles.galaxyMap}
					/>
					<div className={styles.planetAndLogoCont}>
						<img 
							src={corelliaPlanet}
							alt="Corellia planet" 
							width={250}
							title="Corellia planet"
							className={styles.planetMap}
						/>
						<img 
							src={CEC} 
							alt="Corellia Engineering Corporation logo" 
							width={250}
							title="Corellia Engineering Corporation"
							className={styles.cecLogo}
						/>
					</div>
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
						<div className={styles.webpageCont}>
							<div className={styles.iconCont}>
								<img 
									src={websiteIcon}
									alt="webpage icon" 
									width={30}
									title="Webpage"
								/>
							</div>
							<Link 
								to={"https://starwars.fandom.com/wiki/Corellian_Engineering_Corporation"}
								data-testid="webpageLink"
							>
								Corellian Engineering Corporation
							</Link>
						</div>
					</div>
				</div>
				<h1 className={styles.contactUsHeading}>
					Contact Us
				</h1>
				<div className={styles.contactFormsCont}>
					<div className={styles.largeOrderFormCont}>
						<h2 className={styles.contactFormHeading}>
							Large Order Contact Form
						</h2>
						<form action="" className={styles.largeOrderForm}>
							<div className={styles.inputCont}>
								<label htmlFor="firstName">
									First name*
								</label>
								<input
									id="firstName"
									name="firstName"
									placeholder="Anakin"
									minLength={2}
									maxLength={18}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="lastName">
									Last name*
								</label>
								<input
									id="lastName"
									name="lastName"
									placeholder="Skywalker"
									minLength={2}
									maxLength={18}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="mail">
									Contact email*
								</label>
								<input
									id="mail"
									type="email"
									name="mail"
									placeholder="AniSkywalker@tatooine.galaxy"
									minLength={2}
									maxLength={40}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="company">
									Company
								</label>
								<input
									id="company"
									name="company"
									placeholder="Jedi Order"
									minLength={2}
									maxLength={18}
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="message">
									Request*
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Large order request message..."
									className={styles.messageTextarea}
									required
								/>
							</div>
							<div className={styles.submitBtnCont}>
								<button
									type="submit"
									className={styles.submitFormBtn}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
					<div className={styles.requestPriceFormCont}>
						<h2 className={styles.contactFormHeading}>
							Request Ship Price
						</h2>
						<form action="" className={styles.requestPriceForm}>
							<div  className={styles.inputCont}>
								<label htmlFor="firstName">
									First name*
								</label>
								<input
									id="firstName"
									name="firstName"
									placeholder="Anakin"
									minLength={2}
									maxLength={18}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="lastName">
									Last name*
								</label>
								<input
									id="lastName"
									name="lastName"
									placeholder="Skywalker"
									minLength={2}
									maxLength={18}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="mail">
									Contact email*
								</label>
								<input
									id="mail"
									type="email"
									name="mail"
									placeholder="AniSkywalker@tatooine.galaxy"
									minLength={2}
									maxLength={25}
									required
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="company">
									Company
								</label>
								<input
									id="company"
									name="company"
									placeholder="Jedi Order"
									minLength={2}
									maxLength={18}
								/>
							</div>
							<div className={styles.inputCont}>
								<label htmlFor="ships">
									Request price*
								</label>
								<select 
									id="ships"
									name="ships"
									className={styles.selectEl}
									required
								>
									<option value="">Select ship</option>
									<option value="hTypeNubianYacht">H-type Nubian yacht</option>
									<option value="nabooRoyalStarship">Naboo Royal Starship</option>
									<option value="republicCruiser">Republic Cruiser</option>
									<option value="gr75MediumTransport">GR-75 Medium Transport</option>
									<option value="aa9CoruscantFreighter">AA-9 Coruscant freighter</option>
									<option value="darthVadersTieFighter">Darth Vader's TIE fighter</option>
									<option value="slaveI">Slave I</option>
								</select>
							</div>
							<div className={styles.submitBtnCont}>
								<button
									type="submit"
									className={styles.submitFormBtn}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
				<h1 className={styles.partnersHeading}>
					Our Partners
				</h1>
				<div className={styles.partnersCont}>
					<div className={styles.logoWrapper}>
						<div className={styles.logoCont}>
							<Link 
								to={"https://starwars.fandom.com/wiki/Confederation"}
								data-testid="cfLink"
							>
								<img 
									src={federationLogo}
									alt="Corellian Federation icon" 
									width={100}
									title="Corellian Federation"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Kuat_Drive_Yards"}
								data-testid="kdyLink"
							>
								<img 
									src={kuatDriveYardsLogo}
									alt="Kuat Drive Yards icon" 
									width={100}
									title="Kuat Drive Yards"
								/>
							</Link>
							<Link 
								to={"https://starwars.fandom.com/wiki/Fondor_Shipyards"}
								data-testid="fondorLink"
							>
								<img 
									src={fondorShipyardsLogo}
									alt="Fondor Shipyards icon" 
									width={100}
									title="Fondor Shipyards"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};
