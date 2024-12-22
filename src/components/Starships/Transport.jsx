import { transportShips, transportShipDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Transport() {
  return (
		<DisplayShips 
			basicDataArr={transportShips}
			advDataArr={transportShipDetails}
			shipType={"Transport"}
		/>
	)
};