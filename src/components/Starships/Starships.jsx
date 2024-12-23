import { Outlet, useLocation } from 'react-router-dom';
import AllShips from './AllShips';

export default function Starships() {
	const {pathname} = useLocation();

  return (
		<>
			{pathname === "/starships" && <AllShips />}
			<Outlet />
		</>
	)
};
