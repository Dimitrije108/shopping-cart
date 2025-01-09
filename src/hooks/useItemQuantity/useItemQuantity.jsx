import { useState } from 'react';

export default function useItemQuantity(initQuan = 1, maxQuan = 20) {
	const [quantity, setQuantity] = useState(initQuan);

	function increaseQuantity(cartChange) {
		if (quantity < maxQuan) {
			const newQuan = quantity + 1;
			setQuantity(newQuan);
			if (typeof cartChange === 'function') cartChange(newQuan);
		}
	};

	function decreaseQuantity(cartChange) {
		if (quantity > 1) {
			const newQuan = quantity - 1;
			setQuantity(newQuan);
			if (typeof cartChange === 'function') cartChange(newQuan);
		}
	};

	function changeQuantity(e, cartChange) {
		const value = e.target.value;
		// Set the input to empty if user inputs the value manually
		if (value === "") setQuantity("");
		// Set the input value
		if (value > 0 && value <= maxQuan) {
			const newQuan = Number(value);
			setQuantity(newQuan);
			if (typeof cartChange === 'function') cartChange(newQuan);
		}
	};
	// Reset the value back to 1 (i.e. input field has been left empty)
	function resetQuantity(cartChange) {
		if (quantity === "") {
			const newQuan = 1;
			setQuantity(newQuan);
			if (typeof cartChange === 'function') cartChange(newQuan);
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
