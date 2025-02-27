import { useEffect } from 'react';
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
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<div className={layout.layoutWrapper} id="starshipsSection">
			<DisplayShips 
				basicDataArr={capitalShips}
				advDataArr={capitalShipDetails}
				shipType={"Capital"}
			/>
			<hr className={layout.hrSeparator} />
			<DisplayShips 
				basicDataArr={transportShips}
				advDataArr={transportShipDetails}
				shipType={"Transport"}
			/>
			<hr className={layout.hrSeparator} />
			<DisplayShips 
				basicDataArr={starfighters}
				advDataArr={starfighterDetails}
				shipType={"Starfighter"}
			/>
		</div>
	)
};
