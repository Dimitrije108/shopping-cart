import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../../hooks/useFetchData/useFetchData';
import { ships } from '../../../shipUrls';
import ShipDetails from '../ShipDetails/ShipDetails';

export default function ShipInfoPage() {
	const [basicData, setBasicData] = useState(null);
	const [advData, setAdvData] = useState(null);
	const [error, setError] = useState(null);

	const { shipId } = useParams();

	const shipUrl = 
		`https://starwars-databank-server.vercel.app/api/v1/vehicles/${shipId}`;
	const shipDetailsUrl = ships[shipId];

	// Fetch ship data with name, image and description
	const { data: shipData, error: shipError } = useFetchData(shipUrl);
	// Fetch ship details
	const { data: shipDetails, error: shipDetailsError } = useFetchData(shipDetailsUrl);

	useEffect(() => {
			if (shipData) setBasicData(shipData[0]);
			if (shipError) setError(shipError);
			if (shipDetails) setAdvData(shipDetails[0].result.properties);
			if (shipDetailsError) setError(shipDetailsError);
		}, [
			shipUrl, shipDetailsUrl, 
			shipData, shipError, 
			shipDetails, shipDetailsError,
		]);

	let details;
	// Depending on the status, display error, loading skeleton or data
	if (error) {
		// TODO: create a separate error component with reload button, and homepage button
		details = <h1>Oops! Something went wrong. Server failed to load data.</h1>;
	} else if (basicData && advData) {
		details = 
			<ShipDetails
				basic={basicData}
				details={advData}
			/>
	} else {
		details = <div>Loading...</div>
	}

  return (
		<div>{details}</div>
	)
};