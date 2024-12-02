import App from "./App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ShipStore from "./components/ShipStore";
import Contact from "./components/Contact";

const routes = [
	{
		path: "/",
		element: <App />,
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
		]
	},
];

export default routes;