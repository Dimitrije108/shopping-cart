import { useCartContext } from '../../hooks/useShoppingCart/useShoppingCart';
import CartItem from './CartItem/CartItem';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
	const { cart } = useCartContext();

  return (
		<>
			<h1>Shopping Cart</h1>
			{cart.map((ship) => {
				return (
					<CartItem
						key={ship.id}
						id={ship.id}
						img={ship.img}
						name={ship.name}
						price={ship.price}
						shipQuantity={ship.quantity}
					/>
				)
			})}
			{/* total price of all ships:
			1. iterate over cart and for each ship do quantity x price
			2. add all prices together, maybe via reduce method? */}
		</>
	)
};
