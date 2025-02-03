import { 
	capitalShips, 
	capitalShipDetails,
	transportShips,
	transportShipDetails,
	starfighters,
	starfighterDetails,
} from '../../shipUrls';
import DisplayShips from "./DisplayShips/DisplayShips";
import layout from "../../layout.module.css";

export default function AllShips() {
  return (
		<div className={layout.layoutWrapper}>
			<DisplayShips 
				basicDataArr={capitalShips}
				advDataArr={capitalShipDetails}
				shipType={"Capital"}
			/>
			<hr />
			<DisplayShips 
				basicDataArr={transportShips}
				advDataArr={transportShipDetails}
				shipType={"Transport"}
			/>
			<hr />
			<DisplayShips 
				basicDataArr={starfighters}
				advDataArr={starfighterDetails}
				shipType={"Starfighter"}
			/>
		</div>
	)
};
