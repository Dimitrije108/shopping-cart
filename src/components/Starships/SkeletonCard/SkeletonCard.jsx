import styles from "./SkeletonCard.module.css"
// Create a ship card component
export default function SkeletonCard() {
	return (
		<div className={styles.skelCard}>
			<div
				className={styles.skelImg}
			>
			</div>
			<div className={styles.skelName}></div>
		</div>
	)
};