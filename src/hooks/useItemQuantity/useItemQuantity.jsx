import { useState } from 'react';

export default function useItemQuantity(initQuan = 1, maxQuan = 20) {
	const [quantity, setQuantity] = useState(initQuan);

	function increaseQuantity() {
		if (quantity < maxQuan) {
			setQuantity(quantity + 1);
		}
	};

	function decreaseQuantity() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	function changeQuantity(e) {
		const value = e.target.value;
		// Set the input to empty if user inputs the value manually
		if (value === "") {
			setQuantity("");
		}
		// Set the input value
		if (value > 0 && value <= maxQuan) {
			setQuantity(Number(value));
		}
	};
	// Reset the value back to 1 if input field has been left empty
	function resetQuantity() {
		if (quantity === "") {
			setQuantity(1);
		}
	};

	return { 
		quantity, 
		increaseQuantity, 
		decreaseQuantity, 
		changeQuantity, 
		resetQuantity 
	};
}
