import { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import { capitalShips, capitalShipDetails } from '../../shipUrls';
import ShipCard from './ShipCard/ShipCard';
import SkeletonCard from './SkeletonCard/SkeletonCard';
import styles from './Starships.module.css';

export default function Capital() {
	const [basicData, setBasicData] = useState(null);
	const [advData, setAdvData] = useState(null);
	const [error, setError] = useState(null);
	// Fetch initial data with name and image
	const { data: initShips, error: initError } = useFetchData(capitalShips);
	// Fetch ship details here because price needs to be displayed on cards
	const { data: advShips, error: advError } = useFetchData(capitalShipDetails);

	useEffect(() => {
		if (initShips) setBasicData(initShips);
		if (initError) setError(initError);
		if (advShips) setAdvData(advShips);
		if (advError) setError(advError);
	}, [
		capitalShips, capitalShipDetails, 
		initShips, initError, 
		advShips, advError,
	]);

	let cards;

	if (error) {
		cards = <h1>Oops! Something went wrong. Server failed to load data.</h1>;
	} else if (basicData && advData) {
		cards = basicData.map((ship, index) => {
			const price = advData[index].result.properties.cost_in_credits;
			return (
				<ShipCard 
					key={ship._id}
					name={ship.name}
					img={ship.image}
					price={price}
				/>
			)
		})
	} else {
		cards = capitalShips.map((url) => {
			return <SkeletonCard key={url} />
		})
	}

  return (
		<div>
			<h1>Starships | Capital ships</h1>
			<div className={styles.cardsCont}>{cards}</div>
		</div>
	)
};
// Previous setup
// {/* TODO: Make a separate component for error and display a button to retry the fetch */}
// {error && <h1>Oops! Something went wrong. Server failed to load data.</h1>}
// {/* Display skeleton loader until data fetches */}
// {!data && !error && capitalShips.map((url) => {
// 	return <SkeletonCard key={url} />
// })}
// {/* Display cards once data is fetched */}
// {data && data.map((ship) => {
// 	return (
// 		<ShipCard 
// 			key={ship._id}
// 			name={ship.name}
// 			img={ship.image}
// 		/>
// 	)
// })}