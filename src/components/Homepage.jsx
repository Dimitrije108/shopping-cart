import { useState } from 'react';
import useFetchData from '../hooks/useFetchData/useFetchData';
import { featureShips } from '../shipUrls';

export default function Homepage() {
	const { data, error } = useFetchData(featureShips);

  return (
		<div>Welcome home, may the force be with you!</div>
	)
};
