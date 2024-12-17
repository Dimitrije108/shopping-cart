import styles from "./ShipCard.module.css"
// Create a ship card component
export default function ShipCard({ name, img }) {
  return (
		<div className={styles.shipCard}>
			<div
				className={styles.imgCont}
				style={{ backgroundImage: `url(${img})` }}
			>
			</div>
			<h1 className={styles.name}>{name}</h1>
		</div>
	)
};