export default function HoverArrows({ showDetails, arrow, width, height }) {
	return (
		<div className={showDetails}>
			<img 
				className={arrow} 
				src="/src/assets/right-arrow.svg" 
				width={width} 
				height={height} 
			/>
			<img 
				className={arrow} 
				src="/src/assets/right-arrow.svg" 
				width={width} 
				height={height} 
			/>
			<img 
				className={arrow} 
				src="/src/assets/right-arrow.svg" 
				width={width} 
				height={height} 
			/>
		</div>
	)
};