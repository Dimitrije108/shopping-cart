import { useState, useEffect } from "react";
// Custom hook to fetch API data from an array
export default function useFetchData(arr) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	// 4 hours in miliseconds
	const cacheDuration = 4 * 60 * 60 * 1000;

  useEffect(() => {
		// Turn param into an array if it isn't already
		const urls = Array.isArray(arr) ? arr : [arr];
		const controller = new AbortController();

		const fetchData = async () => {
			// Fetch all urls from the array simultaneously
			Promise
				.all(
					urls.map((url) => {
						// Check and return data if it is cached
						const cached = localStorage.getItem(url);
						if (cached) {
							const { data, timestamp } = JSON.parse(cached);
							// Return data if 4h haven't expired
							if (Date.now() - timestamp < cacheDuration) {
								return data;
							}
						};
						// If it is not cached fetch and store in localStorage
						return fetch(url, { signal: controller.signal })
							.then((resp) => {
								if (!resp.ok) {
									throw new Error(`Status: ${resp.status} ${resp.statusText}`);
								}
								return resp.json();
							})
							.then((data) => {
								// Store fetched data in localStorage
								localStorage.setItem(url, JSON.stringify({ data, timestamp: Date.now() }));
								return data;
							})
							.catch((error) => {
								if (error.name === "AbortError") {
									console.log("Aborted");
									return null;
								}
								return { error: error.message, url };
							})
					})
				).then((resp) => {
					const filterAbort = resp.filter((r) => r !== null);
					
					const successes = filterAbort.filter((r) => !r.error);
					if (successes.length > 0) {
						setData(successes);
						setError(null);
					}

					const failures = filterAbort.filter((r) => r.error);
					if (failures.length > 0) {
						setError(failures);
						setData(null);
					} 
				})
				.finally(() => setLoading(false));
		}

		fetchData();

		return () => controller.abort();
  }, [JSON.stringify(arr)]);

  return { data, error, loading };
};
