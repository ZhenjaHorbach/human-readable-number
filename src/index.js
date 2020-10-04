module.exports = function toReadable(number) {
	let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let numberTy = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	let numberTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	let result = [];
	if (number == 0) {
		return 'zero';
	}
	if (number / 100 >= 1) {
		result.push(`${numbers[Math.floor(number / 100 - 1)]} hundred`)
	}
	if (number % 100 > 0 && number % 100 < 100) {
		if (number % 100 >= 10 && number % 100 <= 19) {
			result.push(`${numberTeen[number % 10]}`)
			return result.join(' ');
		} else if (number % 100 / 10 >= 2 && number % 100 / 10 < 10) {
			result.push(`${numberTy[Math.floor(number % 100 / 10 - 2)]}`)
		}
	}
	if (number % 10 !== 0) {
		result.push(`${numbers[number % 10 - 1]}`)
	}



	return result.join(' ');
}