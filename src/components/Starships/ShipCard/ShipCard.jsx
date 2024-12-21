import styles from "./ShipCard.module.css"
// Create a ship card component
export default function ShipCard({ name, img, price }) {
	return (
		<div className={styles.shipCard}>
			<div className={styles.showDetails}>
				<img className={styles.arrow} src="/src/assets/right-arrow.svg" width={15} height={15} />
				<img className={styles.arrow} src="/src/assets/right-arrow.svg" width={15} height={15} />
				<img className={styles.arrow} src="/src/assets/right-arrow.svg" width={15} height={15} />
			</div>
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
				<div className={styles.buyCont}>
					<div className={styles.priceCont}>
						<div>{price}</div>
						<p>credits</p>
					</div>
					<button>ADD</button>
				</div>
			</div>
		</div>
	)
};
