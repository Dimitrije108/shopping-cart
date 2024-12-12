import { useState, useEffect } from "react";
// Custom hook to fetch API data from an array
export default function useFetchData(arr) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
		// Turn param into an array if it isn't already
		const urls = Array.isArray(arr) ? arr : [arr];
		const controller = new AbortController();

		const fetchData = async () => {
			// Fetch all urls from the array simultaneously
			Promise
				.all(
					urls.map((url) => fetch(url, { signal: controller.signal }))
				)
				.then((resp) => Promise.all(resp.map((r) => {
					if (!r.ok) {
						throw new Error(`Status: ${r.status} ${r.statusText}`);
					}
					return r.json();
				})))
				.then((resp) => setData(resp))
				.catch((error) => {
					if (error.name === "AbortError") {
						console.log("Aborted");  
						return;
					}
					setError(error);
				})
				.finally(() => setLoading(false));
		}
		fetchData();

		return () => controller.abort();
  }, [arr]);

  return { data, error, loading };
};
