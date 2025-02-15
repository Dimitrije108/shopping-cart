import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useCartPopup } from "../../../hooks/useCartPopup/useCartPopup";
import HoverArrows from "../../HoverArrows/HoverArrows";
import styles from "./AddToCartPopup.module.css";

export default function AddToCartPopup({ 
	id,
	quantity = 1, 
	name = "Default",
	isExiting = false,
}) {
	const { removeTimer, resetTimer } = useCartPopup();
	
	return (
		<Link 
			to="/shopping-cart" 
			className={`${styles.popupCont} ${isExiting ? styles.exiting : ''}`}
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

AddToCartPopup.propTypes = {
	id: PropTypes.string.isRequired,
	quantity: PropTypes.number,
	name: PropTypes.string,
	isExiting: PropTypes.bool,
};
