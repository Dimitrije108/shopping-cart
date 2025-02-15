import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useCartContext } from '../../../hooks/useCartContext/useCartContext';
import useItemQuantity from '../../../hooks/useItemQuantity/useItemQuantity';
import ItemQuantity from '../../ItemQuantity/ItemQuantity';
import formatNumber from '../../../formatNumber/formatNumber';
import styles from './CartItem.module.css';

export default function CartItem({ 
	id, 
	img, 
	name = "Default", 
	category = "default", 
	price = "100000", 
	shipQuantity = 1,
}) {
	const { 
		removeFromCart, 
		adjustItemQuantity, 
	} = useCartContext();

	const {
		quantity,
		increaseQuantity, 
		decreaseQuantity, 
		changeQuantity, 
		resetQuantity,
	} = useItemQuantity(shipQuantity);

	const handleQuantityChange = (newQuan) => {
		adjustItemQuantity(id, newQuan);
	};

	const linkTo = `/starships/${category}/${id}`;

	return (
		<div className={styles.cartItemCont} data-testid="cartItem">
			<hr className={styles.horizontalLine} />
			<div className={styles.cartItem}>
				<Link to={linkTo}>
					<div className={styles.imgCont}>
						<img src={img} alt={`${name} starship`} />
					</div>
				</Link>
				<Link to={linkTo}>
					<div className={styles.nameCont}>
						<h2 className={styles.name}>{name}</h2> 
						<div>
							<p className={styles.imperial}>{name}</p>
							<p className={styles.naboo}>{name}</p>
						</div>
					</div>
				</Link>
				<ItemQuantity
					quantity={quantity}
					increase={() => increaseQuantity(handleQuantityChange)}
					decrease={() => decreaseQuantity(handleQuantityChange)}
					change={(e) => changeQuantity(e, handleQuantityChange)}
					reset={() => resetQuantity(handleQuantityChange)}
				/>
				<div className={styles.priceCont}>
					<button 
						className={styles.delBtn}
						onClick={() => removeFromCart(id)}
					>
						<img src="/src/assets/trash.svg" alt="trashcan remove icon" width={28} height={28} />
					</button>
					<p>
						{price === "Price on Request" 
						? price
						: <>
								<span className={styles.itemQuantity}>
									{`${quantity}x `}
								</span>
								{formatNumber(quantity * price)}
							</>
						}
					</p>
				</div>
			</div>
		</div>
	)
};

CartItem.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string,
	category: PropTypes.string,
	price: PropTypes.string,
	shipQuantity: PropTypes.number,
};
