import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useFetchData from "../../../hooks/useFetchData/useFetchData";
import ShipCard from "../ShipCard/ShipCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import styles from "./DisplayShips.module.css";
import layout from "../../../layout.module.css";

export default function DisplayShips({ 
	basicDataArr, 
	advDataArr, 
	shipType = "default",
	section,
}) {
	const [basicData, setBasicData] = useState(null);
	const [advData, setAdvData] = useState(null);
	const [error, setError] = useState(null);
	// Fetch initial data with name and image
	const { data: initShips, error: initError } = useFetchData(basicDataArr);
	// Fetch ship details here because price needs to be displayed on cards
	const { data: advShips, error: advError } = useFetchData(advDataArr);

	useEffect(() => {
		if (initShips) setBasicData(initShips);
		if (initError) setError(initError);
		if (advShips) setAdvData(advShips);
		if (advError) setError(advError);
	}, [
		basicDataArr, advDataArr, 
		initShips, initError, 
		advShips, advError,
	]);

	let cards;
	// Depending on the status, display error, loading skeleton or data
	if (error) {
		// TODO: create a separate error component with reload button, and homepage button
		cards = <h1>Oops! Something went wrong. Server failed to load data.</h1>;
	} else if (basicData && advData) {
		cards = basicData.map((ship, index) => {
			const price = 
				advData[index].result.properties.cost_in_credits ||
				"undefined";
			return (
				<ShipCard 
					key={ship._id}
					id={ship._id}
					category={shipType.toLowerCase()}
					name={ship.name}
					img={ship.image}
					price={price}
				/>
			)
		})
	} else {
		cards = basicDataArr.map((url) => {
			return <SkeletonCard key={url} />
		})
	};

  return (
		<div 
			className={`
				${layout.layoutWrapper}
				${styles.shipTypeSection}
			`}
		>
			<h1 
				className={styles.sectionName} 
				id={section}
			>
				Starships | {shipType} ships
			</h1>
			<div className={styles.cardsCont}>{cards}</div>
		</div>
	)
};

DisplayShips.propTypes = {
	basicDataArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	advDataArr: PropTypes.arrayOf(PropTypes.string).isRequired,
	shipType: PropTypes.string,
	section: PropTypes.string,
};
