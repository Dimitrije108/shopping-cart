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
// TODO: Cache data after cache/memo lesson
// TODO: Maybe add loading state through this instead of using loading state 
// as standard state if data is not yet present
export default function useFetchStarships() {
	const [pageUrls, setPageUrls] = useState([]);
	const [data, setData] = useState(null);

	const baseUrl = "https://www.swapi.tech/api/starships";
	// Retrieve pageCount
	const { pageCount, error: pageCountError } = usePageCount(baseUrl);
	// Get page url's if pageCount is established
	useEffect(() => {
		if (pageCount && pageUrls.length < 1) {
			const urls = generateUrls(baseUrl, pageCount);
			setPageUrls(urls);
		}
	}, [pageCount, pageUrls]);
	// Get ship data from all pages
	const { data: pagesData, error: pagesError } = useFetchData(pageUrls);
	useEffect(() => {
		if (pagesData) {
			const shipData = pagesData.flatMap((page) => page.results);
			setData(shipData);
		}
	}, [pagesData]);

	const error = pageCountError || pagesError;

	return { data, error };
};
