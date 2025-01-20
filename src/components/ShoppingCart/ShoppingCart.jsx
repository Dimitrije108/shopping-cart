import { Link } from "react-router-dom";
import { useCartContext } from '../../hooks/useCartContext/useCartContext';
import CartItem from './CartItem/CartItem';
import CartSummary from './CartSummary/CartSummary';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
	const { cart } = useCartContext();
	let cartItems;

	if (cart.length < 1) {
		cartItems = 
			<div className={styles.emptyCartCont}>
				<div>
					<img src="/src/assets/cart.svg" alt="shopping cart icon" width={150} height={150} />
				</div>
				<p>Seems like you haven't added any items to your cart.</p>
				<Link 
					to={"/starships"} 
					className={styles.shopLink}>
						Shop here!
				</Link>
			</div>
	} else {
		cartItems = cart.map((ship) => (
				<CartItem
					key={ship.id}
					id={ship.id}
					img={ship.img}
					name={ship.name}
					category={ship.category}
					price={ship.price}
					shipQuantity={ship.quantity}
				/>
		))
	};

  return (
		<>
			<h1>Shopping Cart</h1>
			<div className={styles.cartWrapper}>
				<div>{cartItems}</div>
				<CartSummary />
			</div>
		</>
	)
};
