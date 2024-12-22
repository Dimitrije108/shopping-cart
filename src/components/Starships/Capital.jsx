import { capitalShips, capitalShipDetails } from '../../shipUrls';
import DisplayShips from './DisplayShips/DisplayShips';

export default function Capital() {
  return (
		<DisplayShips 
			basicDataArr={capitalShips}
			advDataArr={capitalShipDetails}
			shipType={"Capital"}
		/>
	)
};
