import { Link } from "react-router-dom";
import { useCartContext } from "../../../App";
import styles from "./ShipCard.module.css";
// Create a ship card component
export default function ShipCard({ id, category, name, img, price }) {
	const { addToCart } = useCartContext();
	// Create link to view ship details
	const linkTo = `/starships/${category}/${id}`;
	// For instances where price returns "unknown"
	const truePrice = price === "unknown" 
		? "Price on Request" 
		: price;

	return (
		<Link to={linkTo}>
			<div className={styles.shipCard}>
				<div className={styles.showDetails}>
					<img 
						className={styles.arrow} 
						src="/src/assets/right-arrow.svg" 
						width={15} 
						height={15} 
					/>
					<img 
						className={styles.arrow} 
						src="/src/assets/right-arrow.svg" 
						width={15} 
						height={15} 
					/>
					<img 
						className={styles.arrow} 
						src="/src/assets/right-arrow.svg" 
						width={15} 
						height={15} 
					/>
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
							<div>{truePrice}</div>
							{truePrice !== "Price on Request" && <p>credits</p>}
						</div>
						<button onClick={addToCart}>ADD</button>
					</div>
				</div>
			</div>
		</Link>
	)
};
