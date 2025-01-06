import { Link } from "react-router-dom";
import { useCartContext } from "../../../hooks/useShoppingCart/useShoppingCart";
import formatNumber from "../../../formatNumber/formatNumber";
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
	// Ship data for the shopping cart
	const cartItemInfo = {
		id,
		img,
		name,
		price: truePrice,
		quantity: 1,
	};
	// Handle adding the ship to the shopping cart
	const handleAdd = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addToCart(cartItemInfo);
	};

	return (
		<Link to={linkTo}>
			<div className={styles.shipCard} data-testid="shipCard">
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
					data-testid="img-cont"
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
							<div>{formatNumber(truePrice)}</div>
							{truePrice !== "Price on Request" && <p>credits</p>}
						</div>
						<button 
							className={styles.addBtn}
							onClick={handleAdd}
						>
						ADD
						</button>
					</div>
				</div>
			</div>
		</Link>
	)
};
