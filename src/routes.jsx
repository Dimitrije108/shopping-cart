import { App } from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Starships from "./components/Starships/Starships";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import Capital from "./components/Starships/Capital";
import Transport from "./components/Starships/Transport";
import Starfighter from "./components/Starships/Starfighter";
import ShipDetails from "./components/Starships/ShipDetails/ShipDetails";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "starships", 
				element: <Starships />,
				children: [
					{
						path: "capital", 
						element: <Capital />,
					},
					{
						path: "transport", 
						element: <Transport />,
					},
					{
						path: "starfighter", 
						element: <Starfighter />,
					},
					{
						path: "capital/:ship", 
						element: <ShipDetails />,
					},
					{
						path: "transport/:ship", 
						element: <ShipDetails />,
					},
					{
						path: "starfighter/:ship", 
						element: <ShipDetails />,
					},
				],
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "shopping-cart",
				element: <ShoppingCart />,
			},
		]
	},
];

export default routes;