import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext({
  cart: null,
	limitExceededMsg: "", 
  addToCart: () => {},
	removeFromCart: () => {},
});
// Shopping cart functionality passed on to all components 
// via context provider
export function useShoppingCart() {
	// Retrieve cart from storage if available
	const storedCart = JSON.parse(localStorage.getItem('cart'));
	const initCart = storedCart ? storedCart : [];

	const [cart, setCart] = useState(initCart);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
	// Warning message for exceeding the ship quantity limit
	const limitExceededMsg = 
		"For orders larger than 20 ships per model please contact us directly!";
	// Add an item or adjust it's quantity
	const addToCart = (item) => {
		// check if the provided item is already inside the cart
		const isDuplicate = cart.find((ship) => ship.id === item.id);
		// handle duplicate items
		if (isDuplicate) {
			const totalQuantity = isDuplicate.quantity + item.quantity;
			// handle exceeding item quantity
			if (totalQuantity > 20) {
				return false;
			};
			// adjust quantity accordingly
			const addQuantity = cart.map((ship) => {
				if (ship.id === item.id) {
					return { ...ship, quantity: ship.quantity + item.quantity };
				}
				return ship;
			});
			setCart(addQuantity);
			return true;
		} else {
			// add unique item to the cart
			setCart([...cart, item]);
			return true;
		};
	};
	// Remove item instance from the cart
	const removeFromCart = (id) => {
		const removed = cart.filter((ship) => ship.id !== id);
		setCart(removed);
	};

	return { 
		cart, 
		limitExceededMsg, 
		addToCart, 
		removeFromCart,
	};
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;