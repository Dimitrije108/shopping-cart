// Create a ship card component
export default function ShipCard({ name, img }) {
  return (
		<div
			style={{ backgroundImage: `url(${img})` }}
		>
			<h1>{name}</h1>
		</div>
	)
};