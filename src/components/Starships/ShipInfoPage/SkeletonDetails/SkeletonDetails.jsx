import styles from "./SkeletonDetails.module.css"
// Create a ship card component
export default function SkeletonDetails() {
	return (
		<div className={styles.skelPage}  data-testid="skelDetails">
			<div className={styles.skelImg}></div>
			<div  className={styles.descCont}>
				<div className={styles.name}></div>
				<div className={styles.description}></div>
			</div>
			<div className={styles.price}></div>
			<div  className={styles.tableCont}>
				<div className={styles.spec}></div>
				<div className={styles.skelTable}>
					<div className={styles.table}></div>
					<div className={styles.table}></div>
				</div>
			</div>
		</div>
	)
};