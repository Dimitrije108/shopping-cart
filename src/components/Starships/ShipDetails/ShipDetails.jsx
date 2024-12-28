import { useState } from "react";
import styles from "./ShipDetails.module.css";

export default function ShipDetails({ basic, details }) {
	const [quantity, setQuantity] = useState(1);

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

	function adjustQuantity(e) {
		const value = e.target.value;
		// Set the input to empty if user tries to write the value manually
		if (value === "") {
			setQuantity("");
		}
		// Set the inputed value
		if (value > 0 && value <= 20) {
			setQuantity(Number(value));
		}
	}

	function checkQuantity() {
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

  return (
		<div className={styles.shipDetailsCont}>
			<div className={styles.imgCont}>
				<img src={basic.image} />
			</div>
			<div className={styles.addCol}>
				<div  className={styles.addWrapper}>
					<div className={styles.priceCont}>
						<div>{truePrice}</div>
						{truePrice !== "Price on Request" && <p>credits</p>}
					</div>
					<div className={styles.financeCont}>
						<div className={styles.financeOffer}>
							<p>Finance Offer</p>
							{truePrice !== "Price on Request" && 
								<p className={styles.offerPrice}>
									{`${(truePrice / 24).toFixed(2)}/month`}
								</p>
							}
						</div>
						<button>Get Pre-Qualified</button>
					</div>
					<div className={styles.quantityCont}>
						<button 
							className={styles.quantityLeftBtn}
							onClick={decreaseQuantity}
						>-</button>
						<input 
							className={styles.quantityInput}
							type="number"
							value={quantity}
							min={1}
							max={20}
							onChange={adjustQuantity}
							onBlur={checkQuantity}
						>
						</input>
						<button
							className={styles.quantityRightBtn}
							onClick={increaseQuantity}
						>+</button>
					</div>
					<button className={styles.addBtn}>ADD</button>
				</div>
			</div>
			<div className={styles.descriptionCont}>
				<h1>{basic.name}</h1>
				<p>{basic.description}</p>
			</div>
			<table className={styles.infoTable1}>
				<thead>
					<tr>
						<th>Model</th>
						<th>Starship class</th>
						<th>Manufacturer</th>
						<th>Length</th>
						<th>Crew</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{info.model}</td>
						<td>{info.starship_class}</td>
						<td>{info.manufacturer}</td>
						<td>{info.length}</td>
						<td>{info.crew}</td>
					</tr>
				</tbody>
			</table>
			<table className={styles.infoTable2}>
				<thead>
					<tr>
						<th>Passengers</th>
						<th>Max athmospheric speed</th>
						<th>Hyperdrive rating</th>
						<th>MGLT</th>
						<th>Cargo capacity</th>
						<th>Consumables</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{info.passengers}</td>
						<td>{info.max_atmosphering_speed}</td>
						<td>{info.hyperdrive_rating}</td>
						<td>{info.MGLT}</td>
						<td>{info.cargo_capacity}</td>
						<td>{info.consumables}</td>
					</tr>
				</tbody>
			</table>
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