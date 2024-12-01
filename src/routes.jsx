import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import ShipStore from "./components/ShipStore";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "homepage",
		element: <Homepage />,
	},
	{
		path: "ship-store",
		element: <ShipStore />,
	},
];

export default routes;