import { useEffect } from 'react';
import { capitalShips, capitalShipDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Capital() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<DisplayShips 
			basicDataArr={capitalShips}
			advDataArr={capitalShipDetails}
			shipType={"Capital"}
			section={"capitalSection"}
		/>
	)
};
