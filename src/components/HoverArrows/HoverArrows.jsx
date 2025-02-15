import PropTypes from 'prop-types';

export default function HoverArrows({ 
	showDetails, 
	arrow, 
	width = 15, 
	height = 15, 
}) {
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

HoverArrows.propTypes = {
	showDetails: PropTypes.string.isRequired,
	arrow: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};
