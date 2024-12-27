import { App } from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Starships from "./components/Starships/Starships";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";
import Capital from "./components/Starships/Capital";
import Transport from "./components/Starships/Transport";
import Starfighter from "./components/Starships/Starfighter";
import ShipInfoPage from "./components/Starships/ShipInfoPage/ShipInfoPage";

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
						path: "capital/:shipId", 
						element: <ShipInfoPage />,
					},
					{
						path: "transport/:shipId", 
						element: <ShipInfoPage />,
					},
					{
						path: "starfighter/:shipId", 
						element: <ShipInfoPage />,
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