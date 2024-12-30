export default function formatNumber(number) {
	// Check if passed number is a number
	if (number === "Price on Request") return number;
	// Format the number
	const reversed = number.split('').reverse();
	const formatNumber = reversed.map((e, i) => 
		(i > 0) && (i % 3 === 0) ? `${e},`: e
	)
	return formatNumber.reverse().join('');
}