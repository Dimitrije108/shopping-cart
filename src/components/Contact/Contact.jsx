import styles from "./Contact.module.css";

export default function Contact() {
  return (
		<>
			<div className={styles.wrapper}>
				{/* <div  className={styles.backdrop}></div> */}
				<h1>Contact Us</h1>
				<div className={styles.locationCont}>
					<img 
						src="/src/assets/galaxy_map.jpg" 
						alt="Galaxy map" 
						width={500}
						title="Galaxy map"
						className={styles.galaxyMap}
					/>
					<div className={styles.planetAndLogoCont}>
						<img 
							src="/src/assets/corellia_planet.webp" 
							alt="Corellia planet" 
							width={250}
							title="Corellia planet"
							className={styles.planetMap}
						/>
						<img 
							src="/src/assets/Corellian_Engineering_Corporation.svg" 
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
				</div>
				<div className={styles.contactFormsCont}>
					<div className={styles.largeOrderForm}>

					</div>
					<div className={styles.requestPriceForm}>
						
					</div>
				</div>
				<div className={styles.partnersCont}>

				</div>
			</div>
		</>
	)
};
