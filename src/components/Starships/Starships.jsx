import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Starships() {
  return (
		<div>
			<div>This is Starships store page!</div>
			<Outlet />
		</div>
	)
};
