import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useCartContext } from "../../../../hooks/useCartContext/useCartContext";
import { useCartPopup } from "../../../../hooks/useCartPopup/useCartPopup";
import useItemQuantity from "../../../../hooks/useItemQuantity/useItemQuantity";
import formatNumber from "../../../../formatNumber/formatNumber";
import ItemQuantity from "../../../ItemQuantity/ItemQuantity";
import styles from "./ShipDetails.module.css";

// TODO: add info about financial offer, like:
// *The Estimated Monthly Payment is based on a 72-month term, a 
// down payment of $32,140, Annual Percentage Rate(APR) of 9.99%, 
// estimated taxes and fees in the amount of $289,260, and no trade-in.

// TODO: Link "Contact for Price" ships with contact form inside contact component

// TODO: Contact me with an Insurance Quote section for insurance

export default function ShipDetails({ basic, details }) {
	const [tooltip, setTooltip] = useState(false);

	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	const { 
		quantity, 
		increaseQuantity, 
		decreaseQuantity, 
		changeQuantity, 
		resetQuantity  
	} = useItemQuantity();

	const { addToCart, limitExceededMsg } = useCartContext();
	const { addPopup } = useCartPopup();
	// Find which category ship belongs to
	const path = window.location.pathname;
	const match = path.match(/(capital|transport|starfighter)/);
	const category = match ? match[1] : "unknown";
	// Convert unknown price into "Price on Request"
	const truePrice = details.cost_in_credits === "unknown" 
		? "Price on Request" 
		: details.cost_in_credits;

	const finance = Math.trunc(truePrice / 24).toString();
	// Ship data for the shopping cart
	const cartItemInfo = {
		id: basic._id,
		img: basic.image,
		name: basic.name,
		category,
		price: truePrice,
		quantity,
	};
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
	// Handle adding the ship to the shopping cart
	const handleAdd = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const added = addToCart(cartItemInfo);
		if (added) {
			addPopup(quantity, basic.name);
		} else {
			setTooltip(true);
			setTimeout(() => {
				setTooltip(false);
			}, 3000);
		};
	};

  return (
		<div 
			className={styles.shipDetailsWrapper}
			data-testid="shipDetails"
		>
			<div className={styles.shipDetailsCont}>
				<div className={styles.imgCont}>
					<img src={basic.image} alt={`${basic.name} starship`} />
				</div>
				<div  className={styles.addWrapper}>
					<div className={styles.priceCont}>
						<div>{formatNumber(truePrice)}</div>
						{truePrice !== "Price on Request" && <p>credits</p>}
					</div>
					<div className={styles.financeCont}>
						<div className={styles.financeOffer}>
							<p>Finance Offer</p>
							{truePrice !== "Price on Request" && 
								<p className={styles.offerPrice} data-testid="financeOffer">
									{`${formatNumber(finance)}/month`}
								</p>
							}
						</div>
						<button>Get Pre-Qualified</button>
					</div>
					<div className={styles.addCont}>
						<div className={styles.itemQuantityCont}>
							<ItemQuantity 
								quantity={quantity}
								increase={increaseQuantity}
								decrease={decreaseQuantity}
								change={changeQuantity}
								reset={resetQuantity}
							/>
						</div>
						<button 
							className={styles.addBtn}
							onClick={handleAdd}
						>Add</button>
						{tooltip && 
						<p className={styles.limitExceeded}>{limitExceededMsg}</p>}
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
		</div>
	)
};

ShipDetails.propTypes = {
	basic: PropTypes.shape({
		_id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
	}).isRequired,

	details: PropTypes.shape({
		cost_in_credits: PropTypes.string,
		model: PropTypes.string,
		starship_class: PropTypes.string,
		manufacturer: PropTypes.string,
		length: PropTypes.string,
		crew: PropTypes.string,
		passengers: PropTypes.string,
		max_atmosphering_speed: PropTypes.string,
		hyperdrive_rating: PropTypes.string,
		MGLT: PropTypes.string,
		cargo_capacity: PropTypes.string,
		consumables: PropTypes.string,
	}).isRequired,
};
