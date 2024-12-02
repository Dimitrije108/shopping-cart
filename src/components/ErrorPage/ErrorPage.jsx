import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
	return (
		<div className={styles.errorCont}>
			<img 
				src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzRxZjhtcnM0Z2dwcGg2d21wdnRqYW92N3hzNGRuNTgwcnZtZ2N2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornka9rAaKRA2Rkac/giphy.gif" 
				alt="It's a trap! - Admiral Ackbar gif"
			/>
			<h1>This route doesn't exist!</h1>
			<Link to="/">
				Click here to go back to the homepage!
			</Link>
		</div>
	)
}

export default ErrorPage;