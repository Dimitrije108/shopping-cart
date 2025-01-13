import { useEffect, useState } from 'react';
import useFetchData from '../../../hooks/useFetchData/useFetchData';
import ShipCard from '../ShipCard/ShipCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import AddToCartPopup from '../../AddToCartPopup/AddToCartPopup';
import styles from './DisplayShips.module.css';

export default function Capital({ basicDataArr, advDataArr, shipType }) {
	const [basicData, setBasicData] = useState(null);
	const [advData, setAdvData] = useState(null);
	const [error, setError] = useState(null);
	// Add to cart popup array
	const [ popups, setPopups ] = useState([]);
	// Store popup timers
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
	// Remove a popup
	const removePopup = (id) => {
		setPopups((prevPopups) => prevPopups.filter((item) => item.id !== id));
	}
	// Add a new 'add to cart' popup
	const addPopup = (quantity, name) => {
		const id = crypto.randomUUID();
		const newPopup = { id, quantity, name };
		setPopups((prevPopups) => [...prevPopups, newPopup]);

		setTimeout(() => {
			removePopup(id);
		}, 3000);
	};

	let cards;
	// Depending on the status, display error, loading skeleton or data
	if (error) {
		// TODO: create a separate error component with reload button, and homepage button
		cards = <h1>Oops! Something went wrong. Server failed to load data.</h1>;
	} else if (basicData && advData) {
		cards = basicData.map((ship, index) => {
			const price = advData[index].result.properties.cost_in_credits || "undefined";
			return (
				<ShipCard 
					key={ship._id}
					id={ship._id}
					category={shipType.toLowerCase()}
					name={ship.name}
					img={ship.image}
					price={price}
					addPopup={addPopup}
				/>
			)
		})
	} else {
		cards = basicDataArr.map((url) => {
			return <SkeletonCard key={url} />
		})
	};
	// Display all popups
	const activePopups = popups.map((popup) => {
		return (
			<AddToCartPopup 
				key={popup.id}
				quantity={popup.quantity} 
				name={popup.name}
			/>
		)
	});

  return (
		<div>
			<h1 className={styles.sectionName}>Starships | {shipType} ships</h1>
			<div className={styles.cardsCont}>{cards}</div>
			<div>{activePopups}</div>
		</div>
	)
};