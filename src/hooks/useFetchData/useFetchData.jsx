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
					urls.map((url) => 
						fetch(url, { signal: controller.signal })
							.then((resp) => {
								if (!resp.ok) {
									throw new Error(`Status: ${resp.status} ${resp.statusText}`);
								}
								return resp.json();
							})
							.catch((error) => {
								if (error.name === "AbortError") {
									console.log("Aborted");
									return null;
								}
								return { error: error.message, url };
							}))
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
