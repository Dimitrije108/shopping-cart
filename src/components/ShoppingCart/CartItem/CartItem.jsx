import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useCartContext } from '../../../hooks/useCartContext/useCartContext';
import useItemQuantity from '../../../hooks/useItemQuantity/useItemQuantity';
import ItemQuantity from '../../ItemQuantity/ItemQuantity';
import formatNumber from '../../../formatNumber/formatNumber';
import styles from './CartItem.module.css';
import trashIcon from "/src/assets/icons/trash.svg" ;

// TODO: Link "Contact for Price" ships with contact form inside contact component

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
				<div className={styles.imgCont}>
					<Link to={linkTo}>
						<img src={img} alt={`${name} starship`} />
					</Link>
				</div>
				<div className={styles.nameCont}>
					<Link to={linkTo}>
						<h2 className={styles.name}>{name}</h2> 
						<div>
							<p className={styles.imperial}>{name}</p>
							<p className={styles.naboo}>{name}</p>
						</div>
					</Link>
				</div>
				<div className={styles.quantityCont}>
					<ItemQuantity
						quantity={quantity}
						increase={() => increaseQuantity(handleQuantityChange)}
						decrease={() => decreaseQuantity(handleQuantityChange)}
						change={(e) => changeQuantity(e, handleQuantityChange)}
						reset={() => resetQuantity(handleQuantityChange)}
					/>
				</div>
				<button 
					className={styles.delBtn}
					onClick={() => removeFromCart(id)}
				>
					<img 
						src={trashIcon}
						alt="trashcan remove icon" 
						width={28} 
					/>
				</button>
				<div className={styles.priceCont}>
					{price === "Price on Request"
					? <div className={styles.price}>{price}</div>
					: <>
							<span className={styles.itemQuantity}>
								{`${quantity}x `}
							</span>
							<div className={styles.price}>
								{formatNumber(quantity * price)}
							</div>
						</>
					}
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
