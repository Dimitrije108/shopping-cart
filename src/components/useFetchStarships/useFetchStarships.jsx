import { useState, useEffect } from "react";
import useFetchData from "../useFetchData/useFetchData";

export default function useFetchStarships() {
	const [pageCount, setPageCount] = useState(null);
	const [shipPages, setShipPages] = useState([]);
	const [shipData, setShipData] = useState(null);
  const [error, setError] = useState(null);

	const firstPage = 
		useFetchData("https://www.swapi.tech/api/starships?page=1&limit=10");
	// Retrieve page count so all necessary pages can be fetched
	useEffect(() => {
		if (firstPage.error) {
			setError(firstPage.error);
		} else if (firstPage.data) {
			setPageCount(firstPage.data[0].total_pages);
		}
  }, [firstPage]);
	// Generate URL's for pages to be fetched once page count is established
	useEffect(() => {
		if (pageCount) {
			const urls = [];
			for (let i = 1; i <= pageCount; i++) {
				urls.push(`https://www.swapi.tech/api/starships?page=${i}&limit=10`);
			}
			setShipPages([...urls]);
		}
	}, [pageCount]);
	// Fetch data for all pages once URL's are ready
	const allPages = useFetchData(shipPages);
	useEffect(() => {
		if (allPages.error) {
			setError(allPages.error);
		} else if (firstPage.data) {
			setShipData(allPages.data);
		}
	}, [allPages]);

	console.log(shipData)
	console.log(error)

	return { shipData, error };
}

// Initial State: When each card is first rendered, it is in 
// the loading state.

// Data Fetching: As each card fetches its data, it switches from the 
// loading state to either displaying the fetched data or showing an error 
// message if the fetch fails.

// Error Handling: If there is an error fetching the data for a card, you 
// can display an error message or provide a "retry" option as a pop up?

// if error: retrying typically involves calling the same fetch function
//  again with the same URL and triggering it through a button or another 
// action. The key idea is to reset the necessary states (such as loading 
// and error) when the retry button is clicked, so that the fetch attempt 
// starts fresh, and the UI can show a new loading state.