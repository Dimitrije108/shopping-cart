import { useState } from 'react';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import { capitalShips } from '../../shipUrls';
import ShipCard from './ShipCard/ShipCard';
import styles from './Starships.module.css';

export default function Capital() {
	const { data, error, loading } = useFetchData(capitalShips);

	console.log(data);
	console.log(error);

  return (
		<div>
			<h1>This is Capital ships store page!</h1>
			{loading && <div>Loading...</div>}
			<div>
				{data && data.map((ship) => {
					return (
						<ShipCard 
							key={ship._id}
							name={ship.name}
							img={ship.image}
						/>
					)
				})}
			</div>
		</div>
	)
};