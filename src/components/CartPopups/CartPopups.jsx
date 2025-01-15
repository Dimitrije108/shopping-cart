import AddToCartPopup from "./AddToCartPopup/AddToCartPopup";
import { useCartPopup } from "../../hooks/useCartPopup/useCartPopup";

export default function CartPopups() {
	const { popups } = useCartPopup();

	return (
		<>
			{popups.map((popup) => {
				return (
					<AddToCartPopup 
						key={popup.id}
						id={popup.id}
						quantity={popup.quantity} 
						name={popup.name}
						isExiting={popup.isExiting}
					/>
				)
			})}
		</>
	)
}