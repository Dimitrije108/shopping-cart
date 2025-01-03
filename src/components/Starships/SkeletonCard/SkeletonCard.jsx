import styles from "./SkeletonCard.module.css"
// Create a ship card component
export default function SkeletonCard() {
	return (
		<div className={styles.skelCard} data-testid="skelCard">
			<div className={styles.skelImg}></div>
			<div className={styles.infoCont}>
				<div className={styles.skelName}>
					<div className={styles.name}></div>
					<div className={styles.imperial}></div>
					<div className={styles.naboo}></div>
				</div>
				<div className={styles.buyCont}>
					<div className={styles.price}></div>
					<div className={styles.credits}></div>
					<div className={styles.addBtn}></div>
				</div>
			</div>
		</div>
	)
};