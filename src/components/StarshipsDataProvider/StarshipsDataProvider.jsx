import { useState, createContext, useContext, useEffect  } from "react";

const Context = createContext();
// Fetching data and using the provider pattern
export const StarshipDataProvider = ({ children }) => {
	const [starships, setStarships] = useState([]);

	useEffect(() => {
		if (data && data.length > 0) {
			setStarships(data);
		}
	}, [data]);

	console.log(data);

	return (
		<Context.Provider value={starships}>
			{children}
		</Context.Provider>
	)
};

export const useStarships = () => useContext(Context);