export default function formatNumber(number) {
	// Check if passed number is a number
	if (number === "Price on Request") return number;
	if (/\D/.test(number)) return "Price on Request";
	// Format the number
	const stringNumber = number.toString();
	const reversed = stringNumber.split('').reverse();
	const formatNumber = reversed.map((e, i) => 
		(i > 0) && (i % 3 === 0) ? `${e},`: e
	)
	return formatNumber.reverse().join('');
}