import { useState, useEffect } from "react";
import useFetchData from "../useFetchData/useFetchData";
// Retrieve page count so all necessary pages can be fetched
function usePageCount(url) {
	const { data, error } = useFetchData(url);

	const pageCount = data ? data[0].total_pages : null;

	return { pageCount, error };
};
// Generate URL's for pages to be fetched based on page count
function generateUrls(baseUrl, pageCount) {
	if (!pageCount) return [];

	const urls = [];
	for (let i = 1; i <= pageCount; i++) {
		urls.push(`${baseUrl}?page=${i}&limit=10`);
	}
	return urls;
};

export default function useFetchStarships() {
	const [pageUrls, setPageUrls] = useState([]);
	const baseUrl = "https://www.swapi.tech/api/starships?page=1&limit=10";
	// Retrieve pageCount
	const { pageCount, error: pageCountError } = usePageCount(baseUrl);
	// Generate url's if pageCount is established
	useEffect(() => {
		if (pageCount) {
			const urls = generateUrls(baseUrl, pageCount);
			setPageUrls(urls);
		}
	}, [pageCount]);
	// Fetch all pages url's
	const { data, allPagesError } = useFetchData(pageUrls);

	const error = pageCountError || allPagesError;

	return { data, error };
};
