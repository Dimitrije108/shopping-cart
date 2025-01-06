import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
  cart: null,
  addToCart: () => {},
});
// Shopping cart functionality passed on to all components 
// via context provider
export function useShoppingCart() {
	const [cart, setCart] = useState([]);
	const exceededQuantity = 
		"For orders larger than 20 ships per model please contact us directly";
	// Add an item or adjust it's quantity
	const addToCart = (item) => {
		// check if the provided item is already inside the cart
		const isDuplicate = cart.find((ship) => ship.id === item.id);
		// handle duplicate items
		if (isDuplicate) {
			// handle exceeding item quantity
			if (isDuplicate.quantity + item.quantity > 20) {
				return exceededQuantity;
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
	const removeFromCart = (item) => {
		const removed = cart.filter((ship) => ship.id !== item.id);
		setCart(removed);
	};

	return { cart, addToCart, removeFromCart }
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;