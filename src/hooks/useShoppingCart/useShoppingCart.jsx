import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
  cart: null,
  addToCart: () => {},
});
// Shopping cart functionality passed on to all components 
// via context provider
export function useShoppingCart() {
	const [cart, setCart] = useState([]);
	const [limitExceeded, setLimitExceeded] = useState(false);
	// Warning message for exceeding the ship quantity limit
	const limitExceededMsg = 
		<p>For orders larger than 20 ships per model please contact us directly</p>;
	// Add an item or adjust it's quantity
	const addToCart = (item) => {
		setLimitExceeded(false);
		// check if the provided item is already inside the cart
		const isDuplicate = cart.find((ship) => ship.id === item.id);
		// handle duplicate items
		if (isDuplicate) {
			// handle exceeding item quantity
			if (isDuplicate.quantity + item.quantity > 20) {
				setLimitExceeded(true);
				return;
			};
			// adjust quantity accordingly
			const addQuantity = cart.map((ship) => {
				if (ship.id === item.id) {
					return { ...ship, quantity: ship.quantity + item.quantity };
				}
				return ship;
			});
			setCart(addQuantity);
		} else {
			// add unique item to the cart
			setCart([...cart, item]);
		}
	};
	// Remove item instance from the cart
	const removeFromCart = (id) => {
		const removed = cart.filter((ship) => ship.id !== id);
		setCart(removed);
	};
	// adjust quantity accordingly
	const adjustItemQuantity = (id, quan) => {
		const adjusteQuan = cart.map((ship) => {
			if (ship.id === id) {
				return { ...ship, quantity: quan };
			}
			return ship;
		});
		setCart(adjusteQuan);
	}

	return { 
		cart, 
		limitExceeded, 
		limitExceededMsg, 
		addToCart, 
		removeFromCart,
		adjustItemQuantity,
	};
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;