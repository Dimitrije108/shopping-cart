import { HashLink } from "react-router-hash-link";
import styles from "./MainSection.module.css";

export default function MainSection() {
	return (
		<section className={styles.mainHomepageSection}>
			<div className={styles.heroImage}></div>
			<div className={styles.mainContent}>
				<h1>
					From Naboo to the Outer Rim — Corellian Engineering Excellence Now in Your Hands!
				</h1>
				<HashLink 
					to="/starships#starshipsSection"
					data-testid="starshipsLink" 
					smooth
				>
					<button className={styles.shopBtn}>
						Explore the Galaxy — Shop Here!
					</button>
				</HashLink>
			</div>
		</section>
	)
};
