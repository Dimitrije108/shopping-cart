import { useEffect } from 'react';
import { starfighters, starfighterDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Starfighter() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<DisplayShips 
			basicDataArr={starfighters}
			advDataArr={starfighterDetails}
			shipType={"Starfighter"}
			section={"starfighterSection"}
		/>
	)
};