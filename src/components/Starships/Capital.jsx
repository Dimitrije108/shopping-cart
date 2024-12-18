import { useState } from 'react';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import { capitalShips } from '../../shipUrls';
import SkeletonCard from './SkeletonCard/SkeletonCard';
import ShipCard from './ShipCard/ShipCard';
import styles from './Starships.module.css';

export default function Capital() {
	const { data, error } = useFetchData(capitalShips);

  return (
		<div>
			<h1>This is Capital ships store page!</h1>
			<div>
				{/* TODO: Make a separate component for error and display a button to retry the fetch */}
				{error && <h1>Oops! Something went wrong. Server failed to load data.</h1>}
				{/* Display skeleton loader until data fetches */}
				{!data && !error && capitalShips.map((url) => {
					return <SkeletonCard key={url} />
				})}
				{/* Display cards once data is fetched */}
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