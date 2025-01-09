import { useCartContext } from '../../../hooks/useShoppingCart/useShoppingCart';
import useItemQuantity from '../../../hooks/useItemQuantity/useItemQuantity';
import ItemQuantity from '../../ItemQuantity/ItemQuantity';
import styles from './CartItem.module.css';

export default function CartItem({ id, img, name, price, shipQuantity }) {
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

	// img and name are clickable links that lead to respective ship info pages

	return (
		<div  className={styles.cartItemCont}>
			<hr />
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
					increase={() => increaseQuantity(handleQuantityChange)}
					decrease={() => decreaseQuantity(handleQuantityChange)}
					change={(e) => changeQuantity(e, handleQuantityChange)}
					reset={() => resetQuantity(handleQuantityChange)}
				/>
				<div className={styles.priceCont}>
					<button 
						className={styles.delBtn}
						onClick={() => removeFromCart(id)}
					>X</button>
					<p>
						{price === "Price on Request" 
						? price
						: <>
								<span className={styles.itemQuantity}>{`${quantity}x `}</span>{quantity * price}
							</>
						}
					</p>
				</div>
				{/* needs to show up as a warning next to a ship that user tried to add
				to the cart */}
				{/* considering quantity inside cart can be changed only via input it doesn't
				need the warning as it can't exceed the limit of 20, right? It also should 
				be put only where addToCart is called */}
				{/* {limitExceeded && limitExceededMsg} */}
			</div>
		</div>
	)
};

