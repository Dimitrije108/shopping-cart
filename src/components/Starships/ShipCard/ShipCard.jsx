import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";
import { useCartPopup } from "../../../hooks/useCartPopup/useCartPopup";
import formatNumber from "../../../formatNumber/formatNumber";
import HoverArrows from "../../HoverArrows/HoverArrows";
import styles from "./ShipCard.module.css";
// Create a ship card component
export default function ShipCard({ 
	id, 
	category, 
	name, 
	img, 
	price,
}) {
	const [tooltip, setTooltip] = useState(false);
	const { addToCart, limitExceededMsg } = useCartContext();
	const { addPopup } = useCartPopup();
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
		category,
		price: truePrice,
		quantity: 1,
	};
	// Handle adding the ship to the shopping cart
	const handleAdd = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const added = addToCart(cartItemInfo);
		if (added) {
			addPopup(1, name);
		} else {
			setTooltip(true);
			setTimeout(() => {
				setTooltip(false);
			}, 3000);
		};
	};

	return (
		<Link to={linkTo}>
			<div className={styles.shipCard} data-testid="shipCard">
				<HoverArrows 
					showDetails={styles.showDetails}
					arrow={styles.arrow}
					width={15} 
					height={15}
				/>
				<div
					className={styles.imgCont}
					style={{ backgroundImage: `url(${img})` }}
					data-testid="imgCont"
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
						{tooltip && 
							<p 
								className={styles.limitExceeded}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
								}}
							>
									{limitExceededMsg}
							</p>
						}
					</div>
				</div>
			</div>
		</Link>
	)
};
