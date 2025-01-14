import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HoverArrows from "../HoverArrows/HoverArrows";
import styles from "./AddToCartPopup.module.css";

export default function AddToCartPopup({ 
	id,
	quantity, 
	name,
	removeTimer,
	resetTimer,
}) {
	return (
		<Link 
			to="/shopping-cart" 
			className={styles.popupCont}
			onMouseEnter={() => removeTimer(id)}
			onMouseLeave={() => resetTimer(id)}
		>
			<div>
				<p>
					{quantity}x <span className={styles.name}>{name}</span>
				</p>
				<div className={styles.succesfullyAddedCont}>
					<p>succesfully added to cart!</p>
					<HoverArrows 
						showDetails={styles.showDetails}
						arrow={styles.arrow}
						width={12} 
						height={12}
					/>
				</div>
			</div>
		</Link>
	)
};
