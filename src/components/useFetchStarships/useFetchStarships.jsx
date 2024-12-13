import { useState, useEffect } from "react";
import useFetchData from "../useFetchData/useFetchData";
import shipUrls from "./shipUrls";
// TODO: Cache data after cache/memo lesson
// TODO: Maybe add loading state through this instead of using loading state 
// as standard state if data is not yet present
export default function useFetchStarships() {
	const [data, setData] = useState(null);
	// Fetch ship data
	const { data: shipData, error } = useFetchData(shipUrls);
	useEffect(() => {
		if (shipData) {
			setData(shipData);
		}
	}, [shipData]);

	return { data, error };
};
