import { useEffect } from 'react';
import { transportShips, transportShipDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Transport() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<DisplayShips 
			basicDataArr={transportShips}
			advDataArr={transportShipDetails}
			shipType={"Transport"}
			section={"transportSection"}
		/>
	)
};