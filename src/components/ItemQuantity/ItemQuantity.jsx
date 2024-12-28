import styles from "./ItemQuantity.module.css";

export default function ItemQuantity({ 
	quantity, 
	increase, 
	decrease, 
	change, 
	reset 
}) {
	return (
		<div className={styles.cont}>
			<button 
				className={styles.leftBtn}
				onClick={decrease}
			>-</button>
			<input 
				className={styles.quantityInput}
				type="number"
				value={quantity}
				min={1}
				max={20}
				onChange={change}
				onBlur={reset}
			>
			</input>
			<button
				className={styles.rightBtn}
				onClick={increase}
			>+</button>
		</div>
	)
}
