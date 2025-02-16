import { Link } from "react-router-dom";
import styles from "./MainSection.module.css";

export default function MainSection() {
	return (
		<section className={styles.mainHomepageSection}>
			<div className={styles.heroImage}></div>
			<div className={styles.mainContent}>
				<h1>
					From Naboo to the Outer Rim — Corellian Engineering Excellence Now in Your Hands!
				</h1>
				<Link to="/starships" data-testid="starshipsLink">
					<button className={styles.shopBtn}>
						Explore the Galaxy — Shop Here!
					</button>
				</Link>
			</div>
		</section>
	)
};
