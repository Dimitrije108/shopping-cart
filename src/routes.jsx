import StarWarsShipyard from "./StarWarsShipyard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ShipStore from "./components/ShipStore";
import Contact from "./components/Contact";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
	{
		path: "/",
		element: <StarWarsShipyard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "ship-store", 
				element: <ShipStore />,
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