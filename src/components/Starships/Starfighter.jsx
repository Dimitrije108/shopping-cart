import { starfighters, starfighterDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Starfighter() {
  return (
		<DisplayShips 
			basicDataArr={starfighters}
			advDataArr={starfighterDetails}
			shipType={"Starfighter"}
		/>
	)
};