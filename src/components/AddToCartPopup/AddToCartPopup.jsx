import { Link } from "react-router-dom";
import HoverArrows from "../HoverArrows/HoverArrows";
import styles from "./AddToCartPopup.module.css";

export default function AddToCartPopup({ 
	quantity, 
	name, 
	timer, 
	toggleVisibility 
}) {
	// Restart the timer after user stops hovering the 
	// add to cart popup
	const handleTimerReset = () => {
		timer.current = setTimeout(() => {
			toggleVisibility();
		}, 2000);
	}

	return (
		<Link 
			to="/shopping-cart" 
			className={styles.popupCont}
			onMouseEnter={() => clearTimeout(timer.current)}
			onMouseLeave={handleTimerReset}
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

		// hovering over the card will keep it from dissapearing:
		// add visibility: visible; when hovering over element
		// otherwise the parent will set visibility: hidden; after 3s

		// if 3 seconds expire and user was hovering over it
		// it will dissapear 1 sec after user stops hovering on it?
	)
}
