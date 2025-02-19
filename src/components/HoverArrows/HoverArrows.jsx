import PropTypes from 'prop-types';
import rightArrow from "/src/assets/icons/right-arrow.svg";

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
				src={rightArrow}
				width={width} 
				height={height} 
			/>
			<img 
				className={arrow} 
				src={rightArrow}
				width={width} 
				height={height} 
			/>
			<img 
				className={arrow} 
				src={rightArrow}
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
