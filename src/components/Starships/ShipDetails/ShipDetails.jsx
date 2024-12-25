import styles from "./ShipDetails.module.css";

export default function ShipDetails({ basic, details }) {
	const truePrice = details.cost_in_credits === "unknown" 
		? "Price on Request" 
		: details.cost_in_credits;

  return (
		<div className={styles.shipDetailsCont}>
			<div className={styles.leftCont}>
				<div className={styles.imgCont}>
					<img 
						src={basic.image}
						height={400}
					/>
				</div>
				<div className={styles.priceAndDetailsCont}>
					<div>
						<div>
							<div>{truePrice}</div>
							{truePrice !== "Price on Request" && <p>credits</p>}
						</div>
						<button>ADD SHIP</button>
					</div>
					<div className={styles.detailsCont}>
						<div>
							<p>Model: </p>
							<div>{details.model}</div>
						</div>
						<div>
							<p>Starship class: </p>
							<div>{details.straship_class}</div>
						</div>
						<div>
							<p>Manufacturer: </p>
							<div>{details.manufacturer}</div>
						</div>
						<div>
							<p>Length: </p>
							<div>{details.length}</div>
						</div>
						<div>
							<p>Crew: </p>
							<div>{details.crew}</div>
						</div>
						<div>
							<p>Passengers: </p>
							<div>{details.passengers}</div>
						</div>
						<div>
							<p>Max athmospheric speed: </p>
							<div>{details.max_atmosphering_speed}</div>
						</div>
						<div>
							<p>Hyperdrive rating: </p>
							<div>{details.hyperdrive_rating}</div>
						</div>
						<div>
							<p>MGLT: </p>
							<div>{details.MGLT}</div>
						</div>
						<div>
							<p>Cargo capacity: </p>
							<div>{details.cargo_capacity}</div>
						</div>
						<div>
							<p>Consumables: </p>
							<div>{details.consumables}</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.rightCont}>
				<h1>{basic.name}</h1>
				<p>{basic.description}</p>
			</div>
		</div>
	)
};