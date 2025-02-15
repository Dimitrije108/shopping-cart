import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext/useCartContext";
import formatNumber from "../../../formatNumber/formatNumber";
import styles from './CartSummary.module.css';

// TODO: introduce discount functionality

export default function CartSummary() {
	const [freeShippingTooltip, setFreeShippingTooltip] = useState(false);
	const { cart } = useCartContext();

	const toggleTooltip = () => {
		setFreeShippingTooltip((prev) => !prev);
	};
	// Calculate and memoize subtotal
	const subtotal = useMemo(() => {
		return cart.reduce((total, ship) => {
			return ship.price !== "Price on Request" 
				? total + (ship.quantity * Number(ship.price)) 
				: total;
		}, 0);
	}, [cart]);
	// Calculate shipping into total cost
	const shippingCost = subtotal < 500000 && cart.length > 0
		? 25000
		: 0;
	// Calculate shipping display
	const shipping = shippingCost === 0
		? "Free"
		: formatNumber(shippingCost);
	
	const discount = 0;

	const total = subtotal + shippingCost - discount;
	
	return (
		<div className={styles.cartSummaryCont}>
			<h2 className={styles.summaryHeader}>Summary</h2>
			<div className={styles.discountWrapper}>
				<div className={styles.discountLayout}>
					<p className={styles.discount}>Discount code</p>
					<input 
						className={styles.codeInput}
						placeholder={"Type in code..."} 
					/>
				</div>
				<button className={styles.applyBtn}>Apply</button>
			</div>
			<div className={styles.costCalculation}>
				<div className={styles.wrapper}>
					<p>Subtotal</p>
					<div data-testid="subtotal">{formatNumber(subtotal)}</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.shippingCont}>
						<p>Shipping</p>
						<button 
							className={styles.infoBtn}
							onClick={toggleTooltip}
						>
							<img 
								src="/src/assets/info-circle.svg" 
								alt="free shipping tooltip" 
								width={17} 
								height={17} 
							/>
						</button>
						{freeShippingTooltip && 
							<div className={styles.freeShippingTooltip}>
								Free shipping for orders larger than 500,000 credits!
							</div>
						}
					</div>
					<div data-testid="shipping">{shipping}</div>
				</div>
				<div className={styles.wrapper}>
					<p>Discount</p>
					<div data-testid="discount">0</div>
				</div>
			</div>
			<div className={styles.totalWrapper}>
				<div className={styles.totalLayout}>
					<h3>Total</h3>
					<div 
						className={styles.totalPrice}  
						data-testid="total">
							{formatNumber(total)}
					</div>
				</div>
				{total > 0 && <span className={styles.creditsText}>credits</span>}
			</div>
			<button className={styles.checkoutBtn}>Checkout</button>
			<div className={styles.continueLink}>
				<Link to="/starships">
					Continue shopping
				</Link>
			</div>
		</div>
	)
};
