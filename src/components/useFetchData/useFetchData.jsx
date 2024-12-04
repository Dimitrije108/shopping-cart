import { useState, useEffect } from "react";
// Custom hook to fetch API data
export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			fetch(url, controller.signal)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Status: ${response.status} ${response.statusText}`);
					}
					return response.json();
				})
				.then((response) => setData(response))
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
		
  }, [url]);

  return { data, error, loading };
};

// Provider Pattern