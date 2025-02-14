import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AllShips from './AllShips';

export default function Starships() {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
		<>
			{pathname === "/starships" && <AllShips />}
			<Outlet />
		</>
	)
};
