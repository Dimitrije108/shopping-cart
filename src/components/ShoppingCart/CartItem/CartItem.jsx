import { useCartContext } from '../../../hooks/useShoppingCart/useShoppingCart';
import useItemQuantity from '../../../hooks/useItemQuantity/useItemQuantity';
import ItemQuantity from '../../ItemQuantity/ItemQuantity';
import styles from './CartItem.module.css';

export default function CartItem({ id, img, name, price, shipQuantity }) {
	const {  
		limitExceeded, 
		limitExceededMsg, 
		removeFromCart,
	} = useCartContext();

	const {
		quantity,
		increaseQuantity, 
		decreaseQuantity, 
		changeQuantity, 
		resetQuantity,
	} = useItemQuantity(shipQuantity);

	// img and name are clickable links that lead to respective ship info pages

	return (
		<div className={styles.cartItem}>
			<div className={styles.imgCont}>
				<img src={img} alt={`${name} starship`} />
			</div>
			<div className={styles.nameCont}>
				<h2 className={styles.name}>{name}</h2> 
				<div>
					<p className={styles.imperial}>{name}</p>
					<p className={styles.naboo}>{name}</p>
				</div>
			</div>
			<ItemQuantity
				quantity={quantity}
				increase={increaseQuantity}
				decrease={decreaseQuantity}
				change={changeQuantity}
				reset={resetQuantity}
			/>
			{/* price: 2x 100,000 */}
			<div className={styles.priceCont}>
				{price === "Price on Request" ? (
					<p>{price}</p>
				) : (
					<p>{`${quantity}x ${quantity * price} credits`}</p>
				)}
			</div>
			{/* needs to show up as a warning next to a ship that user tried to add
			to the cart */}
			{/* considering quantity inside cart can be changed only via input it doesn't
			need the warning as it can't exceed the limit of 20, right? It also should 
			be put only where addToCart is called */}
			{/* {limitExceeded && limitExceededMsg} */}
		</div>
	)
};

