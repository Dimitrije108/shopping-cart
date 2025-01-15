import { useState, createContext, useContext } from 'react';

const PopupContext = createContext({
	popups: null,
	addPopup: () => {},
	removeTimer: () => {},
	resetTimer: () => {},
});
// Shopping cart functionality passed on to all components 
// via context provider
export function useAddToCartPopup() {
	const [popups, setPopups] = useState([]);
	// Store popup timers
	const [popupTimers, setPopupTimers] = useState(new Map());
	// Remove a popup and execute a remove popup animation
	const removePopup = (id) => {
		if (!popupTimers.has(id)) {
			// Change isExiting to true which should start the exit animation
			setPopups((prevPopups) => prevPopups.map((popup) => {
				if (popup.id === id) {
					 return { ...popup, isExiting: true };
				}
				return popup;
			}));
			// Remove the popup after exit animation ends
			setTimeout(() => {
				setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== id));
			}, 900);
		};

		setPopupTimers((prevTimers) => {
			const newTimers = new Map(prevTimers);
			if (newTimers.has(id)) {
				clearTimeout(newTimers.get(id));
				newTimers.delete(id);
			};
			return newTimers;
		});
	};
	// Add a new 'add to cart' popup
	const addPopup = (quantity, name) => {
		const id = crypto.randomUUID();
		const newPopup = { id, quantity, name, isExiting: false };

		setPopups((prevPopups) => [...prevPopups, newPopup]);
		// Set an initial 3s timer to remove the popup
		const timer = setTimeout(() => {
			removePopup(id);
		}, 3000);

		setPopupTimers((prevTimers) => {
			const newTimers = new Map(prevTimers);
			newTimers.set(id, timer);
			return newTimers;
		})
	};
	// Remove the timer when user hovers the popup
	const removeTimer = (id) => {
		setPopupTimers((prevTimers) => {
			const newTimers = new Map(prevTimers);

			if (newTimers.has(id)) {
				clearTimeout(newTimers.get(id));
				newTimers.delete(id);
			}

			return newTimers;
		})
	};
	// Reset the timer upon "onMouseLeave" event
	const resetTimer = (id) => {
		// Set a new, shorter, timer to remove the popup
		const timer = setTimeout(() => {
			removePopup(id);
		}, 2000);
		// Reset the timer
		setPopupTimers((prevTimers) => {
			const newTimers = new Map(prevTimers);

			if (newTimers.has(id)) {
				clearTimeout(newTimers.get(id));
			}

			newTimers.set(id, timer);
			return newTimers;
		})
	};

	return { 
		popups, 
		addPopup, 
		removeTimer, 
		resetTimer,
	};
};

export const useCartPopup = () => useContext(PopupContext);

export default PopupContext;