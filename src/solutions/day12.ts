export function checkIsValidCopy(original: string, copy: string) {
	const regex: RegExp = /^[#+:. ]+$/;
	const regexMinus: RegExp = /^[a-z]$/;

	if (original.length !== copy.length) {
		return false;
	}

	for (let i = 0; i < original.length - 1; i++) {
		const flag: string = regexMinus.test(original[i]) ? 'g' : 'gi';
		const characterRegex: RegExp = new RegExp(original[i], flag);
		if (!(characterRegex.test(copy[i]) || regex.test(copy[i]))) {
			return false;
		}
		if (original[i] === ' ' && copy[i] !== ' ') {
			return false;
		}
	}
	return true;
}
