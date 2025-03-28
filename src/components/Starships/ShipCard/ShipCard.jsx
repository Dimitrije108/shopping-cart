import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";
import { useCartPopup } from "../../../hooks/useCartPopup/useCartPopup";
import formatNumber from "../../../formatNumber/formatNumber";
import HoverArrows from "../../HoverArrows/HoverArrows";
import styles from "./ShipCard.module.css";
// Create a ship card component
export default function ShipCard({ 
	id, 
	category = "default", 
	name = "Default", 
	img, 
	price = "100000",
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
		<Link to={linkTo} className={styles.linkWrapper}>
			<div className={styles.shipCard} data-testid="shipCard">
				<HoverArrows 
					showDetails={styles.showDetails}
					arrow={styles.arrow}
					width={15} 
					height={15}
				/>
				<div 
					className={styles.imgCont}
					data-testid="imgCont"
				>
					<img src={img} alt="starship" />
				</div>
				<div className={styles.infoCont}>
					<div className={styles.nameCont}>
						<h2 className={styles.name}>{name}</h2> 
						<div>
							<p className={styles.imperial} title="Imperial">{name}</p>
							<p className={styles.naboo} title="Naboo">{name}</p>
						</div>
					</div>
					<div className={styles.priceCont}>
						<div>{formatNumber(truePrice)}</div>
						{truePrice !== "Price on Request" && <p>credits</p>}
					</div>
					<div className={styles.addToCartCont}>
						<button 
							className={styles.addBtn}
							onClick={handleAdd}
						>
							Add
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

ShipCard.propTypes = {
	id: PropTypes.string.isRequired,
	category: PropTypes.string,
	name: PropTypes.string,
	img: PropTypes.string.isRequired,
	price: PropTypes.string,
};
