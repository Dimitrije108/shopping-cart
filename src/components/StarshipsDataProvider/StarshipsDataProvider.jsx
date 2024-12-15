import { useState, createContext, useContext, useEffect  } from "react";
import useFetchStarships from "../useFetchStarships/useFetchStarships";

const Context = createContext();
// Fetching data and using the provider pattern
export const StarshipDataProvider = ({ children }) => {
	const [starships, setStarships] = useState(null);

	const { data, error } = useFetchStarships();

	useEffect(() => {
		if (data && data.length > 0) {
			setStarships(data);
			console.log(data);
		}
	}, [data]);

	return (
		<Context.Provider value={{starships, error}}>
			{children}
		</Context.Provider>
	)
};

export const useStarships = () => useContext(Context);