import { useState } from "react";
import styles from "./ShipDetails.module.css";
import ItemQuantity from "../../../ItemQuantity/ItemQuantity";
import formatNumber from "../../../../formatNumber";
import { useCartContext } from "../../../../App";

export default function ShipDetails({ basic, details }) {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCartContext();

	function increaseQuantity() {
		if (quantity < 20) {
			setQuantity(quantity + 1);
		}
	}

	function decreaseQuantity() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	function changeQuantity(e) {
		const value = e.target.value;
		// Set the input to empty if user inputs the value manually
		if (value === "") {
			setQuantity("");
		}
		// Set the input value
		if (value > 0 && value <= 20) {
			setQuantity(Number(value));
		}
	}

	function resetQuantity() {
		console.log("does it trigger")
		// Reset the value back to 1 if it was left empty
		if (quantity === "") {
			setQuantity(1);
		}
	}
	// Convert all unknown, empty or n/a values into N/A for consistency
	const info = Object.fromEntries(
		Object.entries(details).map(([key, val]) => {
			if (
				val === "" || 
				val === "unknown" ||
				val === "n/a"
			) {
				return [key, "N/A"];
			} else {
				return [key, val];
			}
	}));
	// Convert unknown price into "Price on Request" to better suit the
	// eCommerce nature of the project
	const truePrice = details.cost_in_credits === "unknown" 
		? "Price on Request" 
		: details.cost_in_credits;

	const finance = Math.trunc(truePrice / 24).toString();

  return (
		<div className={styles.shipDetailsCont}>
			<div className={styles.imgCont}>
				<img src={basic.image} />
			</div>
			<div className={styles.addCol}>
				<div  className={styles.addWrapper}>
					<div className={styles.priceCont}>
						<div>{formatNumber(truePrice)}</div>
						{truePrice !== "Price on Request" && <p>credits</p>}
					</div>
					<div className={styles.financeCont}>
						<div className={styles.financeOffer}>
							<p>Finance Offer</p>
							{truePrice !== "Price on Request" && 
								<p className={styles.offerPrice}>
									{`${formatNumber(finance)}/month`}
								</p>
							}
						</div>
						<button>Get Pre-Qualified</button>
					</div>
					<ItemQuantity 
						quantity={quantity}
						increase={increaseQuantity}
						decrease={decreaseQuantity}
						change={changeQuantity}
						reset={resetQuantity}
					/>
					<button 
						className={styles.addBtn}
						onClick={() => addToCart(quantity)}
					>ADD</button>
				</div>
			</div>
			<div className={styles.descriptionCont}>
				<h1>{basic.name}</h1>
				<p>{basic.description}</p>
			</div>
			<section className={styles.tableSection}>
				<h2>Specification</h2>
				<div  className={styles.tableCont}>
					<table className={styles.infoTable}>
						<tbody>
							<tr>
								<th>Model</th>
								<td>{info.model}</td>
							</tr>
							<tr>
								<th>Starship class</th>
								<td>{info.starship_class}</td>
							</tr>
							<tr>
								<th>Manufacturer</th>
								<td>{info.manufacturer}</td>
							</tr>
							<tr>
								<th>Length</th>
								<td>{info.length}</td>
							</tr>
							<tr>
								<th>Crew</th>
								<td>{info.crew}</td>
							</tr>
						</tbody>
					</table>
					<table className={styles.infoTable}>
						<tbody>
							<tr>
								<th>Passengers</th>
								<td>{info.passengers}</td>
							</tr>
							<tr>
								<th>Max athmospheric speed</th>
								<td>{info.max_atmosphering_speed}</td>
							</tr>
							<tr>
								<th>Hyperdrive rating</th>
								<td>{info.hyperdrive_rating}</td>
							</tr>
							<tr>
								<th>MGLT</th>
								<td>{info.MGLT}</td>
							</tr>
							<tr>
								<th>Cargo capacity</th>
								<td>{info.cargo_capacity}</td>
							</tr>
							<tr>
								<th>Consumables</th>
								<td>{info.consumables}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</div>
	)
};

// TODO: add info about financial offer, like:
// *The Estimated Monthly Payment is based on a 72-month term, a 
// down payment of $32,140, Annual Percentage Rate(APR) of 9.99%, 
// estimated taxes and fees in the amount of $289,260, and no trade-in.

// TODO: below that there can be a contact the dealer form. like:
// Contact the Dealer
// Call +1(888) 848-1168
// First Name 
// Last Name 
// Email 
// Phone Number 
// I am interested in this 2024 Aston Martin DB12

// Free Email Newsletter


// Contact me with an Insurance Quote


// Contact me with a Shipping Quote

// The finest exotic cars & sports cars for sale | duPont REGISTRYCheck Availability
// By pressing this button I agree to the Terms of Use and Privacy Policy.