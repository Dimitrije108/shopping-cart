import styles from "./ShipCard.module.css"
// Create a ship card component
export default function ShipCard({ name, img, price }) {
	return (
		<div className={styles.shipCard}>
			<div
				className={styles.imgCont}
				style={{ backgroundImage: `url(${img})` }}
			>
			</div>
			<div className={styles.infoCont}>
				<div className={styles.nameCont}>
					<h2 className={styles.name}>{name}</h2> 
					<div>
						<p className={styles.imperial}>{name}</p>
						<p className={styles.naboo}>{name}</p>
					</div>
				</div>
				<div className={styles.priceCont}>
					<div className={styles.price}>{price}</div>
					<div className={styles.addCont}>
						<p>credits</p>
						<button>ADD</button>
					</div>
				</div>
			</div>
		</div>
	)
};
